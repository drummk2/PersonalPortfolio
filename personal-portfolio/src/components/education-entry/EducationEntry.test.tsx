import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import EducationEntry from "./EducationEntry";

describe("EducationEntry", () => {
    const defaultProps = {
        educationEntryId: 1,
        educationEntryLocation: "Test University",
        educationEntryQualification: "BSc Computer Science",
        educationEntryTimeframe: "2015 - 2019",
        educationEntryDescription: "Studied computer science."
    };

    it("renders location, qualification, timeframe, and description", () => {
        render(<EducationEntry {...defaultProps} />);
        expect(screen.getByText("Test University")).toBeInTheDocument();
        expect(screen.getByText("BSc Computer Science")).toBeInTheDocument();
        expect(screen.getByText("2015 - 2019")).toBeInTheDocument();
        expect(screen.getByText("Studied computer science.")).toBeInTheDocument();
    });

    it("applies 'first-education-entry' class when educationEntryId is 0", () => {
        render(<EducationEntry {...defaultProps} educationEntryId={0} />);
        const entryDiv = screen.getByText("Test University").closest("div");
        expect(entryDiv).toHaveClass("first-education-entry");
    });

    it("does not apply 'first-education-entry' class when educationEntryId is not 0", () => {
        render(<EducationEntry {...defaultProps} educationEntryId={2} />);
        const entryDiv = screen.getByText("Test University").closest("div");
        expect(entryDiv).not.toHaveClass("first-education-entry");
    });
});
