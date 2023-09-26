type InputTheme = {
  color: string;
  background: string;
  border: {
    color: string;
  };
  hover: {
    border: {
      color: string;
    };
  };
  focus: {
    border: {
      color: string;
    };
    boxShadow: string;
  };
  error: {
    color: string;
    border: {
      color: string;
    };
  };
  disabled: {
    color: string;
    background: string;
    border: {
      color: string;
    };
  };
  size: {
    small: {
      text: string;
      maxHeight: string;
      weight: number;
    };
    medium: {
      text: string;
      maxHeight: string;
      weight: number;
    };
    large: {
      text: string;
      maxHeight: string;
      weight: number;
    };
  };
  bottomAddornment: {
    size: {
      small: {
        text: string;
      };
      medium: {
        text: string;
      };
      large: {
        text: string;
      };
    };
  };
};

export type { InputTheme };
