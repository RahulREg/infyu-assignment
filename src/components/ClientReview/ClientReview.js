import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

const ClientReview = () => {
    return (
        <div className="client">
            <h1>Our Client Says!</h1>
            <p>Lorem dummy text</p>
            <div className = "car">
                <Carousel variant="dark" >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/Review.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/Review.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/Review.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default ClientReview
