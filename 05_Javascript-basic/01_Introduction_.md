# Introducción

[Volver al inicio](#-Introducción)

## INTRODUCCIÓN

---------------------------------------------------------------------------

Las siguientes características son comunes a todas las implementaciones que se ajustan al estándar **ECMAScript**:

* Imperativo y estructurado
* Dinámico
* Funcional
* Prototípico

[Volver al inicio](#-Introducción)

### IMPERATIVO Y ESTRUCTURADO

---------------------------------------------------------------------------

JavaScript es compatible con gran parte de la estructura de programación de C (por ejemplo, sentencias if, bucles for, sentencias switch, etc.).

Con una excepción, en parte: en C, el ámbito de las variables alcanza al bloque en el cual fueron definidas; sin embargo JavaScript no es compatible con esto, puesto que el ámbito de las variables es el de la función en la cual fueron declaradas.

Esto cambia con la versión de ECMAScript 2015, ya que añade compatibilidad con **block scoping** por medio de la palabra clave `let`. Como en C, JavaScript hace distinción entre expresiones y sentencias.

Una diferencia sintáctica con respecto a C es la inserción automática de punto y coma, es decir, en JavaScript los puntos y coma que finalizan una sentencia pueden ser omitidos.

**Evaluación en tiempo de ejecución**, JavaScript incluye la función `eval` que permite evaluar expresiones expresadas como cadenas en tiempo de ejecución.

Por ello se recomienda que eval sea utilizado con precaución y que se opte por utilizar la función JSON.parse() en la medida de lo posible, pues resulta mucho más segura.

[Volver al inicio](#-Introducción)

### DINÁMICO

---------------------------------------------------------------------------

**Tipado Dinámico**, Como en la mayoría de lenguajes de scripting, el tipo está asociado al valor, no a la variable. Por ejemplo, una variable x en un momento dado puede estar ligada a un número y más adelante, ligarla de nuevo a una cadena.

JavaScript es compatible con varias formas de comprobar el tipo de un objeto, incluyendo **duck typing**.​ Una forma de saberlo es por medio de la palabra clave **typeof**.

**Objetual**, JavaScript está formado casi en su totalidad por **objetos**. Los objetos en JavaScript son arrays asociativos, mejorados con la inclusión de prototipos.

Los nombres de las propiedades de los objetos son claves de tipo cadena: `obj.x = 10 y obj['x'] = 10` son equivalentes, siendo azúcar sintáctico la notación con punto.

[Volver al inicio](#-Introducción)

### FUNCIONAL

---------------------------------------------------------------------------

**Funciones de primera clase**, A las funciones se les suele llamar ciudadanos de primera clase; son objetos en sí mismos. Como tal, poseen propiedades y métodos, como `.call()` y `.bind()`.

Una función anidada es una función definida dentro de otra. Esta es creada cada vez que la función externa es invocada.

[Volver al inicio](#-Introducción)

### PROTOTIPICO

---------------------------------------------------------------------------

JavaScript usa prototipos en vez de clases para el uso de herencia. Es posible llegar a emular muchas de las características que proporcionan las clases en lenguajes orientados a objetos tradicionales por medio de prototipos en JavaScript.

[Volver al inicio](#-Introducción)

## INSERTAR JAVASCRIPT EN HTML

---------------------------------------------------------------------------

Se usa la etiqueta `<script></script>` y dentro se puede escribir código javascript o se puede llamar a un archivo externo con el atributo `src` (recomendable).

La etiqueta `<script></script>` puede colocarse en el `head` o en el `body` del html.

> **NOTA**: La unica diferencia será su carga respecto al DOM.

[Volver al inicio](#-Introducción)

## SINTAXIS

---------------------------------------------------------------------------

> **NOTA**: **JavaScript** es **Case Sensitive** (distingue mayusculas y minusculas)
> **NOTA**: **JavaScript** es de **tipado dinámico** (no se necesita especificar el tipo de dato y se puede cambiar de uno a otro sin problemas).

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript is Case Sensitive</h2>
    <p>Try change lastName to lastname.</p>
    <p id="demo"></p>
    <script>
      var lastname, lastName;
      lastName = "Doe";
      lastname = "Peterson";
      document.getElementById("demo").innerHTML = lastName;
    </script>
  </body>
</html>
```

[Volver al inicio](#-Introducción)

### COMENTARIOS

---------------------------------------------------------------------------

Los comentarios en JavaScript pueden escribirse de dos maneras
* `/* */` (multilinea)
* `//` (una sola linea, version recomendada)

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript Comments are NOT Executed</h2>
    <p id="demo"></p>
    <script>
      var x;
      x = 5;
      // x = 6; I will not be executed
      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```
[Volver al inicio](#-Introducción)

### USO DE PUNTO Y COMA

---------------------------------------------------------------------------

Todo enunciado debe terminar en punto y coma, `;`.

> **NOTA**: Aunque estrictamente hablando el punto y coma es opcional, es buena práctica escribirlo porque en caso contrario el navegador podria interpretarlo de forma incorrecta.

Como regla general, no deben ponerse punto y coma luego de el cierre de llaves (porque las llaves encierran un bloque). Pero hay dos excepciones (en las cuales sí se debe poner punto y coma después de un cierre de llaves):
* **Cuando se define un objeto literal**
* **Cuando se crea una función con una expresión**

[Volver al inicio](#-Introducción)

## INSTALAR JSHINT EN SUBLIME TEXT 3

---------------------------------------------------------------------------

* Instalamos **SublimeLinter** desde el package control
* Instalamos **SublimeLinter**-jshint desde el package control
* Instalamos **NodeJS** en el sistema (saltar este paso si ya lo tienes instalado).
* Instalar **jshint** desde la terminal (puede ser el cmd de windows) con el comando.

```bash
npm install -g jshint 
```

Si sale que el comando `npm` no se encuentra se debe añadir `npm` a las variables de entorno de Windows. Otra forma es usar la consola de **Node** (`node command prompt`).

[Volver al inicio](#-Introducción)

## VARIABLES

---------------------------------------------------------------------------

Las **variables** son contenedores de información. Se definen con la palabra reservada `var`.

Una cosa es definir una variable y otra es asignarle un valor. Se asignan valores con el signo `=`.

> **NOTA**: Una variable sin valor asignado, devuelve `undefined`.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript Statements</h2>
    <p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>
    <p id="demo"></p>
    <script>
      var x, y, z;  // Declare 3 variables
      x = 5;    // Assign the value 5 to x
      y = 6;    // Assign the value 6 to y
      z = x + y;  // Assign the sum of x and y to z
      document.getElementById("demo").innerHTML =
      "The value of z is " + z + ".";
    </script>
  </body>
</html>
```
[Volver al inicio](#-Introducción)

### SCOPE

---------------------------------------------------------------------------

**Una variable tiene un ambito en el cual existe.** Si se declara dentro de una funcion, su **scope** (ambito) es esa función. Si no se declara dentro de una función es una variable global (existe para toda la aplicacion y no es recomendable).

> **CONSEJO**: Es recomendable siempre declarar una variable con la palabra reservada `var`.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>JavaScript Scope</h2>
    <p>Outside myFunction() carName is undefined.</p>
    <p id="demo1"></p>
    <p id="demo2"></p>
    <script>
      myFunction();
      function myFunction() {
        var carName = "Volvo";
        document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
      }
      document.getElementById("demo2").innerHTML = typeof carName;
    </script>
  </body>
</html>
```

[Volver al inicio](#-Introducción)

## TIPOS DE DATOS

---------------------------------------------------------------------------

**PRIMITIVOS** (un solo valor)
    * **Primarios**
        * **String**, Son cero o más caracteres entre comillas (simples o dobles).
        * **Number**, Son numeros enteros o decimales, positivos o negativos
        * **Boolean**, Son solo dos: `true` (verdadero) y `false` (falso). Sin embargo hay valores que se comportan como falsos (**falsy values**): `0`, `String` vacio (`""`), `Null` y `Undefined`.
    * **Especiales**
        * **Undefined**
        * **Null**
**COMPUESTOS** (más de un valor)
    * **Array**
    * **Objetos**

[Volver al inicio](#-Introducción)

## OPERADORES

---------------------------------------------------------------------------

Son signos que ejecutan operaciones.
* **Asignación** (asignan valores): `=`, `+=` y `-=`
* **Operadores aritméticos**: 
    * `+`
    * `-`
    * `*`.
    * `/` (division, parte entera)
    * `%` (division, el resto "modulo")
* **Operadores de comparacion**
    * `==` (igualdad de valor)
    * `===` (igualdad de valor y tipo)
    * `!=` (no igualdad de valor)
    * `!==` (no igualdad de valor y tipo)

[Volver al inicio](#-Introducción)

## RECURSOS

---------------------------------------------------------------------------

* [http://www.desarrolloweb.com/manuales/20/](http://www.desarrolloweb.com/manuales/20/)

* [http://www.w3schools.com/js/default.asp](http://www.w3schools.com/js/default.asp)

[Volver al inicio](#-Introducción)