import type { Theme } from '../types/index';

import base from '../base';

const neutral = {
  neutral1: 'rgba(255, 255, 255, 0.05)',
  neutral2: 'rgba(255, 255, 255, 0.05)',
  neutral3: 'rgba(255, 255, 255, 0.25)',
  neutral4: '#041333',
  neutral5: '#091133',
  neutral6: '#434e66',
  neutral7: '#6a7994',
  neutral8: '#9a9a9a',
  neutral9: '#dadada',
  neutral10: '#dee3f5',
  neutral12: '#eeeeee',
  neutral13: '#fbfbfc',
  neutral14: '#f0f1f2',
  neutral15: '#f4f3f5',
  neutral16: '#999999'
};

const status = {
  error: '#ef4444',
  errorDark: '#ff0000',
  warningLight: '#ffcb00',
  warning: '#ffb100',
  warningDark: '#ff9900',
  successLight: '#61ff00',
  success: '#a2e75e',
  successDark: '#54ac1a'
};

const blue = {
  blue1: '#075abc',
  blue2: 'rgba(7, 90, 188, 0.1)',
  blue3: 'rgba(7, 90, 188, 0.9)',
  blue4: '#c4e7fa'
};

const theme: Theme = {
  ...base,
  input: {
    color: '#000000',
    background: '#ffffff',
    border: {
      color: neutral.neutral10
    },
    hover: {
      border: {
        color: blue.blue4
      }
    },
    focus: {
      border: {
        color: blue.blue3
      },
      boxShadow: `0 0 0 1px ${blue.blue3}`
    },
    error: {
      color: status.errorDark,
      border: {
        color: status.errorDark
      }
    },
    disabled: {
      color: neutral.neutral8,
      background: neutral.neutral13,
      border: {
        color: neutral.neutral9
      }
    },
    size: {
      small: {
        text: base.text.s,
        maxHeight: base.spacing[8],
        weight: base.weight.regular
      },
      medium: {
        text: base.text.base,
        maxHeight: base.spacing[10],
        weight: base.weight.medium
      },
      large: {
        text: base.text['4xl'],
        maxHeight: base.spacing[16],
        weight: base.weight.medium
      }
    },
    bottomAddornment: {
      size: {
        small: {
          text: base.text.s
        },
        medium: {
          text: base.text.base
        },
        large: {
          text: base.text['2xl']
        }
      }
    }
  }
};

export default theme;
