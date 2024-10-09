import { MovieDetailContext } from "@/contexts/movieDetail";
import { render } from "@testing-library/react";
import Videos from "../Videos";

describe("Videos", () => {
  it("render Videos component when videos not found", async () => {
    const { container } = render(<Videos />, {
      wrapper: (props) => {
        return (
          <MovieDetailContext.Provider value={{ videos: { results: [] } }}>
            {props.children}
          </MovieDetailContext.Provider>
        );
      },
    });
    expect(container).toMatchSnapshot();
  });
});
