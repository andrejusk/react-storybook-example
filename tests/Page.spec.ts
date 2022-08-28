import React from "react";

import { screen, render } from "@testing-library/react";
import { expect } from "chai";

import { Page } from "../src/components/Page";

describe("Page", () => {
  it("renders page title", () => {
    render(React.createElement(Page));

    const el = screen.getByText("Pages in Storybook");
    expect(el).to.exist;
  });
});
