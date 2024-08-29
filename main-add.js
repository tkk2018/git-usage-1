const add = require("./libs/add.js");

function main(argv) {
  const result = add(0, argv.map((v) => Number(v)));
  console.log(result);
};

main(process.argv.slice(2));
