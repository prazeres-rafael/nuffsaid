import { render } from "@testing-library/react";
import Main from "../../features/Main/Main";

describe("Main", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
