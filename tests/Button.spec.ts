import React from "react";

import { screen, render } from "@testing-library/react";
import { expect } from "chai";

import { Button } from "../src/components/Button";

describe("Button", () => {
  it("renders given button label", () => {
    const label = "foobar";
    render(React.createElement(Button, { label } as any));

    const el = screen.getByText(label);
    expect(el).to.exist;
  });
});
