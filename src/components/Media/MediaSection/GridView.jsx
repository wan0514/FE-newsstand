/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import Button from '@components/common/Button';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  position: relative;
  width: calc(100% / 6);
  height: calc(388px / 4);
  text-align: center;
  vertical-align: middle;
  border: 1px solid ${({ theme }) => theme.colors.border.default};

  & button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.alt};
  }

  &:hover button {
    opacity: 1;
  }

  &:hover img {
    opacity: 0;
  }
`;

const Logo = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
`;

export default function GridView({ data: pressList }) {
  const rows = Array.from({ length: 4 }, (_, rowIndex) => {
    const start = rowIndex * 6;
    const rowItems = pressList.slice(start, start + 6);

    return (
      <TableRow key={rowIndex}>
        {rowItems.map((press) => (
          <TableCell key={press.pid}>
            <Logo src={press.logoLight} alt={`${press.name} 로고`} />
            <Button isEmphasized label="구독하기" iconType="plus" />
          </TableCell>
        ))}
      </TableRow>
    );
  });

  return (
    <Table>
      <tbody>{rows}</tbody>
    </Table>
  );
}
