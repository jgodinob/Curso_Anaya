# Forms

[Volver al inicio](#-Forms)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Haga un formulario HTML que contenga un elemento `<input>` con `type="button"`, y `value="OK"`.**

```html
<!DOCTYPE html>
<html>
  <body>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <form>
        <input type="button" value="OK">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Agregar 2 botones de opción al formulario. Una para "hombre" y otra para "mujer", ambas con nombre="género".**

```html
<!DOCTYPE html>
<html>
  <body>
    <form>
    </form>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <form>
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Añada un botón de enviar al formulario y especifique que el formulario debe ir a "/action_page.php".**

```html
<!DOCTYPE html>
<html>
  <body>
    <form>
        Name: <input type="text" name="name">
    </form>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
        Name: <input type="text" name="name">
        <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Especifique que el formulario se envía utilizando el método "post".**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
        Name: <input type="text" name="name">
        <input type="submit">
    </form>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php" method="post">
        Name: <input type="text" name="name">
        <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Forms)