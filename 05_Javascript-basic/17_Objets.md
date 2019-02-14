# Objetos 

Los objetos son conjuntos estructurados de datos separados por comas y encerrados entre llaves. Cada dato se conoce como propiedad y tiene una estructura de `clave : valor`.

La clave es el nombre de la propiedad y el valor es un tipo de dato (`string`, `number`, `boolean`, `array`, `objet`, `function`) que viene a ser el valor de la propiedad.

Cuando el valor de una propiedad es una funcion, hablamos de un método.

```js
var auto = {
  marca           : "Toyota",     // propiedad marca
  year            : 2015,         // propiedad year
  color           : "red",        // propiedad color
  dobleTraccion   : true,         // propiedad dobleTraccion
  velocidad       : 0,            // propiedad velocidad
  acelerar        : function(){   // propiedad acelerar (método)
    this.velocidad++;
  }
};
```

[Volver al inicio](#-Objetos)

## CONCEPTOS DE LA PROGRAMACIÓN ORIENTADA A OBJETOS

---------------------------------------------------------------------------

[Volver al inicio](#-Objetos)

### NOMENCLATURA

---------------------------------------------------------------------------

* **¿Qué es un objeto?** Una abstraccion de los objetos del mundo real que tienen caracteristicas (propiedades) como el color, el tamaño, el peso, etc; y también utilidad (métodos), es decir, para qué sirven, cual es su funcion.
* **¿Qué es una clase?** Es la "plantilla" a partir de la cual se crean los objetos. Esta plantilla, ayuda a no tener que repetir la estructura cada vez que se crea un objeto.
* **¿Qué es la Herencia?**  Ocurre cuando un objeto hereda propiedades y métodos de otro.
* **¿Qué es una Instancia?** Cada objeto creado a partir de una clase. Esta creación se conoce como "instanciación".
* **¿Qué es un constructor?** Es una función que permite construir (instanciar) un objeto a partir de una clase.

> **NOTA**: JavaScript no posee clases, entonces se emula las clases a traves de una función que es llamada función constructora o simplemente constructor.

[Volver al inicio](#-Objetos)

### INSTANCIAS

---------------------------------------------------------------------------

Para instanciar las clases se usa el operador `new`.

```js
//Ejemplo (fecha1 y fecha2 son instancias de Date);
var fecha = new Date();
console.log(fecha.getMinutes());
var fecha2 = new Date();
console.log(fecha2.getDay());
```

> **NOTA**: Todos los tipos de datos poseen constructores aunque **no es recomendable usarlos**, sino declararlos como literales (escribiendo sus valores)

```js
var string = new String('Hola mundo');
var numero = new Number(10);
var array = new Array(1,2,3);
```

Cuando se instancia un objeto a partir de un constructor se puede saber quien es su constructor con la propiedad `.constructor`

```js
console.log(array.constructor);
function Array() { [native code] }
```

Cada objeto tiene un `prototype` que define las propiedades y métodos base.

```js
var string = new String('Hola mundo');
console.log(string.miPropiedad);
String.prototype.miPropiedad = "Esta es mi propiedad";
console.log(string.miPropiedad);
var nuevoString = "Soy un nuevo string";
console.log(nuevoString.miPropiedad);
```

[Volver al inicio](#-Objetos)

### CONSTRUCTOR

---------------------------------------------------------------------------

Es una función que contiene los métodos y propiedades del objeto. A partir del constructor se instancian los nuevos objetos. Por convencion, su nombre debe comenzar en mayúscula.

```js
function Persona(){
  this.nombre = "Luis";
  this.apellido = "Perez";
  this.nombreCompleto = this.nombre + " " + this.apellido;
  this.edad = 30;
}
function Pais(nombre,capital,idioma,moneda){
  this.nombre = nombre;
  this.capital = capital;
  this.idioma = idioma;
  this.moneda = moneda;this.saludo = "Bienvenido a " + this.nombre;
}
var amigo = new Persona();
console.log(amigo);

var spain = new Pais("España", "Madrid", "Español", "Euro");
var colombia = new Pais("Colombia", "Bogotá", "Español", "Peso colombiano");

colombia.musica = "vallenato";

console.log(spain.saludo);
console.log(colombia.saludo);
```

[Volver al inicio](#-Objetos)

## PROPIEDADES

---------------------------------------------------------------------------

[Volver al inicio](#-Objetos)

### PROPIEDAD ESTÁTICA

---------------------------------------------------------------------------

Son las que existen solamente dentro del constructor y no son accesibles ni modificables por fuera de él. Se crean por fuera del constructor y al no usar this no son accesibles desde la instancia.

```js
function Pais(nombre,capital) {
  this.nombre = nombre; 
  this.capital = capital;
}
Pais.propiedadEstatica = "Yo estoy fuera de las instancias";
var mexico = new Pais("méxico","méxico");
```

[Volver al inicio](#-Objetos)

### PROPIEDADES PUBLICAS

---------------------------------------------------------------------------

Son accesibles y modificables en las instancias. Se declaran dentro del constructor con this.

```js
function Persona(nombre){
  this.nombre = nombre;
  this.saludar = function(){
    return "Bienvenido " + this.nombre;
  };
}

var amigo = new Persona("Jorge");
amigo.nombre = "Carlos";
```

[Volver al inicio](#-Objetos)

### PROPIEDADES PRIVADAS

---------------------------------------------------------------------------

Se basan en el scope del constructor para no ser accesibles desde afuera.

```js
function Mascota(){
  var nombre = "Fido";
  this.llamar = function(){
    return nombre + ", ven aquí";
  };
}

var fido = new Mascota();
```

[Volver al inicio](#-Objetos)

## METODOS

---------------------------------------------------------------------------

[Volver al inicio](#-Objetos)

### METODOS ESTATICOS

---------------------------------------------------------------------------

Similar a las **propiedades estáticas**, se crean fuera del constructor y no son accesible ni modificables por las instancias. Solo se pueden llamar con el constructor.

```js
function Calculos(){

}

Calculos.piesAMetros = function(pies){
  return pies * 0.3048;
};

var miCalculo = new Calculos();
```

[Volver al inicio](#-Objetos)

### METODOS PUBLICOS

---------------------------------------------------------------------------

Similar a las propiedades estáticas, se crean dentro del constructor usando this. Y son accesibles desde las instancias.

```js
function Mascota(nombre){
  this.llamar = function(){
      return nombre + ", ven aqui";
  };
}
var fido = new Mascota("fido");
```

[Volver al inicio](#-Objetos)

### METODOS PRIVADOS

---------------------------------------------------------------------------

Se declaran dentro del constructor sin el uso de this

```js
function Auto(velocidad){
  this.velocidad = velocidad;
  var _this = this;
  function acelerarPrivado(){
    _this.velocidad++;
  }
  this.acelerarPublico = function(){
      acelerarPrivado();
      return this.velocidad;
  };
}

var miCarro = new Auto(10);
```

[Volver al inicio](#-Objetos)

### METODOS PRIVILEGIADOS

---------------------------------------------------------------------------
 
Son métodos que permiten acceder a variables privadas (propiedades privadas) para recuperar (`get`) o definir (`set`) sus valores.

Se usan para crear `getters` y `setters` 

```js
function Player(){
  var points = 0;
  this.getPoints = function(){
    return points;
  };
  this.setPoints = function(newPoints){
    points = newPoints;  
    return points;  
  };
  this.addPoints = function(){
    points++;
    return points;
  };
}

var jorge = new Player();
```

[Volver al inicio](#-Objetos)

## HERENCIA

---------------------------------------------------------------------------

Significa crear un objeto a partir de otro heredando propiedades y métodos.

```js
function Mascota(nombre, color){
  this.nombre = nombre;
  this.color = color;
}

var fido = new Mascota("Fido");
var dino = new Mascota("Dino");
```

[Volver al inicio](#-Objetos)

### AÑADIR PROPIEDAD

---------------------------------------------------------------------------

```js
function Mascota(nombre, color){
  this.nombre = nombre;
  this.color = color;
}

var fido = new Mascota("Fido");
var dino = new Mascota("Dino");
// Se añade la propiedad edad al prototipo
Mascota.prototype.edad = 5;
 
console.log(fido.edad);
console.log(dino.edad);
```

> **NOTA**: Aunque la propiedad edad no exista en las instancias si es accesible desde ellas porque esta en el prototipo

[Volver al inicio](#-Objetos)

### NUEVO CONSTRUCTOR

---------------------------------------------------------------------------

Creamos un nuevo constructor que debe heredar las propiedades de Mascota

```js
function Mascota(nombre, color){
  this.nombre = nombre;
  this.color = color;
}

function Perro(nombre,color){
  // obtenemos los parámetros de Mascota
  // El primer parametro (this) se refiere a este constructor
  Mascota.prototype.constructor.call(this,nombre,color);
}

// El prototype de Perro es una instancia de Mascota
// asi puede heredar de ella
Perro.prototype = new Mascota();

// Se regresa el constructor original ya que en la
// instruccion anterior, el constructor se sobreescribió
Perro.prototype.constructor = Perro;

// duque es una instancia de Perro, pero Perro ha heredado
// las propiedades de Mascota
var duque = new Perro("duque","negro");
```

[Volver al inicio](#-Objetos)

### HERENCIA CON OBJETO LITERAL

---------------------------------------------------------------------------

```js
var miMascota = {
  nombre: '',
  edad: 0,
  init: function(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
};

var miPerro = Object.create(miMascota);
```

[Volver al inicio](#-Objetos) 