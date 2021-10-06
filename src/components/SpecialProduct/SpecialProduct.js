import React from 'react'
import { Button } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'

const SpecialProduct = () => {
    return (
        <div className="special">
            <h1>Our Special Products</h1>
            <p>lorem is a simple dummy text</p>
            <div className="wrapper">
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <div className="card-btn">
                            <Button size="sm">2kg</Button>
                            <Button size="sm">5kg</Button>
                            <Button size="sm">10kg</Button>
                        </div>
                        <h1>Tomato</h1>
                        <div className="stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>$100</p>
                        <Button>Add To Cart</Button>
                    </div>
                </div>
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <div className="card-btn">
                            <Button size="sm">2kg</Button>
                            <Button size="sm">5kg</Button>
                            <Button size="sm">10kg</Button>
                        </div>
                        <h1>Tomato</h1>
                        <div className="stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>$100</p>
                        <Button>Add To Cart</Button>
                    </div>
                </div>
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <div className="card-btn">
                            <Button size="sm">2kg</Button>
                            <Button size="sm">5kg</Button>
                            <Button size="sm">10kg</Button>
                        </div>
                        <h1>Tomato</h1>
                        <div className="stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>$100</p>
                        <Button>Add To Cart</Button>
                    </div>
                </div>
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <div className="card-btn">
                            <Button size="sm">2kg</Button>
                            <Button size="sm">5kg</Button>
                            <Button size="sm">10kg</Button>
                        </div>
                        <h1>Tomato</h1>
                        <div className="stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>$100</p>
                        <Button>Add To Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct
