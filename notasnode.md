===Notas del curso de nodeJS===

domingo 16 de octubre de 2022
requisitos previos: HTML, CSS, JS

=== ¿Qué es? ===

ES un entorno de ejecución de js (Javascript runtime enviorement)

Programa que nos permite utilizar js para uso de aplicaciones de escritorio, servidor, consola haciendo js de uso generar y no solo en el navegador.

utilizando v8 fue creado para soportar muchos usuarios sin la necesidad de muchos recursos.

Es posible crear aplicaciones fullstack

=== comandos básicos ===

=>Repel: interprete de node, nos permite ejecutar js de manera interactiva.(es equivalente a la consola del navegador)

node --version -> ver versión de node
.help -> muestra ayuda para ver los demas comandos
.exit -> salir de node
ctrl + d -> terminar node
ctrl + c -> matar el proceso

nodeJS  puede interpretar codigo sin la necesidad de entrar en su terminal 

ejemplo:
  node -e "console.log(10 + 10)"

para guardar comando de replel con : .sabe nombre_del_archivo
para cargar archivos guardados con : .load nombre_del_archivo

=== Js ===

se puede utilizar js vanilla  
ejemplo:

  let username = "angel";
  let age = 20;
  let hobbies = true;
  let points = [10, 20, 30];
  let user = {
    name: "angel",
    last: "montoya",
  };
  const pi = 3.1416;

ejemplo: 
const age = 40;

  if (age > 30) {
    console.log("Es mayor a 30");
  } else {
   console.log("Es menor a 30");
  }

=== node vs navegador === 

como sabemos dentro del navegador podemos acceder con js a muchas funcionalidades de la web
por ejemplo: document.tittle, el window.innerHeight, el document.body.innerHTML, etc
en node tenemos acceso a diferentes objetos del sistema operativo ya que en este se esta executando node
por ejemplo: os.userInfo(), os.arch(), os.homedir()

=== objetos globales ===

a diferencia del navegaro en node tenemos objetos globales
por ejemplo:

console.log(__dirname); => da la dirección completa actual del directorio
console.log(__filename); => da la dirección completa actual del documento

console.log(module); => da información como el id, path, filename, 
console.log(require); => da información varia
console.log(process); => da información acerca de los procesos por ejemplo: version de node, del v8, del uv, etc.

=== timers ===

algunos los trae por defecto y sirve para tener un poco de control sobre el timepo de ejecición de un comando 

Ejemplo:

    setInterval(() => {
      console.log("hola mundo");
    }, 2000);

esta es setInterval y cada dos segundos va a ejecutar una función flecha, en este caso es un console.log

Ejemplo 2: 

    setTimeout(() => {
      console.log("Hola mundo");
    }, 5000);

este es setTimeout y tiene que esperar algo para que pueda ejecutarse, en este caso tiene que esperar 5s para poder ejecutar el console.log


=== modulos ===

como vimos antes module es un objeto global, es decir todos los archivos tienen acceso a él,
podemos llenar el export con variables, constantes, y poder usarlo fuera

Ejemplo:

    const www = "cisco.com";

    module.exports = www;

    console.log(module);

exportar una constante, ahora desde module podemos acceder a ella

para importar es:

const www = require("./module/mymodule"); => se necesita la ruta relativa, para especificar que archivo importar, y se guarda en una constante 

console.log(www);

PERO sí  queremos exportar mas de una cosa, por ejemplo mas constantes, podemos meter todas las constantes en un nuevo objeto y 
exportar el objeto.

Ejemplo: 

const www = "cisco.com";
const numer = 123;
const array = [1, 2, 3, 4];
const name = {
  name: "angel",
  age: 20,
};

const group = {
  web: www,
  number: numer,
  array: array,
  user: name,
};

module.exports = group;

####### Versió mejor para exportar ######

para ahorrar una linea de code podemos hacer lo siguiente:

module.exports = {
  web: www,
  number: numer,
  array: array,
  user: name,
};

hacer que module.export sea igual al objeto que queremos exportar, sin la necesidad de crear la constante group


#### versión mejor x2 para exportar ####

module.exports = {
  www,
  numer,
  array,
  name,
};

podemos poner unicamente el nombre de las constantes sin la necesidad de un nombre ahorrando tiempo.

### versión mejor para importar ####

  const { name } = require("./module/myModule");

  console.log(name);

con lo nuevo de js podemos importar solo una propiedad del objeto, en el caso anterior importamos el la propiedad name

  const { name, www } = require("./module/myModule");

  console.log(name);
  console.log(www);

  esto nos ayuda si el objeto es demasiado grande y a nosotros solo nos importa ciertas cosas.

=== exports individuales ===

como hemos visto anteriormente la manera en la que se le puede asignar a export dentro de module si son mucho es atraves de un objeto y al ser un objeto podemos insertar de manera diferente.

Ejemplo:

const www = "cisco.com";
const numer = 123;
const array = [1, 2, 3, 4];
const name = {
  name: "angel",
  age: 20,
};

module.exports.name = { name };
module.exports.numer = { numer };
module.exports.www = { www };
module.exports.array = { array };

