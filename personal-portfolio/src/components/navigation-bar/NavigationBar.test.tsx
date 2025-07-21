import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import NavigationBar from "./NavigationBar";
import NavigationBarLocations from "../../enums/navigationbarlocations";

describe("NavigationBar", () => {
    it("renders Education and Experience buttons", () => {
        render(<NavigationBar onChangePage={jest.fn()} />);
        expect(screen.getByText("Education")).toBeInTheDocument();
        expect(screen.getByText("Experience")).toBeInTheDocument();
    });

    it("calls onChangePage with EDUCATION when Education button is clicked", () => {
        const onChangePage = jest.fn();
        render(<NavigationBar onChangePage={onChangePage} />);
        fireEvent.click(screen.getByText("Education"));
        expect(onChangePage).toHaveBeenCalledWith(NavigationBarLocations.EDUCATION);
    });

    it("calls onChangePage with EXPERIENCE when Experience button is clicked", () => {
        const onChangePage = jest.fn();
        render(<NavigationBar onChangePage={onChangePage} />);
        fireEvent.click(screen.getByText("Experience"));
        expect(onChangePage).toHaveBeenCalledWith(NavigationBarLocations.EXPERIENCE);
    });

    it("renders the divider", () => {
        render(<NavigationBar onChangePage={jest.fn()} />);
        expect(screen.getByText("|")).toBeInTheDocument();
    });
});
