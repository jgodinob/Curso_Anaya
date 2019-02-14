# Primeros Pasos

Ya hemos visto todo lo relacionado con el origen de Ecmascript y de que se trata.

Podemos pasar a ver las variables y los parámetros que se han añadido en este estándar de Javascript. 

Este va a ser el objetivo del tema, dominar cada uno de estos conceptos y variables.

[Volver al inicio](#-Primeros-Pasos)

## LET Y CONST

---------------------------------------------------------------------------

[Volver al inicio](#-Primeros-Pasos)

### LET

---------------------------------------------------------------------------

La variable tipo `let`, a diferencia de `var` no puede ser accesible más allá de su **scope**.

```js
(function() {
    console.log(global); // undefined
    console.log(local); // undefined
    if(true) {
        var global = "Soy global";
        let local = "Soy solo local";
    }
    console.log(global); // Soy global
    console.log(local); //undefined
})();
```

Podemos observar como fuera del scope `if(true){…}`, la variable definida con `let` no existe, mientras que la definida con `var`, ha sido asignada al objeto raíz `window` por lo que podemos usarla como una variable global fuera de su scope.

[Volver al inicio](#-Primeros-Pasos)

### CONST

---------------------------------------------------------------------------

De forma análoga a otros lenguajes, se ha definido un tipo de variable que **solo puede asignarse en su declaración, y no puede ser modificada**.

```js
const URL = 'www.mydomain.com';
URL = 'Loquesea'; // ERROR!!
``` 

Como en el resto de javascript, si se define dentro de un scope, solo pertenecerá a ese scope.

[Volver al inicio](#-Primeros-Pasos)

## SET Y GET

---------------------------------------------------------------------------

Las clases ES6 brindan una nueva sintaxis para **getters** y **setters** en las propiedades de los objetos. **Get** y **set** nos permite ejecutar código para leer o escribir una propiedad.

ES5 también tenía **getters** y **setters**, pero no se usaba mucho debido a navegadores IE más antiguos. Los **getters** y **setters** de ES5 no tienen una sintaxis tan buena como ES6. 

Ejemplo: un `get` y un `set` para la propiedad de nombre.

```js
class Persona {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre.toUpperCase();
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    esPersona() {
        console.log(this._nombre + ' es una persona.');
    }
}
let sergio = new Persona('Sergio');
console.log(sergio.nombre);  // La salida es 'SERGIO'
```