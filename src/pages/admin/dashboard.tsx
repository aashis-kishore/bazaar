import type { NextPage } from 'next'
import Head from 'next/head'

const DashboardPage: NextPage = () => {
  const user = ''

  return (
    <>
      <Head>
        <title>Admin - Dashboard | WebShop</title>
        <meta name="description" content="Webshop admin dashboard" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {user &&
        <main>
          <h1>Dashboard</h1>
        </main>
      }
    </>
  )
}

export default DashboardPage
