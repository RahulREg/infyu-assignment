import React from 'react'
import { Button } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'

const News = () => {
    return (
        <div className="news">
            <h1>Our Latest News</h1>
            <p>Lorem dummy text nothing important</p>
            <div className="news-cards">
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <h1>News Heading</h1>
                        <p>$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        <Button>Read More</Button>
                    </div>
                </div>
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <h1>News Heading</h1>
                        <p>$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        <Button>Read More</Button>
                    </div>
                </div>
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <h1>News Heading</h1>
                        <p>$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        <Button>Read More</Button>
                    </div>
                </div>
                <div className="card2">
                    <div className="contain2">
                        <img src="./images/f-meat.jpg" alt="product" />
                    </div>
                    <div className="card-info">
                        <h1>News Heading</h1>
                        <p>$Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        <Button>Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
