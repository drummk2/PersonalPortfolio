import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import NavigationBarLocations from "./enums/navigationbarlocations";

jest.mock("./components/education-page-container/EducationPageContainer", () => () => <div data-testid="education-page" />);
jest.mock("./components/experience-page-container/ExperiencePageContainer", () => () => <div data-testid="experience-page" />);
jest.mock("./components/home-page-container/HomePageContainer", () => () => <div data-testid="home-page" />);
jest.mock("./components/footer-text-container/FooterTextContainer", () => ({ footerTextHeader, footerTextContent }: any) => (
    <div data-testid={`footer-${footerTextHeader.toLowerCase()}`}>{footerTextContent}</div>
));

jest.mock("./components/header-text-container/HeaderTextContainer", () => ({ onChangePage }: any) => (
    <button data-testid="header-home" onClick={() => onChangePage("HOME")}>Home</button>
));

jest.mock("./components/navigation-bar/NavigationBar", () => ({ onChangePage }: any) => (
    <div>
        <button data-testid="nav-education" onClick={() => onChangePage("EDUCATION")}>Education</button>
        <button data-testid="nav-experience" onClick={() => onChangePage("EXPERIENCE")}>Experience</button>
    </div>
));

describe("App", () => {
    it("renders the home page by default", () => {
        render(<App />);
        expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });

    it("navigates to Education page when Education button is clicked", () => {
        render(<App />);
        fireEvent.click(screen.getByTestId("nav-education"));
        expect(screen.getByTestId("education-page")).toBeInTheDocument();
    });

    it("navigates to Experience page when Experience button is clicked", () => {
        render(<App />);
        fireEvent.click(screen.getByTestId("nav-experience"));
        expect(screen.getByTestId("experience-page")).toBeInTheDocument();
    });

    it("renders footer links", () => {
        render(<App />);
        expect(screen.getByTestId("footer-github")).toBeInTheDocument();
        expect(screen.getByTestId("footer-linkedin")).toBeInTheDocument();
    });
});
