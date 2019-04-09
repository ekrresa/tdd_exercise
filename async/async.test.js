const asyncGithub = require("./async");

jest.mock("./async");

test("Should return an array", function() {
  var username2 = "ochuko";
  return asyncGithub(username2).then(data => {
    expect(data).toEqual(expect.any(Array));
  });
});

test("Should return a value that is defined", function() {
  var username2 = "mrtoluadesina";
  return asyncGithub(username2).then(data => {
    expect(data).toBeDefined();
  });
});

test("Should return an array of objects", function() {
  var username2 = "mrtoluadesina";
  return asyncGithub(username2).then(data => {
    expect(data).toEqual(
      expect.arrayContaining([expect.objectContaining({ owner: expect.any(Object) })])
    );
  });
});

test("Should throw exception when argument is undefined or null", function() {
  expect(() => asyncGithub()).toThrow("Needs a valid string argument");
  expect(() => asyncGithub(null)).toThrow("Needs a valid string argument");
  expect(() => asyncGithub({ me: 3 })).toThrow("Needs a valid string argument");
});
