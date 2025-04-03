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
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.surface.brandAlt : theme.colors.surface.alt};

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.whiteDefault : theme.colors.text.default};
`;

export default function FieldTab({ category, setCategory }) {
  const fieldMap = [
    { id: 1, label: '종합/경제', key: 'generalEconomy' },
    { id: 2, label: '방송/통신', key: 'broadcastMedia' },
    { id: 3, label: 'IT', key: 'it' },
    { id: 4, label: '영자지', key: 'english' },
    { id: 5, label: '스포츠/연예', key: 'sportsEntertainment' },
    { id: 6, label: '매거진/전문지', key: 'magazine' },
    { id: 7, label: '지역', key: 'local' },
  ];

  return (
    <StyledFieldTab>
      {fieldMap.map(({ key, label }) => (
        <TabButton
          key={key}
          onClick={() => setCategory(key)}
          isActive={category === key}
        >
          {label}
        </TabButton>
      ))}
    </StyledFieldTab>
  );
}
