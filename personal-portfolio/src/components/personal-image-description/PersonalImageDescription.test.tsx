import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PersonalImageDescription from "./PersonalImageDescription";

describe("PersonalImageDescription", () => {
    it("renders the header, subheader, and bio", () => {
        render(<PersonalImageDescription />);
        expect(screen.getByText("Kieron Drumm")).toBeInTheDocument();
        expect(screen.getByText("A Bit About Me")).toBeInTheDocument();
        expect(screen.getByText(/I'm a senior full-stack developer at/)).toBeInTheDocument();
    });

    it("renders the company link with correct href", () => {
        render(<PersonalImageDescription />);
        const link = screen.getByRole("link", { name: "New Payment Innovation Limited" });
        expect(link).toHaveAttribute("href", "https://npi.ie/");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
});
