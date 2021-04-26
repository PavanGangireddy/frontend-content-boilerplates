import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

describe("App tests", () => {
  beforeAll(() => {
    jest.spyOn(console, "error");
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  afterEach(() => {
    expect(console.error).not.toHaveBeenCalled();
  });

  it("display text:::5:::", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});