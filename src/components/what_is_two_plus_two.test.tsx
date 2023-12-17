import { render, screen } from "@testing-library/react";
import WhatIsTwoPlusTwo, {
  WhatIsTwoPlusTwoProps,
} from "./what_is_two_plus_two";

describe("Species Name component", () => {
  it("Given the required props, when the component is rendered, then the label should be present", () => {
    //Arrange
    const sampleSpeciesNameProps: WhatIsTwoPlusTwoProps = {
      whatIsTwoPlusTwo: "",
      onChangeWhatIsTwoPlusTwo: () => {},
    };
    //Act
    render(<WhatIsTwoPlusTwo {...sampleSpeciesNameProps} />);
    const someLabelText = screen.getByText("What is 2 + 2");
    expect(someLabelText).toBeInTheDocument();
  });
  it("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arrange
    const sampleSpeciesNameProps: WhatIsTwoPlusTwoProps = {
      whatIsTwoPlusTwo: "4",
      onChangeWhatIsTwoPlusTwo: () => {},
    };
    //Act
    render(<WhatIsTwoPlusTwo {...sampleSpeciesNameProps} />);
    const someInputText = screen.getByDisplayValue("4");
    expect(someInputText).toBeInTheDocument();
  });
});
