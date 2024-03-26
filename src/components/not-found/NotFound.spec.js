import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NotFound", () => {
  test("should render component", () => {
    const result = render(<NotFound />);

    expect(result).toMatchSnapshot();
  });
});
