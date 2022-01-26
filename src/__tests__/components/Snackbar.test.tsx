import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Snackbar from "../../components/Snackbar";

const message = "Et aut quo laboriosam at uttt.";

describe("BoxPriority", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Snackbar isOpen={true} message={message} />);
    expect(container).toMatchSnapshot();
  });
});
