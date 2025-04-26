import React from "react";
import "./personal-image-description.css"

const PersonalImageDescription = () => {
    return (
        <>
            <h2 className="personal-image-description-header">Kieron Drumm</h2>
            <p className="personal-image-description-subheader">A Bit About Me</p>
            <p className="personal-image-description-bio">
                I'm a full-stack software engineer at <a href="https://www.generait-doc.com">Generait AI Solutions</a>,
                with extensive experience in developing AI-driven web and desktop applications using .NET, React, and a
                wide range of Microsoft technologies — including Microsoft Dynamics 365 and the Power Platform. Outside of my
                primary role, I'm passionate about artificial intelligence, and my previous research has explored its potential
                applications in the field of genealogy.
            </p>
        </>
    );
};

export default PersonalImageDescription;