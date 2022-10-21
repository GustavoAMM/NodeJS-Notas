const { readFile } = require("fs/promises");

async function read() {
  try {
    const result = await readFile("./data/first.txt", "utf-8");
    console.log(result);
    const result2 = await readFile("./data/cinco.txt", "utf-8");
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();
