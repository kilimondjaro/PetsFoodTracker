import 'src/shared/config/i18n';
import 'src/shared/config/firebase';

import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import React from 'react';
import { StorybookToggle } from 'src/features/storybook-toggle/ui';
import StorybookUIRoot from 'src/shared/storybook/Storybook';
import { Box } from 'src/shared/ui/box';
import { lightTheme } from 'src/shared/ui/theme';

import { Navigation } from './navigation';

export function App() {
  const [isStorybookShown, setStorybookShownValue] = React.useState(false);
  const [areFontsLoaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    DaysOne: require('src/shared/assets/fonts/DaysOne.ttf'),
  });
  if (!areFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Box flex={1}>
        {isStorybookShown ? <StorybookUIRoot /> : <Navigation />}
        <StorybookToggle
          onToggle={() => setStorybookShownValue(!isStorybookShown)}
        />
      </Box>
    </ThemeProvider>
  );
}
