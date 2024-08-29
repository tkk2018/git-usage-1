function main(argv) {
  console.log(argv.map((v) => Number(v)));
};

main(process.argv.slice(2));
