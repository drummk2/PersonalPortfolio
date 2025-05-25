import React from "react";
import NavigationBarLocations from "../../enums/navigationbarlocations";
import "./header-text-container.css";

interface HeaderTextContainerProps {
    onChangePage: (page: NavigationBarLocations) => void;
}

const HeaderTextContainer: React.FC<HeaderTextContainerProps> = ({ onChangePage }) => {
    return (
        <div className="header-text-container" onClick={() => onChangePage(NavigationBarLocations.HOME)} style={{ cursor: "pointer" }}>
            <div className="header-logo"></div>
            <h1 className="header-text-name">Kieron Drumm</h1>
            <p className="header-text-title">Senior Full-Stack Developer</p>
        </div>
    );
};

export default HeaderTextContainer;