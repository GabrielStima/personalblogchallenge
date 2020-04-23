import React from "react";
import ReactDOM from "react-dom";
import WelcomePhraseComponent from "../../../src/components/WelcomePhraseComponent";

describe("WelcomePhrase component tests", () => {
  test("Render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WelcomePhraseComponent />, div);
  });
});
