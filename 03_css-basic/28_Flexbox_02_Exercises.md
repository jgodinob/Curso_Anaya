# FlexBox Positioning

[Volver al inicio](#-FlexBox-Positioning)

## EXERCISES

---------------------------------------------------------------------------

1. **Posicione el elemento `<h1>` relativo a la ventana del navegador. `50px` desde arriba y `50px` desde la derecha.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        position: fixed;
        top: 50px;
        right: 50px;
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

2. **Posicionar el elemento `<h1>` `20px` a la izquierda, y `30px` hacia abajo, en relación con su posición normal.**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    h1 {
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    h1 {
      position: relative;
      top: 30px;
      left: -20px;
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

3. **Posicione el elemento `<h1>` `50px` desde la izquierda, y `100px` desde la parte superior, en relación con la página HTML.**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    h1 {
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    h1 {
      position: absolute;
      top: 100px;
      left: 50px;
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

4. **Posicione el elemento `<img>` detrás del texto.**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    img {
      position: absolute;
      left: 0px;
      top: 0px;
    }
    </style> 
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png" width="100" height="140">    
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    img {
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;
    }
    </style> 
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png" width="100" height="140">    
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Colocar el elemento con la clase "`topleft`" `30px` desde la izquierda, y `15px` desde arriba, en relación a su contenedor.**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    .container {
      position: relative;
    }

    .topleft {
      font-size: 18px;
    }

    img {
      width: 100%;
      height: auto;
      opacity: 0.3;
    }
    </style> 
  </head>
  <body>
    <div class="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png" alt="Cinque Terre" width="1000" height="300">
      <div class="topleft">Top Left</div>
    </div>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
  <style>
    .container {
      position: relative;
    }

    .topleft {
      position: absolute;
      left: 30px;
      top: 15px;
      font-size: 18px;
    }

    img {
      width: 100%;
      height: auto;
      opacity: 0.3;
    }
    </style> 
  </head>
  <body>
    <div class="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png" alt="Cinque Terre" width="1000" height="300">
      <div class="topleft">Top Left</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

5. **Posicionar el elemento `<div>` hacia la derecha mediante posicionamiento `absoluto`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        width: 300px;
        background-color: #b0e0e6;
      }
    </style>
  </head>
  <body>
  <div>
    <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
    <p>'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
  </div>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        position: absolute;
        right: 0px;
        width: 300px;
        background-color: #b0e0e6;
      }
    </style>
  </head>
  <body>
  <div>
    <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
    <p>'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
  </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-FlexBox-Positioning)