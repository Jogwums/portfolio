import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


const HeaderDetails = ({main, type, text}) => {
    return (
    <Jumbotron fluid className='py-4 my-0 mx-auto'>
      <Container >
        <h1>{type}</h1>
        <p></p>
      </Container>
    </Jumbotron> 
  )
}

export default HeaderDetails;
