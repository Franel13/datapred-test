import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import { Dashboard } from "./Dashboard";

describe("Datepicker", () => {
  test("should render component", () => {
    const result = render(
      <Dashboard />
    );

    expect(result).toMatchSnapshot();
  });
});
