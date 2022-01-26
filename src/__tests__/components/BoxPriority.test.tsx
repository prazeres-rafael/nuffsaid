import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import BoxPriority from "../../components/BoxPriority/BoxPriority";
import { palette } from "../../utils/palette";

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

  test.each`
    priority | backgroundColor
    ${0}     | ${palette.messages.error}
    ${1}     | ${palette.messages.warning}
    ${2}     | ${palette.messages.info}
  `(
    `render the error color when priority is changed`,

    ({ priority, backgroundColor }) => {
      render(<BoxPriority priority={priority} messages={messages} />);

      expect(screen.getByTestId("box-priority")).toHaveStyle(
        `background-color: ${backgroundColor}`
      );
    }
  );
});
