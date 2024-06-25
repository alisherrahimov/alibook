import {darkTheme, lightTheme} from './theme';
import {UnistylesRegistry} from 'react-native-unistyles';

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
  // register other themes with unique names
}).addConfig({
  initialTheme: 'light',
  adaptiveThemes: true,
});
