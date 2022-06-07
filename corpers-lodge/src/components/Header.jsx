import React, { useState } from 'react';
import './Style/styles.css'
import { FaBars, FaTimes } from "react-icons/fa"
    
const Header = () => {

    const [isMobile, setMobile] = useState(true);

    const handleMobile = () => {
        setMobile((prev) => !prev);
    }

    return ( 
        <header>
            <nav className='navbar container'>
                <div className='logotext'>Corpers <span>Lodge</span></div>
                <ul className={`${isMobile ? 'links' : 'ul'}`}>
                    <li className='home'>Home</li>
                    <li className="about">Listing</li>
                    <li className='about'>About us</li>
                    <li className="contact">Contact Us</li>
                    <li className="contact">Login</li>
                    <button><li className="contact">Sign Up</li></button>
                </ul> 
                <span className='switcher' onClick={handleMobile}>
                {isMobile ? <FaBars /> : <FaTimes />}
            </span>
            </nav>
        </header>
     );
}
 
export default Header;