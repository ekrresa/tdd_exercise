var divide = function(a, b) {
  if (b === 0) {
    throw "Error. Division by zero is not allowed";
  }
  if (b === null) {
    throw "Error. Division by null is not allowed";
  }
  if (!isNaN(a) && !isNaN(b)) {
    return a / b;
  }

  throw "Only numbers are valid";
};

module.exports = divide;
