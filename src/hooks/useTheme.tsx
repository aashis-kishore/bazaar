import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import themes from '../libs/themes'

export interface ThemeManager {
  theme: DefaultTheme,
  setTheme: Dispatch<SetStateAction<DefaultTheme>>
}

export const ThemeContext = createContext<null | ThemeManager>(null)

interface UseTheme {
  (initTheme?: DefaultTheme): ThemeManager
}

const useTheme: UseTheme = (initTheme) => {
  const [theme, setTheme] = useState(initTheme || themes.lightTheme)

  return { theme, setTheme }
}

export default useTheme
