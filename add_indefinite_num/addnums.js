var add = function() {
  var argsArray = Array.prototype.slice.call(arguments);
  if (argsArray.length === 0) {
    throw new Error("only numbers are valid and are required");
  }
  var total = 0;

  for (var i = 0; i < argsArray.length; i++) {
    if (!isNaN(+argsArray[i])) {
      if (typeof argsArray[i] !== "boolean") {
        total += +argsArray[i];
      }
    }
  }

  return total;
};

module.exports = add;
