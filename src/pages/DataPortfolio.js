import React from 'react'
import Card from '../components/Card'

import HeaderDetails from '../components/Header/'
// styling
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// assets
// images
// 'https://picsum.photos/200.webp?grayscale?random=1'
// "http://placeimg.com/200/200/tech"
import Navigation from '../components/navbar'



const DataPortfolio = ({type, text}) => {
    return (
        <>
            <Navigation />
            <HeaderDetails type={"Data Projects"} text={text} />
            <Container>
                <Row>
                    <Col lg={12}>
                      <div className="card-deck mt-5">
                        <Card 
                                widthvariant={"16.5rem"}
                                image={"https://picsum.photos/200.webp?grayscale?random=6"} text={"Tableau"} 
                                link={"https://public.tableau.com/app/profile/jonathan.ogwumike"} />
                        <Card widthvariant={"16.5rem"} image={'https://picsum.photos/200.webp?grayscale?random=2'} 
                                text={"Kaggle"} 
                                link={"https://www.kaggle.com/jogwums"}/>
                                
                        <Card widthvariant={"16.5rem"} image={'https://picsum.photos/200.webp?grayscale?random=1'} 
                                text={"PowerBI"} 
                                link={"/pbi"}/>
                                
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <div className="card-deck mt-5">
                        <Card widthvariant={"16.5rem"} image={'https://picsum.photos/200.webp?grayscale?random=3'} 
                                text={"Python"} 
                                link={"/python"}/>
                        <Card widthvariant={"16.5rem"} image={'https://picsum.photos/200.webp?grayscale?random=4'} 
                                text={"Github"} 
                                link={"https://github.com/Jogwums"}/>
                        <Card widthvariant={"16.5rem"} image={'https://picsum.photos/200.webp?grayscale?random=5'} 
                                text={"Looker Studio"} 
                                link={"/looker"}/>
                      </div>
                    </Col>
                </Row>
                </Container>
        </>
    )
}

export default DataPortfolio
