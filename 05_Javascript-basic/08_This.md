# This

`this` es una palabra "comodin" en JavaScript que siempre hace referencia a un objeto. Y el objeto al que hace referencia depende de las circunstancias.

[Volver al inicio](#-This)

## STRICT MODE

---------------------------------------------------------------------------

Es una característica de JavaScript habilitada desde ES5. Cuando se habilita el interprete lanza errores y ayuda en el debug.

```js
(function(){
  "use strict";
  console.log(this);
})();
```

> **NOTA**: Dentro de una funcion, `this` devuelve `undefined` **si se usó** `use strict`, y devuelve
  el objeto global (`window`) **si no se usa** `use strict`.

```js
(function(){
  "use strict";
  console.log(this);
})();
// undefined
(function(){
  console.log(this);
})();
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

[Volver al inicio](#-This)

## THIS EN OBJETOS

---------------------------------------------------------------------------

Si se usa `this` dentro de un método de un objeto, `this` hace referencia a este objeto.

```js
var miMascota = {
  nombre: "Pluto",
  llamar: function(){
    return this.nombre + ", ven aquí";
    }
  };
```

[Volver al inicio](#-This)

## THIS EN EVENTOS HANDLER

---------------------------------------------------------------------------

Si `this` está dentro de un **event handler**, `this` apunta al elemento que dispara el evento. 

```js
var boton = document.getElementById("boton");
boton.addEventListener('click', function(){
  alert(this.textContent);
});
```

> **NOTA**: El método `addEventListener()` adjunta un **gestor de eventos** a un elemento sin sobrescribir los **gestor de eventos** existentes. (**EN CRISTIANO**, adjunta al elemento un escuchador de eventos extra que dispare un método adjunto).

[Volver al inicio](#-This)

## THIS EN UN CONSTRUCTOR

---------------------------------------------------------------------------

Si `this` está dentro de un constructor, se referirá al objeto instanciado.

```js
function Persona(parametroNombre, parametroEdad){
  this.apodo = parametroNombre;
  this.edad = parametroEdad;
}
var alumno = new Persona("Martin",20);
var amigo = new Persona("Carlos",15);
var hermano = new Persona("Pepe",30);
```

[Volver al inicio](#-This)