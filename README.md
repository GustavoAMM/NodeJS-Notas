# Notas del curso de nodeJS

> Domingo 16 de octubre de 2022.
>
> Requisitos previos: HTML, CSS, JS.

## ¿Qué es?

Es un entorno de ejecución de JavaScript (Javascript runtime enviorement).

Programa que nos permite utilizar JavaScript para uso de aplicaciones de escritorio, servidor, consola, haciendo JavaScript de uso generar y no solo en el navegador.

Utilizando el motor de google v8 fue creado para soportar muchos usuarios sin la necesidad de muchos recursos.

Es posible crear aplicaciones fullstack.

## Comandos básicos

> Repel: Es el interprete de node que nos permite ejecutar Javascript de manera interactiva.(es equivalente a la consola dentro del  navegador).

- node --version -> ver versión de node.
- .help -> muestra ayuda para ver los demas comandos.
- .exit -> salir de node.
- ctrl + d -> terminar node.
- ctrl + c -> matar el proceso de node.

NodeJS puede interpretar código sin la necesidad de entrar en su terminal.

Ejemplo:

  ` node -e "console.log(10 + 10)" `

Para guardar comando de repel con : 
  `.save nombre_del_archivo`

Para cargar archivos guardados con : 
  `.load nombre_del_archivo`

## JavaScript

Se pueden utilizar comandos de JavaScript vanilla dentro de node.

Ejemplo:

  ```
      let username = "angel";
      let age = 20;
      let hobbies = true;
      let points = [10, 20, 30];
      let user = {
        name: "angel",
        last: "montoya",
      };
      const pi = 3.1416;
  ```

Ejemplo: 

  ```
    const age = 40;

    if (age > 30) {
      console.log("Es mayor a 30");
    } else {
    console.log("Es menor a 30");
    }

  ```
## Node vs Navegador

Como sabemos dentro de la consola del navegador podemos acceder con JavaScript a muchas funcionalidades de la web.

Ejemplo: 

- document.tittle
- window.innerHeight 
- document.body.innerHTML 
- etc

En node tenemos acceso a diferentes objetos del sistema operativo ya que este es el lugar donde se esta ejecutando node.

Ejemplo: 

- os.userInfo() 
- os.arch() 
- os.homedir()

## Objetos globales

A diferencia del navegador en node tenemos objetos globales

Ejemplo:

```
  console.log(__dirname); => Proporciona la dirección completa actual del directorio.
  console.log(__filename); => Proporciona la dirección completa actual del documento.
  console.log(module); => Proporciona información como el id, path, filename. 
  console.log(require); => Proporciona información varia.
  console.log(process); => Proporciona información acerca de los procesos.

```

## Timers

Algunos los trae por defecto y sirve para tener un poco de control sobre el tiempo de ejecución de un comando.

Ejemplo:

  ```
    setInterval(() => {
      console.log("hola mundo");
    }, 2000);

  ```

> Este es setInterval y cada dos segundos va a ejecutar una función flecha, que en este caso es un console.log("hola mundo")

Ejemplo 2: 

 ```   
    setTimeout(() => {
      console.log("Hola mundo");
    }, 5000);

  ```
> Este es setTimeout y tiene que esperar algo para que pueda ejecutarse, en este caso tiene que esperar 5s para poder ejecutar el console.log("Hola mundo")


## Modulos

Como vimos antes module es un objeto global, es decir, todos los archivos tienen acceso a él.Podemos llenar el *export* con variables, constantes, etc, y poder usarlos fuera.

Ejemplo:

  ``` 
    const www = "cisco.com";
    module.exports = www;
    console.log(module);

  ```

> Esto exporta una constante, ahora desde module podemos acceder a ella

Para importar es:

```
  const www = require("./module/mymodule"); => Se necesita la ruta relativa para especificar que archivo importar, y se guarda en una constante 

  console.log(www);

```

