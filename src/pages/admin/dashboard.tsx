import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../../components/admin/Dashboard'

const DashboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Dashboard | WebShop</title>
        <meta name="description" content="Webshop admin dashboard" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Dashboard />
    </>
  )
}

export default DashboardPage
