const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max_depth = 1;
    arr.forEach(el => {
      let current_depth = 1;
      if (Array.isArray(el)) {
        current_depth += this.calculateDepth(el);
      }
      max_depth = Math.max(max_depth, current_depth);
    });
    return max_depth;
  }
};