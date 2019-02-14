# Strings

Un **string** es un cojunto de cero o más caracteres rodeados por comillas simples o dobles

```js
var string = "Soy un string";
```

[Volver al inicio](#-Strings)

## SINTAXIS

---------------------------------------------------------------------------

[Volver al inicio](#-Strings)

### .LENGTH

---------------------------------------------------------------------------

Se puede saber la cantidad de caracteres de un string con la propiedad `.length`

```js
var string = "Soy un string";
string.length; //13
.indexOf("caracter")
```

Se puede conocer la posicion de un caracter con el método `.indexOf()`. Las posiciones se empiezan a contar de cero. Si el caracter no se encuentra, se devuelve `-1`.

```js
var string = "Soy un string";
string.indexOf("S"); // 0
string.indexOf("n"); // 5
string.indexOf("a"); // -1
```

[Volver al inicio](#-Strings)

### RECUPERAR CARACTERES

---------------------------------------------------------------------------

Se pueden recuperar caracteres de un **string** indicándole su indice entre parentesis

```js
var string = "Soy un string";
string[5]; // "n"
string[8]; // "t"
```

[Volver al inicio](#-Strings)

### .TOLOWERCASE() Y .TOUPPERCASE()

---------------------------------------------------------------------------

Los métodos `.toLowerCase()` y `.toUpperCase()` convierten el **string** a minusculas o mayusculas respectivamente.

```js
var string = "Soy un string";
string.toLowerCase(); // "soy un string"
string.toUpperCase(); // "SOY UN STRING"
```

[Volver al inicio](#-Strings)

### .REPLACE("ORIGINAL", "REEMPLAZO")

---------------------------------------------------------------------------

El método `.replace()` se usa para remplazar partes de un string por otro string. No remplaza al string original. El primer parámetro es el string a remplazar y el segundo es el nuevo string.

```js
var string = "Soy un string";
var string2 = string.replace("string", "nuevo string");
  // "Soy un nuevo string"
string; // "Soy un string"
```

[Volver al inicio](#-Strings)

### .SUBSTRING(INICIO, FIN)

---------------------------------------------------------------------------

EL método `.substring()` permite extraer caracteres de un string y crear otro. No modifica el string original.

El método `.substring()` requiere dos parámetros que son indices del string. El primer parámetro es el indice desde el cual se empieza a extraer. El segundo es el indice en el que se detiene la busqueda (aunque este caracter no es incluido en el nuevo string)

```js
var string = "Soy un string";
string3 = string.substring(1,3); // oy
```

[Volver al inicio](#-Strings)

### .LICE(INICIO, FIN)

---------------------------------------------------------------------------

Con parámetros positivos `.slice()` funciona igual que `.substring()`. La diferencia es que admite parámetros negativos.

El parámetro negativo indica que contará esa cantidad de caracteres comenzando desde el final

```js
var string = "Soy un string";
string.slice(-4); // "ring"
string.slice(-5,-1); // "trin"
string.slice(2,-3); // "y un str"
```

El método `.slice()` no modifica el string original

[Volver al inicio](#-Strings)

### .TRIM()

---------------------------------------------------------------------------

El método `.trim()` (sin parámetros) elimina los espacios sobrantes al inicio y final de un string.

```js
var nuevoString = "  tengo muchos espacios de más     ";
nuevoString.trim(); // "tengo muchos espacios de más"
```

[Volver al inicio](#-Strings)