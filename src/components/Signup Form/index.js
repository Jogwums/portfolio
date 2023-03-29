import React from 'react'
import Signup from './Signup'

import './index.css'

const FormComponent = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default FormComponent
