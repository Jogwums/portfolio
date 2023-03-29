import React from 'react'

import Card from '../Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// assets
import EcomImg from "../../assets/img/03.jpg"
import DataImg from "../../assets/img/08.jpg"
import JokesImg from "../../assets/img/09.jpg"
import CryptoImg from "../../assets/img/06.jpg"
import SavingsImg from "../../assets/img/05.jpg"
import FoodImg from "../../assets/img/04.jpg"

const Cards = () => {
    return (
        <>
              <Row className="mt-4">
                <Col md={12}>
                <div className="card-deck">
                  <Card image={EcomImg} 
                        text={"Ecommerce"} 
                        link={"https://joe-e-commerce-project-1462e2.netlify.app/"} />
                
                  <Card image={DataImg} text={"Data"} 
                      // link={"https://www.kaggle.com/jogwums"} />
                      link={"https://public.tableau.com/app/profile/jonathan.ogwumike"} />
                  <Card image={JokesImg} 
                    text={"Jokes"} 
                    link={"https://react-jokes-app-86180c.netlify.app"}/>
                 </div>
                </Col>      
              </Row>
             {/* group 2 */}
             <Row className="mt-4">
                 <Col md={12}>
                  <div className="card-deck">
                    <Card image={FoodImg} 
                      text={"Food"} 
                      link={"https://react-recipe-app-9a0239.netlify.app/"} />
                    <Card image={CryptoImg} 
                      text={"Crypto"} 
                      link={"https://crypto-tracker-app-f80ecc.netlify.app/"} />          
                    <Card image={SavingsImg} 
                      text={"Saving"} 
                      link={"https://budget-calculator-ce321d.netlify.app/"} /> 
                  </div>
                 </Col>
             </Row>
        </>
    )
}

export default Cards
