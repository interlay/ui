import { useDOMRef } from '@interlay/hooks';
import { Orientation } from '@interlay/theme';
import { AriaRadioGroupProps, useRadioGroup } from '@react-aria/radio';
import { ChangeEvent, forwardRef } from 'react';
import { useRadioGroupState } from '@react-stately/radio';

import { Field, FieldProps, useFieldProps } from '../Field';

import { RadioContext } from './RadioContext';
import { StyledRadioGroup } from './Radio.style';

type Props = {
  orientation?: Orientation;
  onChange?: (e: ChangeEvent<HTMLDivElement>) => void;
  onValueChange?: (value: string) => void;
};

type InheritAttrs = Omit<AriaRadioGroupProps, keyof Props | 'errorMessage' | 'description'>;

type FieldAttrs = Omit<FieldProps, keyof (Props & InheritAttrs)>;

type RadioGroupProps = Props & FieldAttrs & InheritAttrs;

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ orientation = 'vertical', children, onValueChange, onChange, ...props }, ref): JSX.Element => {
    const { fieldProps } = useFieldProps(props);

    let domRef = useDOMRef(ref);
    let state = useRadioGroupState({ onChange: onValueChange, ...props });
    let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(props, state);

    return (
      <Field
        {...fieldProps}
        ref={domRef}
        descriptionProps={descriptionProps}
        elementType='span'
        errorMessageProps={errorMessageProps}
        labelProps={labelProps}
      >
        <StyledRadioGroup
          {...radioGroupProps}
          $orientation={orientation}
          direction={orientation === 'vertical' ? 'column' : 'row'}
          onChange={onChange}
        >
          <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
        </StyledRadioGroup>
      </Field>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
export type { RadioGroupProps };