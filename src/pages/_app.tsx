import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/base/Layout'
import GlobalStyles from '../components/base/GlobalStyles'
import useTheme, { ThemeContext } from '../hooks/useTheme'

function Bazaar({ Component, pageProps }: AppProps) {
  const themeManager = useTheme()

  return (
    <ThemeContext.Provider value={themeManager}>
      <ThemeProvider theme={themeManager.theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
export default Bazaar
