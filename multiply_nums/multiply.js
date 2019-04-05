var multiply = function() {
  var argsArray = Array.prototype.slice.call(arguments);
  if (argsArray.length === 0) {
    throw new Error("only numbers are valid and are required");
  }
  var total = 1;
  var attempt = false;

  for (var i = 0; i < argsArray.length; i++) {
    attempt = true;
    if (!isNaN(+argsArray[i])) {
      if (typeof argsArray[i] !== "boolean") {
        total *= +argsArray[i];
      }
    }
  }

  return attempt === true ? total : (total = 0);

  // return total;
};

module.exports = multiply;
