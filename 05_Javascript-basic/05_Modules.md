# Módulos

Una de las estupendas novedades de ES6 es la posibilidad de crear **módulos**, que son piezas de código que podemos escribir en ficheros independientes. Los módulos pueden tener código, como clases, funciones, objetos o simples datos primitivos, que se puede importar desde otros archivos.

Con la palabra "`export`" se consigue exportar algún parámetro del módulo, para que se pueda usar desde fuera. Con la palabra "`import`" se consigue traer algo exportado por un módulo independiente.

> **IMPORTANTE**: Para evitar problemas de **CORS** ejecutaremos el comando `http-server -o` previa instalación del paquete [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server).
> **IMPORTANTE**: Además se recomienda tener el plugin de chrome [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

[Volver al inicio](#-Módulos)

## MÓDULOS

---------------------------------------------------------------------------

Lo primero que hay que explicar es que se debe hacer una acción especial para que el navegador procese correctamente los archivos Javascript que usan módulos. Básicamente se trata de advertir al navegador que el script Javascript usa módulos, para lo que necesitas traerte ese código desde el HTML usando una sintaxis especial en la etiqueta SCRIPT. Simplemente tenemos que marcar con `type="module"` el script que queremos incluir.

```js
<script src="index.js" type="module"></script>
```

A partir de esto, en `index.js` ya se podría usar imports de otros módulos, tal como explicaremos seguidamente.

[Volver al inicio](#-Módulos)

### EXPORT

---------------------------------------------------------------------------

Como hemos dicho, usamos la sentencia `export` para permitir que otros módulos usen código del presente módulo.

Con un `export` puedes exportar todo tipo de **parámetros** de software, como datos en variables de tipos primitivos, funciones, objetos, clases. Ahora vamos a comenzar viendo un caso sencillo de hacer un `export`, luego veremos más alternativas.

```js
export const pi = 3.1416;
``` 

Simplemente anteponemos la palabra export a aquello que queremos exportar hacia afuera.

[Volver al inicio](#-Módulos)

### IMPORT

---------------------------------------------------------------------------

En el momento que queramos cargar alguna cosa de un módulo externo, usaremos la sentencia `import`. Para ello tenemos que indicar qué es lo que queremos importar y la ruta donde está el módulo que contiene aquello que se desea importar.

```js
import { pi } from './pi-module.js';

```
> **NOTA**: Así estamos importando la anterior constante definida "pi", que estaba en un archivo aparte, en un módulo llamado "pi-module.js". Observaremos por la ruta que pi-module.js está en la misma ruta que el archivo desde el que importamos.
Una vez importado ese dato (cualquier dato) lo podemos usar como si la declaración hubiera sido hecha en este mismo archivo.

[Volver al inicio](#-Módulos)

### USO DE MÓDULOS

---------------------------------------------------------------------------

Para aclarar más el proceso, vamos a ver listados los tres archivos que se pueden tener para hacer el primer test de los módulos de ES6.

**index.html**

Un archivo **index.html** que tendrá que acceder al script que trabaja con módulos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>test es6 modules</title>
</head>
<body>
  <h1>Test de los módulos ES6</h1>
  <script src="index.js" type="module"></script>
</body>
</html>
```

**index.js** Este es el archivo principal de Javascript, en el que se hacen los `import`.

Una vez que se ha hecho el `import` correspondiente, se puede usar aquello que se haya importado.

```js
import { pi } from './pi-module.js';
console.log(pi);
```

Se podría importar varias cosas al mismo tiempo de un módulo, en cuyo caso entre las llaves colocarías todos los elementos a importar, separados por comas.

```js
import { pi, e, log2 } from './pi-module.js';
```

**pi-module.js** Este es el archivo que realiza el export, el módulo que exporta hacia afuera los parámetros de software que sean necesarios.

```js
export const pi = 3.1416;
/* En este archivo puedo tener código Javascript
 que no exporto... es como código privado del módulo */
var variableLocalPrivada = 222;
```

> **NOTA**: Es interesante observar cómo el módulo puede tener parámetros que exporta y parámetros que se quedan dentro. Por ejemplo se puede tener funciones que realizan cálculos internos, que no necesitan o que no deberían ser invocadas desde fuera del módulo. Obviamente, esto da el trabajo de ser explícito en todo lo que se desea exportar, pero permite tener código privado que no se puede usar desde fuera.

[Volver al inicio](#-Módulos)

### EXPORT DEFAULT

---------------------------------------------------------------------------

Cuando exportamos algo en un módulo podemos definir que sea la **exportación por defecto**. No es necesario que se exporte nada por defecto en un módulo, pero en caso de hacerlo, se debe tener en cuenta que sólo se puede exportar una cosa "`default`" por módulo.

Por ejemplo, así se puede exportar una función en un módulo, marcando que sea la exportación predeterminada:

Archivo **validate-email-function.js** con export default

```js
function validateEmail(email) {
  if(email.indexOf('@') != -1) {
    return true;
  }
  return false
}

export default validateEmail
```

**Importar el elemento default** A la hora de importar el elemento marcado como default tenemos que hacer el import de una manera ligeramente diferente.

```js
import validateEmail from './validate-email-function.js';
```

[Volver al inicio](#-Módulos)

### CREAR UN ALIAS (NAMESPACE) PARA ELEMENTOS IMPORTADOS

---------------------------------------------------------------------------

Otro aspecto útil que se puede realizar es crear un **alias** para los elementos importados, con la palabra "`as`". Vamos a verlo con un ejemplo. Imaginemos que tenemos varias funciones definidas en un módulo.

```js
export function reir() {
  console.log('jajaja');
}
export function reirFuerte() {
  console.log('JAJAJAJAJA');  
}
export function reirSuave() {
  console.log('jeje');
}
```

Ya sabemos que podríamos importarlas todas de una vez, separando por comas todo aquello que queremos importar. Luego podríamos usar las funciones como si las hubiéramos declarado en este mismo archivo.

```js
import { reir, reirFuerte, reirSuave} from './risas.js';

reir();
reirFuerte();
reirSuave();
```

Pero otra posibilidad sería obtener todos los elementos exportados, asignando un alias, como un namespace, mediante el cual se conocerán en el módulo que importamos. En este caso, todas las funciones dependerán del alias, como se puede ver a continuación.

```js
import * as risas from './risas.js';

risas.reir();
risas.reirFuerte();
risas.reirSuave();
```

[Volver al inicio](#-Módulos)

### ORGANIZAR EXPORTS Y DECLARARLOS JUNTOS

---------------------------------------------------------------------------

Algo que se puede realizar es **exportar** una única vez en el módulo todo lo que se quiera que se vea desde fuera. Es una práctica normal, que permite tener un poco más de orden en lo que se está enviando en un módulo hacia el exterior. Es totalmente opcional.

```js
function titular(cadena) {
  return `<h1>${cadena}</h1>`;
}
function parrafo(cadena) {
  return `<p>${cadena}</p>`;
}
function salto() {
  return '<br>';
}

export const tags = {
  titular,
  parrafo,
  salto
}
```

Lo único que se está exportando es un objeto, donde se tienen las funciones que se desea enviar hacia fuera. Ahora, al importar, con que se haga un `import`, se podrás traer todos los elementos exportados. Aunque, como se ve, realmente es solo uno que los contiene a todos.

```js
import { tags } from './tags.js';

console.log(tags.titular('Hola!'));
console.log(tags.parrafo('Esto es un test de los módulos ES6'));
```