import React from 'react'

// components
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import ContactModal from '../Modal/ContactModal'

const HeroDetails = () => {
  return (
    <>
      <h1>I am Jonathan Ogwumike</h1>
      <p>And I'm a Data Analyst</p>
      <Button href='/portfolio' size='lg' variant='outline-light'>
        Portfolio
      </Button>
      <span className='px-5'></span>
      <Button href='/' size='sm' variant="outline-dark">
        <Nav.Link rel="noreferrer" href="#"><ContactModal text={"Contact Me"}/>
        </Nav.Link>
        
      </Button>
    </>
  )
}

export default HeroDetails