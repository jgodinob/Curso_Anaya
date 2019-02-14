# Diseño Responsivo

Es una metodología de diseño web que hace que el layout y el contenido de la página se adapten a cualquier tamaño de viewport.

[Volver al inicio](#-Diseño-Responsivo)

## META VIEWPORT

---------------------------------------------------------------------------

Es un tipo de meta creado por Apple cuando crea el iPhone. El meta viewport le dice al navegador como interpretar las dimensiones de la página respecto al tamaño del viewport.

```html
<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1">
```
  
[Volver al inicio](#-Diseño-Responsivo)

## MEDIA-QUERIES

---------------------------------------------------------------------------

Son reglas CSS que permiten "filtrar" los estilos según el tipo de medio (por ejemplo: pantalla "screen" o impresora "print").

```css
  @media screen {
    body {
      background: black;
      color: #fff;
    }
  }
  @media print {
    body {
      background: white;
      color: #222;
    }
  }
  @media all {
    body {
      font-family: Helvetica, sans-serif;
    }
  }
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `@media only screen and (max-width: 600px) { ... }`

---------------------------------------------------------------------------

<style>
#myDiv1 {
  background-color: lightgreen;
}
p {
  color:black;
}
@media only screen and (max-width: 600px) {
  #myDiv1 {
    background-color: lightblue;
  }
}
</style>

<div id="myDiv1">
    <p>Cambie el tamaño de la ventana del navegador. Cuando el ancho de este documento es de 600 píxeles o menos, el color de fondo es "azul claro", de lo contrario es "verde claro".</p>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    body {
      background-color: lightgreen;
    }

    @media only screen and (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }
    </style>
  </head>
  <body>
    <p>Cambie el tamaño de la ventana del navegador. Cuando el ancho de este documento es de 600 píxeles o menos, el color de fondo es "azul claro", de lo contrario es "verde claro".</p>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Diseño-Responsivo)

### BREAK POINTS

---------------------------------------------------------------------------

Son los tamaños (referidos al ancho del viewport) en los que algo cambia en el diseño.

Los breakpoints son añadidos como condiciones en las media queries.
* **Major breakpoints**, Indican cambios de layout (como una columna que se transforma en dos)
* **Minor breakpoints**, Indican cambios pequeños ya sea de layout o de contenido.

```css
  @media screen and (min-width: 400px) {
    body {
      background: red;
    }
  }

  @media screen and (max-width: 800px) {
    body {
      background: blue;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
      body {
        background: green;
      }
  }
```

[Volver al inicio](#-Diseño-Responsivo)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<style>
* {
  box-sizing: border-box;
}
p { color: white;}
.row::after {
  content: "";
  clear: both;
  display: block;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

.header {
  background-color: #9933cc;
  padding: 15px;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.footer {
  background-color: #0099cc;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>

<div id="body">

<div class="header">
  <h1>Chania</h1>
</div>

<div class="row">
  <div class="col-3 menu">
    <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
    </ul>
  </div>

  <div class="col-6">
    <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
  </div>

  <div class="col-3 right">
    <div class="aside">
      <h2>What?</h2>
      <p>Chania is a city on the island of Crete.</p>
      <h2>Where?</h2>
      <p>Crete is a Greek island in the Mediterranean Sea.</p>
      <h2>How?</h2>
      <p>You can reach Chania airport from all over Europe.</p>
    </div>
  </div>
</div>

<div class="footer">
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>

</div id="body">

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: block;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

.header {
  background-color: #9933cc;
  padding: 15px;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.footer {
  background-color: #0099cc;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>
</head>
<body>

<div class="header">
  <h1>Chania</h1>
</div>

<div class="row">
  <div class="col-3 menu">
    <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
    </ul>
  </div>

  <div class="col-6">
    <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
  </div>

  <div class="col-3 right">
    <div class="aside">
      <h2>What?</h2>
      <p>Chania is a city on the island of Crete.</p>
      <h2>Where?</h2>
      <p>Crete is a Greek island in the Mediterranean Sea.</p>
      <h2>How?</h2>
      <p>You can reach Chania airport from all over Europe.</p>
    </div>
  </div>
</div>

<div class="footer">
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>

</body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Diseño-Responsivo)

## MEDIA QUERIES Y SASS

---------------------------------------------------------------------------

Sass permite anidar las media queries dentro del selector

```css
  body {
    background: red;
  }
  @media screen and (min-width: 20em){
    body {
      background: pink;
    }
  }
  @media screen and (min-width: 30em){
    body {
      background: yellow;
    }
  }
```
```css
  body {
    background: red;
    @media screen and (min-width: 600px) {
      background: pink
    }
    @media screen and (min-width: 600px) {
      background: yellow;
    }
  }
```

[Volver al inicio](#-Diseño-Responsivo)