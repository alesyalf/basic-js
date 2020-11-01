const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var transform_array = [];
    if (!Array.isArray(arr)) throw new Error();

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          ++i;
          break;
        case '--discard-prev':
          if (transform_array.length !== 0 && arr[i - 2] !== '--discard-next') {
            transform_array.pop();
          }
          break;
        case '--double-next':
          if (i < arr.length - 1) {
            transform_array.push(arr[i + 1]);
          }
          break;
        case '--double-prev':
          if (i !== 0 && arr[i - 2] !== '--discard-next') {
            transform_array.push(arr[i - 1]);
          }
          break;
        default:
          transform_array.push(arr[i]);
      }
    }
    return transform_array;
};
