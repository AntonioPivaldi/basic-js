const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if(options.addition === null) {options.addition = 'null'};
  if(!options.separator) {options.separator = '+';}
  if(!options.additionSeparator) {options.additionSeparator = '|';}
  if(!options.repeatTimes) {options.repeatTimes = 1};
  if(!options.additionRepeatTimes) {options.additionRepeatTimes = 1};
  let result = [];
  let additions = [];
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    additions.push(options.addition);
  }
  let addStr = additions.join(options.additionSeparator);
  for(let i = 0; i < options.repeatTimes; i++) {
    result.push(str + addStr);
  }
  return result.join(options.separator);
}

module.exports = {
  repeater
};
