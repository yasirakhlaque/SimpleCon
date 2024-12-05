import React, { useState } from 'react';
import './Home.css';
import Nav from './Nav';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="hero">
           <Nav/>
            <div className="slogan">
                <h1>EMPOWER YOURSELF LEARN YOUR RIGHTS</h1>
                <p>Discover the framework of India's democracy. Understand the structure, powers, and your fundamental rights as a citizen.</p>
                <button className="start-learning">START LEARNING</button>
            </div>
        </div>
    );
}