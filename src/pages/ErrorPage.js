import React from 'react'
import { Link } from 'react-router-dom'

//styling
import Button from 'react-bootstrap/Button'

const ErrorPage = () => {
    return (
        <div className="container">
            <div className="row jumbotron">
                <div className="col-md-12 text-center">
                    <h1 className="text-center mt-5">Error</h1>
                    <h3 className="mt-5">The Page You Are Looking For Doesn't Exist</h3>
                    <Button className="mt-5 p-2 rounded-pill" variant="warning" size="lg" block>
                        <Link style={{ textDecoration: 'none', fontWeight:'bold'}} to="/"> 
                            Go Back
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
