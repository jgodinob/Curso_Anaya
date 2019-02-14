# Math

El objeto `Math` permite trabajar con numeros.

```js
(function(){
  "use strict";
  console.log(Math.PI);
  console.log(Math.E);
  var numero = 3.4;
  // el método ceil redondea hacia arriba
  var resultado = Math.ceil(numero);
  console.log(resultado);
})();
```

[Volver al inicio](#-Math)

## MÉTODOS

---------------------------------------------------------------------------

[Volver al inicio](#-Math)

### PI

---------------------------------------------------------------------------

```js
console.log(Math.PI);
// 3.141592653589793
```

[Volver al inicio](#-Math)

### E

---------------------------------------------------------------------------

```js
console.log(Math.E);
// 2.718281828459045
```

[Volver al inicio](#-Math)

### CEIL

---------------------------------------------------------------------------

El método `.ceil()` redondea hacia arriba.

```js
var numero = 3.4;
var resultado = Math.ceil(numero);
console.log(resultado);
```

[Volver al inicio](#-Math)

### FLOOR

---------------------------------------------------------------------------

El método `.floor()` redondea hacia abajo.

```js
var numero = 3.4;
var resultado = Math.floor(numero);
console.log(resultado);
```

[Volver al inicio](#-Math)

### ROUND

---------------------------------------------------------------------------

El método `.round()` redondea segun el valor.

```js
var numero = 3.4;
var resultado = Math.round(numero);
console.log(resultado);
```

[Volver al inicio](#-Math)

### OTRAS FUNCIONES

---------------------------------------------------------------------------

* `.min()`, devuelve el minimo de un set de parametros
* `.max()`, devuelve el maximo de un set de parametros
* `.abs()`, devuelve al valor absoluto
* `.sqrt()`, devuelve la raiz cuadrada
* `.random()`, devuelve un numero aleatorio entre 0 y 1

```js
var min = 10;
var max = 18;
var aleatorio = Math.floor(Math.random() * (max-min)) + min;
console.log(aleatorio);
console.log(Math.min(2,3,4,5,6,99));
```

[Volver al inicio](#-Math)