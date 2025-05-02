import React from "react";
import NavigationBarLocations from "../../enums/navigationbarlocations";
import "./navigation-bar.css";

interface NavigationBarProps {
    onChangePage: (page: NavigationBarLocations) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onChangePage }) => {
    return (
        <nav className="navigation-bar-container">
            <button className="navigation-bar-btn" onClick={() => onChangePage(NavigationBarLocations.EDUCATION)}>Education</button>
            <span className="navigation-bar-divider">|</span>
            <button className="navigation-bar-btn" onClick={() => onChangePage(NavigationBarLocations.EXPERIENCE)}>Experience</button>
        </nav>
    );
};

export default NavigationBar;