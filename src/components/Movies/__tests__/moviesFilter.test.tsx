import { act, render, screen } from "@testing-library/react";
import MoviesFilter from "../MoviesFilter";
import { MoviesContext } from "@/contexts/movies";

it("render movie filter with able to click one of filter", () => {
  const onParamsChangeMock = jest.fn();
  render(<MoviesFilter />, {
    wrapper(props) {
      return (
        <MoviesContext.Provider
          value={{
            page: 1,
            filter: "popular",
            onParamsChange: onParamsChangeMock,
          }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
    },
  });

  const buttonAll = screen.getAllByRole("button")[0];

  act(() => {
    buttonAll.click();
  });

  expect(onParamsChangeMock).toHaveBeenCalledWith({ filter: "", page: 1 });
});
