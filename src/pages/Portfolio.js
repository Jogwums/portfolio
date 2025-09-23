import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/Footer';
import ImageCard from '../components/Card';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import customButtonStyle from '../components/Button';

import dash01 from "../assets/img/pbiprojects/dash-01.png"
import dash02 from "../assets/img/pbiprojects/design-01.png"

const Portfolio = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <Container fluid className='m-0 p-0'>
                <Row className='p-0 mb-5'>
                    <Col sm={12} md={6} className='m-0 p-0'>
                        <div className="portfolio-card-text-da">
                            <ImageCard
                                style={{ width: "80%" }}
                                image={dash01}
                                text={"Data Portfolio"}
                                text2={"View projects created using tools like power BI, python and Tableau"}
                                link={"/data"}
                            />
                            <Button className='btn btn-view' href='/data'>View</Button>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='m-0 p-0'>
                        <div className="portfolio-card-text-ds">
                            <ImageCard
                                image={dash02}
                                text={"Design Portfolio"}
                                text2={"Reactjs projects using libraries and APIs"}
                                link={"/design"}
                            />
                            <Button className='btn btn-view' href='/design'>View</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Portfolio;