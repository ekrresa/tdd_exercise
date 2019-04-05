const add = require("./add");

describe("Add Two Numbers", function() {
  test("should add two numbers", function() {
    expect(add(4, 5)).toBe(9);
  });

  test("should add two positive numbers", function() {
    expect(add(23, 17)).toBe(40);
  });

  test("should add two negative numbers", function() {
    expect(add(-23, -17)).toBe(-40);
  });

  test("should add a positive and a negative number", function() {
    expect(add(-23, 32)).toBe(9);
  });

  test("should add a number and a string", function() {
    expect(add("-23", 32)).toBe(9);
  });

  test("should add two numbered strings", function() {
    expect(add("-23", "6")).toBe(-17);
  });

  test("should throw exception when arguments are not numbers or argument is undefined", function() {
    expect(() => add()).toThrowError("only numbers are valid");

    expect(() => {
      add("{lets}", true);
    }).toThrowError("only numbers are valid");
  });

  test("should add 0.1 and 0.2", function() {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
