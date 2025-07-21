import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import HeaderTextContainer from "./HeaderTextContainer";
import NavigationBarLocations from "../../enums/navigationbarlocations";

describe("HeaderTextContainer", () => {
    it("renders name and title", () => {
        render(<HeaderTextContainer onChangePage={jest.fn()} />);
        expect(screen.getByText("Kieron Drumm")).toBeInTheDocument();
        expect(screen.getByText("Senior Full-Stack Developer")).toBeInTheDocument();
    });

    it("calls onChangePage with HOME when clicked", () => {
        const onChangePage = jest.fn();
        render(<HeaderTextContainer onChangePage={onChangePage} />);
        fireEvent.click(screen.getByText("Kieron Drumm"));
        expect(onChangePage).toHaveBeenCalledWith(NavigationBarLocations.HOME);
    });
});
