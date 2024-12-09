import Countertwo from "./Counter-two";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CounterTwo renders correctly", () => {
  test("render correctly", () => {
    render(<Countertwo count={0} />);
    expect(screen.getByText("Counter two")).toBeInTheDocument();
  });

  test("hadlers are called", () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <Countertwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const inrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });
    fireEvent.click(inrementButton);
    fireEvent.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
