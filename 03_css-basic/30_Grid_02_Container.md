# Grid

El módulo CSS **Grid Layout** ofrece un sistema de maquetación basado en grid, con filas y columnas, lo que facilita el diseño de páginas web sin necesidad de utilizar flotadores y posicionamiento.

[Volver al inicio](#-Grid)

## CONTAINER

---------------------------------------------------------------------------

Para hacer que un elemento HTML se comporte como un contenedor de `grid`, debe establecer la propiedad de visualización en `grid`o `inline-grid`.

Los contenedores de `grid` consisten en elementos de `grid`, colocados dentro de `columns` y `rows`.

[Volver al inicio](#-Grid)

### PROPIEDAD GRID-TEMPLATE-COLUMNS

---------------------------------------------------------------------------

La propiedad `grid-template-columns` define el número de columnas en su diseño de cuadrícula, y puede definir el ancho de cada columna.

El valor es una lista separada por espacios, donde cada valor define la longitud de la columna respectiva.

Si desea que su diseño de cuadrícula contenga 4 columnas, especifique el ancho de las 4 columnas, o "`auto`" si todas las columnas deben tener el mismo ancho.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-template-columns`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }
      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
      <div>7</div>
      <div>8</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

> **NOTA**: Si tiene más de 4 elementos en una cuadrícula de 4 columnas, la cuadrícula añadirá automáticamente una nueva fila para colocar los elementos.

La propiedad `grid-template-columns` también puede utilizarse para especificar el tamaño (ancho) de las columnas.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-template-columns`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        grid-template-columns: 80px 200px auto 30px;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: 80px 200px auto 30px;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
      <div>7</div>
      <div>8</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)

### PROPIEDAD GRID-TEMPLATE-ROWS

---------------------------------------------------------------------------

La propiedad `grid-template-rows` define la altura de cada fila.

El valor es una lista separada por espacios, donde cada valor define la altura de la fila respectiva:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-template-rows`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: 80px 200px;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: 80px 200px;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)

### PROPIEDAD JUSTIFY-CONTENT

---------------------------------------------------------------------------

La propiedad `justify-content` se utiliza para alinear toda la rejilla dentro del contenedor.

> **NOTA**: El ancho total de la cuadrícula tiene que ser menor que el ancho del contenedor para que la propiedad `justify-content` tenga algún efecto.

El valor "`space-evenly`" dará a las columnas la misma cantidad de espacio entre ellas y alrededor de ellas:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: space-evenly;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        justify-content: space-evenly;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        justify-content: space-evenly;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

El valor "`space-around`" dará a las columnas la misma cantidad de espacio alrededor de ellas:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: space-around;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        justify-content: space-around;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        justify-content: space-around;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

El valor "`space-between`" dará a las columnas la misma cantidad de espacio entre ellas:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: space-between;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        justify-content: space-between;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

El valor "`center`" alineará las columnas en el centro del contenedor:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: center;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        justify-content: center;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        justify-content: center;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

El valor "`start`" alineará las columnas al inicio del contenedor:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: start;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        justify-content: start;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        justify-content: start;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

El valor "`end`" alineará las columnas al final del contenedor:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: end;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        justify-content: end;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        justify-content: end;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)

### PROPIEDAD ALIGN-CONTENT

---------------------------------------------------------------------------

La propiedad `align-content` se utiliza para alinear verticalmente toda la rejilla dentro del contenedor.

> **NOTA**: La altura total de la rejilla debe ser menor que la altura del contenedor para que la propiedad `align-content` tenga algún efecto.

El valor "`center`" alineará las filas en el centro del contenedor:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-content: center;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        height: 400px;
        align-content: center;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        height: 400px;
        align-content: center;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

El valor "`space-evenly`" dará a las filas la misma cantidad de espacio entre ellas y alrededor de ellas:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-content: space-evenly;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        height: 400px;
        align-content: space-evenly;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        height: 400px;
        align-content: space-evenly;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

El valor "`space-around`" dará a las filas la misma cantidad de espacio alrededor de ellas:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-content: space-around;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        height: 400px;
        align-content: space-around;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        height: 400px;
        align-content: space-around;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

El valor "`space-between`" dará a las filas la misma cantidad de espacio entre ellas:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-content: space-between;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        height: 400px;
        align-content: space-between;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        height: 400px;
        align-content: space-between;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

El valor "`start`" alineará las filas al principio del contenedor:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-content: start;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        height: 400px;
        align-content: start;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        height: 400px;
        align-content: start;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

El valor "`end`" alineará las filas al final del contenedor:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-content: end;`

---------------------------------------------------------------------------

<div class="grid-container" style="display: grid;
        height: 400px;
        align-content: end;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">1</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">2</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">3</div>  
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">4</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">5</div>
  <div style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px">6</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        height: 400px;
        align-content: end;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)