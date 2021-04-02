import Head from 'next/head'
import Footer from '../components/_App/Footer';
import MyNav from '../components/MyNav';
import HomeHero from '../components/HomeHero';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Narrated Puritan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyNav />
      <HomeHero />
      <Footer />
    </>
  )
}
