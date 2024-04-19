import { spacing, transition } from '../../core';
import { RadioTheme } from '../../components';

import { color } from './colors';

const radio: RadioTheme = {
  button: {
    base: {
      marginTop: spacing('xs'),
      marginBottom: spacing('xs'),
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: color('grey-300'),
      ...transition('common', 'fast')
    },
    inside: {
      width: '0rem',
      height: '0rem',
      ...transition('dimensions', 'fast')
    }
  },
  selected: {
    button: {
      base: {
        borderColor: color('primary-500')
      },
      inside: {
        backgroundColor: color('primary-500')
      }
    }
  },
  size: {
    s: {
      button: {
        base: {
          width: spacing('2xl'),
          height: spacing('2xl')
        }
      },
      selected: {
        button: {
          inside: {
            width: spacing('md'),
            height: spacing('md')
          }
        }
      },
      label: 's'
    },
    md: {
      button: {
        base: {
          width: spacing('3xl'),
          height: spacing('3xl')
        }
      },
      selected: {
        button: {
          inside: {
            width: spacing('lg'),
            height: spacing('lg')
          }
        }
      },
      label: 'md'
    },
    lg: {
      button: {
        base: {
          width: spacing('4xl'),
          height: spacing('4xl')
        }
      },
      selected: {
        button: {
          inside: {
            width: spacing('xl'),
            height: spacing('xl')
          }
        }
      },
      label: 'lg'
    }
  }
};

export { radio };
