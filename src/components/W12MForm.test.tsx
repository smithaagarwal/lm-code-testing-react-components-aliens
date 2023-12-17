import { fireEvent, render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";
import userEvent from "@testing-library/user-event";

test("renders form element", () => {
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const { container } = render(<W12MForm />);

  // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
  // for example, the firstChild of our container should be our form element
  expect(container.firstChild).toHaveClass("w12MForm");
});

describe("Form Submit", () => {
  it("test clicking the button triggers the onSubmit handler of the form", async () => {
    const onSubmitMock = jest.fn();
    const { container } = render(<W12MForm />);
    container.onsubmit = onSubmitMock;
    const submitButton = screen
      .getAllByRole("button")
      .find((button) => button.textContent === "Submit");
    expect(submitButton).toBeInTheDocument();

    if (submitButton) {
      fireEvent.click(submitButton);
    }
    expect(onSubmitMock).toBeCalled;
  });
});
