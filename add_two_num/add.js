var add = function(a, b) {
  var sum = +a + +b;
  if (sum === undefined) {
    throw new Error("numbers are required");
  }
  if (isNaN(sum)) {
    throw new Error("only numbers are valid");
  }

  return +sum;
};

module.exports = add;
