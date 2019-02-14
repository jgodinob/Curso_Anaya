# Id

[Volver al inicio](#-Id)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Añada el "ejemplo" `id` al elemento `<h1>`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #example {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
      } 
    </style>
  </head>
  <body>
    <h1>My Header</h1>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #example {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
      } 
    </style>
  </head>
  <body>
    <h1 id="example">My Header</h1>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Cree un selector de identificación llamado "especial".Añada la propiedad color con el valor "rojo" dentro de "especial".Por último, añada el id "especial" al elemento `<span>`.**

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My <span>Unique</span> Heading</h1>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #special {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>My <span id="special">Unique</span> Heading</h1>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Id)