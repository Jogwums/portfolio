import React from 'react'

import Navigation from '../components/navbar'
import TitleDetails from '../components/Title/'
import Card from '../components/Card'

// images 
import image1 from '../assets/img/pyprojects/Nigeria-Food-market.webp'
import image2 from '../assets/img/pbiprojects/pbi2.JPG'
import image3 from '../assets/img/pyprojects/salary.png'
import image4 from '../assets/img/pyprojects/titanic.jpeg'

const Da = ({type, text}) => {

    return (
        <>
        <Navigation />
        <TitleDetails title="Python Apps" text=""/>
        <div className="card-deck">
        <Card image={image1} 
                        text={"Nigerian Food Prices App"} 
                        text2={"You will be redirected to the report"}
                        link={"https://share.streamlit.io/jogwums/streamlit-food-prices/main/nigerianfoods.py"} />

        <Card
            image={image3}
            text={"Developer Salary 2021 (Stack Overflow Survey)"}
            text2={"You will be redirected to the report"}
            link={"https://jogwums-streamlit-salary-prediction-app-z3z08g.streamlitapp.com/"}
        />
        <Card
            image={image2}
            text={"Plane Crashes Worldwide"}
            text2={"You will be redirected to the report"}
            link={"https://app.powerbi.com/view?r=eyJrIjoiMjJmNTcxNmMtOGE1NS00NzhjLTg5MmMtZGEwYzE3NjIxNTA5IiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
        />
        <Card
        image={image4}
        text={"Classical ML Prediction (Titanic)"}
        text2={"Report shows Client records and Inventory"}
         link={"https://jogwums-streamlit-titanic-app-sc1rsj.streamlitapp.com/"}
         />
         
        </div>
        </>
    )
}

export default Da
