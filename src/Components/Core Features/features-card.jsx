import "./features-card.css"

export default function FeaturesCard({ icon, text, about }) {
    return (
        <>
            <div className="feature-card">
                <i className={`${icon} feature-icon`}></i>
                <h3 className="feature-card-heading">{text}</h3>
                <p className="feature-card-para">{about}</p>
            </div>
        </>
    )
}