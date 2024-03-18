import { useTableRowGroup } from '@react-aria/table';
import { mergeProps } from '@react-aria/utils';
import { HTMLAttributes } from 'react';

import { ElementTypeProp } from '../utils/types';

import { StyledTableRowGroup } from './Table.style';

type Props = {
  isStickyHeader?: boolean;
};

type NativeAttrs = Omit<HTMLAttributes<HTMLTableSectionElement>, keyof Props>;

type TableRowGroupProps = Props & NativeAttrs & ElementTypeProp;

const TableRowGroup = ({
  elementType = 'thead',
  children,
  isStickyHeader,
  ...props
}: TableRowGroupProps): JSX.Element => {
  const { rowGroupProps } = useTableRowGroup();

  return (
    <StyledTableRowGroup as={elementType} {...mergeProps(props, rowGroupProps)} $isStickyHeader={isStickyHeader}>
      {children}
    </StyledTableRowGroup>
  );
};

export { TableRowGroup };
export type { TableRowGroupProps };
