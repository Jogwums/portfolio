import React from 'react'
// components
import Navigation from '../components/navbar'

import FooterDetails from '../components/Footer'

import HeroDetails from '../components/Hero Details'
import Hero from '../components/Hero'
import About from './About'


const Home = ({navi, text}) => {
    return (
        <>
            <Navigation />
            <Hero>
                <div className="heromsg">
                <HeroDetails />
                </div>
            </Hero>
            <About />
            <FooterDetails />
        </>
    )
}

export default Home
