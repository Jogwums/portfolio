import React from 'react'

// components

import Nav from 'react-bootstrap/Nav';
import ContactModal from '../Modal/ContactModal'

const HeroDetails = () => {
  return (
    <>
    <div className='hero-details'>
      <h1>I am Jonathan Ogwumike</h1>
      <p>A Data Analyst & Web Developer building interactive dashboards,
      clean interfaces, and impactful solutions.</p>
      <div className='hero-buttons'>
        <button className="cta-button " href='/portfolio' size='lg'>
          <Nav.Link rel="noreferrer" href="/portfolio">
            Portfolio
          </Nav.Link>
        </button>
        
        <button className="cta-button " href='/' size='lg'>
          <Nav.Link rel="noreferrer" href="#">
            <ContactModal className="hero-contact-btn" text={"Contact Me"}/>
          </Nav.Link>
        </button>
      </div>
    </div>
    </>
  )
}

export default HeroDetails