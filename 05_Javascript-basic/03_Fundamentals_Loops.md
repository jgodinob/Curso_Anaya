# Loops

Los **loops** permiten ejecutar un código multiples veces para evitar tener que repetirlo a mano. Veremos cuatro:
* `for`
* `while`
* `do`
* `for in`

[Volver al inicio](#-Loops)

## TIPOS

---------------------------------------------------------------------------

[Volver al inicio](#-Loops)

### FOR

---------------------------------------------------------------------------

Este **loop** requiere tres elementos para definir las iteraciones:
* Una variable que sea el indice (contará la cantidad de iteraciones)
* Una condición que detenga las iteraciones
* Una modificacion a la variable para que el loop pueda detenerse.

El bloque a continuación se ejecutará la cantidad de veces indicadas.

```js
for(var i = 0; i<10; i++){
  console.log(i)
}
// el loop anterior devolvera por consola 0 1 2 3 4 5 6 7 8 9
```

Ejemplo: recorriendo un array:

```js
var alumnos = ["Maria", "Jose", "Carlos", "Andres", "Juan"];
for(var i = 0; i < alumnos.length; i++){
  console.log("Buenos días " + alumnos[i]");
}
//"Buenos días Maria"
//"Buenos días Jose"
//"Buenos días Carlos"
//"Buenos días Andres"
//"Buenos días Juan"
```

[Volver al inicio](#-Loops)

### WHILE

---------------------------------------------------------------------------

El loop `while` ejecuta un codigo mientras se cumpla una condicion. Esta condicion debe ponerse entre parentesis. Es similar a for pero con otra sintaxis.

Ejemplo: recorriendo un array

```js
var alumnos = ["Maria", "Jose", "Carlos", "Andres", "Juan"];
var i = 0;
while(i < alumnos.length) {
  console.log("Buenos días " + alumnos[i]");
  i++;
}
//"Buenos días Maria"
//"Buenos días Jose"
//"Buenos días Carlos"
//"Buenos días Andres"
//"Buenos días Juan"
```

[Volver al inicio](#-Loops)

### DO

---------------------------------------------------------------------------

Este loop es similar a while con la diferencia de que la condicion se evalua al final. Con lo cual, el código se ejecuta al menos una vez (incluso si la condicion no se cumple).

Ejemplo: recorriendo un array

```js
var alumnos = ["Maria", "Jose", "Carlos", "Andres", "Juan"];
var i = 0;
do {
console.log("Buenos días " + alumnos[i]");
  i++;
} while(i < alumnos.length)
//"Buenos días Maria"
//"Buenos días Jose"
//"Buenos días Carlos"
//"Buenos días Andres"
//"Buenos días Juan"
```

[Volver al inicio](#-Loops)

### FOR IN

---------------------------------------------------------------------------

Este loop permite iterar sobre arrays u objetos usando una variable para referenciar a los indices.

Ejemplo: recorriendo un array

```js
var alumnos = ["Maria", "Jose", "Carlos", "Andres", "Juan"];
for(var i in alumnos){
  console.log("Buenos días " + alumnos[i]");
}
//"Buenos días Maria"
//"Buenos días Jose"
//"Buenos días Carlos"
//"Buenos días Andres"
//"Buenos días Juan"
```

[Volver al inicio](#-Loops)