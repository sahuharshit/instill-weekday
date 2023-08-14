import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    darkGrey: string;
    background: string;
    lightGrey: string;
  }
}

export const theme = extendTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '20px',
    },
    button: {
      textTransform: 'none',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        common: {
          black: '#000',
          white: '#fff',
          lightGrey: '#666',
          darkGrey: '#888',
          background: '#F5F7F9',
        },
        primary: {
          main: '#3AD0F8',
        },
        secondary: {
          main: '#27C59A',
        },
      },
    },
  },
});

export type Theme = typeof theme;
