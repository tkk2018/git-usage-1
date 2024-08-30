/**
 * Adds multiple numbers to an initial value.
 *
 * @param {number} i - Initial value
 * @param {number[]} args - Values to add
 * @returns {number} Sum of the initial value and all additional values
 */
module.exports = function add(i, ...args) {
  return args.reduce((previous, current) => previous + current, i);
};
