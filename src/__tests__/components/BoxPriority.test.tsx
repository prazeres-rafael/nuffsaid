import React from "react";
import { render } from "@testing-library/react";
import BoxPriority from "../../components/BoxPriority/BoxPriority";

describe("BoxPriority", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <BoxPriority priority={0}>Snapshot test</BoxPriority>
    );
    expect(container).toMatchSnapshot();
  });

  it("render the correct color when priority is changed", () => {
    const { container } = render(
      <BoxPriority priority={0}>Snapshot test</BoxPriority>
    );
    expect(container.firstChild).toHaveStyle(`background-color: #F56236`);
  });
});
