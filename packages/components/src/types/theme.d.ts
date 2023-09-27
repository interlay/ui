// import original module declarations
import 'styled-components';
import { Theme } from '@interlay/theme/src/themes/types/index';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}
