import { Cell, Column, Row, TableBody, TableHeader } from '@react-stately/table';
import { ReactNode, forwardRef } from 'react';

import { CardProps } from '../Card';

import { BaseTable, BaseTableProps } from './BaseTable';
import { StyledCard } from './Table.style';

type ColumnProps = { name: ReactNode; id: string | number; hideHeader?: boolean };

type RowProps = {
  id: string | number;
  [field: string]: any;
  isStickyHeader?: boolean;
};

type Props = {
  columns: ColumnProps[];
  rows: RowProps[];
  wrapperProps?: CardProps;
};

type InheritAttrs = Omit<BaseTableProps, keyof Props | 'children'>;

type TableProps = Props & InheritAttrs;

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ columns, rows, isStickyHeader, style, className, hidden, wrapperProps, ...props }, ref): JSX.Element => (
    <StyledCard className={className} hidden={hidden} style={style} {...wrapperProps}>
      <BaseTable ref={ref} isStickyHeader={isStickyHeader} {...props}>
        <TableHeader columns={columns}>
          {({ id, name, ...columnProps }) => (
            <Column key={id} {...columnProps}>
              {name}
            </Column>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item: any) => <Row>{(columnKey) => <Cell>{item[columnKey.toString()]}</Cell>}</Row>}
        </TableBody>
      </BaseTable>
    </StyledCard>
  )
);

Table.displayName = 'Table';

export { Table };
export type { ColumnProps, RowProps, TableProps };
