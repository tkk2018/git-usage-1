const add = require("./libs/add.js");
const sub = require("./libs/sub.js");

function main(argv) {
  let result = add(0, ...argv.map((v) => Number(v)));
  result = sub(result, ...argv.map((v) => Number(v)));
  console.log(result);
};

main(process.argv.slice(2));
