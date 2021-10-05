import React from 'react'
import { FaTwitter, FaFacebook, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

export const Navbar = () => {
    return (
        <div className="navMenu">
            <div className="part">
                <a className="borderright" href="tel:00000111222">(00) 000 111 222</a>
                <a href="mailto:info@somedomain.com">info@somedomain.com</a>
            </div>
            <div className="part">
                <a href="https://www.google.co.in/"><FaTwitter /></a>
                <a href="https://www.google.co.in/"><FaFacebook /></a>
                <a href="https://www.google.co.in/"><FaGooglePlusG /></a>
                <a className="borderright" href="https://www.google.co.in/"><FaInstagram /></a>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="options">
                        USD
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="menu">
                        <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">In</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}


