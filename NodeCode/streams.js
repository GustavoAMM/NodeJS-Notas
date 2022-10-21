const { writeFile } = require("fs/promises");

const createbigFile = async () => {
  writeFile("./data/bigfile.txt", "hello world".repeat(10000));
};

createbigFile()

// const { createReadStream } = require("fs");
// const stream = createReadStream("./data/bigfile.txt", { encoding: "utf-8" });

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => {
//   console.log("ya termine");
// });

// stream.on("error", (error) => {
//   console.log(error);
// });
