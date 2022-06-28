import { createTheme } from '@shopify/restyle';

const palette = {
  salmonGradient1: 'hsla(12, 84%, 71%, 1)',
  salmonGradient2: 'hsla(331, 78%, 70%, 1)',
  salmon: 'hsla(360, 97%, 73%, 1)',
  blue: 'hsla(231, 32%, 30%, 1)',
  grey: 'hsla(231, 9%, 56%, 1)',
  pinkyWhite: 'hsla(12, 83%, 98%, 0.37)',
  transparentWhite: 'hsla(0, 0%, 100%, 0.7)',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.pinkyWhite,
    transparentBackground: palette.transparentWhite,

    primaryGradient1: palette.salmonGradient1,
    primaryGradient2: palette.salmonGradient2,

    textPrimary: palette.blue,
    textSecondary: palette.grey,
  },
  spacing: {
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
  },
});

export default theme;
