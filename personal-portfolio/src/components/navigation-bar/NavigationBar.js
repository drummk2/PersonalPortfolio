import NavigationBarLocations from "../../enums/navigationbarlocations.js";
import "./navigation-bar.css"

const NavigationBarbar = ({ onChangePage }) => {
    return (
        <nav className="navigation-bar-container">
            <button className="navigation-bar-btn" onClick={() => onChangePage(NavigationBarLocations.ABOUT)}>About Me</button>
            <span className="navigation-bar-divider">|</span>
            <button className="navigation-bar-btn" onClick={() => onChangePage(NavigationBarLocations.EDUCATION)}>Education</button>
            <span className="navigation-bar-divider">|</span>
            <button className="navigation-bar-btn" onClick={() => onChangePage(NavigationBarLocations.EXPERIENCE)}>Experience</button>
            <span className="navigation-bar-divider">|</span>
            <button className="navigation-bar-btn" onClick={() => onChangePage(NavigationBarLocations.PROJECTS)}>Projects</button>
        </nav>
    );
}

export default NavigationBarbar;