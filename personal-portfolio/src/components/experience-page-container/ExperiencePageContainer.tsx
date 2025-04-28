import React from "react";
import "./experience-page-container.css";
import stayTunedImage from "../../assets/stay-tuned.jpg";

const ExperiencePageContainer: React.FC = () => {
    return (
        <div className="experience-page-container">
            <img
                alt="Stay tuned"
                src={stayTunedImage} />
        </div>
    );
};

export default ExperiencePageContainer;