**Pero** sí queremos exportar mas de una cosa podemos anidar todo, por ejemplo, muchas mas constantes, podemos meter todas las constantes en un nuevo objeto y exportar el objeto.

Ejemplo: 

```
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

```

#### Mejor manera para exportar

Para ahorrar una linea de código podemos hacer lo siguiente:

```
  module.exports = {
    web: www,
    number: numer,
    array: array,
    user: name,
  };

```
> Hacer que module.export sea igual al objeto que queremos exportar sin la necesidad de crear la constante group


#### Mejor manera(x2) para exportar

```
  module.exports = {
    www,
    numer,
    array,
    name,
  };

```

> Podemos poner unicamente el nombre de las constantes sin la necesidad de un nombre, ahorrando tiempo.

#### Mejor manera para importar


```
  const { name } = require("./module/myModule");
  console.log(name);

```

Con lo nuevo de JavaScript podemos importar solo una propiedad del objeto, en el caso anterior importamos la propiedad name.

Ejemplo:

  ```
    const { name, www } = require("./module/myModule");
    console.log(name);
    console.log(www);
    
  ```
> Esto nos ayuda sí el objeto es demasiado grande y a nosotros solo nos importan ciertas cosas.

## Exports individuales

Como hemos visto anteriormente la manera en la que se le puede asignar a export dentro de module si son mucho es atraves de un objeto y al ser un objeto podemos insertar de manera diferente.

Ejemplo:

  ```
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

  ```

> Notas: Es poco útil, es valido, pero es mejor guardar todo en un objeto (como el ejemplo de arriba) podria servir sí del archivo no queremos exportar todo, un ejemplo podría ser una variable, una constante, etc.


## Modulos (OS)

Hay modulos dentro de node que se instalan a la par que node y podemos utilizarlos importandolos como cualquier otro modulo.

Ejemplo:

  ```
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

  ```

## Modulos (path)

En este modulo es de suma importancia tener en cuenta el entorno de donde se esta desarrollando ya que las rutas cambian dependiendo del sistema operativo.

Ejemplo: 

```
  En windows es => C:\\user\\angel\\escritorio\\ejemplo
  En linux es => home/angel/escritorio

```

Debemos tenerlo en cuenta ya que normalmente en los servidores que se montan, usan linux como sistema operativo pero con el modulo path nos ayudará a solucionar este dilema.

Ejemplo: 

  ```
  const path = require("path");
  console.log(path.join("home", "angel", "escritorio"));

  home/angel/escritorio => salida por consola

  ```

Ejemĺo de utilidad:  

  ```
    const path = require("path");

    const filepath = path.join("home", "escritorio", "MERN", "NodeJS");
    console.log(path.basename(filepath)); => nos na el nombre del archivo
    console.log(path.dirname(filepath)); => nos da la ruta del archivo
    console.log(path.parse(filepath)); = > parsea la ruta a un objeto de tipo json
    console.log(path.resolve(filepath)); => resuelve la ruta por si esta incompleta

  ```

## Modulo (fs)

Nos permite manipular archivos dentro de nuestro sistema.

Ejemplo:

  ```

    const fs = require("fs");

    //leer archivos
    const first = fs.readFileSync("./data/first.txt");
    const second = fs.readFileSync("./data/second.txt");

    console.log(first.toString());
    console.log(second.toString());

    let body = "este es el titulo del archivo";

    //escribir archivos
    fs.writeFileSync("./data/cuatro.txt", body, { flag: "a" });

  ```

Como vimos anteriormente los metodos tenian un Sync es decir esta funcionando asincronamente, ya que node es un entorno de ejecución asincrona.

La programación sincrona es cuando tienes que esperar a que acabe una tarea para seguir con la siguiente.

> Callback: Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

La programación asincrona nos permite realizar varias tareas a la par. 

Ejemplo:

  ```

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

  ```

Sin embargo tiene su fallo, es que el codigo se va haciendo a la derecha,(este ejemplo es de como se programaba al principio de node):

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


