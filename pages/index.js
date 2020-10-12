import React , { useState } from 'react';
import Head from 'next/head';
import { Page } from './components/Page/page'
import { Header } from './components/header/header';
import { Navigation } from './components/navigation/navigation';
import { Main } from './components/main/main';

let shortName = 'Иванова А';
export default function Home() {
  const [nameState, setNameState] = useState(shortName);
  const name = (name) => {
    shortName = name.match(/^(\s*.*?\s).*\w{0,1}/)[1] + name.split(' ')[1].match(/^\W/);
    setNameState({ shortName: shortName });
  };
  return (
    <>
      <Head>
        <title>personal account demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Header>{nameState.shortName}</Header>
        <Navigation />
        <Main name={name} />
      </Page>
    </>
  )
}
