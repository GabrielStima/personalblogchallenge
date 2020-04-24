import React from "react";
import FooterComponent from "../../../src/components/FooterComponent";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Footer component tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(<FooterComponent />, container);
    });
    expect(container.querySelector("[data-testid='footer']")).toBeTruthy();
  });
});
