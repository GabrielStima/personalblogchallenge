import React from "react";
import CompletePost from "../../../src/views/CompletePost";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const listPublications = [
  {
    title: "Teste",
    body: "Lorem Ipsum",
    publishedAt: "04/24/2020",
    author: "Teste",
  },
];
const match = {
  params: {
    id: 1,
  },
};

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

describe("CompletePost view tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(
        <CompletePost match={match} listPublications={listPublications} />,
        container
      );
    });
    expect(
      container.querySelector("[data-testid='completePost']")
    ).toBeTruthy();
  });
});
