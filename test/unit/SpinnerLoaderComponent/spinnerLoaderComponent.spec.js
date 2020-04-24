import React from "react";
import SpinnerLoader from "../../../src/components/SpinnerLoaderComponent";
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

describe("Spinner component tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(<SpinnerLoader />, container);
    });
    expect(
      container.querySelector("[data-testid='spinnerLoader']")
    ).toBeTruthy();
  });
});
