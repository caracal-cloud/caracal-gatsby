import * as mixins from './mixins'
import colors from './colors'

export * from './utils'

export default {
  mixins,
  breakpoints: ['600px', '1024px', '1330px'],
  colors: {
    ...colors,
    primary: colors.forest[2],
    secondary: colors.blue[2],
    text: colors.dark[0],
    bodyBg: colors.lightGray[3],
    border: colors.lightGray[3],
    header: {
      bg: colors.dark[3],
      color: colors.white,
    },
  },
  fonts: {
    body: '"Source Sans Pro", system-ui, sans-serif',
    heading: '"Red Hat Display", system-ui, sans-serif',
  },
  radii: {
    square: 0,
    radius: 6,
    rounded: 10,
    circle: 9999,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    header: {
      height: 70,
    },
  },
}
