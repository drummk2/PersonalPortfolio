import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import FooterTextContainer from "./FooterTextContainer";

describe("FooterTextContainer", () => {
    it("renders the footer text header and content", () => {
        render(<FooterTextContainer footerTextHeader="Contact" footerTextContent="Email me at test@example.com" />);
        expect(screen.getByText("Contact")).toBeInTheDocument();
        expect(screen.getByText("Email me at test@example.com")).toBeInTheDocument();
    });

    it("renders ReactNode content", () => {
        render(<FooterTextContainer footerTextHeader="Links" footerTextContent={<span>GitHub</span>} />);
        expect(screen.getByText("Links")).toBeInTheDocument();
        expect(screen.getByText("GitHub")).toBeInTheDocument();
    });
});
