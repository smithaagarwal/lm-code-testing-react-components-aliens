import { render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./species_name";

describe("Species Name component", () => {
  it("Given the required props, when the component is rendered, then the label should be present", () => {
    //Arrange
    const sampleSpeciesNameProps: SpeciesNameProps = {
      speciesName: "",
      onChangeSpeciesName: () => {},
    };
    //Act
    render(<SpeciesName {...sampleSpeciesNameProps} />);
    const someLabelText = screen.getByText("Species Name");
    expect(someLabelText).toBeInTheDocument();
  });
  it("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arrange
    const sampleSpeciesNameProps: SpeciesNameProps = {
      speciesName: "human",
      onChangeSpeciesName: () => {},
    };
    //Act
    render(<SpeciesName {...sampleSpeciesNameProps} />);
    const someInputText = screen.getByDisplayValue("human");
    expect(someInputText).toBeInTheDocument();
  });
});
