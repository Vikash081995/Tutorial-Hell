import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet component", () => {
  test("reders the greet correctly", () => {
    render(<Greet name="vj" />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Greet component renders with a name", () => {
    render(<Greet name="vj" />);
    expect(screen.getByText("Hello vj")).toBeInTheDocument();
  });
});

