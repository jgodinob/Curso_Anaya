# Básicos

[Volver al inicio](#-Básicos)

## SINTÁXIS BÁSICA

---------------------------------------------------------------------------

HTML usa etiquetas, las que tienen la siguiente estructura `<etiqueta></etiqueta>`.

Existen dos tipos de Etiquetas según su cierre.

* Etiquetas con apertura y cierre, `<h1 id="main-title"> Curso HTML5 Desde Cero </h1>`.

```html
<h1></h1>
<ul></ul>
<p></p>
```

* Etiquetas **vacías** de solo apertura o **self-closing**, `<img src="foto.jpg">`.

```html
<img>
<br>
<meta>
<input>
```

Así mismo, la estructura de una etiqueta es:

```html
<h1 id="main-title"> Curso HTML5 Desde Cero </h1>
```

* `<h1 id="main-title">`, es una etiqueta de apertura
* `</h1>`, es una etiqueta de cierre
* `id="main-title"`, es un atributo
* `Curso HTML5 Desde Cero`, es contenido

> **NOTA**: En **HTML5**, no es obligatorio (como era en xhtml) cerrar las etiquetas **self-closing**.

```html
<input /> (válido)
<input>   (válido)
```

[Volver al inicio](#-Básicos)

### ATRIBUTOS

---------------------------------------------------------------------------

Se usan para añadir datos adicionales a un elemento html. Se escriben dentro de la etiqueta de apertura. Su sintaxis es la siguiente:

* `atributo="valor"`
* `atributo="valor1 valor2 valor3"`
* `atributo1="valor1" atributo2="valor2"`

Ejemplos:  

```html
<img src="imagen.jpg">
<img src="imagen.jpg" alt="Imagen">
<img src="imagen.jpg" alt="Imagen" class="imagen imagen-principal imagen-banner">
```

> **NOTA**: Algunos atributos no requieren valor.
  
```html
<input required>
```
    
> **NOTA**: Existen **atributos obligatorios** y **atributos opcionales**.
  
```html
<img src=""> (Atributo obligatorio)
<a href="">Link</a> (Atributo obligatorio)
<img src="imagen.jpg" id="imagen"> (el id es un atributo opcional)
```

> **NOTA**: Los atributos `data-*` se usan para poder crear nuestros propios atributos (generalmente para proyectos con JavaScript). Podemos crear cualquier atributo con tal que comience con `data-`.
  
[Volver al inicio](#-Básicos)

## ESTRUCTURA BÁSICA

---------------------------------------------------------------------------

La estructura mínima que debe tener un documento **HTML** para ser consistente es:

> **NOTA**: **Visual Studio Code** permite generar una estructura **Html5** rápida así:

![./Sources/001.jpg](./Sources/001.jpg)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Título</title>
  </head>
  <body>
  </body>
</html>
```

* `<!DOCTYPE html>`, definen el tipo de documento, propio de **html5** (antes era distinto y más complejo)
* `<html lang="es"></html>`, contendrá el contenido de la página.
> **NOTA**: El lenguaje `lang="es"` ayudará a los navegadores y buscadores, para interpretar el idioma de la página.
* `<head></head>`, contendrá los metadata con los datos de interés de la página utiles para los navegadores.
* `<meta charset="utf-8">`, contendrá información interpretable por el navegador y los buscadores. En este caso indica el tipo de **charset** a usar, `charset="utf-8"`.
* `<title></title>`, definirá el título de nuestra página, el cual será interpretado por los buscadores y el navegador para mostrarlo.
> **NOTA**: De eliminar esta etiqueta y usar caracteres latinos estos se transformarían en caracteres distinos.
* `<body></body>`, contendrá el contenido de la web que se mostrará.

[Volver al inicio](#-Básicos)

### COMENTANDO EL CÓDIGO

---------------------------------------------------------------------------

Por razones de legibilidad es necesario comentar el código ya que ayuda a entender siempre la estructura.

En html, los comentarios se encierran entre `<!-- -->`, por ejemplo:

```html
<!-- Esto es un comentario en html -->
```

[Volver al inicio](#-Básicos)

## ETIQUETAS BÁSICAS

---------------------------------------------------------------------------

```diff
<!DOCTYPE html>
<html lang="es">
++<!-- La sección head es para los metadatos-->
  <head>
++  <!-- Character set, para que las tildes y eñes se vean bien -->
    <meta charset="utf-8">
++  <meta name="viewport" content="width=device-width, initial-scale=1.0">
++  <!-- El meta description lo lee Google y lo muestra en los resultados de búsqueda -->
++  <meta name="description" content="Una genial descripción de mi página">
    <!-- title muestra el título de la página y es leído por Google -->
    <title>Título</title>
++  <link rel="stylesheet" href="styles.css">
++  <!-- Mostrar el favicon (icono al lado de la pestaña del navegador) -->
++  <link rel="shortcut icon" href="favicon.png">
  </head>
++<!--La seión body es para el contenido visible-->  
  <body>
++  <h1>Título de mi página web</h1>  
++  <script src="scripts.js"></script>
  </body>
</html>
```

* `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, indica al dispositivo que adapte el ancho de la web al dispositivo.
* `<meta name="description" content="Una genial descripción de mi página">`, indica a los buscadores el contenido de la página. De no existir este **meta** el buscador buscaría el primer contenido de la página y mostraría ese en el buscador.
* `<link rel="stylesheet" href="styles.css">`, añade una hoja de estilos a nuestra página. Aportaría diseño a nuestra web.
* `<link rel="shortcut icon" href="favicon.png">` indicaría al navegador que icono usar en la etiqueta de la página.
* `<h1>Título de mi página web</h1>`, indica un título a nuestra página. A diferencia del `<title></title>`, este pertenece al conetnido.
* `<script src="scripts.js"></script>`, añade a la web script en lenguaje **javascript**.

[Volver al inicio](#-Básicos)