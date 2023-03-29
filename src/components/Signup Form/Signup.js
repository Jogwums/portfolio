import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextField from './TextField'

const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string()
                    .email("Email is invalid")
                    .required("Email is Required"),
        password: Yup.string()
                .min(6, 'Must be more than 6 Characters')
                .required("Password is Required"),
        confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required("Confirm Password is Required"),
    })
    return (
        <Formik
        initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        validationSchema={validate}
        onSubmit={ values => {
            console.log('====================================');
            console.log(values);
            console.log('====================================');
        }}
        >
            {formik => (
                <>
                    <div>
                    <h1 className="my-4 font-weight-bold display-4">Sign Up</h1>
                    </div>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="ConfirmPassword" name="confirmPassword" 
                                    type="password" />
                        <button className="btn btn-dark mt-3" type="submit">
                            Register
                        </button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">
                            Reset
                        </button>
                    </Form>
                </>
            )}
        </Formik>
    )  
}


export default Signup
