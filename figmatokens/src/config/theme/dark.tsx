import { createTheme } from '@mui/material/styles'

import { winsThemeDefaults } from '@/config/theme/WinsTheme'
import defaults from '@/config/theme/defaults'

const theme = createTheme({
  typography: {
    fontFamily: '\'TeleNeo\', Helvetica, Arial',
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: `1px solid ${winsThemeDefaults.colors.dark.whiteText}`,
          background: 'transparent'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none'
        }
      }
    }
  },
  palette: {
    mode: 'dark',
    common: {
      white: winsThemeDefaults.colors.main.white,
      black: winsThemeDefaults.colors.dark.black4
    },
    background: {
      default: '#1e1e1e',
      paper: '#151515'
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: winsThemeDefaults.colors.main.mediumVioletRed,
      dark: winsThemeDefaults.colors.dark.black4,
      contrastText: winsThemeDefaults.colors.dark.whiteText
    },
    secondary: {
      main: winsThemeDefaults.colors.dark.transparentDarkGray2,
      contrastText: winsThemeDefaults.colors.dark.transparentWhite2
    },
    text: {
      disabled: winsThemeDefaults.colors.dark.transparentWhite2
    },
    success: {
      main: '#018905'
    },
    info: {
      light: winsThemeDefaults.colors.info.iconDark,
      main: winsThemeDefaults.colors.info.mainDark,
      contrastText: winsThemeDefaults.colors.info.labelDark
    },
    divider: winsThemeDefaults.colors.dark.DividerLinesDarkMode
  },
  mixins: {
    colors: {
      border: winsThemeDefaults.colors.dark.OutsideBordersDarkMode,
      borderLight: winsThemeDefaults.colors.dark.InsideBordersDarkMode,
      backgroundIcon: winsThemeDefaults.colors.dark.BackgroundIconDarkMode
    }
  }
})

