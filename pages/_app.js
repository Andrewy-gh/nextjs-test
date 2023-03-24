import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import Head from 'next/head';
import NavBar from '@/components/Navbar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Plant Store</title>
      </Head>
      <div>
        <NavBar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
