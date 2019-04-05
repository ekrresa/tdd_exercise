var subtract = function(a, b) {
  var diff = +a - +b;
  if (diff === undefined) {
    throw new Error("numbers are required");
  }
  if (isNaN(diff)) {
    throw new Error("only numbers are valid");
  }

  return +diff;
};

module.exports = subtract;
