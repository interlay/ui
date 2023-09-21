import { useSelect } from '@react-aria/select';
import { mergeProps, useId } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SelectProps as AriaSelectProps, useSelectState } from '@react-stately/select';
import { CollectionBase, Node } from '@react-types/shared';
import { ForwardedRef, forwardRef, Key, ReactNode, useRef } from 'react';
import { Sizes } from '@interlay/theme';
import { useDOMRef } from '@interlay/hooks';

import { Field, FieldProps, useFieldProps } from '../Field';
import { hasError } from '../utils/input';

import { SelectModal } from './SelectModal';
import { SelectTrigger } from './SelectTrigger';

type SelectType = 'listbox' | 'modal';

type SelectObject = Record<any, any>;

// TODO: listbox to be implemented
type Props<F extends SelectType = 'listbox', T = SelectObject> = {
  type?: F;
  open?: boolean;
  loading?: boolean;
  size?: Sizes;
  // MEMO: Allows a custom select trigger (TokenInput select)
  asSelectTrigger?: any;
  renderValue?: (item: Node<T>) => ReactNode;
  placeholder?: ReactNode;
  modalTitle?: F extends 'modal' ? ReactNode : never;
  modalRef?: F extends 'modal' ? React.Ref<HTMLDivElement> : never;
};

type InheritAttrs<F extends SelectType = 'listbox', T = SelectObject> = Omit<
  CollectionBase<T> & Omit<FieldProps, 'children'> & AriaSelectProps<T>,
  keyof Props<F, T> | 'isDisabled' | 'isLoading' | 'isOpen' | 'isRequired' | 'selectedKey' | 'defaultSelectedKey'
>;

type NativeAttrs<F extends SelectType = 'listbox', T = SelectObject> = Omit<
  React.InputHTMLAttributes<Element>,
  keyof Props<F, T> | 'children'
>;

type SelectProps<F extends SelectType = 'listbox', T = SelectObject> = Props<F, T> &
  NativeAttrs<F, T> &
  InheritAttrs<F, T>;

// TODO: when type is modal, we should use also types from our List
const Select = <F extends SelectType = 'listbox', T extends SelectObject = SelectObject>(
  {
    value,
    defaultValue,
    type = 'listbox' as F,
    name,
    disabled,
    open,
    required,
    label,
    errorMessage,
    size = 'medium',
    placeholder = 'Select an option',
    asSelectTrigger,
    modalTitle,
    validationState,
    onChange,
    renderValue = (item) => item.rendered,
    items,
    disabledKeys,
    modalRef,
    children,
    ...props
  }: SelectProps<F, T>,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const inputRef = useDOMRef(ref);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalId = useId();

  const ariaProps: AriaSelectProps<T> = {
    isDisabled: disabled,
    isOpen: open,
    isRequired: required,
    selectedKey: value as Key,
    defaultSelectedKey: defaultValue as Key,
    label,
    errorMessage,
    validationState,
    items,
    children,
    ...props
  };

  const state = useSelectState(ariaProps);

  // MEMO: `menuProps` and `triggerProps` not implemented yet
  const { labelProps, valueProps, triggerProps, descriptionProps, errorMessageProps } = useSelect(
    ariaProps,
    state,
    buttonRef
  );

  const { fieldProps, elementProps } = useFieldProps(
    mergeProps(props, {
      descriptionProps: mergeProps(descriptionProps, props.descriptionProps || {}),
      errorMessageProps: mergeProps(errorMessageProps, props.errorMessageProps || {}),
      errorMessage,
      labelProps: mergeProps(labelProps, props.labelProps || {}),
      label
    })
  );

  const error = hasError({ errorMessage, validationState });

  const selectTriggerProps =
    type === 'listbox'
      ? triggerProps
      : mergeProps(props, {
          onPress: () => state.setOpen(true),
          disabled,
          id: triggerProps.id,
          'aria-labelledby': triggerProps['aria-labelledby']
        });

  return (
    <Field {...fieldProps}>
      <VisuallyHidden aria-hidden='true'>
        <input
          ref={inputRef}
          disabled={disabled}
          name={name}
          tabIndex={-1}
          value={onChange ? state.selectedKey.toString() || '' : undefined}
          onChange={onChange}
        />
      </VisuallyHidden>
      <SelectTrigger
        {...mergeProps(elementProps, selectTriggerProps)}
        ref={buttonRef}
        aria-controls={modalId}
        aria-expanded={state.isOpen}
        as={asSelectTrigger}
        disabled={disabled}
        hasError={error}
        name={name}
        placeholder={placeholder}
        size={size}
        valueProps={valueProps}
      >
        {state.selectedItem && renderValue(state.selectedItem)}
      </SelectTrigger>
      {type === 'modal' && (
        <SelectModal
          ref={modalRef}
          id={modalId}
          isOpen={state.isOpen}
          listProps={{ selectedKeys: state.selectedItem?.key ? [state.selectedItem?.key] : [], disabledKeys }}
          state={state}
          title={modalTitle}
          onClose={state.close}
        />
      )}
    </Field>
  );
};

const _Select = forwardRef(Select) as <F extends SelectType = 'listbox', T extends SelectObject = SelectObject>(
  props: SelectProps<F, T> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof Select>;

Select.displayName = 'Select';

export { _Select as Select };
export type { SelectProps };
