import React from "react";
import FilterComponent from "../../../src/components/FilterComponent";
import { render, unmountComponentAtNode } from "react-dom";
import { screen, fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

let container = null;

let filterObj = { text: "", filterOption: "" };
const filterObjectMiddleware = (data) => {
  if (data) {
    filterObj = data;
  } else {
    return filterObj;
  }
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Filter component tests", () => {
  test("render filter default", () => {
    act(() => {
      render(
        <FilterComponent
          filterObjectMiddlewareCallback={filterObjectMiddleware}
        />,
        container
      );
    });
    expect(
      container.querySelector("[data-testid='filterDropdownText']").textContent
    ).toEqual("Title");
    expect(
      container
        .querySelector("[data-testid='filterDropdownContent']")
        .getAttribute("class")
    ).toEqual("dropdown-content");
    expect(
      container
        .querySelector("[data-testid='filterDropdownArrow']")
        .getAttribute("class")
    ).toEqual("arrowUp");
  });
  test("render filter after events", () => {
    act(() => {
      render(
        <FilterComponent
          filterObjectMiddlewareCallback={filterObjectMiddleware}
        />,
        container
      );
    });
    expect(
      container.querySelector("[data-testid='filterDropdownText']").textContent
    ).toEqual("Title");
    expect(
      container
        .querySelector("[data-testid='filterDropdownContent']")
        .getAttribute("class")
    ).toEqual("dropdown-content");
    expect(
      container
        .querySelector("[data-testid='filterDropdownArrow']")
        .getAttribute("class")
    ).toEqual("arrowUp");

    fireEvent(
      screen.getByTestId("filterDropdownButton"),
      new MouseEvent("click", { bubbles: true })
    );

    expect(
      container
        .querySelector("[data-testid='filterDropdownContent']")
        .getAttribute("class")
    ).toEqual("dropdown-content active");

    expect(
      container
        .querySelector("[data-testid='filterDropdownArrow']")
        .getAttribute("class")
    ).toEqual("arrowDown");

    fireEvent(
      screen.getByTestId("filterDropdownOptionAuthor"),
      new MouseEvent("click", { bubbles: true })
    );

    expect(
      container.querySelector("[data-testid='filterDropdownText']").textContent
    ).toEqual("Author");

    fireEvent.change(screen.getByTestId("filterDropdownInput"), {
      target: { value: "test" },
    });

    expect(filterObj).toStrictEqual({ text: "test", filterOption: "Author" });

    expect(
      container
        .querySelector("[data-testid='filterDropdownArrow']")
        .getAttribute("class")
    ).toEqual("arrowUp");
  });
});
