import React from 'react'
import { Button } from 'react-bootstrap'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1> Subscribe to our news letter </h1>
            <div className="search-bar">
                <input className="letter-search" type="text" placeholder="Your email address" />
                <Button>Read More</Button>
            </div>
        </div>
    )
}

export default Newsletter
