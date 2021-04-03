import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { Image, Button } from 'react-bootstrap'
const HomeHero = () => {
    return (
        <div className={`d-flex align-items-center justify-content-center flex-row`} style={{ minHeight: '70vh' }}>
            {/* <div className={`row`}>
                <div className={`col-12`}><h1>The Narrated Puritan</h1></div></div> */}

            <div className={`row  align-items-center justify-content-center`} style={{ background: 'rgb(244,247,250)', width: '100%' }}>
                <div className={`col-12 d-flex flex-column align-items-center justify-content-center my-5`}>
                    <h1>The Narrated Puritan</h1>
                    <h2>Old Treasures Tith Abiding Relevance</h2>
                </div>
                <div className={`text-center mb-5`}>
                    {/* <Image src="/profile.jpeg" alt="me" width="200" height="200" rounded /> */}
                    <Image src="/profile.jpeg" rounded style={{ width: '300px', height: '300px' }} className={`shadow-sm`} />
                </div>
                <div className={`col-sm-6 col-lg-6 mb-5`}>
                    <div style={{ width: '100%' }}><p >
                        Though these narrations now span the last 35 years and consist of the largest collection of unique names of pastors in reformed and Puritan churches since the reformation in audiobook format, they mostly are the best of the last 6 years of a collection of the most solemn and searching, consoling and counseling, casuistical and Christ-centered sermons since the Reformation.
                        </p></div>

                    <div>
                        <Link href="/narrations" style={{ color: 'rgb(0, 119, 204) !important' }}>
                            <a >Listen now <Arrow /></a>
                        </Link></div>
                </div>
            </div>

        </div>
    )
}

export default HomeHero


export const Arrow = () => {
    return (
        <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0 7H25" stroke="rgb(0, 119, 204)" stroke-width="2" class="jsx-4141369375 arrow"></path><path d="M19 1L25 7L19 13" stroke="rgb(0, 119, 204)" stroke-width="2" class="jsx-4141369375 arrow"></path></svg>
    )
}

