import { createTheme } from '@shopify/restyle';

const palette = {
  salmonGradient1: 'hsla(331, 78%, 70%, 1)',
  salmonGradient2: 'hsla(12, 84%, 71%, 1)',
  salmon: 'hsla(360, 97%, 73%, 1)',
  lightSalmon: 'hsla(0, 62%, 97%, 1)',
  blue: 'hsla(231, 32%, 30%, 1)',
  grey: 'hsla(231, 9%, 56%, 1)',
  lightGrey: 'hsla(0, 0%, 92%, 1)',
  pinkyWhite: 'hsla(12, 83%, 98%, 0.97)',
  transparentWhite: 'hsla(0, 0%, 100%, 0.8)',
  white: 'hsla(0, 0%, 100%, 1)',
};

export const lightTheme = createTheme({
  colors: {
    mainBackground: palette.pinkyWhite,
    transparentBackground: palette.transparentWhite,
    buttonBackground: palette.lightSalmon,

    primaryGradient1: palette.salmonGradient1,
    primaryGradient2: palette.salmonGradient2,

    textPrimary: palette.blue,
    textSecondary: palette.grey,

    textInputBackground: palette.lightGrey,
    divider: palette.lightGrey,
    dragger: palette.lightGrey,

    white: palette.white,
  },
  borderRadii: {
    xs: 2,
    s: 6,
    m: 16,
    ml: 20,
    l: 30,
  },
  spacing: {
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 36,
    xxl: 40,
  },
  textVariants: {
    defaults: {
      fontFamily: 'DaysOne',
      fontSize: 16,
      lineHeight: 20,
    },
    title1: {
      fontFamily: 'DaysOne',
      fontSize: 40,
      lineHeight: 50,
    },
    title2: {
      fontFamily: 'DaysOne',
      fontSize: 22,
      lineHeight: 28,
    },
    text: {
      fontFamily: 'DaysOne',
      fontSize: 16,
      lineHeight: 20,
    },
    number1: {
      fontFamily: 'DaysOne',
      fontSize: 65,
      lineHeight: 82,
    },
    number2: {
      fontFamily: 'DaysOne',
      fontSize: 36,
      lineHeight: 45,
    },
  },
  breakpoints: {
    phone: 0,
  },
});
