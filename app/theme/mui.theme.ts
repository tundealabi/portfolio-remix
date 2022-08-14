import { createTheme } from '@mui/material/styles';
import type { PalletMode } from '~/interfaces';

const mode = {
  light: {
    primary: {
      main: '#DD9C3C',
      dark: '#BF7506',
      light: '#F4DEBE',
    },
    secondary: {
      main: '#211BI2',
      dark: '#83807C',
      light: '#E7E6E4',
    },
    divider: '#BF7506',
  },
  dark: {
    primary: {
      main: '#00ffff',
    },
    secondary: {
      main: '#fff',
    },
    divider: '#fff',
  },
};

export const createMuiTheme = (palletMode: PalletMode) => {
  return createTheme({
    palette: {
      mode: palletMode,
      ...mode[palletMode],
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: {
        fontFamily: 'Inter',
        fontSize: '3rem',
        fontWeight: 'bold',
        // lineHeight: '125%',
        letterSpacing: '-0.03em',
      },
      h2: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '2rem',
        // lineHeight: '125%',
        letterSpacing: '-0.03em',
      },
      h3: {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        // lineHeight: '135%',
        letterSpacing: '-0.02em',
      },
      body1: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: '1rem',
        // lineHeight: '150%',
      },
      body2: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: '0.75rem',
        // lineHeight: '150%',
      },
    },
  });
};
