import { Theme } from '@interlay/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
