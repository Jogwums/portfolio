import React from 'react'

import Navigation from '../components/navbar'
import Footer from '../components/Footer'

// styling
// import Card from '../components/CardNoImage'
import ImageCard from '../components/Card'

// components
import { Button, Container, Row, Col } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <>
        <Navigation />
            <Container fluid className='m-0 p-0'>
            <Row className='p-0 mb-5'>
              <Col sm={12} md={6} className='m-0 p-0'>
                <div className="">
                      <div className='portfolio-card-text-da'>
                        {/* <h2>Data Portfolio</h2> */}
                        <ImageCard 
                        style={{width:"50%"}}
                        image={"https://picsum.photos/200.webp?grayscale?random=2"} text={"Data Portfolio"} 
                        link={"/data"}
                         />
                        <Button href='/data'>View</Button>
                   </div>
                </div>
              </Col>
                {/* design section */}
              <Col sm={12} md={6} className='m-0 p-0'>
                <div className="">
                      <div className='portfolio-card-text-ds '>
                        {/* <h2>Design Portfolio</h2> */}
                        <div className=''>
                          <ImageCard 
                          image={"https://picsum.photos/200.webp?grayscale?random=3"} text={"Design Portfolio"} 
                          link={"/design"}
                           />
                      </div>
                          <Button href='/design'>View</Button>
                    </div>
                </div>
              </Col>
              </Row>
            </Container>
        <Footer/>
    </>

  )
}

export default Portfolio