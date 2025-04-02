/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledFieldTab = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.surface.alt};
`;

const TabButton = styled.button`
  height: 100%;
  padding: 11.5px 16px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.surface.alt};
  color: ${({ theme }) => theme.colors.text.default};
`;

export default function FieldTab() {
  const fieldMap = [
    { id: 1, label: '종합/경제' },
    { id: 2, label: '방송/통신' },
    { id: 3, label: 'IT' },
    { id: 4, label: '영자지' },
    { id: 5, label: '스포츠/연예' },
    { id: 6, label: '매거진/전문지' },
    { id: 7, label: '지역' },
  ];
  return (
    <StyledFieldTab>
      {fieldMap.map(({ id, label }) => (
        <TabButton key={id}>{label}</TabButton>
      ))}
    </StyledFieldTab>
  );
}
