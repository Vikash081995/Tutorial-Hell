import {render,screen} from "@testing-library/react";
import Greet from "./greet";
test("reders the greet correctly",()=>{
    render(<Greet/>);
    const textElement = screen.getByText(/greet/i);
    expect(textElement).toBeInTheDocument();
})