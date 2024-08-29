module.exports = function sub(i, ...arg) {
  return arg.reduce((a, c) => a - c, i);
};
