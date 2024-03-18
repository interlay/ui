import styled, { css } from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  isolation: isolate;
  overflow: hidden;

  ${({ theme }) => theme.table.base};
`;

const StyledTableColumnHeader = styled.th`
  text-align: left;
  position: relative;

  ${({ theme }) => theme.table.columnHeader};
`;

const StyledTableCell = styled.td`
  vertical-align: middle;

  ${({ theme }) => theme.table.cell};
`;

const StyledTableHeaderRow = styled.tr`
  ${({ theme }) => theme.table.headerRow};
`;

type StyledTableRowProps = {
  $isHovered: boolean;
  $isSelected: boolean;
};

const StyledTableRow = styled.tr<StyledTableRowProps>`
  outline: none;
  cursor: ${({ $isHovered }) => $isHovered && 'pointer'};

  ${({ theme, $isHovered, $isSelected }) => {
    const { even, odd, selected } = theme.table.row;

    return css`
      &:nth-child(odd) {
        ${$isSelected ? selected : $isHovered ? odd.hover : odd.base};
      }

      &:nth-child(even) {
        ${$isSelected ? selected : $isHovered ? even.hover : even.base};
      }
    `;
  }};
`;

export { StyledTable, StyledTableCell, StyledTableColumnHeader, StyledTableHeaderRow, StyledTableRow };
