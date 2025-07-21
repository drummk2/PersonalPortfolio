import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import HomePageContainer from "./HomePageContainer";

jest.mock("../personal-image/PersonalImage", () => () => <div data-testid="personal-image" />);
jest.mock("../personal-image-description-container/PersonalImageDescriptionContainer", () => () => <div data-testid="personal-image-description" />);

describe("HomePageContainer", () => {
    it("renders PersonalImage and PersonalImageDescriptionContainer", () => {
        const { getByTestId } = render(<HomePageContainer />);
        expect(getByTestId("personal-image")).toBeInTheDocument();
        expect(getByTestId("personal-image-description")).toBeInTheDocument();
    });
});
