import React from "react";
import DemoPostComponent from "../../../src/components/DemoPostComponent";
import { MemoryRouter } from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;

const post = {
  title: "Jest test",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh metus, consectetur ut ligula vitae, posuere blandit augue. Maecenas lacus velit, auctor ac turpis ultrices, maximus hendrerit elit. Integer metus diam, placerat sit amet dui porta, maximus feugiat lectus. Vivamus non magna gravida, finibus nibh tincidunt, vulputate odio. Nam sit amet dictum ligula.",
  author: "Gabriel",
  publishedAt: "20/04/2020",
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

describe("DemoPost component tests", () => {
  test("render demonstration post", () => {
    act(() => {
      render(
        <MemoryRouter>
          <DemoPostComponent post={post} position="0" />
        </MemoryRouter>,
        container
      );
    });
    expect(
      container.querySelector("[data-testid='titleDemoPost']").textContent
    ).toEqual("Jest test");
    expect(
      container.querySelector("[data-testid='bodyDemoPost']").textContent
    ).toEqual(
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh metus, consectetur ut ligula vitae, posuere blandit augue. Maecenas lacus velit, auctor ac turpis ultrices, maximus hendrerit elit. Integer metus diam, placerat sit amet dui porta, maximus feugiat lectus. Vivamus non magna gravida, finibus nibh tincidunt, vulputate odio. Nam sit amet di..."'
    );
    expect(
      container.querySelector("[data-testid='bodyDemoPost']").textContent.length
    ).toBe(363);
    expect(
      container.querySelector("[data-testid='authorDemoPost']").textContent
    ).toEqual("Gabriel");
    expect(
      container.querySelector("[data-testid='dateDemoPost']").textContent
    ).toEqual("20/04/2020");
    expect(
      container
        .querySelector("[data-testid='linkDemoPost']")
        .getAttribute("href")
    ).toEqual("/post/0");
  });
});
