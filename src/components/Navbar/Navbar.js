import React from 'react'
import { FaTwitter, FaFacebook, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <div className="navMenu">
            <div className="part">
                <a className="borderright" href="tel:00000111222">(00) 000 111 222</a>
                <a href="mailto:info@somedomain.com">info@somedomain.com</a>
            </div>
            <div className="part">
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaGooglePlusG /></a>
                <a className="borderright" href="#"><FaInstagram /></a>
                <div>USD</div>
            </div>
        </div>
    )
}


