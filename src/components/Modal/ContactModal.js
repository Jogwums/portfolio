import React, { useState } from 'react'

import Form from '../Contact Form/index'
// import Form from '../Signup Form/index'

// import Form from './FormFormik'

import Modal from 'react-bootstrap/Modal'
import NavLink from 'react-bootstrap/Nav';


const ContactModal = ({text}) => {

    const [lgShow, setLgShow] = useState(false);
    return (
        <>  
            <div>
            <NavLink variant="light" onClick={() => setLgShow(true)}>
                {text}
            </NavLink> 
            </div>
        <Modal
            size="md"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="Contact Form"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Contact Form
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form />
            </Modal.Body>
      </Modal>
        </>
    )
}

export default ContactModal
