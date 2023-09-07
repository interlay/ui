import styled from 'styled-components';
import { Icon } from '@just_testing13/icons';
import { theme } from '@just_testing13/theme';

const StyledFallbackIcon = styled(Icon)`
  stroke: ${theme.icon.fallback.stroke};
  color: ${theme.icon.fallback.color};
`;

export { StyledFallbackIcon };
