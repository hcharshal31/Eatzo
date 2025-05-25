import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("should have heading", ()=>{
    render(<Contact />)
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});