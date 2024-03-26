import React from "react";
import { render } from "@testing-library/react";
import { HorizonState } from "./HorizonState";

describe("HorizonState", () => {
  test("should render component", () => {
    const result = render(
      <HorizonState />
    );

    expect(result).toMatchSnapshot();
  });
});
