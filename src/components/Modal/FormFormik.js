import React from "react";
// import { useState } from 'react';
//components

//formik
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

//emailjs
import { init } from 'emailjs-com';
init(process.env.REACT_APP_FORMIK_USER_ID);


const initialValues = {
  name: '',
  email:'',
  subject:'',
  message:''
}

const onSubmit = async values => {
  console.log('====================================');
  console.log('Form data', await values);
  console.log('====================================');
  console.log('Form data');
}
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  subject: yup.string().required(),
  message: yup.string().required()
});

function FormExample() {

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              />
              <ErrorMessage name="name" />
          </div>
          {/* Email */}
          <div className="form-control">
            <label htmlFor="name">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              />
              <ErrorMessage name="email" />
          </div>
          {/* Subject */}
          <div className="form-control">
            <label htmlFor="name">Subject</label>
            <Field
              type="text"
              id="subject"
              name="subject"
              />
              <ErrorMessage name="subject" />
          </div>
          {/* Textarea */}
          <div className="form-control">
            <label htmlFor="name">Message</label>
            <Field
              type="textarea"
              id="message"
              name="message"
              />
              <ErrorMessage name="message" />
          </div>
          <button type="reset" className="btn btn-danger">Clear</button>
          
          <button type="submit" className="btn btn-info">Submit</button>
        </Form>
      </Formik>
  )
  };

export default FormExample;