import { theme, BreakPoints, ResponsiveProp } from '@just_testing13/theme';

const getResponsiveCSS = <T extends number | string>(key: string, prop?: ResponsiveProp<T>): string | undefined => {
  if (!prop) return undefined;

  if (typeof prop === 'object') {
    let finalQuery = '';

    for (const breakpoint of Object.keys(prop)) {
      const query = `
        @media (min-width: ${theme.breakpoints.values[breakpoint as BreakPoints]}px){
          ${key}: ${prop[breakpoint as BreakPoints]};
        }
      `;

      finalQuery = finalQuery.concat(query);
    }

    return finalQuery;
  }

  return `${key}: ${prop};`;
};

export { getResponsiveCSS };