if (theme.components) {
  theme.typography.h2 = {
    fontSize: '1.5rem',
    fontWeight: theme.typography.fontWeightBold,
    //borderBottom: '1px solid #b2b2b2',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5rem'
    },
    ...theme.typography.h2
  }

  theme.components.MuiTypography = {
    styleOverrides: {
      h1: defaults(theme).styleOverrides.h1,
      h2: defaults(theme).styleOverrides.h2,
      h3: defaults(theme).styleOverrides.h3,
      subtitle1: defaults(theme).styleOverrides.subtitle1,
      subtitle2: defaults(theme).styleOverrides.subtitle2,
      overline: { ...defaults(theme).styleOverrides.overline, textTransform: 'uppercase' }
    }
  }

  theme.components.MuiButton = {
    styleOverrides: {
      root: {
        borderRadius: '6px',
        marginTop: theme.spacing(0.5),
        '&:active': {
          //boxShadow: `0px 4px 15px rgba(226, 0, 116, 0.18)`,
          marginTop: theme.spacing(0.75)
        }
      },
      contained: {
        //boxShadow: `0px 8px 15px rgba(226, 0, 116, 0.18)`,
        border: '1px solid #F2F2F2',
        boxSizing: 'border-box',
        '&:disabled': {
          color: '#F5F5F5',
          // color: theme.palette.getContrastText(theme.palette.primary.light),
          backgroundColor: theme.palette.primary.light,
          opacity: theme.palette.action.disabledOpacity
          //boxShadow: `0px 8px 15px rgba(226, 0, 116, 0.08)`
        },
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main}`
          //boxShadow: `0px 8px 15px rgba(249, 9, 132, 0.18)`
        },
        '&:active': {
          backgroundColor: theme.palette.primary.main
          //boxShadow: `0px 4px 15px rgba(226, 0, 116, 0.18)`,
        }
      },
      outlined: {
        //boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.04)',
        border: '2px solid transparent',
        backgroundColor: theme.palette.background.paper,
        // boxSizing: 'border-box',
        '&:hover': {
          // boxSizing: 'border-box',
          border: `2px solid ${theme.palette.primary.dark}`,
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.background.paper
          //boxShadow: `0px 8px 15px rgba(249, 9, 132, 0.14)`
        },
        '&:active': {
          // boxSizing: 'border-box',
          border: `2px solid ${theme.palette.primary.main}`
        }
      },
      text: {
        ':focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`
        }
      }

      // label: {
      //   fontSize: '16px',
      //   fontWeight: theme.typography.fontWeightBold,
      //   lineHeight: '21px'
      // }
    },
    defaultProps: {
      variant: 'contained',
      disableRipple: true
    }
  }

  theme.components.MuiToggleButton = {
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 500,
        color: theme.palette.text.primary,
        padding: theme.spacing(1, 3),
        border: 'none',
        backgroundColor: theme.palette.background.default,
        ':focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`
        },
        ':hover': {
          outline: `1px solid ${theme.palette.primary.main}`
        },
        borderRadius: '70px',
        '&.Mui-disabled': { border: 'none', color: theme.palette.text.disabled },
        '&.Mui-selected': {
          color: theme.palette.getContrastText(theme.palette.primary.main),
          backgroundColor: theme.palette.primary.main,
          '&.Mui-disabled': { color: theme.palette.text.disabled, backgroundColor: theme.palette.primary.light },
          ':focus-visible': {
            outline: `2px solid ${theme.palette.text.primary}`
          },
          ':hover': {
            backgroundColor: theme.palette.primary.dark,
            boxShadow: '0px 8px 15px rgba(226, 0, 116, 0.25)'
          }
        }
      }
    }
  }

  theme.components.MuiChip = {
    variants: [
      {
        props: { variant: 'filledToggle' },
        style: {
          height: 'unset',
          lineHeight: 1.75,
          fontSize: theme.typography.pxToRem(16),
          fontWeight: 500,
          color: theme.palette.text.primary,
          padding: theme.spacing(1, 3),
          border: 'none',
          backgroundColor: theme.palette.background.default,
          ':focus-visible': {
            outline: `2px solid ${theme.palette.primary.main}`
          },
          ':hover': {
            outline: `1px solid ${theme.palette.primary.main}`
          },
          borderRadius: '70px',
          '.MuiChip-deleteIcon': {
            color: 'unset',
            borderRadius: '50%',
            ':hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'unset'
            }
          },
          '&.Mui-disabled': { border: 'none', color: theme.palette.text.disabled },
          '&[aria-selected=true]': {
            color: theme.palette.getContrastText(theme.palette.primary.main),
            backgroundColor: theme.palette.primary.main,
            '&.Mui-disabled': { color: theme.palette.text.disabled, backgroundColor: theme.palette.primary.light },
            ':focus-visible': {
              outline: `2px solid ${theme.palette.text.primary}`
            },
            ':hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: '0px 8px 15px rgba(226, 0, 116, 0.25)'
            }
          }
        }
      }
    ]
  }

  theme.components.MuiPaper = {
    styleOverrides: {
      root: {
        backgroundImage: 'initial'
      }
    }
  }

  theme.components.MuiTable = {
    styleOverrides: {
      root: {
        fontSize: 14
      }
    }
  }

  theme.components.MuiTableBody = {
    styleOverrides: {
      root: {
        '& .MuiTableRow-root:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover
        }
      }
    }
  }

  theme.components.MuiTableRow = {
    styleOverrides: {
      head: {
        backgroundColor: theme.palette.grey[300]
      },
      root: {
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.action.hover
        }
      }
    }
  }

  theme.components.MuiAccordion = {
    styleOverrides: {
      root: {
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.background.default
        },
        '&.Mui-expanded': {
          backgroundColor: theme.palette.background.default
        },
        '& h2:first-of-type': {
          marginTop: '0!important'
        }
      },
      rounded: {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        marginTop: '10px',
        marginBottom: '10px',
        boxShadow: 'none',
        border: `1px solid ${theme.palette.grey[500]}`,
        fontSize: '1.5rem',
        fontWeight: theme.typography.fontWeightBold,
        '&:before': {
          display: 'none'
        },
        '&$expanded': {
          // border: `1px solid ${theme.palette.primary.main}`
          backgroundColor: theme.palette.background.default
        }
      },
      expanded: {}
    }
  }

  theme.components.MuiAccordionDetails = {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: `0px 0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
        borderTop: `1px solid ${theme.palette.grey[500]}`
        // borderTop: `1px solid ${theme.palette.primary.main}`
      }
    }
  }

  theme.components.MuiLink = {
    styleOverrides: {
      root: {
        color: '#83BCFF'
      }
    }
  }

  theme.components.MuiIconButton = {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  }

  theme.components.MuiSkeleton = {
    styleOverrides: {
      rectangular: { borderRadius: theme.shape.borderRadius }
    }
  }

  theme.components.MuiTooltip = {
    styleOverrides: {
      tooltip: {
        padding: theme.spacing(1, 2),
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.main}`
      }
    }
  }
}

export { theme as dark }
