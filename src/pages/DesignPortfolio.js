import React from 'react'

// components
import Card from '../components/Card'
import HeaderDetails from '../components/Header'

// styling
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// images
// "http://placeimg.com/240/240/tech"
//https://picsum.photos/seed/picsum/240/240/
import Navigation from '../components/navbar'

const DesignPortfolio = ({text, }) => {
  return (
    <>
            <Navigation />
            <HeaderDetails type={"Design Projects"} text={text} />
            <Container>
                <Row>
                    <Col>
                      <div className="card-deck mt-5">
                        <Card image={"https://picsum.photos/200.webp?grayscale?random=3"} text={"Eccomerce"} 
                                link={"https://joe-e-commerce-project-1462e2.netlify.app/"} />
                        <Card image={"https://picsum.photos/200.webp?grayscale?random=7"} 
                                text={"Crypto"} 
                                link={"https://crypto-tracker-app-f80ecc.netlify.app/"}/>
                        <Card image={"https://picsum.photos/200.webp?grayscale?random=8"} 
                                text={"Budget"} 
                                link={"https://budget-calculator-ce321d.netlify.app/"}/>
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <div className="card-deck mt-5">
                        <Card image={"https://picsum.photos/200.webp?grayscale?random=9"} text={"Jokes"} 
                                link={"https://react-jokes-app-86180c.netlify.app/"} />
                        <Card image={"https://picsum.photos/seed/picsum/240/240/"} 
                                text={"Recipes"} 
                                link={"https://react-recipe-app-9a0239.netlify.app/"}/>
                        <Card image={"https://picsum.photos/seed/picsum/240/240/?grayscale"} 
                                text={"APIs"} 
                                link={"/"}/>
                      </div>
                    </Col>
                </Row>
                </Container>
                <Container>
                        <Row>
                                {/* <iframe title='app2' src='https://crypto-tracker-app-f80ecc.netlify.app/' sandbox=''></iframe> */}
                        </Row>
                </Container>
    </>
  )
}

export default DesignPortfolio