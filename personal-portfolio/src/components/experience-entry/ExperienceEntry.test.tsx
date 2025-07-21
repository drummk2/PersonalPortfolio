import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ExperienceEntry from "./ExperienceEntry";

describe("ExperienceEntry", () => {
    const defaultProps = {
        experienceEntryId: 1,
        experienceEntryCompanyName: "Test Company",
        experienceEntryPosition: "Software Engineer",
        experienceEntryTimeframe: "Jan 2020 - Dec 2021",
        experienceEntryDescription: "Worked on various projects."
    };

    it("renders company name, position, timeframe, and description", () => {
        render(<ExperienceEntry {...defaultProps} />);
        expect(screen.getByText("Test Company")).toBeInTheDocument();
        expect(screen.getByText("Software Engineer")).toBeInTheDocument();
        expect(screen.getByText("Jan 2020 - Dec 2021")).toBeInTheDocument();
        expect(screen.getByText("Worked on various projects.")).toBeInTheDocument();
    });

    it("applies 'first-experience-entry' class when experienceEntryId is 0", () => {
        render(<ExperienceEntry {...defaultProps} experienceEntryId={0} />);
        const entryDiv = screen.getByText("Test Company").closest("div");
        expect(entryDiv).toHaveClass("first-experience-entry");
    });

    it("does not apply 'first-experience-entry' class when experienceEntryId is not 0", () => {
        render(<ExperienceEntry {...defaultProps} experienceEntryId={2} />);
        const entryDiv = screen.getByText("Test Company").closest("div");
        expect(entryDiv).not.toHaveClass("first-experience-entry");
    });
});
