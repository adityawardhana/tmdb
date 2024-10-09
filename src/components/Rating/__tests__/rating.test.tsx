import { render } from "@testing-library/react";
import Rating from "..";

describe("Rating", () => {
  it("render Rating not found", () => {
    const { container } = render(<Rating />);

    expect(container).toMatchSnapshot();
  });
});
