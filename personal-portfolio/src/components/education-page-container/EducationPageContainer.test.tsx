import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import EducationPageContainer from "./EducationPageContainer";

describe("EducationPageContainer", () => {
    it("renders the main header", () => {
        render(<EducationPageContainer />);
        expect(screen.getByText("Education")).toBeInTheDocument();
    });

    it("renders all education entries", () => {
        render(<EducationPageContainer />);
        expect(screen.getAllByText(/Dublin City University|CCT College Dublin/)).toHaveLength(3);
        expect(screen.getByText("Master's Degree (Honours), Artificial Intelligence")).toBeInTheDocument();
        expect(screen.getByText("Bachelor's Degree (Honours), Computer Applications")).toBeInTheDocument();
        expect(screen.getByText("Level 5 FETAC Certification, Computer Programming")).toBeInTheDocument();
    });

    it("renders divider lines between entries except after the last one", () => {
        render(<EducationPageContainer />);
        const dividers = screen.getAllByRole("separator", { hidden: true });
        expect(dividers.length).toBe(2);
    });
});
