import { fontWeight, rounded, spacing, typography } from '../../core';
import { TokenInputTheme } from '../../components';

import { color } from './colors';

// TODO: handle different sizes
const tokenInput: TokenInputTheme = {
  balance: {
    padding: `${spacing('s')} 0`,
    color: color('primary-500'),
    fontWeight: fontWeight('medium'),
    ...typography('xs')
  },
  addorment: {
    token: {
      base: {
        backgroundColor: color('grey-600'),
        border: `1px solid ${color('grey-400')}`,
        borderLeft: 'none',
        borderTopRightRadius: rounded('md'),
        borderBottomRightRadius: rounded('md'),
        color: color('light')
      }
    },
    usd: {
      ...typography('xs'),
      color: color('grey-200')
    }
  },
  list: {
    base: {
      padding: `0 ${spacing('xl')}`
    },
    item: {
      ticker: {
        color: color('light'),
        fontWeight: fontWeight('medium'),
        ...typography('md')
      },
      usd: {
        color: color('grey-300'),
        fontWeight: fontWeight('medium'),
        ...typography('s')
      },
      selected: {
        ticker: {
          color: color('dark')
        },
        usd: {
          color: color('grey-300')
        }
      }
    }
  },
  size: {
    s: {
      addornment: {
        token: {
          base: {
            paddingLeft: spacing('md'),
            paddingRight: spacing('md'),
            ...typography('xs')
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
        token: {
          base: {
            paddingLeft: spacing('md'),
            paddingRight: spacing('md'),
            ...typography('s')
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
        token: {
          base: {
            paddingLeft: spacing('md'),
            paddingRight: spacing('md'),
            ...typography('md')
          },
          img: {
            height: spacing('3xl'),
            width: spacing('3xl')
          }
        }
      }
    }
  }
};

export { tokenInput };
