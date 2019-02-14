# DOM

[Volver al inicio](#-DOM)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Utilice el método `getElementById` para encontrar el elemento `<p>` y cambie su texto a "`Hello`".**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <p id="demo"></p>
    <script>
    document.getElementById("demo").innerHTML= "Hello"";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Utilice el método `getElementsByTagName` para encontrar el primer elemento `<p>` y cambie su texto a "`Hello`".**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <p id="demo"></p>
    <script>
    document.getElementsByTagName("p")[0].innerHTML= "Hello";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Cambiar el texto del primer elemento que tiene el nombre de clase "`test`".**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <p class="test"></p>
    <p class="test"></p>
    <script>
    document.getElementsByClassName("test")[0].innerHTML
    = "Hello";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Utilice HTML DOM para cambiar el valor del atributo src de la imagen.**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <img id="image" src="smiley.gif">
    <script>
    document.getElementById("image").src="pic_mountain.jpg";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

5. **Utilice `HTML DOM` para cambiar el valor del campo de entrada.**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <input type="text" id="myText" value="Hello">
    <script>
      document.getElementById("myText").value
      = "Hello";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

6. **Cambiar el color del texto del elemento `<p>` a "`rojo`".**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <p id="demo"></p>
    <script>
    document.getElementById("demo").style.color = "red";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

7. **Cambie el tamaño de fuente del elemento `p` a `40 píxeles`.**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <p id="demo"></p>
    <script>
    document.getElementById("demo").style.fontSize = "40px";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

8. **Utilice la propiedad de visualización CSS para ocultar el elemento `p`.**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <p id="demo"></p>
    <script>
    document.getElementById("demo").style.display = "none";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

9. **Utilice el `eventListener` para asignar un evento `onclick` al elemento `<button>`.**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <button id="demo">Click me1</button>

    <script>
    document.getElementById("demo").addEventListener("click", myFunction);
    </script>
  </body>
</html>
```