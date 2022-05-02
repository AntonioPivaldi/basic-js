const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(m) {
  let result = 0;
  let arr = m.flat(3);
  arr.forEach(element => {
    if(element == '^^') {
      result++;
    } else {
      result += 0;
    }
  });
  return result;
}

module.exports = {
  countCats
};
