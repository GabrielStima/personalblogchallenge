import React from "react";
import WelcomePhraseComponent from "../../../src/components/WelcomePhraseComponent";
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

describe("WelcomePhrase component tests", () => {
  test("Render without crashing", () => {
    act(() => {
      render(<WelcomePhraseComponent />, container);
    });
    expect(
      container.querySelector("[data-testid='welcomePhrase']")
    ).toBeTruthy();
  });
});
