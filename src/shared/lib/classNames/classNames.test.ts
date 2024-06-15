import { classNames } from "./classNames";

describe("Test helper ClassNames", () => {
  test("Test with only firs param", () => {
    expect(classNames("hello")).toBe("hello");
  });

  test("Test with aditional class", () => {
    expect(classNames("hello", {}, ["class1", "class2"])).toBe(
      "hello class1 class2"
    );
  });
  test("Test with nods", () => {
    expect(classNames("hello", { hoverd: true, scoverd: true }, [])).toBe(
      "hello hoverd scoverd"
    );
  });
  test("Test with false node", () => {
    expect(classNames("hello", { hoverd: false, scoverd: true }, [])).toBe(
      "hello scoverd"
    );
  });
});
