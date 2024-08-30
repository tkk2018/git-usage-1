const assert = require("assert");
const add = require("./libs/add.js");
const sub = require("./libs/sub.js");

function main(argv) {
  // add all values given by the user to 0.
  let result = add(0, ...argv.map((v) => Number(v)));
  // subtract all values given by the user from the previous result.
  result = sub(result, ...argv.map((v) => Number(v)));
  // expect the result equal to 0.
  assert.equal(0, result);
  console.log(result);
};

main(process.argv.slice(2));
