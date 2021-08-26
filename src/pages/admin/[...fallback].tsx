import type { NextPage } from 'next'
import Head from 'next/head'

const FallbackPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Not Found | WebShop</title>
        <meta name="description" content="page does not exist" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>Page Not Found</h1>
      </main>
    </>
  )
}

export default FallbackPage
