import { render, screen } from "@testing-library/react";
import NumberOfBeings, { NumberOfBeingsProps } from "./number_of_beings";

describe("Number Of Beings component", () => {
  it("Given the required props, when the component is rendered, then the label should be present", () => {
    //Arrange
    const sampleNumberOfBeingsProps: NumberOfBeingsProps = {
      numberOfBeings: 7,
      onChangeNumberOfBeings: () => {},
    };
    //Act
    render(<NumberOfBeings {...sampleNumberOfBeingsProps} />);
    const someLabelText = screen.getByText("Number Of Beings");
    expect(someLabelText).toBeInTheDocument();
  });
  it("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arrange
    const sampleNumberOfBeingsProps: NumberOfBeingsProps = {
      numberOfBeings: 7,
      onChangeNumberOfBeings: () => {},
    };
    //Act
    render(<NumberOfBeings {...sampleNumberOfBeingsProps} />);
    const someInputText = screen.getByDisplayValue("7");
    //Assert
    expect(someInputText).toBeInTheDocument();
  });
});
