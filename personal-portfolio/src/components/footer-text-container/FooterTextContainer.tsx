import React, { memo } from "react";
import "./footer-text-container.css";

interface FooterTextContainerProps {
    footerTextHeader: string;
    footerTextContent: React.ReactNode;
}

const FooterTextContainer = memo(({ footerTextHeader, footerTextContent }: FooterTextContainerProps) => {
    return (
        <div className="footer-text-container">
            <p className="footer-text-header">{footerTextHeader}</p>
            <p className="footer-text-content">{footerTextContent}</p>
        </div>
    );
});

export default FooterTextContainer;