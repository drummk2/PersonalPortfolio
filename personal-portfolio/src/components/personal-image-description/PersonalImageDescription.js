import React from "react";
import "./personal-image-description.css"

const PersonalImageDescription = () => {
    return (
        <>
            <h2 className="personal-image-description-header">Kieron Drumm</h2>
            <p className="personal-image-description-subheader">A Bit About Me</p>
            <p className="personal-image-description-bio">
                I'm a full-stack software engineer at <a href="https://www.generait-doc.com">Generait AI Solutions</a>,
                with extensive experience developing .NET, React, and AI-driven web and desktop applications. Outside of my primary role,
                I'm also passionate about AI, with my previous research having focused on its potential applications in the field of genealogy.</p>
        </>
    );
};

export default PersonalImageDescription;