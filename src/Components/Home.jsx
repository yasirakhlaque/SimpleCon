import './Home.css';
import Nav from './Nav'; // Adjusted path for Nav
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="hero">
            <Nav />
            <div className="slogan">
                <h1>EMPOWER YOURSELF LEARN YOUR RIGHTS</h1>
                <p>Discover the framework of India's democracy. Understand the structure, powers, and your fundamental rights as a citizen.</p>
                <Link to="/articles"> {/* Use Link for navigation */}
                    <button className="start-learning">START LEARNING</button>
                </Link>
            </div>
        </div>
    );
}
