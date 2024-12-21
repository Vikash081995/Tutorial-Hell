import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Apllication", () => {
  test("render correctly", () => {
    render(<Application />);

    //getByRole
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    //getByAltText
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    //getByTitle
    const closeButton = screen.getByTitle("close");
    expect(closeButton).toBeInTheDocument();

    //getByText
    const paragraphHeading = screen.getByText("All fields are mandatory");
    expect(paragraphHeading).toBeInTheDocument();

    //getByTestId
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    //getByLabelText
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    //getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeInTheDocument();

    const BioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(BioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const sumbitButton = screen.getByRole("button");
    expect(sumbitButton).toBeInTheDocument();
  });
});
