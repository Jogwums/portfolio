import React from 'react'

import Navigation from '../components/navbar'
import TitleDetails from '../components/Title'
import Card from '../components/Card'
import { Container, Row, Col } from 'react-bootstrap'

// images 
import image1 from '../assets/img/pbiprojects/looker_crude.JPG'

const Looker = ({type, text}) => {

    return (
        <>
        <Navigation />
        <TitleDetails title="Looker Studio Reports" text=""/>
        <Container>
            <Row>
                <Col>
                <div className="card-deck">
                    <Card
                    image={image1}
                    text={"Crude oil production and Export in Nigeria (2006 - 2021)"}
                    text2={"Report created with Looker Studio"}
                    link={"https://lookerstudio.google.com/embed/reporting/b324c994-b757-4dfe-a745-8734f54ec0fa/page/FWcrC"}
                    />
                    
                    </div>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Looker
