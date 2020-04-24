import React from "react";
import App from "../../../src/App";
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

describe("App tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(<App />, container);
    });
    expect(container.querySelector("[data-testid='app']")).toBeTruthy();
  });
});
