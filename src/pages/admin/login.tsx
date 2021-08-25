import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../../components/admin/Login'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Login | WebShop</title>
        <meta name="description" content="Webshop admin login" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Login />
    </>
  )
}

export default LoginPage
