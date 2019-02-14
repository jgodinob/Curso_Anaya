# List

[Volver al inicio](#-List)

## EXERCISES

---------------------------------------------------------------------------

1. **Establezca el estilo de lista para las listas desordenadas en `square`, y el estilo de lista para las listas ordenadas en `upper-roman`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>

    <p>This is an ordered list:</p>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
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
      ul {
        list-style-type: square;
      }

      ol {
        list-style-type: upper-roman;
      }    
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>

    <p>This is an ordered list:</p>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ol>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Establezca la imagen `sqpurple.gif` como el marcador de elementos de la lista para la lista no ordenada.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
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
      ul {
        list-style-image: url('https://www.w3schools.com/css/sqpurple.gif');
      }    
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Con la propiedad de la lista: `list-style` ponga el marcador de lista desordenado en `img_marker.png`, con un estilo de copia de seguridad de `circle`, y muestre los marcadores dentro del flujo de contenido.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
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
      ul {
        list-style: circle inside url('https://www.w3schools.com/css/img_marker.png');
      }      
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Elimine las viñetas/marcadores de los elementos de la lista.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
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
      ul {
        list-style-type: none;
      }    
    </style>
  </head>
  <body>
    <p>This is an unordered list:</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-List)
