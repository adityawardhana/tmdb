import { render, screen } from "@testing-library/react";
import Banner from "../Banner";
import { MovieDetailContext } from "@/contexts/movieDetail";
import {
  movieDetailImagesMock,
  movieDetailMock,
  movieDetailVideosMock,
} from "@/__mocks__/movieDetailMock";

describe("Banner", () => {
  it("render Banner component when using posters instead of backdrops", async () => {
    render(<Banner />, {
      wrapper: (props) => {
        return (
          <MovieDetailContext.Provider
            value={{
              images: {
                ...movieDetailImagesMock,
                backdrops: [],
              },
              videos: movieDetailVideosMock,
              detail: movieDetailMock,
            }}
          >
            {props.children}
          </MovieDetailContext.Provider>
        );
      },
    });

    expect(
      screen.getByText(`${movieDetailImagesMock.posters.length} PHOTOS`)
    ).toBeInTheDocument();
  });
});
