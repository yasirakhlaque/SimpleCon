import Nav from "../Nav";
import './Articles.css';
import { useState } from "react";

export default function Articles() {
    const [activeTab, setActiveTab] = useState("overview");

    const showOverview = () => {
        setActiveTab("overview");
    };

    const showStories = () => {
        setActiveTab("stories");
    };

    return (
        <div className="articles">
            <Nav />
            <div className="articles-hero">
                <div className="chakra-image">
                    <img src={`Images/chakra.png`} alt="chakra" />
                </div>
                <div className="articles-main-header">
                    <h1>Learn Articles like never before</h1>
                </div>
            </div>
            <div className="articles-main">
                <div className="article-options">
                    <button
                        className={`overview ${activeTab === "overview" ? "active" : ""}`}
                        onClick={showOverview}
                    >
                        Overview
                    </button>
                    <button
                        className={`stories ${activeTab === "stories" ? "active" : ""}`}
                        onClick={showStories}
                    >
                        Stories
                    </button>
                </div>
                <div className="articles-data">
                    {activeTab === "overview" && (
                        <div>
                            <h1 className="articles-title">
                                <span className="article-number">ARTICLE 1</span>THE UNION AND ITS TERRITORY
                            </h1>
                            <p className="article-content">
                                Article 1 establishes the foundational identity and structure of India, acknowledging both its historical legacy ("Bharat") and its colonial legacy ("India"). It symbolizes unity in diversity and lays the groundwork for a federal system where the central government holds significant authority to ensure national integrity.
                            </p>
                            <p className="article-content">
                                The concept of "Union of States" in Article 1 lays out the foundation for defining Indian territory and jurisdiction. The Constitution includes separate articles that elaborate on India's components, distinguishing between states, union territories, and any other territories that may be acquired. This structure allows India to integrate territories as needed and facilitates governance over regions with unique requirements (like Delhi and Ladakh, designated as Union Territories).
                            </p>
                        </div>
                    )}
                    {activeTab === "stories" && (
                        <div>
                            <h1 className="articles-title">
                                <span className="article-number">ARTICLE 1</span>THE UNION AND ITS TERRITORY
                            </h1>
                            <h2 className="article-story-title">The Story of Our Land - Article 1: The Beginning of Bharat</h2>
                            <p className="article-content">
                                Once upon a time, in a land full of colors, festivals, rivers, and mountains, a question was asked by all the people from north to south, east to west: "What are we?"
                            </p>
                            <p className="article-content">
                                At this time, our land was a patchwork of kingdoms and cultures, each with its own stories, but with a common heartbeat. The leaders of the newly free India sat together in a grand room, full of wise voices and hopeful hearts. They had a big decision to make, one that would define the land forever.
                            </p>
                            <p className="article-content">
                                "Are we simply 'India'? Or is there more to us than just that name?" a leader asked.
                            </p>
                            <p className="article-content">
                                Just then, a wise elder stood up. "Names have power," he said. "Our land is rich with history, and both names carry meaning. 'India' connects us to the world, but 'Bharat' connects us to our roots. Why should we choose just one?"
                            </p>
                            <p className="article-content">
                                The people cheered. It was decided then and there – "India, that is Bharat, shall be a Union of States." This meant that no matter who you were or where you came from in this land, you belonged to one country, one family, and yet you could still hold onto the story of your own place, language, and culture.
                            </p>
                            <p className="article-content">
                                Article 1 was born, and with it, a promise that India would forever be known by both her modern name and her ancient one.
                            </p>
                            <p className="article-content">
                                So, young reader, every time you hear "India" or "Bharat," remember this tale – the tale of a country that chose to honor both her past and her future in her very first breath.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}