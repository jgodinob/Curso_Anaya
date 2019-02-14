# Sintaxis CSS

[Volver al inicio](#-Sintaxis-CSS)

## EXERCISES

---------------------------------------------------------------------------

1. **Cambiar el color de todos los elementos `<p>` a "rojo".**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

2. **Cambie el color del elemento con `id="para1"`, por "rojo".**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p id="para1">This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            #para1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p id="para1">This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

3. **Cambie el color de todos los elementos con la clase `"colortext"` a "rojo".**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p class="colortext">This is another paragraph.</p>
        <p class="colortext">This is also a paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .colortext {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p class="colortext">This is another paragraph.</p>
        <p class="colortext">This is also a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

4. **Cambie el color de todos los elementos con la clase `"colortext"` a "rojo".**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <h1>This is a heading</h1>
        <h2>This is a smaller heading</h2>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1, p {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>This is a heading</h1>
        <h2>This is a smaller heading</h2>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

5. **Cambiar el color de todos los elementos `<p>`, que son descendientes de los elementos `<div>`, a `red`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style></style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div p {
        color: red;
      }    
    </style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

6. **Cambiar el color de todos los elementos `<p>`, que son hijos inmediatos de los elementos `<div>`, a `red`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style></style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div > p {
        color: red;
      }   
    </style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

7. **Cambiar el color de los elementos `<p>`, que son el hermano adyacente (inmediatamente después) de un elemento `<div>`, a `red`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style></style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div + p {
        color: red;
      }   
    </style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

8. **Cambiar el color de los elementos `<p>`, que son los hermanos de un elemento `<div>`, a `red`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style></style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div ~ p {
        color: red;
      }   
    </style>
  </head>
  <body>
    <div>
      <p>This is a paragraph inside a div element.</p>
      <p>This is another paragraph inside a div element.</p>
      <span><p>This a paragraph inside a span element, inside a div element.</p></span>
    </div>
    <p>This is a paragraph, not inside a div element.</p>
    <p>This is another paragraph, not inside a div element.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Sintaxis-CSS)