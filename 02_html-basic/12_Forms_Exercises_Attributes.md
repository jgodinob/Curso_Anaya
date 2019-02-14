# Atributos Formulario

[Volver al inicio](#-Atributos-Formulario)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Especifique un valor inicial de "John" para el campo de entrada.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
      First name: <input type="text" name="firstname">
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
    <form action="/action_page.php">
      First name: <input type="text" name="firstname" value="John">
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Desactivar el campo de entrada.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
      First name: <input type="text" name="firstname" value="John">
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
    <form action="/action_page.php">
      First name: <input type="text" name="firstname" value="John" disabled>
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Cambie el tamaño del campo de entrada para mostrar hasta 40 caracteres.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
      First name: <input type="text" name="firstname" value="John">
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
    <form action="/action_page.php">
      First name: <input type="text" name="firstname" value="John" size="40">
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Añada el texto "Nombre" como indicación al usuario de lo que se puede introducir en el campo de entrada.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
      <input type="text" name="fname">
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
    <form action="/action_page.php">
      <input type="text" name="fname" placeholder="First name">
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Atributos-Formulario)