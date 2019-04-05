var joinStrings = require("./stringsSolution");

describe("String Concatenation", function() {
  test("should add two strings", function() {
    expect(joinStrings("lamb", "stew")).toBe("lambstew");
  });
  test("should throw exception if no argument is passed", function() {
    expect(() => joinStrings()).toThrow("only strings are valid and required");
  });
});
