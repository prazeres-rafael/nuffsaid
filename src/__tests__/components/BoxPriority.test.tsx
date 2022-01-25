import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import BoxPriority from "../../components/BoxPriority/BoxPriority";

const messages = [
  { message: "Et aut quo laboriosam at ut.", priority: 0 },
  { message: "Dolor quo est expedita nostrum corrupti.", priority: 1 },
  { message: "Recusandae iure et.", priority: 2 },
];

describe("BoxPriority", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <BoxPriority priority={0} messages={messages} />
    );
    expect(container).toMatchSnapshot();
  });

  it("render the correct color when priority is changed", () => {
    const { container } = render(
      <BoxPriority priority={0} messages={messages} />
    );

    expect(screen.getByTestId("box-priority")).toHaveStyle(
      "background-color: #F56236"
    );
  });
});
