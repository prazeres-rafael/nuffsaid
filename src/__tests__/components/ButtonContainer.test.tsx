import { render } from "@testing-library/react";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";

describe("ButtonContainer", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <ButtonContainer
        getMessages={true}
        handleStop={jest.fn()}
        handleClear={jest.fn()}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
