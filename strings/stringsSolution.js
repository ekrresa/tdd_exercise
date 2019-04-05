var joinStrings = function(first, last) {
  if (typeof first === "string" && typeof last === "string") {
    return first + last;
  }
  throw "only strings are valid and required";
};

module.exports = joinStrings;
