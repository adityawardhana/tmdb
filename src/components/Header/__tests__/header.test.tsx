import { act, render, screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
  it("render Header correctly", () => {
    render(<Header />);
    const button = screen.getByTestId("searchButtonMobile");

    act(() => {
      button.click();
    });

    expect(screen.getByText("TMDB")).toBeInTheDocument();
    expect(screen.getByTestId("searchMobile")).toBeInTheDocument();
  });
});
