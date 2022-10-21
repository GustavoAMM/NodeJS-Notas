const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigfile.txt", "utf-8");

  fileStream.on("data", (chunck) => {
    fileStream.pipe(res);
  });

  fileStream.on('error',(error)=>{
    console.log(error)
  })
});


server.listen(3000)
console.log('server on 3000')