import React, { useState } from "react";
import { render, fireEvent, findByText } from "@testing-library/react";
import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";

test("Dashboard renders correctly", () => {
  render(<Dashboard />);
});

//SNAPSHOT
describe("<App />", () => {
  it("should match snapshot", () => {
    const tree = render(<Dashboard />);

    expect(tree).toMatchSnapshot();
  });
});

test("close gate", () => {
  const { getByText } = render(<Dashboard />);

  fireEvent.click(getByText(/close gate/i));

  getByText(/open gate/i);
});

test("close gate then open gate", () => {
  const { getByText } = render(<Dashboard />);

  fireEvent.click(getByText(/close gate/i));

  getByText(/open gate/i);

  fireEvent.click(getByText(/open gate/i));

  getByText("Lock Gate");
  getByText("Close Gate");
});

test("close gate then lock gate", () => {
  const { getByText } = render(<Dashboard />);

  fireEvent.click(getByText(/close gate/i));

  getByText(/open gate/i);

  fireEvent.click(getByText(/lock gate/i));

  getByText("Unlock Gate");
  getByText("Open Gate");
});