Notas => es poco útil, es valido, pero es mejor guardar todo en un objeto(como el ejemplo de arriba) podria servir si del archivo no queremos exportar todo, un ejemplo podria ser una variable, una constante, etc.


=== modulos (OS) ===

hay modulos dentro de node que se instalan a la par que node y podemos utilizarlos importandolos como cualquier otro modulo
ejemplo:


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


=== modulos (path) ===

En este modulo es de suma importancia tener en cuenta el entorno de donde se esta desarrollando ya que las rutas cambian 
dependiendo del sistema operativo.

Ejemplo: en windows es => C:\\user\\angel\\escritorio\\ejemplo
y en linux es => home/angel/escritorio

y debemos tenerlo en cuenta ya que normalmente en los servidores que se montan usan linux como sistema operativo
y con el modulo path nos ayuda a solucionar este dilema.

ejemplo: 

const path = require("path");
console.log(path.join("home", "angel", "escritorio"));


❯ node path.js
home/angel/escritorio

ejemĺo: 

const path = require("path");

const filepath = path.join("home", "escritorio", "MERN", "NodeJS");
console.log(path.basename(filepath)); => nos na el nombre del archivo
console.log(path.dirname(filepath)); => nos da la ruta del archivo
console.log(path.parse(filepath)); = > parsea la ruta a un objeto de tipo json
console.log(path.resolve(filepath)); => resuelve la ruta por si esta incompleta

=== modulo (fs) part1 ===

nos permite manipular archivos
ejemplo:

const fs = require("fs");

//leer archivos
const first = fs.readFileSync("./data/first.txt");
const second = fs.readFileSync("./data/second.txt");

console.log(first.toString());
console.log(second.toString());

let body = "este es el titulo del archivo";

//escribir archivos
fs.writeFileSync("./data/cuatro.txt", body, { flag: "a" });

=== modulo (fs) part2 ===

como vimos anteriormente los metodos tenian un Sync es decir esta funcionando asincronamente, ya que node es un entorno de ejecución asincrona 

la programación sincrona es cuando tienes que esperar a que acabe una tarea para seguir con la siguiente

un callback es : Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

en conclusión la programación asincrona nos permite realizar varias tareas a la par un ejemplo es el siguiente:


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


sin embargo tiene su fallo, es que el codigo se va haciendo a la derecha,(este ejemplo es de node anteriormente)

=== request === 

Es información acerca del cliente que despues yo puedo utilizar en el backend 
ejemplo de rutas:

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

=== npm ===

link => https://www.npmjs.com/

repositorios de paquetes 

para instalar un modulo es:

npm install nomule_name => manera completa 
npm i module_name => manera abreviada
npm i moduel_name moduel_name2 moduel_name3 => instalar varios modulos a la vez

cuando instalamos un paquete nos crea archivos automaticamente por ejemplo:

-package.json => nos muestra las dependencias del proyecto
-package-lock.json => no es buena idea alterarlo a mano, es parte del funcionamiento de node

En cuanto instalamos muchos modulos la carpeta node_modules se va a comenzar a llenar y es muy recomendable no tocar nada
el archivo package.json va a agregar los modulos que instalamos.

si llegaramos a borrar la carpeta node_modules gracias al package.json y con el comando npm install automaticamente va a 
descargar todos los modulos que necesita el pryecto

tambien para borrar un modulo existe un comando:

npm remove module_name

=== npm init === 

anteriormente vismo como se creo el package.json automaticamente, sin embargo nosotros tambien podemos crearlo con el 
siguiente comando, el cual nos hará varias preguntas:

npm init 

dentro del package.json esta un apartado de scripts, y dentro de este podemos establecer nuestros propios comandos, no necesariamente el de test

por ejemplo:

"scripts": {
    "ejecutar": "node app.js"
  }

npm run ejecutar => comadno para correr el comando "ejecutar" esto nos ayuda a ponerle un alias a comando necesrios, largos y repetitivos. Esto nos ayuda a ahorrar tiempo

hay comandos tan comunes en proyectos que incluso npm nos permite abreviar mas.
por ejemplo el comando start todo proyecto lo va a tener:

npm run start => comando completo
npm star => comando que ya reconoce npm 

los scripts solo deben de estar una sola vez.(NO puede haber comadno iguales)

dentro del package.json hay un apartado de dependencias que es para que nuestra aplicación funcione, sin embargo, hay dependencias para que solo se ocupan en el entorno de desarollo como por ejemplo nodemon:

para instalar un paquete que solo sirve para desarrllo ocupamos el siguiente comando:

npi i module_name -D

este comando creará una nueva sección en el package.json llamado: "devDependencies"

=== modulos globales === 

como hemos visto en anterioridad podemos instalar paquetes para nuestros proyectos,sin embargo, hay una manera de instalarlos 
en el computador lo que nos permite que este disponible para todos nuestros proyectos con el siguiente comando:

npm i module_name -g

si utilizas linux te pide permisos de super usuario 

=== npx ===
descargar modulos y los ejecuta inmediatamente 
sirve para provar modulos sin instalarlos ni el proyecto ni globalmente


