# Textos

[Volver al inicio](#-Textos)

## EXERCISES

---------------------------------------------------------------------------

1. **Establezca el color del texto de la página en "rojo" y el color del texto en `<h1>` en "azul".**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
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
                color: red;
            }

            h1 {
                color: blue;
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

2. **Alinee el elemento `<h1>` en el centro.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
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
            h1 {
                text-align: center;
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

3. **Quitar el subrayado del enlace.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="css_text.asp">CSS text tutorial</a></p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            a {
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="css_text.asp">CSS text tutorial</a></p>
    </body>
</html>
```

---------------------------------------------------------------------------

4. **Estilice el texto en `<h1>` a mayúsculas y el texto en `<p>` a mayúsculas.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
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
        h1 {
            text-transform: uppercase;
        }
        p {
            text-transform: capitalize;
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

5. **Sangrar la primera línea del elemento `<p>` con `20px`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                text-indent: 20px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </body>
</html>
```

---------------------------------------------------------------------------

6. **Establezca la familia de fuentes (`font-family`) para la página en `Courier New`, y la familia de fuentes para `<h1>` en Verdana.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
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
                font-family: "Courier New";
            }

            h1 {
                font-family: Verdana;
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

7. **Mostrar los elementos `<p>` como texto en `cursiva`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
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
            p {
                font-style: italic;
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

8. **Establezca el tamaño de fuente (`font-size`) para la página en `20px`, y el tamaño de fuente para `<h1>` en `3em`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
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
                font-size: 20px;
            }

            h1 {
                font-size: 3em;
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

9. **Mostrar los elementos `<p>` como texto en `negrita`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
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
            p {
                font-weight: bold;
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

10. **Con la propiedad `font:` Poner el `<p>` en `italic`, `20px` y `Verdana`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
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
            p {
                font: italic 20px Verdana;
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