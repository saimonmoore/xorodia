export const greyscale = {
  grey50: '#f2f2f2',
  grey100: '#e5e5e5',
  grey150: '#d9d9d9',
  grey200: '#cccccc',
  grey400: '#999999',
  grey600: '#666666',
  grey800: '#333333',
}

export const primaryPalette = {
  lightPetrol: '#009090',
  lime: '#b0d400',
  petrol: '#007575',
  white: '#fff',
}

export const backgroundColors = {
  appBackground: greyscale.grey800,
  cardBackground: primaryPalette.white,
}

export const extendedPalette = {
  babyBlue: '#68c3fc',
  berry: '#e2007a',
  indigo: '#546df5',
  mint: '#00d296',
  orange: '#ffa000',
  pigeon: '#365568',
  red: '#f33a58',
  appGreen: '#545454',
  randomCyan: '#cfe5e8',
}

export const textColor = {
  negativeText: primaryPalette.white,
  primaryText: greyscale.grey800,
  secondaryText: greyscale.grey400,
  linkText: primaryPalette.lightPetrol,
}

export const productColors = {
  xbm: '#B0D400',
  xjm: '#73B7E2',
  xrm: '#858AC2',
  xtm: '#A9BAC4',
  xtp: '#F28F7F',
  '360': primaryPalette.petrol,
}

export const semanticColors = {
  accent: primaryPalette.lightPetrol,
  beta: extendedPalette.berry,
  error: extendedPalette.red,
  eyeCatcher: extendedPalette.orange,
  information: extendedPalette.babyBlue,
  success: primaryPalette.lime,
  neutral: greyscale.grey400,
}

export const borderColors = {
  borderActive: primaryPalette.lightPetrol,
  borderLight: greyscale.grey100,
  borderMedium: greyscale.grey200,
  borderDark: greyscale.grey400,
}

export const gradients = {
  primaryButtonDefault: `linear-gradient(to bottom, #bde300 0%, ${primaryPalette.lime} 100%)`,
  secondaryButtonDefault: `linear-gradient(to bottom, ${greyscale.grey150} 0%, ${greyscale.grey200} 100%)`,
  textLoadingLight: `linear-gradient(
      to right,
      ${greyscale.grey100} 8%,
      ${greyscale.grey150} 38%,
      ${greyscale.grey100} 54%
    )`,
  textLoadingDark: `linear-gradient(
      to right,
      ${greyscale.grey150} 8%,
      ${greyscale.grey200} 38%,
      ${greyscale.grey150} 54%
    )`,
}

const colors = {
  ...backgroundColors,
  ...primaryPalette,
  ...extendedPalette,
  ...textColor,
  ...greyscale,
  ...productColors,
  ...semanticColors,
  ...borderColors,
  ...gradients,
}

const space = [
  0,
  '4px',
  '8px',
  '12px',
  '16px',
  '24px',
  '32px',
  '40px',
  '48px',
  '64px',
]

const breakpoints = ['640px', '768px', '1024px', '1200px']

const fontFamily =
  '"Xing Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif'

const fontSizes = [
  0,
  '12px',
  '14px',
  '16px',
  '18px',
  '22px',
  '26px',
  '32px',
  '40px',
  '48px',
]

const fontWeights = [400, 600]

const lineHeights = [
  0,
  '16px',
  '20px',
  '22px',
  '24px',
  '28px',
  '32px',
  '38px',
  '46px',
  '52px',
]

const shadows = [
  'none',
  '0 2px 2px rgba(0,0,0,.16)',
  '0 3px 8px rgba(0,0,0,.20)',
  '0 6px 20px rgba(0,0,0,.25)',
]

shadows.header = '0 0 1px rgba(0,0,0,.16), 0 2px 3px rgba(0,0,0,.16)'

const borders = {
  active: `1px solid ${borderColors.borderActive}`,
  light: `1px solid ${borderColors.borderLight}`,
  medium: `1px solid ${borderColors.borderMedium}`,
  dark: `1px solid ${borderColors.borderDark}`,
}

const textSizes = () =>
  fontSizes.map((_, i) => ({
    fontSize: fontSizes[i],
    lineHeight: lineHeights[i],
  }))

const buttonSizes = [
  {
    height: '32px',
    fontSize: fontSizes[2],
  },
  {
    height: '40px',
    fontSize: fontSizes[3],
  },
]

const buttons = {
  primary: {
    color: colors.grey800,
    background: gradients.primaryButtonDefault,
    '&:not(:disabled):hover': { background: '#b0d400' },
  },
  secondary: {
    color: colors.grey800,
    background: gradients.secondaryButtonDefault,
    '&:not(:disabled):hover': { background: '#d1d1d1' },
  },
  tertiary: {
    background: colors.white,
    border: `1px solid ${colors.borderMedium}`,
    '&:not(:disabled):hover': { borderColor: colors.borderDark },
  },
}

const loadingText = {
  light: {
    backgroundImage: colors.textLoadingLight,
  },
  dark: {
    backgroundImage: colors.textLoadingDark,
  },
}

const radii = [0, '4px', '8px']

radii.rounded = '99em'

const zIndices = {
  basicLevel: 10,
  navigationLevel: 100,
  dropdownLevel: 110,
  fixedLevel: 120,
  sidebarLevel: 130,
  overlayLevel: 140,
  dialogLevel: 160,
  notificationLevel: 165,
  tooltipLevel: 170,
  godLevel: 1000,
}

export const baseTheme = {
  borders,
  breakpoints,
  buttons,
  buttonSizes,
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  lineHeights,
  loadingText,
  radii,
  shadows,
  space,
  textSizes: textSizes(),
  zIndices,
}

export const createTheme = (theme) => ({ ...baseTheme, ...theme })
