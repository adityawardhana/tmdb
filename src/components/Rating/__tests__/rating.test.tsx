import { render, screen } from "@testing-library/react";
import Rating from "..";

it("render Rating not found", () => {
  const { container } = render(<Rating />);

  expect(container).toMatchSnapshot();
});
