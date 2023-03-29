import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from './TextField'
import TextArea from './TextArea'
//emailjs
import { send, init } from 'emailjs-com';
init(process.env.REACT_APP_FORMIK_USER_ID);


const ContactUS = () => {
    const [toSend, setToSend] = useState({
        Name: 'Name',
        email: 'Email',
        message: 'Hello World',
        subject:'Subject',
      });

    const validate = Yup.object({
        Name: Yup.string().required("Name is Required"),
        email: Yup.string()
                    // .email("Email is invalid")
                    .required("Email is Required"),
        subject: Yup.string()
                .required("Subject is Required"),
        message: Yup.string()
                .required("Please leave a Message"),
    })
    const onSubmit = async (e) => {
        e.preventDefault();
        send(
          process.env.REACT_APP_FORMIK_SERVICE_ID,
          process.env.REACT_APP_FORMIK_TEMPLATE_ID,
            await toSend,
            process.env.REACT_APP_FORMIK_USER_ID
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            })
           
      };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
    // const resetForm = (e) => {
    //   window.alert("click close button")
    // }

    return (
        <Formik
        initialValues={{
            ...toSend
        }}
        validationSchema={validate}
        onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                    <Form className="form" noValidate onSubmit={onSubmit}>
                        <div className="form-row">
                        <div className="col-md-6">
                          <TextField onChange={handleChange} value={setToSend.Name} name="Name" type="text" placeholder="Name" />
                        </div>
                        <div className="col-md-6">
                          <TextField onChange={handleChange} value={setToSend.email} name="email" type="email" placeholder="Email" />
                        </div>
                        
                        </div>
                        <TextField onChange={handleChange} value={setToSend.subject} name="subject" type="text" placeholder="Subject" />
                        <TextArea onChange={handleChange} value={setToSend.message} name="message" type="text" placeholder="Message" />
                        <button 
                            className="btn btn-dark mt-3 float-right" 
                            type="submit"
                            // disabled={isSubmitting}
                            onClick={onSubmit}
                            >
                            Send <span><i className="far fa-paper-plane"></i></span>
                            
                        </button>
                        {/* <button onClick={resetForm} className="btn btn-danger mt-3 ml-3" type="reset"
                            >
                            Reset <span><i className="fas fa-recycle"></i></span>
                        </button> */}
                    </Form>
                    
            )}
        </Formik>
    )  
}


export default ContactUS
