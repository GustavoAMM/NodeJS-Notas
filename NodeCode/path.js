const path = require("path");

const filepath = path.join("home", "escritorio", "MERN", "NodeJS");
console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.parse(filepath));
console.log(path.resolve(filepath));
