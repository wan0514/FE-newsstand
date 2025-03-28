import styled from '@emotion/styled';
import TabList from './TabList';
import ViewModeToggle from './ViewModeToggle';

const TabBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const MedaiTab = ({
  isSubscribedTab,
  setIsSubscribedTab,
  isListView,
  setIsListView,
}) => {
  return (
    <TabBarContainer>
      <TabList
        isSubscribedTab={isSubscribedTab}
        setIsSubscribedTab={setIsSubscribedTab}
      />
      <ViewModeToggle isListView={isListView} setIsListView={setIsListView} />
    </TabBarContainer>
  );
};

export default MedaiTab;
