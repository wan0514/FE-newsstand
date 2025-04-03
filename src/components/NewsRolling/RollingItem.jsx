import styled from '@emotion/styled';
import React from 'react';

const RollingItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.text.strong};
  background-color: ${({ theme }) => theme.colors.surface.alt};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  ${({ theme }) => theme.typography.b14}
`;

const NewsSource = styled.span`
  font-weight: bold;
`;

const NewsTitle = styled.span`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m14}
`;

const RollingItem = ({ data }) => {
  return (
    <RollingItemContainer>
      <NewsSource>{data[0].press}</NewsSource>
      <NewsTitle>{data[0].title}</NewsTitle>
    </RollingItemContainer>
  );
};

export default RollingItem;
