import { AriaGridListOptions, useGridList } from '@react-aria/gridlist';
import { mergeProps } from '@react-aria/utils';
import { ListProps as StatelyListProps, useListState } from '@react-stately/list';
import { forwardRef } from 'react';
import { Selection } from '@react-types/shared';
import { useDOMRef } from '@interlay/hooks';
import { CSSProperties } from 'styled-components';

import { FlexProps } from '../Flex';

import { StyledList } from './List.style';
import { ListItem } from './ListItem';

type Props = {
  maxHeight?: CSSProperties['maxHeight'];
};

type InheritAttrs = Omit<
  StatelyListProps<Record<string, unknown>> & AriaGridListOptions<Record<string, unknown>>,
  keyof Props
>;

type NativeAttrs = Omit<FlexProps, keyof Props>;

type ListProps = Props & NativeAttrs & InheritAttrs;

// FIXME: use keyboardDelegate for horizontal list (see TagGroup from spectrum)
const List = forwardRef<HTMLDivElement, ListProps>(
  (
    {
      maxHeight,
      direction = 'column',
      onSelectionChange,
      selectionMode,
      selectedKeys,
      disabledBehavior,
      disabledKeys,
      disallowEmptySelection,
      defaultSelectedKeys,
      selectionBehavior,
      ...props
    },
    ref
  ): JSX.Element => {
    const listRef = useDOMRef<HTMLDivElement>(ref);

    const ariaProps: AriaGridListOptions<Record<string, unknown>> = {
      onSelectionChange,
      selectionMode,
      selectedKeys,
      disabledBehavior,
      defaultSelectedKeys,
      disabledKeys,
      disallowEmptySelection,
      ...props
    };
    const state = useListState({ selectionBehavior, ...ariaProps });

    const { gridProps } = useGridList(ariaProps, state, listRef);

    return (
      <StyledList {...mergeProps(gridProps, props)} ref={listRef} $maxHeight={maxHeight} direction={direction}>
        {[...state.collection].map((item) => (
          <ListItem key={item.key} item={item} state={state} />
        ))}
      </StyledList>
    );
  }
);

List.displayName = 'List';

export { List };
export type { ListProps, Selection };
