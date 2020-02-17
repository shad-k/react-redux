import React from "react";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppTest } from "../App";

describe("Renders home page", () => {
  test("renders home page", () => {
    const history = createMemoryHistory();
    const { getByRole } = render(<AppTest history={history} />);

    expect(getByRole("heading")).toHaveTextContent("Users directory");
  });

  test("clicking on button takes to user page", () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    const { container, getByText } = render(<AppTest history={history} />);
    fireEvent.click(getByText(/Click to view/));
    expect(container.querySelector("p")).toHaveTextContent("Click on the edit");
  });
});
