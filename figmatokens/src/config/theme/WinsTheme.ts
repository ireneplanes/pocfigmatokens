// interface declaration merging to add custom mixins
declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    colors: {
      border: string
      borderLight: string
      backgroundIcon: string
    }
  }
}



declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    filledToggle: true
  }
}

const fonts = {

  styles: {
    teleNeo10ExtraBold: {
      family: 'TeleNeo',
      size: '10px',
      weight: '800',
      lineHeight: 'normal'
    },
    teleNeo12Regular: {
      family: 'TeleNeo',
      size: '12px',
      weight: '400',
      lineHeight: 'normal'
    },
    teleNeo14Regular: {
      family: 'TeleNeo',
      size: '14px',
      weight: '400',
      lineHeight: 'normal'
    },
    teleNeo16ExtraBold: {
      family: 'TeleNeo',
      size: '16px',
      weight: '800',
      lineHeight: 'normal'
    },
    teleNeo16ExtraBoldLine21: {
      family: 'TeleNeo',
      size: '16px',
      weight: '800',
      lineHeight: '21px'
    },
    teleNeo16Regular: {
      family: 'TeleNeo',
      size: '16px',
      weight: '400',
      lineHeight: 'normal'
    },
    teleNeo16RegularLine21: {
      family: 'TeleNeo',
      size: '16px',
      weight: '400',
      lineHeight: '21px'
    },
    TeleNeo4ExtraBold: {
      family: 'TeleNeo',
      size: '24px',
      weight: '800',
      lineHeight: 'normal'
    },
    teleNeo30ExtraBold: {
      family: 'TeleNeo',
      size: '30px',
      weight: '800',
      lineHeight: 'normal'
    }
  }
}

const colors = {
  main: {
    cornflowerBlue: 'rgba(96,186,242,1)',
    green: 'rgba(15,169,88,1)',
    mediumVioletRed: 'rgba(227,0,116,1)',
    white: 'rgba(255,255,255,1)',
    whiteBg: 'rgba(246,246,246,1)',
    Magenta: '#E20074',
    MagentaHover: '#F90984',
    BodyLightMode: '#191919',
    LinkLightMode: '#0052B1',
    DividerLinesLightMode: '#B2B2B2',
    OutsideBordersLightMode: '#E5E5E5',
    focusLight: '#262626'
  },
  dark: {
    black: 'rgba(0,0,0,1)',
    black2: 'rgba(22, 0, 11, 1)',
    black4: 'rgba(21,21,21,1)',
    darkGray: 'rgba(159,159,159,1)',

    transparentDarkGray: 'rgba(159,159,159,0.4)',
    transparentDarkGray2: 'rgba(159,159,159,0.3)',
    transparentWhite: 'rgba(255,255,255,0.08)',
    transparentWhite2: 'rgba(255,255,255,0.5)',

    whiteText: 'rgba(236, 236, 236, 1)',
    DividerLinesDarkMode: '#848484',
    OutsideBordersDarkMode: '#2E2E2E',
    InsideBordersDarkMode: '#535353',
    BackgroundIconDarkMode: '#4c4c4c',

    focusDark: '#d5d5d5'
  },
  info: {
    main: 'rgba(237, 246, 255, 1)',
    mainDark: '#1D2B3A',
    iconDark: '#59AAFF',
    labelDark: '#ECECEC'
  }
}

export const winsThemeDefaults: { colors: typeof colors; fonts: typeof fonts } = {
  colors,
  fonts
}
