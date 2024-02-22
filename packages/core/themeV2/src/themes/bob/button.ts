import { fontSize, fontWeight, lineHeight, rounded, spacing } from '../../core';
import { ButtonTheme } from '../../components';
import { rem } from '../../utils';

import { colors } from './colors';

const button: ButtonTheme = {
  rounded: rounded('md'),
  fontWeight: fontWeight('semibold'),
  size: {
    s: {
      height: rem(36),
      fontSize: fontSize('s'),
      lineHeight: lineHeight('s'),
      padding: `0 ${spacing('md')}`
    },
    md: {
      height: spacing('5xl'),
      fontSize: fontSize('s'),
      lineHeight: lineHeight('s'),
      // FIXME:
      padding: `0 ${spacing('lg')}`
    },
    lg: {
      height: rem(44),
      fontSize: fontSize('md'),
      lineHeight: lineHeight('md'),
      padding: `0 ${spacing('xl')}`
    },
    xl: {
      height: spacing('6xl'),
      fontSize: fontSize('md'),
      lineHeight: lineHeight('md'),
      padding: `0 ${spacing('2xl')}`
    },
    '2xl': {
      height: rem(60),
      fontSize: fontSize('lg'),
      lineHeight: lineHeight('lg'),
      padding: `0 ${spacing('3xl')}`
    }
  },
  variant: {
    solid: {
      color: {
        default: {
          bg: colors.grey[200],
          color: colors.light,
          hover: {
            bg: colors.grey[100]
          },
          active: {
            bg: colors.grey[100]
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #4040403D, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            color: colors.grey[100],
            bg: colors.grey[200]
          }
        },
        primary: {
          bg: colors.primary[300],
          color: colors.light,
          hover: {
            bg: colors.primary[200]
          },
          active: {
            bg: colors.primary[200]
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #FA45163D, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            color: colors.grey[100],
            bg: colors.grey[200]
          }
        }
      }
    },
    outline: {
      color: {
        default: {
          bg: 'none',
          border: `1px solid ${colors.grey[200]}`,
          color: colors.light,
          hover: {
            bg: colors.grey[300]
          },
          active: {
            bg: colors.grey[300]
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #98A2B324, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            color: colors.grey[200],
            border: `1px solid ${colors.grey[100]}`
          }
        },
        primary: {
          bg: 'none',
          border: `1px solid ${colors.primary[300]}`,
          color: colors.primary[300],
          hover: {
            bg: colors.grey[300]
          },
          active: {
            bg: colors.grey[300]
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #D92D2040, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            color: colors.grey[200],
            border: `1px solid ${colors.grey[100]}`
          }
        }
      }
    },
    ghost: {
      color: {
        default: {
          bg: 'none',
          color: colors.light,
          hover: {
            bg: colors.grey[300]
          },
          active: {
            bg: colors.grey[300]
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #98A2B324, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            color: colors.grey[200]
          }
        },
        primary: {
          bg: 'none',
          color: colors.primary[300],
          hover: {
            bg: colors.grey[300]
          },
          active: {
            bg: colors.grey[300]
          },
          disabled: {
            color: colors.grey[200]
          }
        }
      }
    }
  }
};

export { button };
