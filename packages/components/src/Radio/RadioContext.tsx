import { RadioSize } from '@interlay/theme';
import { RadioGroupState } from '@react-stately/radio';
import React, { useContext } from 'react';

type RadioGroupContext = { state: RadioGroupState; size: RadioSize };

export const RadioContext = React.createContext<RadioGroupContext>({ size: 'md' } as RadioGroupContext);

export function useRadioProvider(): RadioGroupContext {
  return useContext(RadioContext);
}
