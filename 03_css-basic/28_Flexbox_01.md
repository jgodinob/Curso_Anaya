# Flexbox

> **NOTA**: Podemos acceder a [https://caniuse.com/](https://caniuse.com/) para comprobar la compatibilidad de navegadores.

Flexbox es un nuevo modelo de layout que permite que las cajas sean flexibles en sus dimensiones y otras cosas:
* Se pueden ordenar los elementos en vertical y en horizontal.
* Se puede cambiar la posicion de un elemento en el flujo sin alterar el HTML.
* Se puede controlar el flujo y direccion de los elementos.
  
> **NOTA**: El pading y margin nunca colapsan ni se agrandan en flexbox.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        padding: 20px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

## FLEX-CONTAINER Y FLEX-ITEM

---------------------------------------------------------------------------

`flex-container` y `flex-item`, El `flex-container` (contenedor) define el contexto para los `flex-items` (hijos). El contexto es el area rectangular respecto a la cual se calculan las posiciones y dimensiones de los flex-items.

> **NOTA**: Si un `flex-container` tiene como hijo solo a un texto (sin un elemento intermedio), el texto en sí se comporta como un flex-item.

```html
<p class="container">Hola Mundo</p>

.container {
  display: flex;
}
```

* `Position` es capaz de romper el flujo de flexbox.
* Un `flex-item` puede ser a la vez un `flex-container`.

[Volver al inicio](#-Flexbox)

## EJES

---------------------------------------------------------------------------

**EJES (MAIN - PRINCIPAL Y CROSS - SECUNDARIO)**

Cuando se define un contexto para flexbox, se crean dos ejes internos: el **main axis** (principal) y el **cross axis** (secundario).
* Main axis   (horizontal por defecto)
* Cross axis  (vertical por defecto)

Los elementos (**flex-items**) se alinean de forma predeterminada respecto al **main axis**

```css
h1 {
  background: lightblue;
  margin: 0;
}

p {
  background: pink;
  margin: 0;
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
}
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  flex-direction: column;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-direction: column;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  flex-direction: column-reverse;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-direction: column-reverse;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

### ALTERA EL SENTIDO DE LOS EJES flex-direction

---------------------------------------------------------------------------

* `flex-direction`: 
    * `row`, (default left to right - main axis horizontal)
    * `row-reverse`, (right to left - main axis horizontal)
    * `column`, (top to bottom - main axis vertical)
    * `column-reverse`, (bottom to top - main axis vertical)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  flex-direction: row;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-direction: row;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  flex-direction: row-reverse;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-direction: row-reverse;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  flex-direction: column;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-direction: column;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  flex-direction: column-reverse;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-direction: column-reverse;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------


[Volver al inicio](#-Flexbox)

### ALINEACION EN EL MAIN AXIS

---------------------------------------------------------------------------

Se aplica al container

* `justify-content:`
    * `flex-start`, (inicio del eje)
    * `flex-end`, (final del eje)
    * `center`, (centro del eje)
    * `space-between`, (espacio sobrante distribuido entre los elementos)
    * `space-around`, (espacio sobrante distribuido alrededor de los elementos)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: flex-start`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  justify-content: flex-start;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex-start;
        justify-content: center;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: flex-end`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  justify-content: flex-end;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex-end;
        justify-content: center;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: center`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  justify-content: center;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        justify-content: center;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: space-between`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  justify-content: space-between;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex-end;
        justify-content: space-between;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `justify-content: space-around`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
  justify-content: space-around;
  background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        justify-content: space-around;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

### ALINEACIÓN EN EL CROSS AXIS

---------------------------------------------------------------------------

Se aplica al container
* `align-items` (para una sola línea)
* `align-content` (para varias lineas)
    * `stretch`, (default, ocupa todo el cross size)
    * `flex-start`
    * `flex-end`
    * `center`
    * `baseline` (Los artículos se colocan en la línea de base del contenedor)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-items: stretch`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
        height: 200px;
        align-items: stretch;
        background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: stretch;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-items: flex-start`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
        height: 200px;
        align-items: flex-start;
        background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: flex-start;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-items: flex-end`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
        height: 200px;
        align-items: flex-end;
        background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: flex-end;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-items: center`

---------------------------------------------------------------------------

<div class="flex-container" style ="display: flex;
        height: 200px;
        align-items: center;
        background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: center;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `align-items: baseline`

---------------------------------------------------------------------------

> **NOTA**: Los artículos se colocan en la línea de base del contenedor

<div class="flex-container" style ="display: flex;
        height: 200px;
        align-items: baseline;
        background-color: DodgerBlue;">
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">1</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">2</div>
  <div style="background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">3</div>  
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: baseline;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------


[Volver al inicio](#-Flexbox)

### FLEX-WRAP

---------------------------------------------------------------------------

* `flex-wrap`: 
    * `no-wrap`        (todos los items en una linea)
    * `wrap`           (los items saltan de linea)
    * `wrap-reverse`   (los items saltan pero se ordenan en sentido inverso)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `flex-wrap: no-wrap`

---------------------------------------------------------------------------

<div id="main" style="width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: no-wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: no-wrap;">
  <div style="background-color:coral;
        width: 50px;
        height: 50px;">A</div>
  <div style="background-color:lightblue;
        width: 50px;
        height: 50px;">B</div>
  <div style="background-color:khaki;
        width: 50px;
        height: 50px;">C</div>
  <div style="background-color:pink;
        width: 50px;
        height: 50px;">D</div>
  <div style="background-color:lightgrey;
        width: 50px;
        height: 50px;">E</div>
  <div style="background-color:lightgreen;
        width: 50px;
        height: 50px;">F</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
      #main {
        width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: no-wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: no-wrap;
      }
      #main div {
        width: 50px;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <div style="background-color:coral;">A</div>
      <div style="background-color:lightblue;">B</div>
      <div style="background-color:khaki;">C</div>
      <div style="background-color:pink;">D</div>
      <div style="background-color:lightgrey;">E</div>
      <div style="background-color:lightgreen;">F</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `flex-wrap: wrap`

---------------------------------------------------------------------------

<div id="main" style="width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap;">
  <div style="background-color:coral;
        width: 50px;
        height: 50px;">A</div>
  <div style="background-color:lightblue;
        width: 50px;
        height: 50px;">B</div>
  <div style="background-color:khaki;
        width: 50px;
        height: 50px;">C</div>
  <div style="background-color:pink;
        width: 50px;
        height: 50px;">D</div>
  <div style="background-color:lightgrey;
        width: 50px;
        height: 50px;">E</div>
  <div style="background-color:lightgreen;
        width: 50px;
        height: 50px;">F</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
      #main {
        width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap;
      }
      #main div {
        width: 50px;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <div style="background-color:coral;">A</div>
      <div style="background-color:lightblue;">B</div>
      <div style="background-color:khaki;">C</div>
      <div style="background-color:pink;">D</div>
      <div style="background-color:lightgrey;">E</div>
      <div style="background-color:lightgreen;">F</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `flex-wrap: wrap-reverse`

---------------------------------------------------------------------------

<div id="main" style="width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap-reverse; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap-reverse;">
  <div style="background-color:coral;
        width: 50px;
        height: 50px;">A</div>
  <div style="background-color:lightblue;
        width: 50px;
        height: 50px;">B</div>
  <div style="background-color:khaki;
        width: 50px;
        height: 50px;">C</div>
  <div style="background-color:pink;
        width: 50px;
        height: 50px;">D</div>
  <div style="background-color:lightgrey;
        width: 50px;
        height: 50px;">E</div>
  <div style="background-color:lightgreen;
        width: 50px;
        height: 50px;">F</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
      #main {
        width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap-reverse; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap-reverse;
      }
      #main div {
        width: 50px;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <div style="background-color:coral;">A</div>
      <div style="background-color:lightblue;">B</div>
      <div style="background-color:khaki;">C</div>
      <div style="background-color:pink;">D</div>
      <div style="background-color:lightgrey;">E</div>
      <div style="background-color:lightgreen;">F</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

### ORDER

---------------------------------------------------------------------------

`Order`: define la posicion de un elemento en "flujo visual";

Todos los `flex-items` por defecto tienen `order: 0`; pero se puede cambiar su valor y a menor valor aparecen antes en pantalla.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `order:`

---------------------------------------------------------------------------

<div id="main" style="width: 400px;
        height: 150px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        display: flex;">
  <div style="background-color:coral;
        width: 70px;
        height: 70px;
        -webkit-order: 2;" id="myRedDIV">1</div>
  <div style="background-color:lightblue;
        width: 70px;
        height: 70px;
        -webkit-order: 4;" id="myBlueDIV">2</div>
  <div style="background-color:lightgreen;
        width: 70px;
        height: 70px;
        -webkit-order: 3;" id="myGreenDIV">3</div>
  <div style="background-color:pink;
        width: 70px;
        height: 70px;
        -webkit-order: 1;" id="myPinkDIV">4</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
      #main {
        width: 400px;
        height: 150px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        display: flex;
      }
      #main div {
        width: 70px;
        height: 70px;
      }
      /* Safari 6.1+ */
      div#myRedDIV   {-webkit-order: 2;}
      div#myBlueDIV  {-webkit-order: 4;}
      div#myGreenDIV {-webkit-order: 3;}
      div#myPinkDIV  {-webkit-order: 1;}
      /* Standard syntax */
      div#myRedDIV   {order: 2;}
      div#myBlueDIV  {order: 4;}
      div#myGreenDIV {order: 3;}
      div#myPinkDIV  {order: 1;}
    </style>
  </head>
  <body>
    <div id="main">
      <div style="background-color:coral;" id="myRedDIV">1</div>
      <div style="background-color:lightblue;" id="myBlueDIV">2</div>
      <div style="background-color:lightgreen;" id="myGreenDIV">3</div>
      <div style="background-color:pink;" id="myPinkDIV">4</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

## DIMENSIONES DE LOS FLEX-ITEMS

---------------------------------------------------------------------------

Dimesiones de los flex-items
  * El modelo de caja se sigue aplicando
  * `Flex-basis` define el tamaño base principal del elemento (puede susituir a `width` o `height`).
  * `Flex-basis` siempre gana sobre `with` o `height` (el que corresponda) salvo que su valor sea "`auto`".

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `flex-basis: 200px`

---------------------------------------------------------------------------

<div class="flex-container" style="display: flex;
        align-items: stretch;
        background-color: #f1f1f1;">
  <div style="background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">1</div>
  <div style="background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">2</div>
  <div style="background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
        flex-basis:200px">3</div>
  <div style="background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">4</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch;
        background-color: #f1f1f1;
      }

      .flex-container > div {
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="flex-basis:200px">3</div>
      <div>4</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

## COMO SE CALCULAN LAS DIMENSIONES DE LOS FLEX-ITEMS

---------------------------------------------------------------------------

### CROSS-SIZE

---------------------------------------------------------------------------

* Si tiene un tamaño definido, este se respeta.
* Si no se ha definido se utilizará el tamaño disponible total.
* Si no se ha definido pero no se usa `align-items: stretch` se ajustará al contenido.

[Volver al inicio](#-Flexbox)

### MAIN-SIZE

---------------------------------------------------------------------------

* `flex-basis` con un valor diferente a `auto` siempre gana.
* Las cajas podrían crecer o encongerse.
* `flex-grow` (crecer)
* `flex-shrink` (encogerse)

Tanto `flex-grow` como `flex-shrink` aceptan como valores números enteros positivos que determinan cuantas unidades crecerá el elemento (`flex-grow`) o se encogerá el elemento (`flex-shrink`)

* `flex-grow: 5;`   (crecerá 5 unidades)
* `flex-shrink: 2;`  (se encogerá 2 unidades)

**¿Como se calcula el valor de cada unidad?**

* espacio disponible / numero total de unidades
* espacio disponible = espacio total - espacio ocupado
* espacio ocupado = espacio total de los items + margenes totales

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="flex-container" style="display: flex;
        align-items: stretch;
        background-color: #f1f1f1;">
  <div style="flex-grow: 1;
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">1</div>
  <div style="flex-grow: 1;
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">2</div>
  <div style="flex-grow: 8;
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;">3</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch;
        background-color: #f1f1f1;
      }

      .flex-container > div {
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div style="flex-grow: 1">1</div>
      <div style="flex-grow: 1">2</div>
      <div style="flex-grow: 8">3</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

## SHORTHAND 

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

### FLEX-FLOW

---------------------------------------------------------------------------

La propietad `flex-flow` es el shorthand de las propiedades `flex-direction` y `flex-wrap`.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `flex-flow:`

---------------------------------------------------------------------------

<div id="main" style ="width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
        display: flex;
        flex-flow: row-reverse wrap;">
  <div style="width: 50px;
        height: 50px;
        background-color:coral;">A</div>
  <div style="width: 50px;
        height: 50px;
        background-color:lightblue;">B</div>
  <div style="width: 50px;
        height: 50px;
        background-color:khaki;">C</div>
  <div style="width: 50px;
        height: 50px;
        background-color:pink;">D</div>
  <div style="width: 50px;
        height: 50px;
        background-color:lightgrey;">E</div>
  <div style="width: 50px;
        height: 50px;
        background-color:lightgreen;">F</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
      #main {
        width: 200px;
        height: 200px;
        border: 1px solid #c3c3c3;
        display: -webkit-flex; /* Safari */
        -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
        display: flex;
        flex-flow: row-reverse wrap;
      }
      #main div {
        width: 50px;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <div style="background-color:coral;">A</div>
      <div style="background-color:lightblue;">B</div>
      <div style="background-color:khaki;">C</div>
      <div style="background-color:pink;">D</div>
      <div style="background-color:lightgrey;">E</div>
      <div style="background-color:lightgreen;">F</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

### FLEX

---------------------------------------------------------------------------

Shorthand "`flex`" equivale a `flex: flex-grow flex-shrink flex-basis;`
* `flex: auto` (1 1 auto);
* `flex: none` (0 0 auto);
* `flex: N`    (N N auto);

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `flex:`

---------------------------------------------------------------------------

<div id="main" style="width: 300px;
        height: 300px;
        border: 1px solid black;
        display: -webkit-flex; /* Safari */
        display: flex;">
  <div style="background-color:coral;
        -webkit-flex: 1;  /* Safari 6.1+ */
        -ms-flex: 1;  /* IE 10 */  
        flex: 1;">RED</div>
  <div style="background-color:lightblue;
        -webkit-flex: 1;  /* Safari 6.1+ */
        -ms-flex: 1;  /* IE 10 */  
        flex: 1;">BLUE</div>  
  <div style="background-color:lightgreen;
        -webkit-flex: 1;  /* Safari 6.1+ */
        -ms-flex: 1;  /* IE 10 */  
        flex: 1;">Green div with more content.</div>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
      #main {
        width: 300px;
        height: 300px;
        border: 1px solid black;
        display: -webkit-flex; /* Safari */
        display: flex;
      }
      #main div {
        -webkit-flex: 1;  /* Safari 6.1+ */
        -ms-flex: 1;  /* IE 10 */  
        flex: 1;
      }
    </style>
  </head>
  <body>
    <div id="main">
      <div style="background-color:coral;">RED</div>
      <div style="background-color:lightblue;">BLUE</div>  
      <div style="background-color:lightgreen;">Green div with more content.</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Flexbox)

