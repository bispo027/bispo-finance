import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = {
  fonts: {
    roboto: `'Roboto', sans-serif`
  },
}

const colors = {
  colors: {
    g: {
      100: '#00B37E',
      300: '#00875F',
      500: '#015F43'
    },
    r: {
      100: '#F75A68',
      500: '#AA2834'
    },
    ge: {
      100: '#E1E1E6',
      200: '#C4C4CC',
      300: '#7C7C8A',
      400: '#323238',
      500: '#29292E',
      600: '#202024',
      700: '#121214'
    },
  }
}

const theme = extendTheme({ colors, config, fonts })

export default theme
