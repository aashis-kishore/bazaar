import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string
    fg: string
    tBtnBg: string
    tBtnFg: string
  }

  export interface DefaultThemes {
    lightTheme: DefaultTheme
    darkTheme: DefaultTheme
  }
}
