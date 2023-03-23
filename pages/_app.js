import '@/styles/globals.css';
import Head from 'next/head';
import NavBar from '@/components/navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Plant Store</title>
      </Head>
      <div>
        <NavBar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
