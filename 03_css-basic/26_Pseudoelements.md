# Pseudo elementos

Son elementos que no existen en el DOM sino que se crean en determinadas circunstancias y a efectos de orden se consideran hijos del elemento al que pertenecen.

Son dos
* `:before` (aparece antes)
* `:after` (aparece despues)

Para crear un pseudoelemento se usa el selector correspondiente y se requiere siempre usar la propiedad content.

La propiedad content imprime un contenido en el pseudoelemento. Puede recibir tres tipos de datos:
* `string` ("entre comillas")
* `url()`
* `attr()` Imprime un atributo (pasando el atributo como parámetro)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div>
  <img src="https://lenguajecss.com/img/logo.png" width=20px><h1 style="display: inline;">This is a heading</h1>
  <h1>This is a heading</h1>
</div>
  
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1::before {
        content: url(https://lenguajecss.com/img/logo.png);
      }
    </style>
  </head>
  <body>
    <h1>This is a heading</h1>
    <h1>This is a heading</h1>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Pseudo-elementos)
