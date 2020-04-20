import React from "react";
import ReactDOM from "react-dom";
import FooterComponent from "../../../src/components/FooterComponent";

describe("Footer component tests", () => {
  test("Render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FooterComponent></FooterComponent>, div);
  });
});
