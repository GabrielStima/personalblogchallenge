import React from "react";
import CompletePostComponent from "../../../src/components/CompletePostComponent";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;

const post = {
  title: "Jest test",
  author: "Gabriel",
  publishedAt: "20/04/2020",
  body: "Lorem Ipsum",
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

describe("CompletePost component tests", () => {
  test("render complete post", () => {
    act(() => {
      render(<CompletePostComponent post={post} />, container);
    });
    expect(
      container.querySelector("[data-testid='titleCompletePost']").textContent
    ).toEqual("Jest test");
    expect(
      container.querySelector("[data-testid='authorCompletePost']").textContent
    ).toEqual("Gabriel");
    expect(
      container.querySelector("[data-testid='dateCompletePost']").textContent
    ).toEqual("20/04/2020");
    expect(
      container.querySelector("[data-testid='bodyCompletePost']").textContent
    ).toEqual('"Lorem Ipsum"');
  });
});
