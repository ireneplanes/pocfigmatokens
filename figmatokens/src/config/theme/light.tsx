import { createTheme, darken } from '@mui/material/styles'

import defaults from '@/config/theme/defaults'
import { winsThemeDefaults } from '@/config/theme/WinsTheme'

const theme = createTheme({
  typography: {
    fontFamily: "'TeleNeo', Helvetica, Arial",
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(150,150,150,0.1),0px 1px 1px 0px rgba(150,150,150,0.075),0px 1px 3px 0px rgba(150,150,150,0.06)',
    '0px 3px 1px -2px rgba(150,150,150,0.1),0px 2px 2px 0px rgba(150,150,150,0.075),0px 1px 5px 0px rgba(150,150,150,0.06)',
    '0px 3px 3px -2px rgba(150,150,150,0.1),0px 3px 4px 0px rgba(150,150,150,0.075),0px 1px 8px 0px rgba(150,150,150,0.06)',
    '0px 2px 4px -1px rgba(150,150,150,0.1),0px 4px 5px 0px rgba(150,150,150,0.075),0px 1px 10px 0px rgba(150,150,150,0.06)',
    '0px 3px 5px -1px rgba(150,150,150,0.1),0px 5px 8px 0px rgba(150,150,150,0.075),0px 1px 14px 0px rgba(150,150,150,0.06)',
    '0px 3px 5px -1px rgba(150,150,150,0.1),0px 6px 10px 0px rgba(150,150,150,0.075),0px 1px 18px 0px rgba(150,150,150,0.06)',
    '0px 4px 5px -2px rgba(150,150,150,0.1),0px 7px 10px 1px rgba(150,150,150,0.075),0px 2px 16px 1px rgba(150,150,150,0.06)',
    '0px 5px 5px -3px rgba(150,150,150,0.1),0px 8px 10px 1px rgba(150,150,150,0.075),0px 3px 14px 2px rgba(150,150,150,0.06)',
    '0px 5px 6px -3px rgba(150,150,150,0.1),0px 9px 12px 1px rgba(150,150,150,0.075),0px 3px 16px 2px rgba(150,150,150,0.06)',
    '0px 6px 6px -3px rgba(150,150,150,0.1),0px 10px 14px 1px rgba(150,150,150,0.075),0px 4px 18px 3px rgba(150,150,150,0.06)',
    '0px 6px 7px -4px rgba(150,150,150,0.1),0px 11px 15px 1px rgba(150,150,150,0.075),0px 4px 20px 3px rgba(150,150,150,0.06)',
    '0px 7px 8px -4px rgba(150,150,150,0.1),0px 12px 17px 2px rgba(150,150,150,0.075),0px 5px 22px 4px rgba(150,150,150,0.06)',
    '0px 7px 8px -4px rgba(150,150,150,0.1),0px 13px 19px 2px rgba(150,150,150,0.075),0px 5px 24px 4px rgba(150,150,150,0.06)',
    '0px 7px 9px -4px rgba(150,150,150,0.1),0px 14px 21px 2px rgba(150,150,150,0.075),0px 5px 26px 4px rgba(150,150,150,0.06)',
    '0px 8px 9px -5px rgba(150,150,150,0.1),0px 15px 22px 2px rgba(150,150,150,0.075),0px 6px 28px 5px rgba(150,150,150,0.06)',
    '0px 8px 10px -5px  rgba(150,150,150,0.1),0px 16px 24px 2px rgba(150,150,150,0.075),0px 6px 30px 5px rgba(150,150,150,0.06)',
    '0px 8px 11px -5px rgba(150,150,150,0.1),0px 17px 26px 2px rgba(150,150,150,0.075),0px 6px 32px 5px rgba(150,150,150,0.06)',
    '0px 9px 11px -5px rgba(150,150,150,0.1),0px 18px 28px 2px rgba(150,150,150,0.075),0px 7px 34px 6px rgba(150,150,150,0.06)',
    '0px 9px 12px -6px rgba(150,150,150,0.1),0px 19px 29px 2px rgba(150,150,150,0.075),0px 7px 36px 6px rgba(150,150,150,0.06)',
    '0px 10px 13px -6px rgba(150,150,150,0.1),0px 20px 31px 3px rgba(150,150,150,0.075),0px 8px 38px 7px rgba(150,150,150,0.06)',
    '0px 10px 13px -6px rgba(150,150,150,0.1),0px 21px 33px 3px rgba(150,150,150,0.075),0px 8px 40px 7px rgba(150,150,150,0.06)',
    '0px 10px 14px -6px rgba(150,150,150,0.1),0px 22px 35px 3px rgba(150,150,150,0.075),0px 8px 42px 7px rgba(150,150,150,0.06)',
    '0px 11px 14px -7px rgba(150,150,150,0.1),0px 23px 36px 3px rgba(150,150,150,0.075),0px 9px 44px 8px rgba(150,150,150,0.06)',
    '0px 11px 15px -7px rgba(150,150,150,0.1),0px 24px 38px 3px rgba(150,150,150,0.075),0px 9px 46px 8px rgba(150,150,150,0.06)'
  ],

  shape: {
    borderRadius: 10
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10
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
    mode: 'light',
    common: {
      white: winsThemeDefaults.colors.main.white,
      black: winsThemeDefaults.colors.dark.black2
    },
    background: {
      default: '#f2f2f2',
      paper: winsThemeDefaults.colors.main.white
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: winsThemeDefaults.colors.main.Magenta,
      light: '#D0A5BB',
      dark: winsThemeDefaults.colors.main.MagentaHover,
      contrastText: winsThemeDefaults.colors.main.white
    },
    secondary: {
      main: winsThemeDefaults.colors.dark.transparentDarkGray2,
      contrastText: darken(winsThemeDefaults.colors.main.white, 0.5)
    },
    text: {
      primary: '#191919',
      secondary: '#4a4a4a'
    },
    info: {
      light: '#edf6ff',
      main: '#59aaff',
      dark: '#ff0000'
      // light: 'rgba(237, 246, 255, 1)',
    },
    divider: winsThemeDefaults.colors.main.DividerLinesLightMode
  },
  mixins: {
    colors: {
      border: winsThemeDefaults.colors.main.OutsideBordersLightMode,
      borderLight: winsThemeDefaults.colors.main.OutsideBordersLightMode,
      backgroundIcon: winsThemeDefaults.colors.main.OutsideBordersLightMode
    }
  }
})

