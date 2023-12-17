import { render, screen } from "@testing-library/react";
import ReasonForSparing, { ReasonForSparingProps } from "./reason_for_sparing";

describe("Reason for sparing component", () => {
  it("Given the required props, when the component is rendered, then the label should be present", () => {
    //Arrange
    const sampleReasonForSparingProps: ReasonForSparingProps = {
      reasonForSparing: "",
      onChangeReasonForSparing: () => {},
    };
    //Act
    render(<ReasonForSparing {...sampleReasonForSparingProps} />);
    const someLabelText = screen.getByText("Reason for sparing");
    expect(someLabelText).toBeInTheDocument();
  });
  it("Given the required props, when the component is rendered, then the input text should be present", () => {
    //Arrange
    const sampleReasonForSparingProps: ReasonForSparingProps = {
      reasonForSparing: "xyz",
      onChangeReasonForSparing: () => {},
    };
    //Act
    render(<ReasonForSparing {...sampleReasonForSparingProps} />);
    const someInputText = screen.getByDisplayValue("xyz");
    expect(someInputText).toBeInTheDocument();
  });
});
