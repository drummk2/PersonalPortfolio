import React from "react";
import PersonalImageDescription from "../personal-image-description/PersonalImageDescription";
import "./personal-image-description-container.css";

const PersonalImageDescriptionContainer: React.FC = () => {
    return (
        <div className="personal-image-description-container">
            <PersonalImageDescription />
        </div>
    );
};

export default PersonalImageDescriptionContainer;