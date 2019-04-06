const divide = require("./division");

describe("Divide two numbers", function() {
  test("should divide two numbers", function() {
    expect(divide(4, 2)).toBe(2);
  });
  test("should divide two decimal numbers", function() {
    expect(divide(4.3, 0.7)).toBeCloseTo(6.143);
  });
  test("should throw error when denominator is zero", function() {
    expect(() => divide(5, 0)).toThrow("Error. Division by zero is not allowed");
  });
  test("should throw error when denominator is null", function() {
    expect(() => divide(true, null)).toThrow("Error. Division by null is not allowed");
  });
  test("should divide two negative numbers", function() {
    expect(divide(-3, -7)).toBeCloseTo(0.429);
  });
  test("should throw error when arguments are not numbers", function() {
    expect(() => divide(5, "divide")).toThrow("Only numbers are valid");
    expect(() => divide(true, "divide")).toThrow("Only numbers are valid");
    expect(() => divide({ jack: "reacher" }, "divide")).toThrow("Only numbers are valid");
  });
  test("should throw error when no arguments are passed in", function() {
    expect(() => divide()).toThrow("Only numbers are valid");
  });
});
