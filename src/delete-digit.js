const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(nWord) {
  let n = nWord.toString().split('');
  let arr = [];
  for(let i = 0; i < n.length; i++) {
    n.splice(i, 1);
    arr.push(+n.join(''));
    n = nWord.toString().split('');
  }
  let result = Math.max(...arr);
  return result;
}

module.exports = {
  deleteDigit
};
