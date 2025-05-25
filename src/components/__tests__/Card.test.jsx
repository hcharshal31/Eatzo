import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../Card";
import MOCK_DATA from "../mocks/resCardMock.json";



it("Should have the name of the restaurant", ()=>{
    render(<Card resData={MOCK_DATA}/>);

    const name = screen.getByText("Theobroma");

    expect(name).toBeInTheDocument();
})