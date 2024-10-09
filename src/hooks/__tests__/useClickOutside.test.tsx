import { render, screen } from "@testing-library/react";
import useClickOutside from "../useClickOutside";
import { act, useRef } from "react";

describe("useClickOutside hook", () => {
  const evts: any = {};
  const listenerMock = jest.fn();
  it("should call handleOnClickOutside when clicking outside the ref", () => {
    document.addEventListener = jest.fn((event, cb) => {
      return (evts[event] = cb);
    });
    document.contains = () => true;

    const TestComponent = () => {
      const ref = useRef<HTMLDivElement | null>(null);
      useClickOutside(ref, listenerMock);

      return (
        <div data-testid="parent">
          <div ref={ref} />
        </div>
      );
    };

    render(<TestComponent />);
    const parent = screen.getByTestId("parent");

    evts.mousedown({ target: parent });
    expect(listenerMock).toHaveBeenCalledTimes(1);
  });

  it("should not call handleOnClickOutside when clicking inside the ref", () => {
    document.addEventListener = jest.fn((event, cb) => {
      return (evts[event] = cb);
    });
    const TestComponent = () => {
      const ref = useRef<HTMLDivElement | null>(null);
      useClickOutside(ref, listenerMock);

      return <div data-testid="child" ref={ref} />;
    };

    const { getByTestId } = render(<TestComponent />);
    const target = getByTestId("child");

    evts.mousedown({ target });
    expect(listenerMock).toHaveBeenCalledTimes(0);
  });
});
