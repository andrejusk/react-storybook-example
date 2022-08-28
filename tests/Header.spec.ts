import React from "react";

import { screen, render } from "@testing-library/react";
import { expect } from "chai";

import { Header } from "../src/components/Header";

describe("Header", () => {
  it("Renders logo <svg /> element", () => {
    render(
      React.createElement(Header, {
        onLogin: () => {},
        onLogout: () => {},
        onCreateAccount: () => {},
      } as any)
    );

    const el = screen.getByText("Acme");
    expect(el).to.exist;
  });
});
