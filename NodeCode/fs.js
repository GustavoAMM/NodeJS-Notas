const fs = require("fs");

// //leer archivos
// const first = fs.readFileSync("./data/first.txt");
// const second = fs.readFileSync("./data/second.txt");

// console.log(first.toString());
// console.log(second.toString());

// let body = "este es el titulo del archivo";

// //escribir
// fs.writeFileSync("./data/cuatro.txt", body, { flag: "a" });

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);

    fs.writeFile(
      "./data/cinco.txt",
      "hola mundo archivo cinco",
      (error, data) => {
        console.log(error);
        console.log(data);

        fs.writeFile(
          "./data/seis.txt",
          "hola mundo archivo seis",
          (error, data) => {
            console.log(error);
            console.log(data);
          }
        );
      }
    );
  });
});
