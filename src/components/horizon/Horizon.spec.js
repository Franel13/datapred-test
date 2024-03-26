import React from "react";
import { render } from "@testing-library/react";
import { Horizon } from "./Horizon";

describe("Horizon", () => {
  test("should render component", () => {
    const result = render(
      <Horizon data={[]} />
    );

    expect(result).toMatchSnapshot();
  });
});
