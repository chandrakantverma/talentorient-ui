// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8', // Custom primary color
    },
    secondary: {
      main: '#ff5722', // Custom secondary color
    },
    background: {
      default: '#f4f6f8', // Background color for the entire app
    },
    text: {
      primary: '#333', // Primary text color
      secondary: '#666', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          textTransform: 'none', // Disable uppercase text
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Remove AppBar shadow
          backgroundColor: '#1a73e8', // Primary color for AppBar
        },
      },
    },
  },
});

export default theme;
