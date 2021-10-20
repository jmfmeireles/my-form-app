import { createTheme } from '@mui/material/styles';

const lightTheme = {
  primary: '#1e22aa',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  header: '#ffffff',
  footer: '#ffffff',
  background: '#F8F8F8',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
};

const darkTheme: Theme = {
  primary: '#1e22aa',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  header: 'rgba(0,0,0,1)',
  footer: 'rgba(0,0,0,1)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const materialUiTheme = createTheme({
  typography: {
    fontFamily: ['"Clan"', 'sans-serif'].join(','),
  },
  components: {
    MuiChip: {
      styleOverrides: {
        avatar: {
          backgroundColor: lightTheme.primary,
          color: '#fff',
        },
      },
    },
  },
  palette: {
    primary: { main: lightTheme.primary },
  },
});
