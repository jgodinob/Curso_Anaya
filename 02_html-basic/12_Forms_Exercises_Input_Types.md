# Tipos de Inputs

[Volver al inicio](#-Tipos-de-Inputs)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Cree un campo de entrada para el texto.**

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
    <input type="text">
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Cree un botón de enviar y colóquelo dentro del elemento del formulario.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
      First name: <input type="text" name="firstname">
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
      First name: <input type="text" name="firstname">
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

3. 
* **Cree dos botones de selección y colóquelos dentro del elemento de formulario, bajo el texto "Color favorito".**
* **Añada el atributo name con un valor de "color" a ambos botones de opción.**
* **Añada también un atributo de valor y especifique "azul" para el primero y "rojo" para el segundo.**
* **Por último, especifique algún texto que se corresponda con los valores.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
      Favorite color:
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
      Favorite color:
      <input type="radio" name="color" value="blue">Blue
      <input type="radio" name="color" value="red">Red
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Cree un botón (usando tipos de entrada) que diga "Click Me", que avise a "Hello World" cuando haga clic en él.**

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
    <input type="button" onclick="alert('Hello World')" value="Click Me">
  </body>
</html>
```

---------------------------------------------------------------------------

5. 
* **Cree un campo de entrada que sólo debe contener un valor numérico, y colóquelo dentro del elemento `<form>`.**
* **Añada el atributo name con un valor de "quantity" al elemento de entrada.**
* **Establezca restricciones en el campo de entrada para que sólo se acepten números entre 1 y 5.**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="/action_page.php">
      Quantity (between 1 and 5):
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
      Quantity (between 1 and 5):
      <input type="number" name="quantity" min="1" max="5">
      <input type="submit">
    </form>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Tipos-de-Inputs)