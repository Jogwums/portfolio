import React from 'react'

import Navigation from '../components/navbar'
import TitleDetails from '../components/Title/'
import Card from '../components/Card'

// images 
import image1 from '../assets/img/pbiprojects/pbi1.JPG'
import image2 from '../assets/img/pbiprojects/pbi2.JPG'
import image3 from '../assets/img/pbiprojects/pbi3.JPG'
import image4 from '../assets/img/pbiprojects/pbi4.JPG'
import image6 from '../assets/img/pbiprojects/pbi6.JPG'
import image7 from '../assets/img/pbiprojects/pbi7.JPG'

const Da = ({type, text}) => {

    return (
        <>
        <Navigation />
        <TitleDetails title="Power BI Reports" text=""/>
        <div className='container'>
            <div className='row'>
                <div className="col card-deck">
        <Card image={image1} 
                        text={"Report on World Covid-19 Outbreak"} 
                        text2={"You will be redirected to the report"}
                        target="_blank"
                        link={"https://app.powerbi.com/view?r=eyJrIjoiMWNkYzJkOGYtNDlhZS00NTVjLWEyNTgtYzNiMmUyZDEzNGE5IiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"} />

        <Card
            image={image3}
            text={"World Population Report"}
            text2={"You will be redirected to the report"}
            link={"https://app.powerbi.com/view?r=eyJrIjoiMTU4NGU1MjQtMmUxMy00NzNhLTgxMGYtMzVhZmVhNWZmMzRlIiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
        />
        <Card
            image={image2}
            text={"Plane Crashes Worldwide: 5 Year Incident Report "}
            text2={"You will be redirected to the report"}
            link={"https://app.powerbi.com/view?r=eyJrIjoiZmRlOTZkNTItN2MzNS00MWVlLWE0NzUtYWRmNjg5ZWQ3YjA3IiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
        />
         </div>
        </div>
        </div>
        

         <div className='container'>
            <div className='row'>
                 <div className="col card-deck">
                    <Card
        image={image4}
        text={"Car Sales Analysis"}
        text2={"Report shows Client records and Inventory"}
         link={"https://app.powerbi.com/view?r=eyJrIjoiZmRiMmYxNjQtMDA4Mi00OTA4LTkwNTYtODc1NTg1NWYzMjc1IiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
         />
         <Card
        image={image6}
        text={"Nigerian Presidential Elections 2023 Analysis"}
        text2={"Dashboard shows Election results and Regional Analysis"}
         link={"https://app.powerbi.com/view?r=eyJrIjoiZDNjM2UxNTktMTdiYy00OTU4LTkyYjQtMWI4NGVjNzBjMDNjIiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
         />
         <Card
        image={image7}
        text={"Covid 19 Dashboard 2023"}
        text2={"Dashboard shows Global covid Analysis"}
         link={"https://app.powerbi.com/view?r=eyJrIjoiZDE0YzU5NmMtNDdlZC00NmYyLThkOWEtNTE1NGYyMDhmNDZjIiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
         />
        </div>
            </div>

        </div>

        
        </>
    )
}

export default Da
