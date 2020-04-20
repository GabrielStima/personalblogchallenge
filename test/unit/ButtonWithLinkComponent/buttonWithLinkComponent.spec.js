import React from "react";
import ButtonWithLinkComponent from "../../../src/components/ButtonWithLinkComponent";
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

describe("ButtonWithLink component tests", () => {
  test("render button without text", () => {
    act(() => {
      render(<ButtonWithLinkComponent />, container);
    });
    expect(
      container.querySelector("[data-testid='buttonText']").textContent
    ).toEqual("Button");
  });
  test("render button without Link", () => {
    act(() => {
      render(<ButtonWithLinkComponent text="Test" />, container);
    });
    expect(
      container.querySelector("[data-testid='buttonText']").textContent
    ).toEqual("Test");
  });
});
