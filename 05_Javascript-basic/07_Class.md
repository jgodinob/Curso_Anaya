# Clases en ES6

En Javascript no existía una manera específica de crear clases, de programación orientada a objetos (POO).

Sí que **existían diversas alternativas** que se podrían usar para crear componentes parecidos a lo que serían las clases en la POO tradicional, pero lo cierto es que no existía una declaración "class" como se podría esperar.

Así que en la versión reciente de Javascript ES6 una de las novedades más importantes fue la incorporación de la declaración de clases. Aunque las clases en Javascript siguen sin ser exactamente lo que se puede conocer en lenguajes más tradicionales como Java, sí resulta un avance determinante. Es importante que se conozcas, ya que ha sido muy bien acogido por la comunidad y las mejores librerías y frameworks se han decidido a incorporar las declaraciones de clases como mecanismo de creación de sus diferentes componentes o artefactos.

[Volver al inicio](#-Clases-en-ES6)

## CLASES

---------------------------------------------------------------------------

En ES6 las clases se declaran de manera similar a otros lenguajes, usando la palabra "`class`", seguida del nombre de la clase que estamos creando.
 
```js
class Coordenada {

}
``` 

Dentro de las llaves del "`class`" colocaremos el código de la clase. En lenguajes tradicionales serían típicamente los atributos y los métodos, pero en Javascript los atributos de instancia los tendremos que crear dentro del constructor.

```js
class Coordenada {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

Esta clase define un constructor, que se encarga de resumir las tareas de inicialización de los objetos. En la inicialización creamos los atributos que debe contener todo objeto que se cree a partir de esta clase.

[Volver al inicio](#-Clases-en-ES6)

## INSTANCIACIÓN DE OBJETOS

---------------------------------------------------------------------------

Como en otros lenguajes, usamos la palabra "new" para crear nuevos objetos de una clase, seguida del nombre de la clase y todos los parámetros que se deban indicar para invocar al constructor.
 
```js
var testCoordenada = new Coordenada(8,55);
``` 

El proceso de instanciación creará el nuevo objeto y su inicialización quedará en manos del constructor. En nuestro caso el construtor había creado dos propiedades para cada instancia, a los que les asignaba los valores de los puntos de la coordenada.

Los objetos poseen propiedades, también llamados atributos, que se han definido en el momento de creación de la clase o en cualquier otro momento de la vida de ese objeto. En nuestro caso se crearon los atributos "x" e "y".

Una vez creados los objetos podríamos acceder a sus atributos a partir del operador punto ("."). Usamos el nombre del objeto que acabamos de crear, el operador punto y el nombre del atributo al que queramos acceder.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>test es6 modules</title>
</head>
<body>
  <h1>Test de los módulos ES6</h1>
  <script>
    class Coordenada {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }
    var testCoordenada = new Coordenada(8,55);    
    console.log(testCoordenada.x);
  </script>
</body>
</html>
```

Eso nos imprimiría en la consola el valor del atributo "x" del objeto que se había creado anteriormente.

[Volver al inicio](#-Clases-en-ES6)

## CREACIÓN DE MÉTODOS EN LA CLASE

---------------------------------------------------------------------------

Las clases en **ES6** pueden declarar sus **métodos** de una manera resumida, pues nos ahorramos la palabra "`function`" en la declaración de la función.

```js
class Coordenada {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  esIgual(coordenada) {
    if (this.x == coordenada.x && this.y == coordenada.y) {
      return true;
    }
    return false;
  }
}
```

En el código anterior hemos agregado el método "**esIgual**" que se encarga de decir si una coordenada recibida por parámetro tiene los mismos valores de x e y que la coordenada que ha recibido el mensaje.

Recuerda que los métodos se invocan sobre el nombre del objeto, con el operador **punto** y el **nombre del método**, seguido por sus **parámetros**. Podríamos usar esta clase y el nuevo método con este código:

```js
var testCoordenada = new Coordenada(8,55);
console.log(testCoordenada.esIgual(new Coordenada(3, 1)))
``` 

Al ejecutar esto, veríamos "false" en la consola de Javascript.

[Volver al inicio](#-Clases-en-ES6)

## DECLARACIONES DE CLASE ANTES DE SU USO

---------------------------------------------------------------------------

> **IMPORTANTE**: Es indispensable que se declaren las clases antes de usarlas. A diferencia de las funciones en Javascript, que se pueden usar antes de haber sido declaradas, las clases deben conocerse antes de poder instanciar objetos.

Es decir, un código como este no funcionaría:

```js
var x = new MiClase();
class MiClase {}:
```

Si se intenta ejecutar, se recibiría por consola un mensaje como este: "**Uncaught ReferenceError: MiClase is not defined**".

[Volver al inicio](#-Clases-en-ES6)

## EXPRESIONES DE CLASE ES6

---------------------------------------------------------------------------

Otra manera de declarar clases en ES6 es mediante lo que se conoce como **expresiones**. Básicamente consiste en crear una **variable** y asignarle una **expresión** definida mediante `class` y las llaves.

```js
var Persona = class {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
``` 

La clase puede ser anónima, como en el ejemplo anterior, aunque también podría tener un nombre.

El uso de una clase definida con una expresión, a la hora de instanciar objetos, es exactamente el mismo que hemos visto anteriormente.

```js
var miguel = new Persona('Miguel Angel Alvarez');
console.log(miguel.nombre);
```

Ya conocemos como declarar clases en **ES6**, así como definir métodos. Hemos aprendido a usarlas para instanciar objetos y luego a usar esos objetos para el acceso a sus miembros, tanto sus atributos como sus métodos. A continuación veremos la herencia de clases en ES6.

[Volver al inicio](#-Clases-en-ES6)

## EXTENDER CLASES EN ES6

---------------------------------------------------------------------------

**Extender una clase** es el mecanismo por el cual una clase se construye en base a otra, es decir, el mecanismo mediante el cual se construyen clases hijas o clases derivadas. Obviamente, para **extender**, lo primero que debemos tener es la **clase padre** y mediante esta extensión construir una **clase hija**.

En Javascript, igual que en muchos otros lenguajes, para extender una clase en base a otra usamos la palabra "`extends`".

```js
class Coordenada3D extends Coordenada {

}
```

En este caso, la clase **Coordenada3D** es la **clase hija** y la clase **Coordenada** es la **clase padre**. Por tanto, la clase **Coordenada3D** hereda todas las propiedades y métodos existentes en la clase Coordenada.

En el caso particular de las clases de Javascript hemos visto que las propiedades se crean en tiempo de ejecución, es decir, no se declaran, por lo que en realidad lo que estamos heredando son únicamente los métodos.

[Volver al inicio](#-Clases-en-ES6)

## INVOCACIÓN DEL CONSTRUCTOR DE LA CLASE PADRE

---------------------------------------------------------------------------

s algo habitual que las clases hijas se apoyen en los constructores de las **clases padre** para poder hacer sus tareas de inicialización y creación de las propiedades o atributos de la clase. Para ello es posible invocar al método constructor de la clase padre, dentro del código del `constructor` de la clase hija.

El mecanismo para invocar a métodos existentes en la implementación del padre es mediante la palabra "`super`" y los paréntesis de invocación de métodos.

```js
class Coordenada3D extends Coordenada {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
}
```

Una coordenada de 3 dimensiones se define mediante tres puntos **(x, y, z)**. Así pues, el constructor de la **Coordenada3D** debe inicializar esos tres puntos. La clase **Coordenada** original (**clase padre**) ya inicializaba dos de ellos, por lo que no necesitamos repetir el código que había en Coordenada para esas inicializaciones. En el código anterior podemos apreciar cómo para la inicialización de los **atributos "x" e "y"** se invoca al constructor de la clase padre, mediante **super(x, y)**. Ya solo nos quedaría inicializar el tercer **atributo "z"**.

> **NOTA**: **Obligación de invocar a `super()` en el constructor de las clases derivadas**

Hasta aquí todo nos sonará de otros lenguajes, si es que ya tenemos nociones de programación orientada a objetos. Sin embargo en Javascript hay un detalle importante que llama la atención en el caso de los constructores de clases derivadas. Si queremos usar "`this`" en el constructor de la clase hija, estmos obligado a llamar a `super()` previamente.

Es decir, como en la práctica siempre vamos a querer usar `this` para referirnos al objeto que se está construyendo, necesitaremos invocar a `super()` siempre con antelación, para que el constructor de la clase padre haga su trabajo, antes de comenzar a operar con el objeto que se está construyendo en el contexto de la clase hija.

Por ejemplo, el siguiente código produciría un error: "**Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor**"

```js
// daría error
class Coordenada3D extends Coordenada {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
```

Tampoco se podría hacer lo siguiente:

```js
// daría error
class Coordenada3D extends Coordenada {
  constructor(x, y, z) {
    this.z = z;
    super(x, y);
  }
}
```

Un ejemplo correcto sería:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>test es6 modules</title>
</head>
<body>
  <h1>Test de los módulos ES6</h1>
  <script>
    class Coordenada {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }
    var testCoordenada = new Coordenada(8,55);    
    console.log(testCoordenada.x);
    class Coordenada3D extends Coordenada {
      constructor(x, y, z) {
        super(x, y);
        this.z = z;
      }
    }
    var testCoordenada3D = new Coordenada3D(30,55,9);  
    console.log(testCoordenada3D.x);
    console.log(testCoordenada3D.z); 
  </script>
</body>
</html>
```

[Volver al inicio](#-Clases-en-ES6)
