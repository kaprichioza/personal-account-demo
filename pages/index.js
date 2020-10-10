import Head from 'next/head'
import { Page } from './components/Page/page'
import { Header } from './components/header/header';
import { Navigation } from './components/navigation/navigation';
import { Main } from './components/main/main';

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
