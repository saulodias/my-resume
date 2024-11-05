import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#171717',
    },
    secondary: {
      main: '#383838',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
  },
});

export default theme; 