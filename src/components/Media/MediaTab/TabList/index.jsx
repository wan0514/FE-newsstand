import styled from '@emotion/styled';
import TabItem from './TabItem';

const StyledTabList = styled.div`
  display: flex;
  gap: 16px;
`;

const TabList = ({ isSubscribedTab, setIsSubscribedTab }) => {
  return (
    <StyledTabList>
      <TabItem
        isActive={!isSubscribedTab}
        onClick={() => setIsSubscribedTab(false)}
        label="전체 언론사"
      />
      <TabItem
        isActive={isSubscribedTab}
        onClick={() => setIsSubscribedTab(true)}
        label="내가 구독한 언론사"
        badgeLabel="8"
      />
    </StyledTabList>
  );
};

export default TabList;
