import { createTheme } from '@mui/material';
import { fontFamily, typography } from '@mui/system';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    error: {
      main: '#FF5D5D',
      light: '#FCECE6',
      contrastText: '#fff',
    },
    success: {
      main: '#00A980',
      light: '#DBEBDB',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFA726',
      light: '#FFF5D2',
      contrastText: '#fff',
    },
    greys: {
      foreground: '#333333',
      level4: 'rgba(51, 51, 51, 0.5)',
      level3: 'rgba(51, 51, 51, 0.25)',
      level2: 'rgba(51, 51, 51, 0.15)',
      level1: 'rgba(51, 51, 51, 0.07)',
      background: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      letterSpacing: '-0.1rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.074rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.728rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.44rem',
    },
    h5: {
      fontSize: '1.44rem',
    },
    h6: {
      fontSize: '1.44rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
    paragraph: {
      fontFamily: 'Inter, sans-serif',
      opacity: '50%',
      fontSize: '19,2px',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#333',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          fontFamily: 'Inter, sans-serif',
          padding: '6px 12px',
          minWidth: 0,
          minHeight: 0,
          '&:hover,&:active': {
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(51, 51, 51, 0.07)',
          },
        },
        outlined: {
          '&.Mui-disabled': {
            backgroundColor: '#fff',
          },
        },

        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          fontWeight: 500,
          '&:hover,&:active': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
          },
        },
        outlinedPrimary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          fontWeight: 500,
          border: 'none',
          '&:hover,&:active': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
          },
          '&:disabled': {
            border: 'none',
            backgroundColor: theme.palette.greys.level1,
            color: theme.palette.greys.level3,
            fontFamily: 'Roboto, sans-serif',
          },
        },
        containedError: {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          },
        },
        outlinedError: {
          backgroundColor: theme.palette.error.contrastText,
          color: theme.palette.error.main,
          border: '1px solid #FF5D5D',
          '&:hover,&:active': {
            backgroundColor: theme.palette.error.light,
          },
        },
        containedSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
          fontWeight: 600,
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
          '&:disabled': {
            fontWeight: 600,
          },
        },
        outlinedSuccess: {
          fontWeight: 600,
          border: '1px solid #66BB6A',
          '&:hover,&:active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          fontWeight: 600,
          '&:hover': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },
          '&:active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,
          },
        },
        outlinedWarning: {
          fontWeight: 600,
          border: '1px solid #FFA726',
          '&:hover,&:active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
          },
        },
        startIcon: {
          '*:nth-child(1)': {
            fontSize: '15px',
          },
        },
        endIcon: {
          marginRight: 0,
          marginLeft: '4px',
          paddingTop: '6px',
          paddingBottom: '6px',
          '*:nth-child(1)': {
            fontSize: '11px',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey['500'],
            ':hover': {
              borderRadius: 0,
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
            },
            '&.Mui-selected': {
              borderRadius: 0,
              backgroundColor: 'transparent',
              borderBottom: '2px solid #0666eb',
              color: theme.palette.primary.main,
            },
            '.MuiTypography-root': {
              fontWeight: '500',
              fontSize: '14px',
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: '#33333350',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '40px 32px',
            border: 'none',
            boxShadow: theme.shadows[3],
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            padding: '0',
            fontSize: '24px',
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '0',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  },
});

export { theme };
