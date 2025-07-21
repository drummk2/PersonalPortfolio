import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ExperiencePageContainer from "./ExperiencePageContainer";

describe("ExperiencePageContainer", () => {
    it("renders the main header", () => {
        render(<ExperiencePageContainer />);
        expect(screen.getByText("Experience")).toBeInTheDocument();
    });

    it("renders all experience entries", () => {
        render(<ExperiencePageContainer />);
        expect(screen.getByText("New Payment Innovation Limited")).toBeInTheDocument();
        expect(screen.getByText("Generait")).toBeInTheDocument();
        expect(screen.getAllByText("Irish Life").length).toBeGreaterThan(0);
        expect(screen.getByText("Dublin City University")).toBeInTheDocument();
    });

    it("renders divider lines between entries except after the last one", () => {
        render(<ExperiencePageContainer />);
        const dividers = screen.getAllByRole("separator");
        expect(dividers.length).toBe(7);
    });
});
