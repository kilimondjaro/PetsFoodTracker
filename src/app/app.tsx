import 'src/shared/config/i18n';

import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { lightTheme } from 'src/shared/ui/theme';

import { Navigation } from './navigation';

export function App() {
  const [areFontsLoaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    DaysOne: require('src/shared/assets/fonts/DaysOne.ttf'),
  });
  if (!areFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Navigation />
    </ThemeProvider>
  );
}
