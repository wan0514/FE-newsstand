// components/TabItem.jsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledTabItem = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.strong : theme.colors.text.weak};

  ${({ theme, isActive }) =>
    isActive ? theme.typography.b16 : theme.typography.m16};
`;

const TabItem = ({ isActive, onClick, label }) => {
  return (
    <StyledTabItem isActive={isActive} onClick={onClick}>
      {label}
    </StyledTabItem>
  );
};

export default TabItem;
