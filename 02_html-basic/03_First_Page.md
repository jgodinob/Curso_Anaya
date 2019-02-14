# Primera Página

Utilizando el código predefinido por **Visual Studio Code** iremos añadiendo modificaciones para explicar el código:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Cambiamos el lenguaje de nuestra web: 

```diff
<!DOCTYPE html>
-- <html lang="en">
++ <html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

> **NOTA**: Esto permitirá a los buscadores obtener información sobre el contenido de la misma facilitando las búsquedas para aportar al usuario el contenido deseado:

De igual forma, podemos incluir información adicional de apoyo a los buscadores, tal y como es el `<meta name"description">`.

```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
++ <meta name="description" content="Una genial descripción de mi página">  
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

> **NOTA**: Esta facilitará el mensaje que aparece en el buscador con la descripción del contenido de la misma:
> **ATAJO**: **¿Qué es EMMET?** Es un plugin que acepta la mayoría de los editores de còdigo y permite atajos. Uno importante posibilita la escritura de tags unicamente incluyendo el código inicial, por ejemplo `p` y pulsando `Tab`.

Es momento de añadir nuestra **hoja de estilos** o **stylesheet**:

```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Una genial descripción de mi página">    
  <title>Document</title>
++ <link rel="stylesheet" href="styles.css">  
</head>
<body>
  
</body>
</html>
```

Con el siguiente contenido:

```css
// ./styles.css
body {
  background: yellow;
}
```

Y nuestro **favicon** [favicon.png](./favicon.png):

```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Una genial descripción de mi página">   
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
++ <link rel="shortcut icon" href="favicon.png">  
</head>
<body>
  
</body>
</html>
```

Ahora añadiremos un **encabezado** del tipo `<h1></h1>`:

```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Una genial descripción de mi página">  
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="shortcut icon" href="favicon.png">
</head>
<body>
++  <h1>Título de mi página web</h1>  
</body>
</html>
```

Y para finalizar un **script**.

```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Una genial descripción de mi página"> 
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="shortcut icon" href="favicon.png">
</head>
<body>
  <h1>Título de mi página web</h1>
++  <script src="scripts.js"></script>  
</body>
</html>
```

Que modifique parte del DOM, **Document Object Model**:

```js
// scripts.js
document.querySelector('h1').addEventListener('click', ()=> {
  document.body.style.background = 'green';
})
```

Nuestro código final será:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Una genial descripción de mi página">
    <title>Título</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut icon" href="favicon.png">
  </head>
  <body>
    <h1>Título de mi página web</h1>  
    <script src="scripts.js"></script>
  </body>
</html>
```

[Volver al inicio](#-Primera-Página)