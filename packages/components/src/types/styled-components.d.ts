import { Theme } from '@interlay/themev2';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
