import { memo } from "react";
import "./footer-text-container.css";

const FooterTextContainer = memo(({ footerTextHeader, footerTextContent }) => {
    return (
        <div className="footer-text-container">
            <p className="footer-text-header">{footerTextHeader}</p>
            <p className="footer-text-content">{footerTextContent}</p>
        </div>
    );
});

export default FooterTextContainer;