import { render, screen } from "@testing-library/react";
import Menu from "../Menu";

describe("Menu", () => {
  it("render menu correctly", () => {
    render(<Menu pathname="/" />);

    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByText("Movies")).toHaveAttribute(
      "class",
      "text-base hover:text-primary text-primary"
    );
  });
});
