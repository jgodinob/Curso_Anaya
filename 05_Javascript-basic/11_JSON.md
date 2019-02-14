# JSON (JavaScript Object Notation)

* Es una notacion para estructurar información.
* Esta inspirada en JavaScript pero no es JavaScript.
* Se usa para compartir información.
* Existen bases de datos como MongoDB que utilizan JSON.

Aunque esta basado en los objetos de JavaScript tiene dos diferencias fundamentales con estos:
  1. Todas las claves van entrecomilladas.
  2. No existen métodos, solo propiedades.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Convert a JavaScript object into a JSON string, and send it to the server.</h2>
    <script>
      var myObj = { name: "John", age: 31, city: "New York" };
      var myJSON = JSON.stringify(myObj);
      window.location = "demo_json.php?x=" + myJSON;
    </script>
  </body>
</html>
```