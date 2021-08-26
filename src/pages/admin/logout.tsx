import type { NextPage } from 'next'
import Head from 'next/head'
import useLogout from '../../hooks/useLogout'
import useRedirect from '../../hooks/useRedirect'

const LoginPage: NextPage = () => {
  useLogout()
  useRedirect()

  return (
    <>
      <Head>
        <title>Admin - Logout | WebShop</title>
        <meta name="description" content="Webshop admin logout" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  )
}

export default LoginPage
