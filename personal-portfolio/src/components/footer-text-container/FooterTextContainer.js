import React from "react";
import "./footer-text-container.css";

const FooterTextContainer = ({ footerTextHeader, footerTextContent }) => {
    return (
        <div className="footer-text-container">
            <p className="footer-text-header">{footerTextHeader}</p>
            <p className="footer-text-content">{footerTextContent}</p>
        </div>
    )
}

export default FooterTextContainer;