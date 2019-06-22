import { rgba } from 'polished'

const colors = {
  white: {
    base: '#fff',
    light: '#f0f0f0',
    blueish: '#E6D065',
    blue: '#878787',
  },
  main: {
    grey: '#f0f0f0',
    yellow: '#878787',
  },
  black: {
    base: '#333438',
    light: '#4b4e57',
    lighter: '#878787',
    blue: '#2e3246',
  },
  primary: {
    base: '#3498db',
    light: '#5abdff',
    lightest: '#7cc9ff',
    dark: '#4768b4',
    darker: '#45458d',
  },
  secondary: {
    base: '#E6D065',
    light: '#ffaf60',
    dark: '#d17c26',
  },
  background: {
    light: '#46507a',
    dark: '#262c41',
  },
  brands: {
    github: '#24292E',
    instagram: {
      yellow: '#f7eb4c',
      pink: '#ee2a7b',
      blue: '#4c6aff',
    },
    behance: '#191919',
    youtube: '#ff0000',
  },
}

const tint = {
  black: rgba(colors.black.base, 0.1),
  // white: rgba(colors.white.light, 0.85),
  blue: rgba(colors.primary.base, 0.35),
  blueLight: rgba(colors.primary.base, 0.2),
  blueWhite: rgba(colors.primary.light, 0.7),
  orange: rgba(colors.secondary.base, 0.35),
}

const gradient = {
  leftToRight: `linear-gradient(-45deg, ${colors.background.dark} 0%, ${colors.background.light} 100%)`,
  rightToLeft: `linear-gradient(45deg, ${colors.background.dark} 0%, ${colors.background.light} 100%)`,
}

const shadow = {
  button: {
    default: '0 20px 20px',
    hover: '0 23px 28px',
  },
  card: '0 20px 30px rgba(0, 0, 0, 0.1)',
  image: '0 15px 25px rgba(0, 0, 0, 0.1)',
  feature: {
    big: {
      default: '0 40px 40px rgba(0, 0, 0, 0.2)',
      hover: '0 50px 50px rgba(0, 0, 0, 0.1)',
    },
    small: {
      default: '0 15px 25px rgba(0, 0, 0, 0.2)',
      hover: '0 40px 45px rgba(0, 0, 0, 0.1)',
    },
  },
  text: {
    small: '0 5px 10px rgba(0, 0, 0, 0.25)',
    big: '0 15px 20px rgba(0, 0, 0, 0.13)',
  },
}

const button = {
  default: {
    background: colors.black.blue,
    boxShadow: `${shadow.button.default} ${rgba(colors.black.blue, 0.4)}`,
    hover: {
      boxShadow: `${shadow.button.hover} ${rgba(colors.black.blue, 0.3)}`,
    },
  },
  primary: {
    background: `linear-gradient(30deg, ${colors.primary.light} 0%, ${colors.primary.dark} 100%)`,
    boxShadow: `${shadow.button.default} ${rgba(colors.primary.base, 0.4)}`,
    hover: {
      boxShadow: `${shadow.button.hover} ${rgba(colors.primary.base, 0.3)}`,
    },
    focus: tint.blue,
  },
  secondary: {
    background: `linear-gradient(30deg, ${colors.secondary.light} 0%, ${colors.secondary.dark} 100%)`,
    boxShadow: `${shadow.button.default} ${rgba(colors.secondary.base, 0.4)}`,
    hover: {
      boxShadow: `${shadow.button.hover} ${rgba(colors.secondary.base, 0.3)}`,
    },
    focus: tint.orange,
  },
}

const transition = {
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  duration: '0.4s',
}

const theme = {
  colors,
  tint,
  gradient,
  button,
  shadow,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  fontFamily: {
    // "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    body: `Istok Web, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    heading: `Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  layout: {
    article: '46rem',
    base: '70rem',
    big: '83.33333rem',
  },
  borderRadius: {
    default: '0.4rem',
    round: '100rem',
  },
  transitions: {
    default: {
      duration: transition.duration,
      timing: transition.easeInOutCubic,
      transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
    },
    boom: {
      duration: transition.duration,
      timing: transition.easeOutBack,
      transition: `all ${transition.duration} ${transition.easeOutBack}`,
    },
    headroom: {
      transition: 'all 0.25s ease-in-out',
    },
  },
}

export default theme
