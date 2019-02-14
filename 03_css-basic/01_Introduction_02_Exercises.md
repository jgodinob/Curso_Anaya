# Introducción

[Volver al inicio](#-Introducción)

## EXERCISES

---------------------------------------------------------------------------

1. **Añada una hoja de estilo externa con la URL: "Mystyle.css".**

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

2. **Establezca `background-color: linen` para la página, utilizando una hoja de estilo interna.**

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
                background-color: linen;
            }
        </style>    
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

3. **Establezca `background-color: linen` para la página, utilizando un estilo en línea.**

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body style="background-color: linen">
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

4. **Elimine todos los estilos, excepto la hoja de estilo externa "mystyle.css".**

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="mystyle.css">
        <style>
            p {
                color: red;
            }
        </style>
    </head>
    <body style="background-color: lightcyan">
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
    </body>
</html>
```

[Volver al inicio](#-Introducción)