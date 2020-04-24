import React from "react";
import Home from "../../../src/views/Home";
import { MemoryRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const filterObjectMiddlewareCallback = () => {
  return { text: "", filterOption: "" };
};

const listPublications = [
  {
    title: "Teste",
    body: "Lorem Ipsum",
    publishedAt: "04/24/2020",
    author: "Teste",
  },
];

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

describe("Home view tests", () => {
  test("Render without crashing", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Home
            filterObjectMiddlewareCallback={filterObjectMiddlewareCallback}
            listPublications={listPublications}
          />
        </MemoryRouter>,
        container
      );
    });
    expect(container.querySelector("[data-testid='home']")).toBeTruthy();
  });
});
