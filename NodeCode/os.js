const os = require("os");

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
console.table({
  os: os.platform(),
  version: os.release(),
  memoria: os.totalmem(),
});
