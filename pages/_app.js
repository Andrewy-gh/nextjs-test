import { SessionProvider } from 'next-auth/react';
import { StateProvider } from '@/context/AppContext';
import '@/styles/globals.css';
import Head from 'next/head';
import NavBar from '@/components/navbar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <StateProvider>
        <Head>
          <title>Plant Store</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
      </StateProvider>
    </SessionProvider>
  );
}
