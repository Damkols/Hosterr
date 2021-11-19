import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={require('../../assets/Logo.svg').default} alt='Logo' className="Logo" />
                    <p>Hosterr is hiring</p>
                </div>

                <ul className="navlinks">
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Find Domain</a></li>
                    <li><a href="#">Why Hosterr</a></li>
                </ul>

                <div className="signIn">
                    <a href="#">Sign in</a>
                    <button>Join Waitlist</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
