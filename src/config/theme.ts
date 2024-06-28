import {Colors} from '@constants';

export const lightTheme = {
  colors: {
    typography: '#000000',
    background: '#ffffff',
    bottomTabInactiveIcon: Colors.x9e9f9e,
    bottomTabActiveIcon: Colors.xf59202,
    bottomTabActiveText: Colors.xf59202,
    bottomTabInactiveText: Colors.x9e9f9e,
    lineColor: Colors.xefefef,
    personalIconBackground: Colors.xeef4ff,
    notificationIconBackground: Colors.xfff3f3,
    settingIconBackground: Colors.xf3f1ff,
    securityIconBackground: Colors.xedf9f1,
    languageIconBackground: Colors.xfff8eb,
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
    lineColor: Colors.x36383f,
    personalIconBackground: Colors.x192131,
    notificationIconBackground: Colors.x2a2025,
    settingIconBackground: Colors.x1e1e31,
    securityIconBackground: Colors.x182623,
    languageIconBackground: Colors.x2a241d,
  },
} as const;

// define other themes
