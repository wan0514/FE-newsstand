import styled from '@emotion/styled';

import TabItem from './TabItem';

const StyledTabList = styled.div`
  display: flex;
  gap: 16px;
`;

const TabList = ({ activeTab, setActiveTab }) => {
  return (
    <StyledTabList>
      <TabItem
        isActive={activeTab === 'all'}
        onClick={() => setActiveTab('all')}
        tabType="all"
      />
      <TabItem
        isActive={activeTab === 'subscribed'}
        onClick={() => setActiveTab('subscribed')}
        tabType="subscribed"
        badgeLabel={0}
      />
    </StyledTabList>
  );
};

export default TabList;
