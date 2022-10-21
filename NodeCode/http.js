const http = require("http");

http
  .createServer((request, response) => {
    console.log(request.url);
    if (request.url === "/") {
      response.write("Welcome to the server");
      return response.end();
    }
    if (request.url === "/about") {
      response.write("acerca de");
      return response.end();
    }

    response.write(`
    <h1>Not found</h1>
    <p>Esta pagina no fue encontrada xd<p>
    <a href="/">Volver a la pagina principal</a>
    `);
    response.end();
  })
  .listen(3000);

console.log("servidor escuchando puerto 3000");
