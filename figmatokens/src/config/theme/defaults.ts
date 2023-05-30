import { Theme } from '@mui/material'
const defaults = (theme: Theme) => ({
  typography: {
    h2: {
      fontSize: '1.5rem',
      fontWeight: theme.typography.fontWeightBold,
      //borderBottom: '1px solid #b2b2b2',
      [theme.breakpoints.up('xs')]: {
        fontSize: '1.5rem'
      }
    }
  },
  styleOverrides: {
    h1: {
      fontSize: theme.typography.pxToRem(30),
      lineHeight: '34px',
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('xs')]: {
        fontSize: '30px'
      }
    },
    h2: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
      //borderBottom: '1px solid #b2b2b2',
      [theme.breakpoints.up('xs')]: {
        fontSize: '24px'
      }
    },
    h3: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('xs')]: {
        fontSize: '16px'
      }
    },
    subtitle1: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    subtitle2: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    overline: {
      lineHeight: '1rem',
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.up('xs')]: {
        fontSize: '1rem'
      }
    }
  }
})
export default defaults
