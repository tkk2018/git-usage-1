module.exports = function add(i, ...arg) {
  return arg.reduce((a, c) => a + c, i);
};