if (theme.components) {
  theme.typography.h2 = { ...defaults(theme).typography.h2, ...theme.typography.h2 }

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
        // '&:focus': {
        //   outline: `1px solid blue`
        // }
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
          backgroundColor: theme.palette.primary.light
          //boxShadow: `0px 8px 15px rgba(226, 0, 116, 0.08)`
        },
        '&:hover': {
          backgroundColor: theme.palette.primary.dark
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
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.background.paper
          //boxShadow: `0px 8px 15px rgba(249, 9, 132, 0.14)`
        },
        '&:active': {
          // boxSizing: 'border-box',
          border: `2px solid ${theme.palette.primary.main}`
          //boxShadow: `0px 4px 15px rgba(226, 0, 116, 0.18)`,
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
            outline: 'none',
            backgroundColor: theme.palette.primary.dark
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
              backgroundColor: 'rgba(0,0,0,0.1)',
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
              outline: 'none',
              backgroundColor: theme.palette.primary.dark
            }
          }
        }
      }
    ]
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
        border: `1px solid ${theme.mixins?.colors?.border || theme.palette.divider}`,

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
        border: `1px solid ${theme.mixins?.colors?.border || theme.palette.divider}`,
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
        color: '#0052B1'
      }
    }
  }

  theme.components.MuiIconButton = {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
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

// theme = responsiveFontSizes(theme)

export { theme as light }
