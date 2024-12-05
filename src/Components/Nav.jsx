import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/thought">Thought</Link></li>
                    <li><Link to="/core-features">Core Features</Link></li>
                    <li><Link to="/constitution-bodies">Constitution Bodies</Link></li>
                </ul>
                <button className="sign-in">Sign In</button>
            </nav>
        </div>
    );
}
