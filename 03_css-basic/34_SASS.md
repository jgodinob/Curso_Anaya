# Sass

Puede instalar **Sass** globalmente usando `npm install -g sass` (necesitas Node.js, `node -v` y `npm -v`) que le dará acceso al ejecutable sass. También puede añadirlo a su proyecto usando `npm install --save-dev sass`. Esto proporciona el ejecutable así como una biblioteca:

[https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)

```bash
$ npm install -g sass
C:\Users\usuario\AppData\Roaming\npm\sass -> C:\Users\usuario\AppData\Roaming\npm\node_modules\sass\sass.js
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\sass\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ sass@1.16.1
added 135 packages from 107 contributors in 17.459s
```

> **NOTA**: Documentación origianl: [https://sass-lang.com/](https://sass-lang.com/)

> **NOTA**: Transpilador online: [https://www.sassmeister.com/](https://www.sassmeister.com/)

[Volver al inicio](#-SASS)

## CONSOLA

---------------------------------------------------------------------------

[Volver al inicio](#-SASS)

### TRANSPILAR DE SASS A CSS

---------------------------------------------------------------------------

Podemos transpilar lenguaje **\*.scss** a **\*.css** mediante el siguiente comando, directamente indicando el archivo inicial y final:

```bash
sass ej.scss ej-compilado.css
```

[Volver al inicio](#-SASS)

### USAR WATCHER

---------------------------------------------------------------------------

Podemos transpilar de forma automática lanzando un **watcher** ("espía") que detecte cambios en los archivos originales y final y transpile automáticamente:

```bash
sass --watch origen.scss destino.css
```

Además podemos hacerlo con todo el contenido de una carpeta:

`sass --watch carpetaorigen:carpetadestino`

```bash
sass --watch sass:css
```

[Volver al inicio](#-SASS)

## PRIMEROS PASOS

---------------------------------------------------------------------------

[Volver al inicio](#-SASS)

### VARIABLES

---------------------------------------------------------------------------

Piense en las variables como una forma de almacenar la información que desea reutilizar a través de su hoja de estilo. Puedes almacenar cosas como colores, pilas de fuentes o cualquier valor CSS que creas que quieras reutilizar. Sass usa el símbolo `$` para convertir algo en una variable.

> **NOTA**: **Sass** nos permite utilizar **Variables** dentro del código:
  * Sirven para almacenar valores
  * Se escriben con el signo dolar: `$bg-color: purple;` o `$color: #000;`

```scss
$bg-color: purple;
$color: #000;
body {
  background: $bg-color;
  color: $color;
}
```

[Volver al inicio](#-SASS)

### ANIDAMIENTOS

---------------------------------------------------------------------------

**Sass** le permitirá anidar sus selectores CSS de una manera que siga la misma jerarquía visual de su HTML. Los selectores pueden anidarse para indicar hijos:

> **NOTA**: Tenga en cuenta que unas reglas demasiado anidadas darán como resultado un CSS demasiado cualificado que podría resultar difícil de mantener y que, en general, se considera una mala práctica.

```scss
ul {
  list-style: none;
  
  li {
    display: inline-block;
  }
}
```

```css
ul {
  list-style: none;
}
ul li {
  display: inline-block;
}
```

> **NOTA**: Se pueden anidar propiedades

```scss
p {
  font: {
    family: Arial, sans-serif;
    weight: bold;
    style: italic;
  }
}
```

> **NOTA**: Se pueden juntar selectores al anidar

```scss
div {
  p, a {
    font-family: Georgia, serif;
  }
}
```

> **NOTA**: Se puede usar el símbolo "`&`" para repetir al selector padre

```scss
h1 {
  color: red;
  &:hover{
    color: blue;
  }
}

.bloque {
  width: 20px;
  &-imagen {
    width: 90%;
  }
  .imagen & {
    width: 100%;
  }
}
```

[Volver al inicio](#-SASS)

### EXTENDS

---------------------------------------------------------------------------

Esta es una de las características más útiles de **Sass**. Usar `@extend` le permite compartir un conjunto de propiedades CSS de un selector a otro. 

```sass
.main-menu {
  background: steelblue;
  color: #fff;
  line-height: 2em;
}

.main-menu--footer {
  @extend .main-menu;
  background: black;
}
```

```css
.main-menu, .main-menu--footer {
  background: steelblue;
  color: #fff;
  line-height: 2em;
}

.main-menu--footer {
  background: black;
}
```

[Volver al inicio](#-SASS)