import styled from '@emotion/styled';

const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.surface.brandAlt};
  color: ${({ theme }) => theme.colors.text.whiteWeak};
  font-size: 12px;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius.m};
  margin-left: 6px;
`;

export default Badge;
