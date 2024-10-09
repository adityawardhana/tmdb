import { act, render, screen } from "@testing-library/react";
import Pagination from "..";

it("render Pagination not found", () => {
  const setPageMock = jest.fn();
  const { container } = render(
    <Pagination totalPages={0} page={0} setPage={setPageMock} />
  );

  expect(container).toMatchSnapshot();
});

it("render Pagination click prev button and click last page", () => {
  const setPageMock = jest.fn();
  render(<Pagination totalPages={10} page={2} setPage={setPageMock} />);

  // button prev
  const buttonPrev = screen
    .getByTestId("pagination")
    ?.querySelectorAll("button")?.[0];
  act(() => {
    buttonPrev?.click();
  });
  expect(setPageMock).toHaveBeenCalledWith(1);

  // button last page
  const button10 = screen.getByText("10");
  act(() => {
    button10?.click();
  });

  expect(setPageMock).toHaveBeenCalledWith(10);
});

it("render Pagination click next button and click first page", () => {
  const setPageMock = jest.fn();
  render(<Pagination totalPages={10} page={9} setPage={setPageMock} />);

  // button next
  const allButton = screen
    .getByTestId("pagination")
    ?.querySelectorAll("button");
  const buttonNext = allButton?.[allButton.length - 1];
  act(() => {
    buttonNext?.click();
  });
  expect(setPageMock).toHaveBeenCalledWith(10);

  // button first page
  const button10 = screen.getByText("1");
  act(() => {
    button10?.click();
  });

  expect(setPageMock).toHaveBeenCalledWith(1);
});
