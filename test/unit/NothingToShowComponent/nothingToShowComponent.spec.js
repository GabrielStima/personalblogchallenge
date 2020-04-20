import React from "react";
import NothingToShowComponent from "../../../src/components/NothingToShowComponent";
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

describe("NothingToShow component tests", () => {
  test("render button without text prop", () => {
    act(() => {
      render(<NothingToShowComponent />, container);
    });
    expect(container.textContent).toBe("Not found");
  });
  test("render button with text prop", () => {
    act(() => {
      render(
        <NothingToShowComponent text="There are no posts to show" />,
        container
      );
    });
    expect(container.textContent).toBe("There are no posts to show");
  });
});
