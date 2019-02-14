# Arrays

Un **array** es una coleccion de valores (se pueden combinar tipos de datos en el mismo array).

Un array se define con sus valores separados por comas y todo encerrado entre corchetes

```js
var miArray = [1,2,3,4,5];
```

[Volver al inicio](#-Arrays)

## SINTAXIS

---------------------------------------------------------------------------

[Volver al inicio](#-Arrays)

### .LENGTH

---------------------------------------------------------------------------

Para conocer el número de elementos de un array se usa la propiedad `length`.

```js
var miArray = [1,2,3,4,5];
miArray.length; //5
```

[Volver al inicio](#-Arrays)

### RECUPERAR Y DEFINIR ELEMENTOS DE UN ARRAY

---------------------------------------------------------------------------
  
Cada elemento del array posee un indice que comienza en cero (para el primero). Para recuperar un elemento se pasa el indice entre corchetes al array.

```js
var miArray = [1,2,3,4,5];
miArray[0]; //1
miArray[2]; //3
```

Tambien se pueden añadir elementos o reasignar los existentes usando el indice

```js
var miArray = [1,2,3,4,5];
miArray[6] = 6;
```

[Volver al inicio](#-Arrays)

### ARRAYS MULTIDIMENSIONALES

---------------------------------------------------------------------------

Se pueden poner arrays dentro de otros. Para recuperar los elementos de estos arrays anidados simplemente se pasan los indices.

```js
var miNuevoArray = [1,2,3, ["hola", "mama"], 4 ,5 ];
miNuevoArray[3][1]; // "mama"
```

[Volver al inicio](#-Arrays)

### .JOIN ("SEPARADOR")

---------------------------------------------------------------------------

El método `.join()` convierte un array a un string. Como parámetro se pasa el caracter o caracteres que separará a cada elemento en el string resultante.

```js
var miArray = [1,2,3,4,5];
miArray.join(";"); // "1;2;3;4;5"
```

[Volver al inicio](#-Arrays)

### .SPLIT ("SEPARADOR")

---------------------------------------------------------------------------

El método `.split()` convierte un string a un array. Como parámetro se le pasa el caracter que usará el interprete para saber cuando crear un nuevo elemento en un array (por ejemplo, un espacio). Si se quiere que cada letra de una palabra se convierta en un elemento de un array, se pasa un string vacio como parámetro.

```js
var string = "fantastico";
string.split(""); //["f", "a", "n", "t", "a", "s", "t", "i", "c", "o"]
var string2 = "Mi nombre es José";
string.split(" "); //["Mi", "nombre", "es", "José"]
```

[Volver al inicio](#-Arrays)

### AÑADIR ELEMENTOS AL ARRAY CON .PUSH() Y .UNSHIFT()

---------------------------------------------------------------------------

El método `.push()` añade nuevos items al final del array. Mientras que el método unshift añade nuevos items al inicio del array. En ambos casos los nuevos elementos se pasan como parámetros

Ambos métodos devuelven el nuevo `.length` del array.

```js
var array = [1,2,3];
array.push("a","b","c"); // 6
array; // [1, 2, 3, "a", "b","c"]
```

[Volver al inicio](#-Arrays)

### QUITAR ELEMENTOS DEL ARRAY CON .POP() Y .SHIFT()

---------------------------------------------------------------------------

El método `.pop()` elimina el último elemento del array. Mientras que el método `.shift()` elimina el primer elemento del array.

Ambos métodos no requieren parámetros y ambos devuelven el elemento eliminado.

```js
//usaremos el array del ejemplo anterior
array; // [1, 2, 3, "a", "b","c"]
array.pop(); // "c";
array; // [1, 2, 3, "a", "b"]
array.shift(); // 1
array; // [2, 3, "a", "b"]
```

[Volver al inicio](#-Arrays)

### CONCATENAR ARRAYS CON .CONCAT()

---------------------------------------------------------------------------

Este método concatena un array con otro. El segundo array se pasa como argumento.

```js
var array1 = [1,2,3];
var array2 = ["a","b","c"]
var array3 = array1.concat(array2);
array3; //[1, 2, 3, "a", "b", "c"]
```

[Volver al inicio](#-Arrays)

### EXTRAER ELEMENTOS DE UN ARRAY CON .SLICE()

---------------------------------------------------------------------------

EL método `.slice()` extrae elementos indicados por dos parámetros numéricos. Ambos son índices del array. Con este método se pueden crear nuevos arrays basados en otros.

* El primer parámetro indica el primer caracter que se extraerá
* El segundo parámetro indica el índice en el que se detendrá el método. Por tanto, el elemento al que corresponde este índice no se extraerá.
* El método `.slice()` no modifica el array original.

```js
var array = [1,2,3,4,5];
var array2 = array.slice(2,4);
array2; //[3,4]
// empezó a extraer desde array[2] (primer parámetro)
// y terminó de extraer en array[4] (segundo parámetro)
// pero no toma en cuenta a este ultimo
```

[Volver al inicio](#-Arrays)

### ELIMINAR Y AÑADIR ELEMENTOS A UN ARRAY CON .SPLICE()

---------------------------------------------------------------------------

El método `.splice()` recibe dos parámetros obligatorios (numeros enteros que corresponden a indices del array).

* El primero es el indice en el que comenzará a eliminar elementos
* El segundo es la cantidad de elementos que se eliminarán

Esté método retorna los elementos eliminados y modifica el array original

```js
var array = [1,2,3,4,5];
var array 2 = array.splice(2,2);
array2; // [3,4]
array; // [1,2,5]
```

También se puede usar `.splice()` para añadir elementos al array. Basta con añadir más parámetros (a partir del tercero). El primero de estos elementos nuevos se insertará en el indice indicado en el primer parámetro.

```js
var array = [1,2,3,4,5];
var array2 = array.splice(2,2,"a","b");
array2 = [3,4]
array; // [1, 2, "a", "b", 5]
```

[Volver al inicio](#-Arrays)