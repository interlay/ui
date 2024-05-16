import { rounded, spacing, fontSize, typography } from '../../core';
import { AlertTheme } from '../../components';

import { color } from './colors';

const alert: AlertTheme = {
  base: {
    ...typography('s'),
    color: color('dark'),
    padding: `${spacing('md')} ${spacing('xl')}`,
    borderRadius: rounded('md')
  },
  icon: {
    padding: `${spacing('s')} 0`,
    marginRight: spacing('md')
  },
  title: {
    fontSize: fontSize('md', 'rem'),
    marginBottom: spacing('s')
  },
  content: {
    padding: `${spacing('s')} 0`
  },
  closeBtn: {
    width: spacing('4xl'),
    height: spacing('4xl')
  },
  closeBtnWrapper: {
    marginRight: `-${spacing('md')}`
  },
  status: {
    success: {
      filled: {
        base: {
          backgroundColor: '#1CCA87',
          color: color('dark')
        },
        icon: {
          color: color('dark')
        },
        title: {
          color: color('dark')
        }
      },
      outlined: {
        base: {
          backgroundColor: '#0D120D',
          border: `1px solid #1CCA87`,
          color: color('light')
        },
        icon: {
          color: '#1CCA87'
        },
        title: {
          color: '#1CCA87'
        }
      },
      default: {
        base: {
          backgroundColor: '#0D120D',
          color: color('light')
        },
        icon: {
          color: '#1CCA87'
        },
        title: {
          color: '#1CCA87'
        }
      }
    },
    error: {
      filled: {
        base: {
          backgroundColor: '#FF7676',
          color: color('dark')
        },
        icon: {
          color: color('dark')
        },
        title: {
          color: color('dark')
        }
      },
      outlined: {
        base: {
          backgroundColor: '#150B0B',
          border: `1px solid #FF7676`,
          color: color('light')
        },
        icon: {
          color: '#FF7676'
        },
        title: {
          color: '#FF7676'
        }
      },
      default: {
        base: {
          backgroundColor: '#150B0B',
          color: color('light')
        },
        icon: {
          color: '#FF7676'
        },
        title: {
          color: '#FF7676'
        }
      }
    },
    info: {
      filled: {
        base: {
          backgroundColor: '#57ADDD',
          color: color('dark')
        },
        icon: {
          color: color('dark')
        },
        title: {
          color: color('dark')
        }
      },
      outlined: {
        base: {
          backgroundColor: '#161B26',
          border: `1px solid #57ADDD`,
          color: color('light')
        },
        icon: {
          color: '#57ADDD'
        },
        title: {
          color: '#57ADDD'
        }
      },
      default: {
        base: {
          backgroundColor: '#161B26',
          color: color('light')
        },
        icon: {
          color: '#57ADDD'
        },
        title: {
          color: '#57ADDD'
        }
      }
    },
    warning: {
      filled: {
        base: {
          backgroundColor: '#FFF27C',
          color: color('dark')
        },
        icon: {
          color: color('dark')
        },
        title: {
          color: color('dark')
        }
      },
      outlined: {
        base: {
          backgroundColor: '#181208',
          border: `1px solid #FFF27C`,
          color: color('light')
        },
        icon: {
          color: '#FFF27C'
        },
        title: {
          color: '#FFF27C'
        }
      },
      default: {
        base: {
          backgroundColor: '#181208',
          color: color('light')
        },
        icon: {
          color: '#FFF27C'
        },
        title: {
          color: '#FFF27C'
        }
      }
    }
  }
};

export { alert };
