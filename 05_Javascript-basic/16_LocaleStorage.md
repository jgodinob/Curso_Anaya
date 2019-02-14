# LocalStorage 

Permite almacenar información en una pequeña base de datos local.

Para eso se usa el objeto **localStorage**

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="">
      <label for="comment">Escriba su comentario</label>
      <textarea name="comment" id="comment" cols="30" rows="10" value=""></textarea>
      <input type="submit" value="Enviar comentario">
    </form>
    <script>
      var myStorage = localStorage;
      var comment = document.getElementById('comment');

      var saveComment = setInterval( function(){
          myStorage.comment = comment.value;
        }, 1000 );
      comment.value = myStorage.comment;
      comment.addEventListener('focus', saveComment);
    </script>
  </body>
</html>
```

> **NOTA**: Para limpiar el localStorage se usa el método `clear()`, `localStorage.clear()`
> **NOTA**: `sessionStorage` es un objeto identico a **localStorage** con la unica diferencia de que al cerrar el navegador se limpian los datos.

También se pueden definir propiedades al objeto localStorage con el método `setItem`. Asi:

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="">
      <label for="comment">Escriba su comentario</label>
      <textarea name="comment" id="comment" cols="30" rows="10" value=""></textarea>
      <input type="submit" value="Enviar comentario">
    </form>
    <script>
      console.log(localStorage);
      localStorage.setItem('key','value');
      console.log(localStorage);
    </script>
  </body>
</html>
``` 

[Volver al inicio](#-LocalStorage)