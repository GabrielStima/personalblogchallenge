import React from "react";
import ListPublicationsComponent from "../../../src/components/ListPublicationsComponent";
import { MemoryRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const list = [
  {
    title: "Teste",
    body: "Lorem Ipsum",
    publishedAt: "04/24/2020",
    author: "Teste",
  },
];

const filterObj = { text: "", filterOption: "" };

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

describe("ListPublications component tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(
        <MemoryRouter>
          <ListPublicationsComponent list={list} filter={filterObj} />
        </MemoryRouter>,
        container
      );
    });
    expect(
      container.querySelector("[data-testid='listPublications']")
    ).toBeTruthy();
  });
});
