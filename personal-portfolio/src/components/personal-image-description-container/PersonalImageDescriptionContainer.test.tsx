import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PersonalImageDescriptionContainer from "./PersonalImageDescriptionContainer";

// Mock the child component to isolate the test
jest.mock("../personal-image-description/PersonalImageDescription", () => () => (
    <div data-testid="personal-image-description" />
));

describe("PersonalImageDescriptionContainer", () => {
    it("renders PersonalImageDescription", () => {
        render(<PersonalImageDescriptionContainer />);
        expect(screen.getByTestId("personal-image-description")).toBeInTheDocument();
    });
});
