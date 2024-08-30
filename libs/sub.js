/**
 * Subtracts multiple numbers from an initial value.
 *
 * @param {number} i - Initial value
 * @param {number[]} args - Values to subtract
 * @returns {number} Result of subtracting all additional values from the initial value
 */
module.exports = function sub(i, ...args) {
  return args.reduce((previous, current) => previous - current, i);
};
