var joinStrings = require("./stringsSolution");

describe("String Concatenation", function() {
  test("should add two strings", function() {
    expect(joinStrings("lamb", "stew")).toBe("lambstew");
  });
  test("should throw exception if no argument is passed", function() {
    expect(() => joinStrings()).toThrow("only strings are valid and required");
  });
  test("should return string if only one string is passed in", function() {
    expect(joinStrings("song")).toBe("song");
    expect(joinStrings("james", false)).toBe("james");
  });
  test("should throw exception if other data types are passed in", function() {
    expect(() => joinStrings({ ted: 2 })).toThrow("only strings are valid");
    expect(() => joinStrings(234, true)).toThrow("only strings are valid");
    expect(() => joinStrings({ ted: 2 }, null)).toThrow("only strings are valid");
  });
});
