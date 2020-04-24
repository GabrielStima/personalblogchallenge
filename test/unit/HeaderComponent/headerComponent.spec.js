import React from "react";
import HeaderComponent from "../../../src/components/HeaderComponent";
import { MemoryRouter } from "react-router-dom";
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

describe("Header component tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(
        <MemoryRouter>
          <HeaderComponent />
        </MemoryRouter>,
        container
      );
    });
    expect(container.querySelector("[data-testid='header']")).toBeTruthy();
  });
});
