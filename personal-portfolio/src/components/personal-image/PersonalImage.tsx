import React from "react";
import "./personal-image.css";
import personalImage from "../../assets/personal-image.jpg";

const PersonalImage: React.FC = () => {
    return (
        // eslint-disable-next-line
        <img
            alt="An image of myself."
            className="personal-image"
            src={personalImage} />
    );
};

export default PersonalImage;