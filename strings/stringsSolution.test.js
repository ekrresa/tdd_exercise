var joinStrings = require("./stringsSolution");

describe("String Concatenation", function() {
  test("should add two strings", function() {
    expect(joinStrings("lamb", "stew")).toBe("lambstew");
  });
});
