import React from "react";
import MenuComponent from "../../../src/components/MenuComponent";
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

describe("Menu component tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(
        <MemoryRouter>
          <MenuComponent />
        </MemoryRouter>,
        container
      );
    });
    expect(container.querySelector("[data-testid='menu']")).toBeTruthy();
  });
});
