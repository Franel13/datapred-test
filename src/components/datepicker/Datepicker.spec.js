import React from "react";
import { render } from "@testing-library/react";
import { Datepicker } from "./Datepicker";

describe("Datepicker", () => {
  test("should render component", () => {
    const result = render(
      <Datepicker />
    );

    expect(result).toMatchSnapshot();
  });
});
