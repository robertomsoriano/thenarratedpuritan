import React from 'react'
import Head from "next/head"
import { ToastContainer, Slide } from 'react-toastify'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Head>
                <title>The Narrated Puritan</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="The Narrated Puritan" />
                <meta name="og:title" property="og:title" content="The Narrated Puritan"></meta>
                <meta name="twitter:card" content="The Narrated Puritan"></meta>
                <link rel="canonical" href="https://thenarratedpuritan.com"></link>
                <meta property="og:image" content="https://thenarratedpuritan.com" />
            </Head>

            {children}

            <ToastContainer transition={Slide} />
        </React.Fragment>
    );
}

export default Layout;