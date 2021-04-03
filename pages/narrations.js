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
            <div className={`d-flex align-items-center justify-content-center sermonaudio`}>
                <iframe tabindex="-1" width="1" height="720" src="https://embed.sermonaudio.com/browser/broadcaster/soluschristus/?sort=newest&page_size=25&background=false&rounded=true&sermon_borders=false&external_borders=false"
                    allow="autoplay" frameborder="0" scrolling="no"></iframe>
            </div>
            {/* <Footer /> */}
        </>
    )
}
