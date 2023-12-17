import { render, screen } from "@testing-library/react";
import PlanetName, { PlanetNameProps } from "./planet_name";

describe("Planet Name component", () => {
  it("Given the required props, when the component is rendered, then the label should be present", () => {
    //Arrange
    const samplePlanetNameProps: PlanetNameProps = {
      planetName: "",
      onChangePlanetName: () => {},
      validate: (value: string) => [],
    };
    //Act
    render(<PlanetName {...samplePlanetNameProps} />);
    const someLabelText = screen.getByText("Planet Name");
    expect(someLabelText).toBeInTheDocument();
  });
  it("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arrange
    const samplePlanetNameProps: PlanetNameProps = {
      planetName: "earth",
      onChangePlanetName: () => {},
      validate: (value: string) => ["human"],
    };
    //Act
    render(<PlanetName {...samplePlanetNameProps} />);
    const someInputText = screen.getByDisplayValue("earth");
    expect(someInputText).toBeInTheDocument();
  });
});
