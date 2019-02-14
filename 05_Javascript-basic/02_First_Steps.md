# Primeros Pasos

Ya hemos visto todo lo relacionado con el origen de Ecmascript y de que se trata.

Podemos pasar a ver las variables y los parámetros que se han añadido en este estándar de Javascript. 

Este va a ser el objetivo del tema, dominar cada uno de estos conceptos y variables.

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