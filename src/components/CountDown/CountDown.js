import React from 'react'
import Timer from '../Timer/Timer'
import {Button} from 'react-bootstrap'

const CountDown = () => {
    return (
        <div className="count">
            <div className="count-text">
                <h1>Special Discount</h1>
                <h1>For all Grocery products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                <Timer />
                <Button>Buy Now</Button>
            </div>
            <img src="./images/shop.png" alt="shopping" />
        </div>
    )
}

export default CountDown
