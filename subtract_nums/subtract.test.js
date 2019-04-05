const subtract = require("./subtract");

describe("Subtract Two Numbers", function() {
  test("should subtract two numbers", function() {
    expect(subtract(4, 5)).toBe(-1);
  });

  test("should subtract two positive numbers", function() {
    expect(subtract(23, 17)).toBe(6);
  });

  test("should subtract two negative numbers", function() {
    expect(subtract(-23, -17)).toBe(-6);
  });

  test("should subtract a positive and a negative number", function() {
    expect(subtract(-23, 32)).toBe(-55);
  });

  test("should subtract a number and a string", function() {
    expect(subtract("-23", 32)).toBe(-55);
  });

  test("should subtract two numbered strings", function() {
    expect(subtract("-23", "6")).toBe(-29);
  });

  test("should throw exception when arguments are not numbers or argument is undefined", function() {
    expect(() => subtract()).toThrowError("only numbers are valid");

    expect(() => {
      subtract("{lets}", true);
    }).toThrowError("only numbers are valid");
  });

  test("should subtract 0.1 and 0.2", function() {
    expect(subtract(0.1, 0.2)).toBeCloseTo(-0.1);
  });
});
