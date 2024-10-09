import { render, screen } from "@testing-library/react";
import TVPage from "../page";

describe("TV", () => {
  it("should render correctly", () => {
    render(TVPage());
    
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });
});
