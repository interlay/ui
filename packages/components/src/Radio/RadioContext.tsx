import { RadioGroupState } from '@react-stately/radio';
import React, { useContext } from 'react';

type RadioGroupContext = RadioGroupState;

export const RadioContext = React.createContext<RadioGroupContext>({} as RadioGroupContext);

export function useRadioProvider(): RadioGroupContext {
  return useContext(RadioContext);
}
