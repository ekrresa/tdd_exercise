const add = require("./addnums");

describe("Add Multiple Numbers", function() {
  test("should add three positive numbers", function() {
    expect(add(4, 5, 6)).toBe(15);
  });
  test("should add three negative numbers", function() {
    expect(add(-2, -5, -16)).toBe(-23);
  });
  test("should add positive and negative numbers", function() {
    expect(add(12, -5, -6)).toBe(1);
  });
  test("should add stringy numbers", function() {
    expect(add("12", "-5", "-6")).toBe(1);
  });
  test("should add only numbers if arguments contain other types", function() {
    expect(add(12, -5, -6, "name", { ted: 2 }, 21, false)).toBe(22);
    expect(add("game", { ted: 2 }, false, true)).toBe(0);
  });
});
