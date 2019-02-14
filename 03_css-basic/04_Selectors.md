# Selectores

Los **Selectores** indican a que elementos **HTML** aplicar los estilos.

[Volver al inicio](#-Selectores)

## SELECTORES

---------------------------------------------------------------------------

[Volver al inicio](#-Selectores)

### SELECTORES DE ETIQUETA

---------------------------------------------------------------------------

Se aplican a elementos HTML. Basta indicar el nombre de la etiqueta.

```css
body {
    color: red;
}
h1 {
    color: green;
}
```

A los estilos aplicados a los selectores de etiquetas se les conoce como estilos base (Metodologia SMACSS).

```css
body {
    /*background: grey;*/
}
```
  
[Volver al inicio](#-Selectores)

### SELECTORES DE CLASE

---------------------------------------------------------------------------

Las clases son atributos de html que se indican con `class=""`. Estas clases se usan para manipular el html con CSS o JS.

Para seleccionar una clase con CSS se utiliza un punto seguido del nombre de la clase.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<p class="alerta" style="background: red; color: white;">Ha sucedido un error</p>

```html
<!-- HTML -->
<p class="alerta">Ha sucedido un error</p>
```
  
```css
// css
.alerta {
    background: red;
    color: white;
}
```

---------------------------------------------------------------------------

[Volver al inicio](#-Selectores)

### SELECTORES DE ID

---------------------------------------------------------------------------

Se selecciona un id con el simbolo # seguido del nombre del id. Puesto que los id son unicos en html, no es recomendable usar id en el css.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<h1 id="titulo" style="color: yellow;">Curso CSS Desde Cero</h1>

```html
<!-- HTML -->
<h1 id="titulo">Curso CSS Desde Cero</h1>
```
  
```css
// css
#titulo {
    color: yellow;
}
```

---------------------------------------------------------------------------

> **NOTA**: Los **id** se usan para crear marcadores en el **HTML** o para manipular el dom con javascript. Pero no se recomiendan para css.
> **NOTA**: Las clases se pueden usar con css o con javascript. Por lo cual una buena práctica es nombrar con el prefijo js- a las clases para javascript.

```html
<!-- HTML -->
<ul class="menu js-menu"></ul>
```

> **NOTA**: Las clases y los id pueden unificarse en el selector. Esto significa que podrias seleccionar a elementos que tengan dos clases o una clase y un ID, o una etiqueta y una clase, etc.

```css
// css
.menu.header {
    color: green;
}
p.mensaje#inicial {
    background: yellow;
}
```

[Volver al inicio](#-Selectores)

### SELECTORES DESCENDIENTES

---------------------------------------------------------------------------

Se aplican a un elemento siempre que sea hijo de otro. Su sintaxis es así:

```css
// css
ancestro descendiente {
  // TODO
}
```
  
* No importa el nivel del descendiente
* Siempre se debe intentar descender lo menos posible

```css
// css
ul ul a {
  /*color: red;*/
}
```

[Volver al inicio](#-Selectores)

### ANIDAR SELECTORES

---------------------------------------------------------------------------

Consiste en separar selectores por comas, `, `. De esta manera los estilos se aplican a todos los selectores.

```css
// css
h1, p, ul {
  font-size: 20px;
}
```

> **IMPORTANTE**: **DRY: Dont repet yourself**

[Volver al inicio](#-Selectores)

### SELECTOR DE HIJO DIRECTO

---------------------------------------------------------------------------

Selecciona solo a los elementos que estan dentro directamente de otro elemento.

```css
// css
padre > hijo {
  
}
.menu > li > a {
  color: green;
}
```
  
> **NOTA**: La mejor practica es utilizar clases y evitar muchos selectores descendientes

```css
// css
.level-1 {
    color: red;
}

.level-2 {
  color: green;
}
```

[Volver al inicio](#-Selectores)

### SELECTOR UNIVERSAL

---------------------------------------------------------------------------

Selector universal es un asterisco (`*`) y selecciona a todos los elementos. El uso más común actualmente de este selector es:

```css
* {
    box-sizing: border-box;
}
```

[Volver al inicio](#-Selectores)

### SELECTORES HERMANOS

---------------------------------------------------------------------------

Selectores hermanos (dos tipos):
1. Hermano siguiente (singular) `a + b` (**B** esta justo después de **A**. Se selecciona **B**.)
2. Hermanos siguientes (plural) `a ~ b` (**B** (o varios **B**) están después de **A**, no importa si entre ellos hay otros elementos. Se selecciona a todos los **B**)
  
> **NOTA**: En CSS no se pueden seleccionar hermanos hacia atrás y tampoco padres.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<h1>subtitulo</h1>
<p style="color: red;">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<h2>subtitulo</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<div><p style="color: green;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus nemo, quidem est qui soluta itaque deserunt, neque saepe asperiores repellendus. Fugiat blanditiis impedit ex, itaque nam modi reprehenderit recusandae?</p></div>

```html
<h1>subtitulo</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<h2>subtitulo</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus nemo, quidem est qui soluta itaque deserunt, neque saepe asperiores repellendus. Fugiat blanditiis impedit ex, itaque nam modi reprehenderit recusandae?</p></div>
```
```css
h1 ~ p {
  color: red;
}

h2 + div p {
  color: green;
}
```

---------------------------------------------------------------------------

[Volver al inicio](#-Selectores)

### SELECTOR DE ATRIBUTOS

---------------------------------------------------------------------------

Un atributo se selecciona entre corchetes `[]`-

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<p class="parrafo-4" style="color: red;">4 Lorem ipsum dolor sit amet</p>
<p><a href="#" target="" >Link externo</a></p>
<p><a href="#" target="_blank" style="font-style: italic;">Link externo</a></p>

```html
<p class="parrafo-4">4 Lorem ipsum dolor sit amet</p>
<p><a href="#" target="" >Link externo</a></p>
<p><a href="#" target="_blank">Link externo</a></p>
```
```css
/*Se puede indicar solo el atributo*/
[class] {
  color: red;
}
/*O el atributo y su valor*/
[target="_blank"] {
  font-style: italic;
}
```

---------------------------------------------------------------------------

> **NOTA**: Los selectores de atributos aceptan comodines:

* `$` -> termina con
* `^` -> comienza con
* `*` -> contiene a
* `~` -> tarea
* `|` -> tarea
  
**EJEMPLOS**

```css
// [src$="jpg"]
// [href^="http://"]
// [class*="icon-"]
img {
  max-width: 100%;
  height: auto;
}
img[src$="png"]{
  border: 2px solid black;
}
[class*="parrafo"] {
  color: red;
}
```

[Volver al inicio](#-Selectores)

## SEUDOCLASES

---------------------------------------------------------------------------

Las seudoclases son tipos de selectores que se **"activan"** en determinadas circunstancias. Se escriben con `:`. Por ejemplo:
`:hover { // ... }`.

> **NOTA** Con la excepcion de `::selection`.

* `:hover`      -> cuando se pasa el cursor por encima del elemento
* `:active`     -> cuando se hace clic
* `:visited`    -> un enlace al que ya se visitó
* `:focus`      -> un campo de formulario seleccionado
* `:empty`      -> selecciona elementos vacios
* `:not()`      -> selecciona a los elementos que no coincidan con el selector pasado como parámetro
* `::selection` -> para aplicar estilos a la seleccion
* `:target`     -> selecciona el destino de un enlace interno

```css
h1:active {
  color: red;
}
input:focus {
  background: red;
}
p:not(.not) {
  /*color: red;*/
}
::selection {
  background: purple;
  color: white;
}
#destino {
  display: none;
}
#destino:target {
  display: block;
  background: yellow;
}
```

[Volver al inicio](#-Selectores)

## SELECTORES AVANZADOS

---------------------------------------------------------------------------

* `:first-child` y `:last-child`, seleccionan al primer y ultimo hijo de un elemento (sin importar que tipo de elemento es)
* `:first-of-type` y `:last-of-type`, seleccionan al primer y ultimo hijo según el elemento. Por ejemplo, `p:first-of-type` selecciona al primer parrafo hijo.
* `:nth-child()` y `:nth-of-type()`, reciben parámetros
    * `numero`         -> 5 (selecciona al 5to elemento)
    * `multiplo de n`  -> 2n (selecciona de 2 en 2)
    * `formula`        -> 3n+1 (selecciona a 1, 4, 7)
    * `even/odd`       -> pares e impares
> **TRUCO**: Usaremos `-n+4` para seleccionar los primeros 4 elementos, y `n+4` para seleccionar los elementos a partir del 4. 
* `:nth-last-child()` y `:nth-last-of-type()`, es identico a `nth-child()` y `nth-of-type()` pero se cuentan desde el final

```css
article :first-child {
  color: red;
}
p:first-of-type {
  color: red;
}
p:nth-of-type(2){
  color: red;
}
li:nth-child(n+4) {
  background: teal;
  color: #fff;
}
li:nth-last-child(-n+4){
  background: teal;
  color: #fff;
}
```

Podemos ver más ejemplos en esta url [https://www.w3schools.com/css/css_pseudo_elements.asp](https://www.w3schools.com/css/css_pseudo_elements.asp).

[Volver al inicio](#-Selectores)