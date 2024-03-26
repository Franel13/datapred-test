import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render component", () => {
    const result = render(<App />);

    expect(result).toMatchSnapshot();
  });
});
