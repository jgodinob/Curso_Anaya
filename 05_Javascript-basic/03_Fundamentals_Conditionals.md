# Condicionales

Los condicionales ejecutan un código solo si una condición se cumple. Existen tres tipos de condicionales: `if`; `switch` y el **operador ternario**.

[Volver al inicio](#-Condicionales)

## TIPOS

---------------------------------------------------------------------------

[Volver al inicio](#-Condicionales)

### CONDICIONAL IF

---------------------------------------------------------------------------

`if` evalua una expresión y ejecuta el bloque siguiente solo si la expresión devuelve verdadero.

```js
if(expresion){
  // codigo que se ejecutará si la expresión devuelve true
}
```

Se puede crear nuevos `if` si es que el primero falla. Para conectarlos en la misma secuencia se usa `else if()`. Debe tenerse en cuenta que solo se ejecutará uno de estos bloques (el primero en que la expresion devuelva `true`).

```js
if(expresion1){
  // bloque1
} else if(expresion2){
  // bloque 2
} else if(expresion3){
  // bloque 3
}
```

Si todas las condiciones fallan ningun bloque se ejecuta. En ese caso se puede definir un bloque que se ejecutará solo si ninguna condición es verdadera. Para eso usamos else.

```js
if(expresion1){
  // bloque1
} else if(expresion2){
  // bloque 2
} else if(expresion3){
  // bloque 3
} else {
  // este bloque se ejecutará si todas las demas condiciones fallan
}
```

[Volver al inicio](#-Condicionales)

### USO DE OPERADORES EN LAS CONDICIONES

---------------------------------------------------------------------------

Existen operadores lógicos que nos permiten evaluar más de una condicion o devolver el valor opuesto de la condicion.

* `&&` (operador "y", devuelve true si todas las condiciones son verdaderas)
* `||` (operador "o", devuelve true si al menos una condicion es verdadera)
* `!` (operador de negación, devuelve el valor opuesto al de la expresion)

[Volver al inicio](#-Condicionales)

### CONDICIONAL SWITCH

---------------------------------------------------------------------------

`Switch` evalua una expresión pero no para saber si devuelve verdadero o falso, sino para compararla con otros posibles valores. Cuando se encuentra una coincidencia el código correspondiente se ejecuta.

```js
switch(expresion){
  case valor1:
    //codigo que se ejecutará
    break;
  case valor2:
    //codigo que se ejecutará
    break;
  case valor3:
    //codigo que se ejecutará
    break;
  default:
    //codigo por defecto
}
```

Analizando el código anterior:
* La expresion se comparará con cada uno de los case
* Cada "case" va acompañado de un valor que es el que se comparará con la expresion
* Si la expresion y el valor coinciden se ejecuta el código correspondiente al case.
* Cada "case" debe terminar con un "break" para evitar que se sigan evaluando los demás casos.
* Se puede añadir un código "default" que es el que se ejecuta si ninguno de los "case" es valido.

[Volver al inicio](#-Condicionales)

### OPERADOR TERNARIO

---------------------------------------------------------------------------

Es un condicional en una sola linea. Se evalua una expresion y si es verdadera se devuelve el valor antes de los dos puntos. Si es falsa se devuelve el valor después de los dos puntos.

```js
expresion ? valor1 : valor2;
// si la expresion es verdadera se devuelve el valor1
// si la expresion es falsa se devuelve el valor2
```

[Volver al inicio](#-Condicionales)