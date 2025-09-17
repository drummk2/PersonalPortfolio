import React from "react";
import "./personal-image-description.css";

const PersonalImageDescription: React.FC = () => {
    return (
        <>
            <h2 className="personal-image-description-header">Kieron Drumm</h2>
            <p className="personal-image-description-subheader">A Bit About Me</p>
            <p className="personal-image-description-bio">
                I'm a full-stack developer at <a href="https://www.insight-centre.org/" target="_blank" rel="noopener noreferrer">Insight Research Ireland Centre for Data Analytics</a>,
                specializing in building robust web and desktop applications with .NET and dynamic, user-focused web
                interfaces using React. I have deep expertise across the Microsoft ecosystem, particularly in developing
                tailored solutions with Dynamics 365 and custom Office add-ins. Beyond my core role, I'm passionate
                about artificial intelligence, with previous research exploring its applications in the field of genealogy.
            </p>
        </>
    );
};

export default PersonalImageDescription;