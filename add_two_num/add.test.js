const add = require("./add");

test("should add two numbers", function () {
  expect(add(4,5)).toBe(9)
})

test("should add two positive numbers", function () {
  expect(add(23,17)).toBe(40)
})