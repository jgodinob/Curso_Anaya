# Formularios

PSEUDO CLASES PARA FORMULARIOS

* `::placeholder` (estilos para el placeholder)
* `:checked` (inputs seleccionados)
* `:focus` (inputs con el cursor dentro)
* `:required` (campos obligatorios)
* `:disabled` (campos desactivados)
* `:read-only` (campos de solo lectura)

[Volver al inicio](#-Formularios)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: PLACEHOLDER

---------------------------------------------------------------------------

<div>
    <input type="text" name="fname">
    <input type="text" name="fname" placeholder="First name" style="color: red;">
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    ::-webkit-input-placeholder { /* Edge */
      color: red;
    }
    :-ms-input-placeholder { /* Internet Explorer */
      color: red;
    }
    ::placeholder {
      color: red;
    }
    </style>
  </head>
  <body>
    <input type="text" name="fname">
    <input type="text" name="fname" placeholder="First name">
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: CHECKED

---------------------------------------------------------------------------

  <form action="">
    <input type="radio" checked="checked" style="height: 50px;
      width: 50px" value="male" name="gender"> Male<br>
    <input type="radio" value="female" name="gender"> Female<br>
    <input type="checkbox" checked="checked" style="height: 50px;
      width: 50px" value="Bike"> I have a bike<br>
    <input type="checkbox" value="Car"> I have a car 
  </form>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
    input:checked {
      height: 50px;
      width: 50px;
    }
    </style>
  </head>
  <body>

  <form action="">
    <input type="radio" checked="checked" value="male" name="gender"> Male<br>
    <input type="radio" value="female" name="gender"> Female<br>
    <input type="checkbox" checked="checked" value="Bike"> I have a bike<br>
    <input type="checkbox" value="Car"> I have a car 
  </form>

  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: READ-ONLY

---------------------------------------------------------------------------

<div>
    <p>A normal input element:<br><input value="hello"></p>
    <p>A readonly input element:<br><input readonly value="hello" style="background-color: yellow;"></p>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      input:-moz-read-only { /* For Firefox */
        background-color: yellow;
      }
      input:read-only {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>A normal input element:<br><input value="hello"></p>
    <p>A readonly input element:<br><input readonly value="hello"></p>
  </body>
</html>
```

[Volver al inicio](#-Formularios)