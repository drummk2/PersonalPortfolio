import React from "react";
import "./navigation-bar.css"

const NavigationBarbar = ({ onChangePage }) => {
    return (
        <nav className="navigation-bar-container">
            <button className="navigation-bar-btn" onClick={() => onChangePage("about")}>About Me</button>
            <span className="navigation-bar-divider">|</span>
            <button className="navigation-bar-btn" onClick={() => onChangePage("education")}>Education</button>
            <span className="navigation-bar-divider">|</span>
            <button className="navigation-bar-btn" onClick={() => onChangePage("experience")}>Experience</button>
            <span className="navigation-bar-divider">|</span>
            <button className="navigation-bar-btn" onClick={() => onChangePage("projects")}>Projects</button>
        </nav>
    );
}

export default NavigationBarbar;