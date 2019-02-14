# Scripts

[Volver al inicio](#-Scripts)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Utilice JavaScript para cambiar el contenido HTML del elemento `<p>` a "Hello World!**

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="demo">Hi.</p>
    <script>
    // Add code here
    </script> 
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="demo">Hi.</p>
    <script>
      document.getElementById("demo").innerHTML = "Hello World!";
    </script> 
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Utilice JavaScript para cambiar el tamaño del texto del elemento `<p>` a 40 píxeles.**

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="demo">Hi.</p>
    <script>
    // Add code here
    </script>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="demo">Hi.</p>
    <script>
      document.getElementById("demo").style.fontSize = "40px";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Utilice JavaScript para añadir un color de fondo rojo al elemento `<p>`.**

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="demo">Hi.</p>
    <script>
    // Add code here
    </script>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="demo">Hi.</p>
    <script>
      document.getElementById("demo").style.backgroundColor = "red";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Use JavaScript para cambiar la imagen (el atributo src) a una nueva imagen llamada "pic_trulli.jpg".**

```html
<!DOCTYPE html>
<html>
  <body>
    <img id="image" src="smiley.gif" width="304" height="228">
    <script>
    // Add code here
    </script>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <img id="image" src="smiley.gif" width="304" height="228">
    <script>
      document.getElementById("image").src = "pic_trulli.jpg";
    </script>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Scripts)