# Funciones

Una funcion es un bloque de código que puede ser reutilizado.

[Volver al inicio](#-Funciones)

## SINTAXIS

---------------------------------------------------------------------------

```js
function nombreDeLaFuncion(){
  // codigo que se ejecuta
}
```

Las funciones una vez declaradas se almacenan en memoria pero debe ser invocadas para que se ejecute su código.

```
function saludar(){
  console.log("Hola mundo");
}
console.log(saludar); // devuelve informacion de la funcion;
console.log(saludar()); // ejecuta la funcion;
```

[Volver al inicio](#-Funciones)

### PARÁMETROS

---------------------------------------------------------------------------

Una funcion puede tener **parámetros**. Estos son valores con los que la funcion trabaja. Cuando se invoca a una funcion, estos **parámetros** deben recibir datos reales, los cuales son llamados argumentos.

* **PARAMETROS**: valores que usa la funcion en su declaracion.
* **ARGUMENTOS**: valores "reales" que recibe los parámetros cuando se invoca a la funcion.

```js
function multiplicar(a,b){
  console.log(a*b);
  console.log(arguments[1]);
}
multiplicar(4,5);
```

Si se pasan más argumentos que los parámetros requeridos, los sobrantes se ignoran.
  
Si se pasan menos argumentos que los parámetros requeridos, los faltantes son `undefined`.

```js
function sumar(){
  var suma = 0;
  for(var i = 0; i < arguments.length; i++){
    suma = suma + arguments[i];
  }
  return suma;
}
var miSuma = sumar(2,3,4,5);
```

[Volver al inicio](#-Funciones)

### TIPOS DE FUNCIONES

---------------------------------------------------------------------------

Se pueden clasificar:

* Por su nombre
    * Funciones nombradas
    * Funciones anonimas
* Por su construccion
    * Funciones por declaracion (function declaration)
      `function miFuncion(){//..}`
      Las declaraciones en JavaScript "hacen algo"
    * Funciones por expresion (function expression)
      `var miFuncion = function(){//..};`
      Las expresiones en JavaScript "tienen un valor"

```js
var titulo = document.getElementById('titulo');
function miAlert(){
    alert("hiciste click en el titulo");
}
titulo.addEventListener('click',miAlert);
```

[Volver al inicio](#-Funciones)

### HOISTING (ELEVACIÓN)

---------------------------------------------------------------------------

El interprete de JS eleva las variables al inicio de su scope sin importar si fueron declaradas más adelante (pero no eleva su definicion, o sea, su valor).

También eleva las funciones por declaracion, pero no las funciones por expresion.

```js
console.log(despedirse());
var despedirse = function(){
  console.log("Adiós mundo");
};
console.log("he continuado");
// Uncaught TypeError: despedirse is not a function at <anonymous>:1:13
```

> **NOTA**: Si ejecutamos el siguiente código devolverá un error, al no haberse declarado previamente el valor reclamado.

[Volver al inicio](#-Funciones)

### SCOPE

---------------------------------------------------------------------------

Es el ámbito en el cual vive y es accesible una variable. Solo las funciones crean scopes en JavaScript. En otras palabras, las variables son accesibles solo dentro de la funcion en la que fueron declaradas.

```js
function saludar(){
  var nombre = "Alvaro";
  console.log("Hola " + nombre);
  return nombre;
}
var nombre = saludar();
console.log(nombre);
console.log("He continuado");
// Hola Alvaro
// Alvaro
// He continuado
```

Si se declara una variable dentro de una funcion sin la palabra `var` esta se vuelve global (no recomendado).

> **NOTA**: Una funcion accede a las variables de su **scope** pero tambien a las variables del **scope superior** (**closure**). Eso significa también que toda funcion puede acceder a las variables globales.

```js
var nombre = "Jose";
(function(){
  nombre = "Goku";
  return nombre;
})();
console.log(nombre);
// Goku
```

```js
(function saludar(){
  console.log("hola");
  return;
  console.log("adios");
})();
// hola
```

```js
function saludar(){
  var hablar = "hola";
  console.log(hablar);
  return;
  hablar = "adios";
  console.log(hablar);
}
saludar();
// hola
```

[Volver al inicio](#-Funciones)

### FUNCIONES AUTOEJECUTABLES

---------------------------------------------------------------------------

Son funciones que no requieren ser invocadas posteriormente a su declaración ya que se invocan por si mismas. 

En teoria una funcion podria autoejecutarse asi:

```js
function nombre(){}();
```

pero esto da un error porque no es una expresion. Para convertir una funcion en expresion se encierra entre paréntesis. Y ahora si puede autoejecutarse de la siguiente manera:

```js
(function nombre(){})();
```

Las funciones autoejecutables pueden ser nombradas o anonimas. Aunque es más frecuentes que las autoejecutables sean anonimas.

```js
(function(nombre){
  console.log("Hola " + nombre);
})("Manuel");
// Manuel
(function(nombre){
  console.log(nombre);
})("Jose");
// Jose
```

[Volver al inicio](#-Funciones)

### FUNCIONES ARROW

---------------------------------------------------------------------------

Las **funciones arrow** proporcionan una sintaxis más compacta para la definición de funciones. Pongamos algunos ejemplos

Si no hay argumentos, empezamos con 2 paréntesis y la flecha:

```js
// ES5
setInterval(function(){
    console.log('hola mundo');
}, 100);
// ES6
setInterval(() => {
    console.log('hola mundo');
}, 1
```

Con un argumento, no usamos paréntesis:

```js
// ES5
var vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.forEach(function(value){
    console.log('vowel :' + value);
});
// ES6
var vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.forEach(value => {
    console.log('vowel :' + value);
});
```

Con más de un argumentos, volvemos a los paréntesis:

```js
// ES5
var sum = function(a, b){
    return a+b;
}
// ES6
var sum = (a, b) => a + b;
```

[Volver al inicio](#-Funciones)

### PARÁMETROS POR DEFECTO

---------------------------------------------------------------------------

**Podemos incluir valores por defecto en nuestros parámetros**, como en otros lenguajes de programación. Podemos incluso referenciar otros parámetros:

```js
// ES6
function greet(name, gender = 'Señor', greeting = 'Hola ' +
gender){
    console.log(greeting + ' ' + name);
};
greet('Peter'); // Hola señor Peter
greet('Alex', undefined, 'Que tal'); //Que tal Sergio
```

[Volver al inicio](#-Funciones)

### PARÁMETROS REST

---------------------------------------------------------------------------

Hasta ahora, cuando pasábamos argumentos a una función, se añadía una variable `arguments` que incluía todos los parámetros (definidos o no) que había recibido nuestra función.

```js
// ES5
function printName(name){
    var length = arguments.length;
    var fullName = name;
    if(length > 1){
        for(var i=1; i< length; i++){
            fullName += ' ' + arguments[i];
           
        }
    }
    console.log(fullName);
};
printName('Felipe'); // Felipe
printName('Felipe', 'Juan', 'Froilan'); //Felipe Juan Froilan
```

Los **parámetros Rest** nos proporcionan una manera de **pasar un conjunto indeterminado de parámetros** que la función agrupa en forma de Array. Como detalle (de lógica), solo puede ser parámetro rest el último argumento de la función. Veamos mejor a qué nos referimos.

```js
// ES6
function printName(name, ...fancyNames){
    var fullName = name;
    fancyNames.forEach(fancyN => fullName += ' ' + fancyN);
    console.log(fullName);
};
printName('Felipe'); // Felipe
printName('Felipe', 'Juan', 'Froilan'); //Felipe Juan Froilan
```

[Volver al inicio](#-Funciones)

### OPERADOR SPREAD

---------------------------------------------------------------------------

El **operador spread** lo que nos permite es pasar un array de elementos a una función, convirtiendo cada uno de los elementos en un argumento. Se podría pensar en el spread operator como la versión inversa de los parámetros rest. Lo vemos mejor con un ejemplo.

> **NOTA**: Antes (en ES5), para pasar un array de elementos a una función como parámetros, usaríamos el método apply del siguiente modo:

```js
//ES5
function f(x, y, z) { }
var args = [0, 1, 2];
f.apply(null, args);
```

Ahora en cambio lo podemos hacer poniendo 3 puntos delante del array, es decir, usando el spread operator:

```js
//ES6
function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);
```

Además, cualquier argumento puede aprovecharse de esta característica, con lo que podríamos sacar ventaja para cosas como las siguientes:

```js
//ES6
//ejemplo1
function f(v, w, x, y, z) { }
var args = [0, 1];
f(-1, ...args, 2, ...[3]);
//ejemplo2
var parts1 = ['hombros', 'rodillas'];
var parts2 = ['pecho', 'cintura'];
var lyrics = ['head', ...partes1, ...partes2, 'y', 'pies'];
//lyrics = ['cabeza', 'hombros', 'rodillas', 'pecho', 'cintura', 'y',
'pies']
```

En ES5 no es posible combinar los métodos apply y new, mientras que ES6 permite combinar new con el spread operator:

```js
//ES6
var d = new Date(...dateFields);
```

[Volver al inicio](#-Funciones)

### TEMPLATE STRINGS

---------------------------------------------------------------------------

Las plantillas de cadena de texto (**template strings**) son literales de texto que habilitan el uso de expresiones incrustadas. Es posible utilizar cadenas de texto de más de una línea, y funcionalidades de interpolación de cadenas de texto con ellas.

Las plantillas de cadena de texto se delimitan con el caracter de comillas o **tildes invertidas** (`` ``)  , en lugar de las comillas simples o dobles. Las plantillas de cadena de texto pueden contener marcadores, indentificados por el signo de dolar, y envueltos en llaves (${expresión}). Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función. de cadena de texto, que luego puede ser manipulada antes de ser devuelta.

Los caracteres de fin de línea encontrados son parte de la plantilla de cadena de texto. En el caso de cadenas de texto normales, esta es la sintaxis necesaria para obtener cadenas de más de una línea:

```js
//ES5
console.log("línea 1 de cadena de texto\n\
línea 2 de cadena de texto");
// "línea 1 de cadena de texto
// línea 2 de cadena de texto"
//ES6
// Para obtener el mismo efecto con cadenas de texto multilínea, con ES6 es posible escribir:
console.log(`línea 1 de la cadena de texto 
línea 2 de la cadena de texto`);
// "línea 1 de la cadena de texto
// línea 2 de la cadena de texto"
```

Para combinar expresiones dentro de cadenas de texto normales, se usa la siguiente sintaxis:

```js
var a = 5;
var b = 10;
console.log("Quince es " + (a + b) + " y\nno " + (2 * a + b) + ".");
// "Quince es 15 y
// no 20."
```

Ahora, con las plantillas de cadena de texto, tenemos una sintaxis que habilita la misma funcionalidad, con un código más agradable a la vista y fácil de leer:

```js
var a = 5;
var b = 10;
console.log(`Quince es ${a + b} y\nno ${2 * a + b}.`);
// "Quince es 15 y
// no 20."```

[Volver al inicio](#-Funciones)