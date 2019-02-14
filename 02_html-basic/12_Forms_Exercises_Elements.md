# Elementos del Formulario

[Volver al inicio](#-Elementos-del-Formulario)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Añada una lista desplegable con `name="cars"` al formulario. Incluya las siguientes opciones: "volvo", "ford", "fiat" y "audi".**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
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
      <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="ford">Ford</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Añada un área de texto con `name="note"` al formulario.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
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
      <textarea name="note"></textarea>
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Ajuste el texto de la pantalla del `<button>` a: "Click Me!".**

```html
<!DOCTYPE html>
<html>
  <body>
    <button type="button" onclick="alert('Hello World!')">
    </button>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <button type="button" onclick="alert('Hello World!')">
      Click Me!
    </button>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Elementos-del-Formulario)