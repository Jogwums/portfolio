import React from 'react'
// components
import Navigation from '../components/navbar'

import FooterDetails from '../components/Footer'

import HeroDetails from '../components/Hero Details'
import About from './About'

import mainimage from '../assets/img/hero/jt2.jpg'


const Home = ({navi, text}) => {
    return (
        <>
            <Navigation />
                <div className="hero-content">
                    <HeroDetails />
                    <div className="hero-image">
                        <img className='imgcrop' src={mainimage} alt="Jonathan working" />
                    </div>
                </div>
            <About />
            <FooterDetails />
        </>
    )
}

export default Home
