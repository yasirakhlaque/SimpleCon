import React, { useState } from 'react';
import './Nav.css'; // Create a separate CSS file for Navbar styles

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <nav className="nav-options">
                <div className="logo-menu-container">
                    <h2 className="logo">NAMASTE</h2>
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation Menu">
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
                <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">RESOURCES</a></li>
                    <li><a href="#">FOR YOU</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
                <button className="sign-in">Sign In</button>
            </nav>
        </div>
    );
}
