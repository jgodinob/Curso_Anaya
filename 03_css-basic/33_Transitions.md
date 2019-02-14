# Transiciones

Las transiciones permiten pasar de un estado a otro en el tiempo.

La sintaxis es:

```css
transition: propiedad tiempo time-function;
transition: all .5s linear;
```

Para que una propiedad se anime debe tener un valor inicial y uno final.

Establezca el ancho del campo de entrada en 100 píxeles. Sin embargo, cuando el campo de entrada se enfoca, hazlo de 250 píxeles de ancho:

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `transition: width .35s ease-in-out;`

---------------------------------------------------------------------------

<style>
      input[type=text] {
        width: 100px;
        -webkit-transition: width .35s ease-in-out;
        transition: width .35s ease-in-out;
      }
      input[type=text]:focus {
        width: 250px;
      }
</style>

Search: <input type="text" name="search" style="width: 100px;
        -webkit-transition: width .35s ease-in-out;
        transition: width .35s ease-in-out;">

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      input[type=text] {
        width: 100px;
        -webkit-transition: width .35s ease-in-out;
        transition: width .35s ease-in-out;
      }
      input[type=text]:focus {
        width: 250px;
      }
    </style>
  </head>
  <body>
    Search: <input type="text" name="search">
  </body>
</html>
```

[Volver al inicio](#-Transiciones)