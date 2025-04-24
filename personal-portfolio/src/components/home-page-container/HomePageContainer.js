import PersonalImage from "../personal-image/PersonalImage";
import PersonalImageDescriptionContainer from "../personal-image-description-container/PersonalImageDescriptionContainer";
import React from "react";
import "./home-page-container.css";

const HomePageContainer = () => {
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