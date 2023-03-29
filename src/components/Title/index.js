import React from 'react';
import Header from 'react-bootstrap/ModalHeader';
import Container from 'react-bootstrap/Container'


const TitleDetails = ({title, text}) => {
    return (
    <div className="">
      <Header className="masthead">
            <div className="masthead-content md-ml-5 md-pl-5">
                <Container className="container-fluid md-px-5">
                    <h1 className="masthead-heading mb-0 text-white fst-italic">{title}</h1>
                    <br />
                    <h6 className="masthead-subheading mb-0">{text}</h6>
                </Container>
            </div>
        </Header>
    </div>
  )
}

export default TitleDetails;
