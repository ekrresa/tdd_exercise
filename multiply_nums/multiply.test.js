const multiply = require("./multiply");

describe("Multiply multiple Numbers", function() {
  test("should multiply three positive numbers", function() {
    expect(multiply(4, 5, 6)).toBe(120);
  });
  test("should multiply three negative numbers", function() {
    expect(multiply(-2, -5, -16)).toBe(-160);
  });
  test("should multiply positive and negative numbers", function() {
    expect(multiply(12, -5, -6)).toBe(360);
  });
  test("should multiply stringy numbers", function() {
    expect(multiply("12", "-5", "-6")).toBe(360);
  });
  test("should multiply only numbers if arguments contain other types", function() {
    expect(multiply(12, -5, -6, "name", { ted: 2 }, 21, false)).toBe(7560);
    expect(multiply("game", { ted: 2 }, false, true)).toBe(1);
  });
  test("should throw exception when arguments are not numbers or argument is undefined", function() {
    expect(() => multiply()).toThrowError("only numbers are valid and are required");
  });
  test("should multiply decimal numbers", function() {
    expect(multiply(0.21312, 0.21323, 0.64534, 0.3243, -3.434, 2.55)).toBeCloseTo(-0.0832815);
  });
  test("should multiply weird decimals", () => {
    expect(multiply(0.2, 0.1)).toBeCloseTo(0.02, 5);
  });
});
