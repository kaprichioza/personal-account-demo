import Head from 'next/head'
import { Page } from './Page/page'
import { Header } from './header/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Header />
        {/* <Navigation /> */}
      </Page>
    </>
  )
}
