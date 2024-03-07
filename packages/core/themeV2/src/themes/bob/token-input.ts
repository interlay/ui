import { fontWeight, rounded, spacing, typography } from '../../core';
import { TokenInputTheme } from '../../components';

import { color } from './colors';

const tokenInput: TokenInputTheme = {
  balance: {
    padding: `${spacing('xxs')} 0`,
    color: color('primary-500'),
    fontWeight: fontWeight('medium'),
    ...typography('xs')
  },
  addorment: {
    token: {
      base: {
        backgroundColor: color('grey-500'),
        border: `1px solid ${color('grey-400')}`,
        borderLeft: 'none',
        borderTopRightRadius: rounded('md'),
        borderBottomRightRadius: rounded('md'),
        color: color('light')
      }
    }
  },
  size: {
    s: {
      addornment: {
        bottom: {
          ...typography('xs'),
          color: color('grey-200')
        },
        token: {
          base: {
            paddingLeft: spacing('md'),
            paddingRight: spacing('md'),
            ...typography('md')
          },
          img: {
            height: spacing('2xl'),
            width: spacing('2xl')
          }
        }
      }
    },
    md: {
      addornment: {
        bottom: {
          ...typography('xs'),
          color: color('grey-200')
        },
        token: {
          base: {
            paddingLeft: spacing('md'),
            paddingRight: spacing('md'),
            ...typography('md')
          },
          img: {
            height: spacing('2xl'),
            width: spacing('2xl')
          }
        }
      }
    },
    lg: {
      addornment: {
        bottom: {
          ...typography('xs'),
          color: color('grey-200')
        },
        token: {
          base: {
            paddingLeft: spacing('md'),
            paddingRight: spacing('md'),
            ...typography('md')
          },
          img: {
            height: spacing('2xl'),
            width: spacing('2xl')
          }
        }
      }
    }
  }
};

export { tokenInput };
