import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PersonalImage from "./PersonalImage";

jest.mock("../../assets/personal-image.jpg", () => "mock-personal-image.jpg");

describe("PersonalImage", () => {
    it("renders the image with correct alt text and class", () => {
        render(<PersonalImage />);
        const img = screen.getByAltText("An image of myself.");
        expect(img).toBeInTheDocument();
        expect(img).toHaveClass("personal-image");
        expect(img).toHaveAttribute("src", "mock-personal-image.jpg");
    });
});
