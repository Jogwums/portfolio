import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ContactModal from '../Modal/ContactModal'
const Navigation = () => {
  // const [darkmode, setDarkmode] = React.useState(false)
    return (
    <>
    <Navbar className="bar sticky-top" bg="transparent" variant="dark" expand="md">
        <Nav className=""> 
          <Navbar.Brand href="/" rel="noreferrer">
            Jt 
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="main"/>
        <Navbar.Collapse id="main">
          <Nav className="mr-auto">
            <Nav.Link rel="noreferrer" href="/portfolio" >Portfolio</Nav.Link>
            <Nav.Link rel="noreferrer" target="_blank"href="https://github.com/Jogwums">Github</Nav.Link>
          </Nav>
         <Nav className="ml-auto">
            <Nav.Link rel="noreferrer" href="#"><ContactModal text={"Contact"}/></Nav.Link>
            <Nav.Link className="text-primary" target="_blank" rel="noreferrer"
                      href="https://www.linkedin.com/in/jonathan-ogwumike012016/">
                        LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  </>
  )
}

export default Navigation;
