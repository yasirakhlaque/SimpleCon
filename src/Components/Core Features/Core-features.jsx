import "./Core-features.css"
import FeaturesCard from "./features-card"

export default function () {
    return (
        <>
            <div className="core-features">
                <div className="core-features-h1">
                    <h1>What you will find here?</h1>
                </div>
                <div className="card-features">
                    <FeaturesCard icon={"fa-solid fa-magnifying-glass"} text={"Explore key concepts"} about={"Find articles, videos, and more to help you understand the Constitution"} />
                    <FeaturesCard icon={"fa-solid fa-gamepad"} text={"Play and learn"} about={"Test your knowledge with games, quizzes, and other fun activities"} />
                    <FeaturesCard icon={"fa-solid fa-book"} text={"In-depth resource"} about={"Find articles, videos, and more to help you understand the Constitution"} />
                    <FeaturesCard icon={"fa-regular fa-comment"} text={"Get support"} about={"Get a Community for your help related to Indian Constitution"} />
                </div>
            </div>
        </>
    )
}