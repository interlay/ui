import React from 'react';

interface ModalConfig {
  scrollBehavior: 'inside' | 'outside';
}

const defaultContext = { scrollBehavior: 'inside' } as ModalConfig;

const ModalContext = React.createContext<ModalConfig>(defaultContext);

const useModalContext = (): ModalConfig => React.useContext<ModalConfig>(ModalContext);

export { ModalContext, useModalContext };
export type { ModalConfig };
