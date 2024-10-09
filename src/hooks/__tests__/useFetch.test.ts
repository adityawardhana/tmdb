import { renderHook, act, waitFor } from "@testing-library/react";
import useFetch from "../useFetch";

describe("useFetch hook", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should fetch data successfully", async () => {
    const mockAsyncFunction = jest.fn().mockResolvedValue({ data: "success" });
    const { result } = renderHook(() => useFetch(mockAsyncFunction));

    // Simulate immediate fetch
    act(() => {
      result.current.fetch();
    });

    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.data).toEqual({ data: "success" });
      expect(result.current.error).toBeNull();
    });
  });

  it("should handle errors", async () => {
    const mockAsyncFunction = jest
      .fn()
      .mockRejectedValue("Error fetching data");
    const { result } = renderHook(() => useFetch(mockAsyncFunction));

    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      expect(result.current.error).toEqual("Error fetching data");
      expect(result.current.data).toEqual({});
    });
  });

  it("should handle initial data", async () => {
    const initialData = { initial: true };
    const mockAsyncFunction = jest.fn().mockResolvedValue(initialData);
    const { result } = renderHook(() =>
      useFetch(mockAsyncFunction, { initialData })
    );
    await waitFor(() => {
      expect(result.current.data).toEqual(initialData);
    });
  });
});
