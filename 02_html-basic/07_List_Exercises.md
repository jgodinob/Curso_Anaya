# Listas

[Volver al inicio](#-Listas)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Añada un elemento de la lista con el texto "Coffee" dentro de `<ul>`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ul>
    </ul>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ul>
      <li>Coffee</li>
    </ul>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Cambie la lista de abajo a una lista ordenada.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Cambie la lista de abajo para mostrar cuadrados en lugar de viñetas.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ul style="list-style-type:square;">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Cambie la lista de abajo para mostrar las letras en lugar de los números.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <ol type="A">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
```

---------------------------------------------------------------------------

5. **Complete la lista de descripción a continuación. Cada nombre debe tener una descripción.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <dl>
      <dt>Coffee</dt>
      <dt>Milk</dt>
    </dl>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <dl>
      <dt>Coffee</dt>
      <dd>- black hot drink</dd>
      <dt>Milk</dt>
      <dd>- white cold drink</dd>
    </dl>
  </body>
</html>
```

---------------------------------------------------------------------------

6. **Haga que la lista de abajo se muestre horizontalmente.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      ul#menu {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      ul#menu li {
        float:left;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Lemons</li>
      <li>Oranges</li>
    </ul>  
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      ul#menu {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      ul#menu li {
        float:left;
      }
    </style>
  </head>
  <body>
    <ul id="menu">
      <li>Apples</li>
      <li>Bananas</li>
      <li>Lemons</li>
      <li>Oranges</li>
    </ul>  
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Listas)