/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import { fieldMap } from '@/utils/constants/constants';

const StyledFieldTab = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.surface.alt};
`;

const StyledButton = styled.button`
  width: ${({ isActive }) => (isActive ? '166px' : 'auto')};
  display: flex;
  gap: 8px;
  align-items: center;
  height: 100%;
  padding: 11.5px 16px;
  font-size: 14px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.surface.brandAlt : theme.colors.surface.alt};

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.whiteDefault : theme.colors.text.default};
`;

const LabelText = styled.span`
  display: flex;
  flex-grow: ${({ isActive }) => (isActive ? 1 : 0)};
`;

const CountText = styled.span`
  ${({ theme }) => theme.typography.b12}
  color: ${({ theme }) => theme.colors.text.whiteWeak};
`;

function TabButton({ label, isActive, onClick, count }) {
  return (
    <StyledButton isActive={isActive} onClick={onClick}>
      <LabelText isActive={isActive}>{label}</LabelText>
      {isActive && count != null && <CountText>{count}</CountText>}
    </StyledButton>
  );
}

export default function FieldTab({
  category,
  handleCategory,
  pressLength,
  currentPressIndex,
}) {
  const countLabel = `${currentPressIndex + 1}/${pressLength}`;

  return (
    <StyledFieldTab>
      {fieldMap.map(({ key, label }) => (
        <TabButton
          key={key}
          label={label}
          onClick={() => handleCategory(key)}
          isActive={category === key}
          count={countLabel}
        />
      ))}
    </StyledFieldTab>
  );
}
