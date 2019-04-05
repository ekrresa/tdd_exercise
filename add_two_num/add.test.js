const add = require("./add");

test("should add two numbers", function () {
  expect(add(4,5)).toBe(9)
})

test("should add two positive numbers", function () {
  expect(add(23,17)).toBe(40)
})

test("should add two negative numbers", function () {
  expect(add(-23,-17)).toBe(-40)
})

test("should add a positive and a negative number", function () {
  expect(add(-23,32)).toBe(9)
})

test("should add a number and a string", function () {
  expect(add("-23",32)).toBe(9)
})

test("should add two numbered strings", function () {
  expect(add("-23","6")).toBe(-17)
})