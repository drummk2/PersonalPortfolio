import React from "react";
import "./header-text-container.css";

const HeaderTextContainer: React.FC = () => {
    return (
        <>
            <div className="header-logo"></div>
            <h1 className="header-text-name">Kieron Drumm</h1>
            <p className="header-text-title">Full-Stack Software Engineer</p>
        </>
    );
};

export default HeaderTextContainer;