# Grid

El módulo CSS **Grid Layout** ofrece un sistema de maquetación basado en grid, con filas y columnas, lo que facilita el diseño de páginas web sin necesidad de utilizar flotadores y posicionamiento.

[Volver al inicio](#-Grid)

## ITEMS

---------------------------------------------------------------------------

Un contenedor **grid** contiene posiciones de cuadrícula, **items**.

De forma predeterminada, un contenedor tiene un elemento de cuadrícula para cada columna, en cada fila, pero puede cambiar el estilo de los elementos de cuadrícula para que abarquen varias columnas y/o filas.

[Volver al inicio](#-Grid)

### PROPIEDAD GRID-COLUMN

---------------------------------------------------------------------------

La propiedad `grid-column` define en qué columna(s) colocar un elemento.

Defina dónde comenzará el **item** y dónde terminará.

> **NOTA**: La propiedad `grid-column` es una propiedad abreviada (**shorthand**) para las propiedades `grid-column-start` y `grid-column-end`.

> **NOTA**: Para colocar un elemento, puede hacer referencia a los números de línea o utilizar la palabra clave "`span`" para definir cuántas columnas tendrá el elemento.

> **NOTA**: El `span` podrá definirse tanto al declarar el inicio como el final del item.

[Volver al inicio](#-Grid)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-column: 1/5`

---------------------------------------------------------------------------

El **item** 1 comenzará en la columna 2 y terminará en la columna 5 de la línea.

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-column: 1 / 5;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>  
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>
  <div class="item10" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">10</div>
  <div class="item11" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">11</div>
  <div class="item12" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">12</div>
  <div class="item13" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">13</div>
  <div class="item14" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">14</div>
  <div class="item15" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">15</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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
      .item1 {
        grid-column: 1 / 5;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>  
      <div class="item9">9</div>
      <div class="item10">10</div>
      <div class="item11">11</div>
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-column: 1 / span 3`

---------------------------------------------------------------------------

El **item** 1 comenzará en la columna 1 y abarcará 3 columnas:

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-column: 1 / span 3;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>  
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>
  <div class="item10" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">10</div>
  <div class="item11" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">11</div>
  <div class="item12" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">12</div>
  <div class="item13" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">13</div>
  <div class="item14" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">14</div>
  <div class="item15" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">15</div>
  <div class="item16" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">16</div>        
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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
      .item1 {
        grid-column: 1 / span 3;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>  
      <div class="item9">9</div>
      <div class="item10">10</div>
      <div class="item11">11</div>
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
      <div class="item16">16</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-column: 2 / span 3`

---------------------------------------------------------------------------

El **item** 2 comenzará en la columna 2 y abarcará 3 columnas:

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        ">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-column: 2 / span 3;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>  
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>
  <div class="item10" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">10</div>
  <div class="item11" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">11</div>
  <div class="item12" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">12</div>
  <div class="item13" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">13</div>
  <div class="item14" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">14</div>
  <div class="item15" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">15</div>
  <div class="item16" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">16</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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
      .item2 {
        grid-column: 2 / span 3;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>  
      <div class="item9">9</div>
      <div class="item10">10</div>
      <div class="item11">11</div>
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
      <div class="item15">16</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)

### PROPIEDAD GRID-ROW

---------------------------------------------------------------------------

La propiedad de `grid-row` define en qué fila colocar un elemento.

Defina dónde comenzará el **item** y dónde terminará.

> **NOTA** La propiedad `grid-row` es una propiedad abreviada (**Shorthand**) para las propiedades `grid-row-start` y `grid-row-end`.

Para colocar un **item**, puede referirse a los números de línea, o utilizar la palabra clave "`span`" para definir cuántas filas tendrá el **item**:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-row: 1 / 4;`

---------------------------------------------------------------------------

El **item** 1 comenzará en la línea 1 y terminará en la línea 4:

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-row: 1 / 4;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>  
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>
  <div class="item10" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">10</div>
  <div class="item11" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">11</div>
  <div class="item12" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">12</div>
  <div class="item13" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">13</div>
  <div class="item14" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">14</div>
  <div class="item15" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">15</div>
  <div class="item16" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">16</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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

      .item1 {
        grid-row: 1 / 4;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>  
      <div class="item9">9</div>
      <div class="item10">10</div>
      <div class="item11">11</div>
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
      <div class="item16">16</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-row: 1 / span 2;`

---------------------------------------------------------------------------

El **item** 1 comenzará en la fila 1 y abarcará 2 filas:

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-row: 1 / span 2;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>  
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>
  <div class="item10" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">10</div>
  <div class="item11" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">11</div>
  <div class="item12" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">12</div>
  <div class="item13" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">13</div>
  <div class="item14" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">14</div>
  <div class="item15" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">15</div>
  <div class="item16" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">16</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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

      .item1 {
        grid-row: 1 / span 2;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>  
      <div class="item9">9</div>
      <div class="item10">10</div>
      <div class="item11">11</div>
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
      <div class="item16">16</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)

### PROPIEDAD GRID-AREA

---------------------------------------------------------------------------

La propiedad `grid-area` se puede utilizar como una propiedad abreviada (**Shorthand**) para las propiedades `grid-row-start`, `grid-column-start`, `grid-row-end` y `grid-column-end`.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-area: 1 / 2 / 5 / 6;`

---------------------------------------------------------------------------

Haga que el "**item** 8" comienza en la línea 1 y columna 2, y termina en la línea 5 y columna 6:

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 1 / 2 / 5 / 6;">8</div>  
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>
  <div class="item10" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">10</div>
  <div class="item11" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">11</div>
  <div class="item12" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">12</div>
  <div class="item13" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">13</div>
  <div class="item14" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">14</div>
  <div class="item15" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">15</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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
      .item8 {
        grid-area: 1 / 2 / 5 / 6;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>  
      <div class="item9">9</div>
      <div class="item10">10</div>
      <div class="item11">11</div>
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-area: 2 / 1 / span 2 / span 3;`

---------------------------------------------------------------------------

Haga que el "**item** 8" comienza en la línea 2 y columna 1, y un `span`de 2 líneas y 3 columnas:

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 2 / 1 / span 2 / span 3;">8</div>  
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>
  <div class="item10" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">10</div>
  <div class="item11" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">11</div>
  <div class="item12" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">12</div>
  <div class="item13" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">13</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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
      .item8 {
        grid-area: 2 / 1 / span 2 / span 3;
      }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>  
      <div class="item9">9</div>
      <div class="item10">10</div>
      <div class="item11">11</div>
      <div class="item12">12</div>
      <div class="item13">13</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)

## NOMBRANDO ITEMS DEL GRID

---------------------------------------------------------------------------

La propiedad `grid-area` también se puede utilizar para asignar nombres a los elementos de la cuadrícula.

Los elementos de cuadrícula con nombre pueden ser referenciados por la propiedad `grid-template-areas` del contenedor de cuadrícula.

<div class="grid-container" style="display: grid;
        grid-template-areas:
          'header header header header header header'
          'menu main main main right right'
          'menu footer footer footer footer footer';
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: header;">Header</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: menu;">Menu</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: main;">Main</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: right;">Right</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: footer;">Footer</div>
</div>

> **NOTA**: Puede utilizar la propiedad `grid-area` para nombrar los elementos de la cuadrícula.
> **NOTA**: Puede hacer referencia al nombre cuando configure el diseño de la cuadrícula, utilizando la propiedad `grid-template-areas` en el contenedor de cuadrícula.

Esta disposición de cuadrícula contiene **seis columna**s y **tres filas**:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .item1 { grid-area: header; }
      .item2 { grid-area: menu; }
      .item3 { grid-area: main; }
      .item4 { grid-area: right; }
      .item5 { grid-area: footer; }

      .grid-container {
        display: grid;
        grid-template-areas:
          'header header header header header header'
          'menu main main main right right'
          'menu footer footer footer footer footer';
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
      <div class="item1">Header</div>
      <div class="item2">Menu</div>
      <div class="item3">Main</div>  
      <div class="item4">Right</div>
      <div class="item5">Footer</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-area: myArea`

---------------------------------------------------------------------------

Puede utilizar la propiedad `grid-area` para nombrar los elementos de la cuadrícula.

Puede hacer referencia al nombre cuando configure el diseño de la cuadrícula, utilizando la propiedad `grid-template-areas` en el contenedor de cuadrícula.

El **item** 1 se llama "`myArea`" y ocupará el lugar de las cinco columnas:

<div class="grid-container" style="display: grid;
        grid-template-areas: 'myArea myArea myArea myArea myArea';
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: myArea;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .item1 {
        grid-area: myArea;
      }
      .grid-container {
        display: grid;
        grid-template-areas: 'myArea myArea myArea myArea myArea';
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
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

Cada fila está definida por apóstrofes (`' '`)

Las columnas de cada fila se definen dentro de los apóstrofes, separadas por un espacio.

> **NOTA**: Un salto de período (`.`) representa un elemento de la cuadrícula sin nombre.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-area: myArea`

---------------------------------------------------------------------------

Puede utilizar la propiedad `grid-area` para nombrar los elementos de la cuadrícula.

Puede hacer referencia al nombre cuando configure el diseño de la cuadrícula, utilizando la propiedad `grid-template-areas` en el contenedor de cuadrícula.

El **item** 1 se llama "`myArea`" y ocupará el lugar de dos columnas (de cinco):

<div class="grid-container" style="display: grid;
        grid-template-areas: 'myArea myArea . . .';
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: myArea;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
  <div class="item8" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">8</div>
  <div class="item9" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">9</div>        
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .item1 {
        grid-area: myArea;
      }
      .grid-container {
        display: grid;
        grid-template-areas: 'myArea myArea . . .';
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
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
      <div class="item8">8</div>
      <div class="item9">9</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

Para definir dos filas, definimos la columna de la segunda fila dentro de otro conjunto de apóstrofes:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `grid-template-areas: 'myArea myArea . . .' 'myArea myArea . . .';`

---------------------------------------------------------------------------

Puede utilizar la propiedad `grid-area` para nombrar los elementos de la cuadrícula.

Puede hacer referencia al nombre cuando configure el diseño de la cuadrícula, utilizando la propiedad `grid-template-areas` en el contenedor de cuadrícula.

El **item**** 1 se llama "`myArea`" y ocupará el lugar de dos columnas (de cinco), y abarcará dos filas:

<div class="grid-container" style="display: grid;
        grid-template-areas: 'myArea myArea . . .' 'myArea myArea . . .';
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: myArea;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">6</div>
  <div class="item7" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;">7</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .item1 {
        grid-area: myArea;
      }
      .grid-container {
        display: grid;
        grid-template-areas: 'myArea myArea . . .' 'myArea myArea . . .';
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
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)

## ORDEN DE ITEMS

---------------------------------------------------------------------------

El diseño de la cuadrícula nos permite posicionar los elementos en cualquier lugar que queramos.

> **NOTA**: El primer elemento del código HTML no tiene que aparecer como el primer elemento de la cuadrícula, podemos reordenarlos a nuestro antojo.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

No es necesario que los elementos se muestren en el mismo orden en que están escritos en el código HTML.

<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 1 / 3 / 2 / 4;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 2 / 3 / 3 / 4;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 1 / 1 / 2 / 2;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 1 / 2 / 2 / 3;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 2 / 1 / 3 / 2;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 2 / 2 / 3 / 3;">6</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
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
      .item1 { grid-area: 1 / 3 / 2 / 4; }
      .item2 { grid-area: 2 / 3 / 3 / 4; }
      .item3 { grid-area: 1 / 1 / 2 / 2; }
      .item4 { grid-area: 1 / 2 / 2 / 3; }
      .item5 { grid-area: 2 / 1 / 3 / 2; }
      .item6 { grid-area: 2 / 2 / 3 / 3; }
    </style>
  </head>
  <body>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

Puede reorganizar el pedido para determinados tamaños de pantalla utilizando consultas de medios:

<p>Cambie el tamaño de la ventana a 500 píxeles para ver el efecto.</p>
<div class="grid-container" style="display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        padding: 10px;">
  <div class="item1" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 1 / span 3 / 2 / 4;">1</div>
  <div class="item2" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 3 / 3 / 4 / 4;">2</div>
  <div class="item3" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 2 / 1 / 3 / 2;">3</div>  
  <div class="item4" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 2 / 2 / span 2 / 3;">4</div>
  <div class="item5" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 3 / 1 / 4 / 2;">5</div>
  <div class="item6" style="background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        grid-area: 2 / 3 / 3 / 4;">6</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
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
      @media only screen and (max-width: 500px) {
        .item1 { grid-area: 1 / span 3 / 2 / 4; }
        .item2 { grid-area: 3 / 3 / 4 / 4; }
        .item3 { grid-area: 2 / 1 / 3 / 2; }
        .item4 { grid-area: 2 / 2 / span 2 / 3; }
        .item5 { grid-area: 3 / 1 / 4 / 2; }
        .item6 { grid-area: 2 / 3 / 3 / 4; }
      }
    </style>
  </head>
  <body>
    <p>Cambie el tamaño de la ventana a 500 píxeles para ver el efecto.</p>
    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Grid)