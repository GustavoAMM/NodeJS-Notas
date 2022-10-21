const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("x", (data,secondata) => {
  console.log(data);
  console.log(secondata)
});

customEmitter.emit("x","hola mundo","adios world");

