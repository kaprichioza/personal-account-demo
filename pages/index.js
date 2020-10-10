import Head from 'next/head'
import { Page } from './Page/page'
import { Header } from './header/header';
import { Navigation } from './navigation/navigation';
import { Main } from './main/main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Header />
        <Navigation />
        <Main />
      </Page>
    </>
  )
}
