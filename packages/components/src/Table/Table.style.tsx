import styled, { css } from 'styled-components';

import { Card } from '../Card';

type StyledTableRowProps = {
  $isHovered: boolean;
  $isSelected: boolean;
};

type StyledTableRowGroupProps = {
  $isStickyHeader: boolean;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  isolation: isolate;
  overflow: auto;

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

const StyledTableRowGroup = styled.div<StyledTableRowGroupProps>`
  ${({ $isStickyHeader }) =>
    $isStickyHeader &&
    css`
      position: sticky;
      top: 0;
      z-index: 20;
    `}
`;

const StyledCard = styled(Card)`
  overflow: auto;
`;

export {
  StyledTable,
  StyledTableCell,
  StyledTableColumnHeader,
  StyledTableHeaderRow,
  StyledTableRow,
  StyledTableRowGroup,
  StyledCard
};
