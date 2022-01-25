import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MessageColumn from "../../features/MessageColumn/MessageColumn";

const messages = [
  { message: "Et aut quo laboriosam at ut.", priority: 0 },
  { message: "Dolor quo est expedita nostrum corrupti.", priority: 1 },
  { message: "Recusandae iure et.", priority: 2 },
];

describe("MessageColumn", () => {
  it("should match the snapshot", () => {
    const { container } = render(<MessageColumn messages={messages} />);
    expect(container).toMatchSnapshot();
  });
});
