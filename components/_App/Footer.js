import React from 'react';
import { server } from '../../config';
// import Link from 'next/link';
// import ScrollableAnchor from 'react-scrollable-anchor'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <style jsx>{`
                .footer {

                }
            `}</style>
            <footer className="footer fixed-bottom">
                <div className="container">
                    <div className="copyright-wrap d-flex align-items-center justify-content-center">
                        <p><a
                            href={`${server}`}
                        >Copyright @{currentYear} CBTS</a></p>
                    </div>
                </div>
            </footer>
        </React.Fragment >
    );
}

export default Footer;