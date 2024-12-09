import { screen, render } from "@testing-library/react";
import Users from "./users";

describe("Users component", () => {
  test("render correctly", () => {
    render(<Users />);
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  test("render a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
