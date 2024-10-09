import { MovieDetailContext } from "@/contexts/movieDetail";
import { render, screen } from "@testing-library/react";
import Images from "../Images";
import { movieDetailImagesMock } from "@/__mocks__/movieDetailMock";
import { URL_IMAGE } from "@/utils/constants";

it("render Images component when images not found", async () => {
  render(<Images />, {
    wrapper: (props) => {
      return (
        <MovieDetailContext.Provider value={{ images: {} }}>
          {props.children}
        </MovieDetailContext.Provider>
      );
    },
  });
  expect(screen.getByText("No images available.")).toBeInTheDocument();
});

it("render Images component when using posters instead of backdrops", async () => {
  render(<Images />, {
    wrapper: (props) => {
      return (
        <MovieDetailContext.Provider
          value={{ images: { ...movieDetailImagesMock, backdrops: [] } }}
        >
          {props.children}
        </MovieDetailContext.Provider>
      );
    },
  });
  const firstImg = screen.getAllByRole("img")[0];
  expect(firstImg).toHaveAttribute(
    "src",
    `${URL_IMAGE}${movieDetailImagesMock.posters[0].file_path}`
  );
});
