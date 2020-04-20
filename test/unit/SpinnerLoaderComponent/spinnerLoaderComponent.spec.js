import React from "react";
import ReactDOM from "react-dom";
import SpinnerLoader from "../../../src/components/SpinnerLoaderComponent";

describe("Spinner component tests", () => {
  test("Render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SpinnerLoader></SpinnerLoader>, div);
  });
});
