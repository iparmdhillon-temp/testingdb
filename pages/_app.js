import '../styles/globals.css';
import Head from '../components/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head title="Hello App">
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
