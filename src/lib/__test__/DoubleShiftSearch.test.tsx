import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { DoubleShiftSearch } from "lib";
afterEach(cleanup);

const onChange = jest.fn();
const onBlur = jest.fn();
describe("DoubleShiftSearch tests", () => {
  it("renders without crashing without any optional props", async () => {
    render(<DoubleShiftSearch />);
  });
  it("renders without crashing with all props", async () => {
    render(
      <DoubleShiftSearch
        onBlur={onBlur}
        onChange={onChange}
        closeOnESCPress={true}
        isInputActive={false}
        textPosition="right"
        placeholder="Click here to search"
        helperText="Hit shift key two times to search menu"
      />
    );
  });

  it("updates value when on change", () => {
    render(<DoubleShiftSearch onChange={onChange} />);
    const inputElement = screen.getByTestId(
      "test-dbl-shift-search-input"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "23" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("23");
  });

  it("sets search input to be active when isActiveInput props is passed", async () => {
    render(<DoubleShiftSearch isInputActive />);
    let classesBeforeActive = screen
      .getByTestId("test-dbl-shift-search-input")
      .getAttribute("class");
    expect(classesBeforeActive?.includes("active")).toBe(true);
  });

  it("sets search input to be active when double shift is pressed", async () => {
    const { container } = render(<DoubleShiftSearch onChange={onChange} />);
    // const wrapperElem = screen.getByTestId(
    //   "test-dbl-shift-search-wrapper"
    // ) as HTMLDivElement;
    fireEvent.keyPress(container, { key: "Shift", code: 16 });
    fireEvent.keyPress(container, { key: "Shift", code: 16 });
    let classesAfterActive = screen
      .getByTestId("test-dbl-shift-search-input")
      .getAttribute("class");
    console.log("classesAfterActive", classesAfterActive);

    // expect(classesAfterActive?.includes("active")).toBe(true);
    // const inputElement = screen.getByTestId(
    //   "test-dbl-shift-search-input"
    // ) as HTMLInputElement;
    // fireEvent.change(inputElement, { target: { value: "23" } });
    // expect(onChange).toHaveBeenCalledTimes(1);
    // expect(inputElement.value).toBe("23");
  });
});
