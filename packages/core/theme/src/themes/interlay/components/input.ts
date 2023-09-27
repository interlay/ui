import { InputTheme } from '../../types';
import base from '../../base';
import colors from '../colors';

const input: InputTheme = {
  color: '#000000',
  background: '#ffffff',
  border: {
    color: colors.neutral.neutral10
  },
  hover: {
    border: {
      color: colors.blue.blue4
    }
  },
  focus: {
    border: {
      color: colors.blue.blue3
    },
    boxShadow: `0 0 0 1px ${colors.blue.blue3}`
  },
  error: {
    color: colors.status.errorDark,
    border: {
      color: colors.status.errorDark
    }
  },
  disabled: {
    color: colors.neutral.neutral8,
    background: colors.neutral.neutral13,
    border: {
      color: colors.neutral.neutral9
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
};

export default input;
