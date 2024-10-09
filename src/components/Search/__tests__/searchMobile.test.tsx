import { act, render, screen } from "@testing-library/react";
import { SearchMobile } from "..";
import { SearchContext } from "@/contexts/search";

describe("SearchMobile", () => {
  it("render SearchMobile correctly", () => {
    const valueMock = {
      query: "",
      setQuery: jest.fn(),
      onClose: jest.fn(),

      loading: false,
      results: [],
    };
    const setOpenMobileMock = jest.fn();
    render(<SearchMobile setOpenMobile={setOpenMobileMock} />, {
      wrapper(props) {
        return (
          <SearchContext.Provider value={valueMock}>
            {props.children}
          </SearchContext.Provider>
        );
      },
    });

    const buttons = screen.getAllByRole("button");

    act(() => {
      buttons[buttons.length - 1].click(); // last button clicked
    });

    expect(valueMock.onClose).toHaveBeenCalled();
    expect(setOpenMobileMock).toHaveBeenCalled();
  });
});
