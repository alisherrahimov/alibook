import {Colors} from '@constants';

export const lightTheme = {
  colors: {
    typography: '#000000',
    background: '#ffffff',
    bottomTabInactiveIcon: Colors.x9e9f9e,
    bottomTabActiveIcon: Colors.xf59202,
    bottomTabActiveText: Colors.xf59202,
    bottomTabInactiveText: Colors.x9e9f9e,
  },
} as const;

export const darkTheme = {
  colors: {
    typography: '#ffffff',
    background: Colors.x181a1f,
    bottomTabInactiveIcon: Colors.x9e9f9e,
    bottomTabActiveIcon: Colors.xf59202,
    bottomTabActiveText: Colors.xf59202,
    bottomTabInactiveText: Colors.x9e9f9e,
  },
} as const;

// define other themes
