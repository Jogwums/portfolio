import React from 'react'

import Navigation from '../components/navbar'
import TitleDetails from '../components/Title/'



const Certs = ({type, text}) => {

    return (
        <>
        <Navigation />
        <TitleDetails title="Certifications" text=""/>
        <div className="container bg-black">
         <div className="row">
            <div className="col-md-6">
            <iframe
                loading='lazy'
                title='Certificate '
                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/58067955"
                width="600"
                height="400"
                frameborder="0"
                allowfullscreen>
            </iframe>
            </div>
            <div className="col-md-6">
            <iframe
                loading='lazy'
                title='Certificate '
                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/54582373"
                width="600"
                height="400"
                frameborder="0"
                allowfullscreen>
            </iframe>
            </div>
         </div>
        </div>
        </>
    )
}

export default Certs




