import { render, screen } from "@testing-library/react";
import Loader from "..";

describe("first", () => {
  it("render Loader correctly", () => {
    render(<Loader />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
