import styled from '@emotion/styled';

import ViewButton from './ViewButton';

const StyledViewModeToggle = styled.div`
  display: flex;
  gap: 8px;
`;

const ViewModeToggle = ({ isListView, setIsListView }) => {
  return (
    <StyledViewModeToggle>
      <ViewButton
        type="list"
        isActive={isListView}
        onClick={() => setIsListView(true)}
      />
      <ViewButton
        type="gird"
        isActive={!isListView}
        onClick={() => setIsListView(false)}
      />
    </StyledViewModeToggle>
  );
};

export default ViewModeToggle;
