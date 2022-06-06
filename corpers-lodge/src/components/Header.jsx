import React from 'react';
import './Style/styles.css'
    
const Header = () => {
    return ( 
        <header>
            <nav className='navbar container'>
                <div className='logotext'>Corpers <span>Lodge</span></div>
                <ul className='links'>
                    <li className='home'>Home</li>
                    <li className="about">Listing</li>
                    <li className='about'>About us</li>
                    <li className="contact">Contact Us</li>
                    <li className="contact">Login</li>
                    <button><li className="contact">Sign Up</li></button>
                </ul> 
            </nav>
        </header>
     );
}
 
export default Header;