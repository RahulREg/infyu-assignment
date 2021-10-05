import React from 'react';
import {FaHeart} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown,DropdownButton } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <img src="./images/gmart.PNG" className="image"/>
            <div className="names">
                <p>Home</p>
                <DropdownButton id="dropdown-basic-button" title="Shop">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Best Sellers">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Deal of the day">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Pages">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </DropdownButton>
                <p>Contact Us</p>
            </div>
            <div>
                <FaHeart className="icon"/>
                <AiOutlineShoppingCart className="icon"/>
                <BsPersonFill className="icon"/>
            </div>
        </div>
    )
}

export default Header
