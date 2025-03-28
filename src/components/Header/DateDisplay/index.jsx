/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import getFormattedToday from '@/utils/getFormattedToday';

const DateDisplay = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m16}
`;

const Header = () => {
  return <DateDisplay>{getFormattedToday()}</DateDisplay>;
};

export default Header;
