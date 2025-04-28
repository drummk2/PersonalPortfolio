import React from "react";
import PersonalImage from "../personal-image/PersonalImage";
import PersonalImageDescriptionContainer from "../personal-image-description-container/PersonalImageDescriptionContainer";
import "./home-page-container.css";

const HomePageContainer: React.FC = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-subcontainer">
                <PersonalImage />
                <PersonalImageDescriptionContainer />
            </div>
        </div>
    );
};

export default HomePageContainer;