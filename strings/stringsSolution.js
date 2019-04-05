var joinStrings = function(first, last) {
  if (arguments.length === 0) {
    throw "only strings are valid and required";
  }
  var first = first || "";
  var last = last || "";

  if (typeof first === "string" && typeof last === "string") {
    return first + last;
  }
};

module.exports = joinStrings;
