# Primera Página

[Volver al inicio](#-Primera-Página)

## PRIMERA PÁGINA

---------------------------------------------------------------------------

1. Agregue el doctype HTML5

> **NOTA**: Bootstrap 4 usa elementos HTML y propiedades CSS que requieren el doctype HTML5.
Siempre incluya el tipo de documento HTML5 al comienzo de la página, junto con el atributo `lang` y el conjunto de caracteres correcto:

```html
< !DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
</html>
```

2. **Bootstrap 4** es móvil primero (**movil-first**)
**Bootstrap 4** está diseñado para responder a los dispositivos móviles. Los estilos de primeros dispositivos móviles son parte del marco central.
Para garantizar una reproducción adecuada y un zoom táctil, agregue la siguiente
etiqueta `<meta>` dentro del elemento `<head>`:

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
++  <meta name="viewport" content="width=device-width, initial-scale=1">  
    <meta charset="utf-8">
  </head>
</html>
```

El `width=device-width` parte del ancho del `width=device-width` establece el ancho de la página para seguir el ancho de pantalla del dispositivo (que variará según el dispositivo).
La `initial-scale=1` parte establece el nivel de zoom inicial cuando el navegador carga la página por primera vez.

4. Ahora añadiríamos nuestra librería de bootstrap

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">  
++  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
++  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
++  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
++  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <meta charset="utf-8">
  </head>
</html>
```

3. Contenedores
**Bootstrap 4** también requiere un elemento contenedor para envolver el contenido del sitio.
  Hay dos clases de contenedor para elegir:
  1. La clase `.container` proporciona un contenedor responsivo de ancho fijo.
  2. La clase `.container-fluid` proporciona un contenedor de ancho completo, que abarca todo el ancho de la ventana gráfica.

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <meta charset="utf-8">
  </head>
++<body>
++  <div class="container">
++    <h1>My First Bootstrap Page</h1>
++    <p>This is some text.</p>
++  </div>
++</body>  
</html>
```

> **NOTA**: Podríamos cambiar nuestro contenedor a fluido sustituyendo la clase `container` por `container-fluid` y ver la diferencia.

[Volver al inicio](#-Primera-Página)