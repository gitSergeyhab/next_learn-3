import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import Layout from '../components/layout'
import Image from 'next/image';
import src from '../public/youtube.png'
import Head from 'next/head';


const MyApp = ({ Component, pageProps } : AppProps) => {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main style={{height: '80%'}}>
        <Component {...pageProps} />
      </main>
      {/* <Image
        width={500}
        height={350}
        alt='prev'
        src={src}
        placeholder='blur'
      /> */}
    </Layout>
  )
}

export default MyApp;
