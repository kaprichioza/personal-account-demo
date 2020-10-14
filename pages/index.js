import React , { useState } from 'react';
import Head from 'next/head';
import { Page } from './components/page/page';
import { Main } from './components/main/main';

export default function Home() {  
  return (
    <>
      <Head>
        <title>personal account demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>        
        <Main />
      </Page>
    </>
  )
}
