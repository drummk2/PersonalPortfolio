import React from "react";
import "./projects-page-container.css";
import stayTunedImage from "../../assets/stay-tuned.jpg";

const ProjectsPageContainer: React.FC = () => {
    return (
        <div className="projects-page-container">
            <img
                alt="Stay tuned."
                src={stayTunedImage} />
        </div>
    );
};

export default ProjectsPageContainer;