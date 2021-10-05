import React from 'react'
import { Button } from 'react-bootstrap'
import {AiFillStar} from 'react-icons/ai'

const Cards = () => {
    return (
        <div className="wrap">
            <div className="card">
                <div className="img-contain">
                    <img src="./images/watermelon.jpg" alt="item-image" />
                </div>
                <div className="info">
                    <div className="card-btn">
                        <Button size="sm">2kg</Button>
                        <Button size="sm">5kg</Button>
                        <Button size="sm">10kg</Button>
                    </div>
                    <h1>Watermelon</h1>
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
            <div className="card">
                <div className="img-contain">
                    <img src="./images/mushroom.jpg" alt="item-image" />
                </div>
                <div className="info">
                    <div className="card-btn">
                        <Button size="sm">2kg</Button>
                        <Button size="sm">5kg</Button>
                        <Button size="sm">10kg</Button>
                    </div>
                    <h1>Mushroom</h1>
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
            <div className="card">
                <div className="img-contain">
                    <img src="./images/rice.jpg" alt="item-image" />
                </div>
                <div className="info">
                    <div className="card-btn">
                        <Button size="sm">2kg</Button>
                        <Button size="sm">5kg</Button>
                        <Button size="sm">10kg</Button>
                    </div>
                    <h1>Rice</h1>
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
            <div className="card">
                <div className="img-contain">
                    <img src="./images/coriander.png" alt="item-image" />
                </div>
                <div className="info">
                    <div className="card-btn">
                        <Button size="sm">2kg</Button>
                        <Button size="sm">5kg</Button>
                        <Button size="sm">10kg</Button>
                    </div>
                    <h1>Coriander</h1>
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
            <div className="card">
                <div className="img-contain">
                    <img src="./images/tomato.jpg" alt="item-image" />
                </div>
                <div className="info">
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
    )
}

export default Cards
