# Links

Con CSS, los enlaces pueden ser estilizados de diferentes maneras.

<p><b><a href="default.asp" target="_blank" style="color: hotpink;">This is a link</a></b></p>

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            a {
            color: hotpink;
            }
        </style>
    </head>
    <body>
        <p><b><a href="default.asp" target="_blank">This is a link</a></b></p>
    </body>
</html>
```

Además, los enlaces pueden tener diferentes estilos dependiendo del estado en el que se encuentren.

Los cuatro estados de enlace son:
* `a:link` - un enlace normal, no visitado
* `a:visited` - un enlace que el usuario ha visitado
* `a:hover` - un enlace cuando el usuario pasa el ratón sobre él
* `a:active` - un enlace en el momento en que se hace clic en él

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* unvisited link */
            a:link {
            color: red;
            }
            /* visited link */
            a:visited {
            color: green;
            }
            /* mouse over link */
            a:hover {
            color: hotpink;
            }
            /* selected link */
            a:active {
            color: blue;
            }
        </style>
    </head>
    <body>
        <p><b><a href="default.asp" target="_blank">This is a link</a></b></p>
        <p><b>Note:</b> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective.</p>
        <p><b>Note:</b> a:active MUST come after a:hover in the CSS definition in order to be effective.</p>
    </body>
</html>
```

> **IMPORTANTE**: Al establecer el estilo para varios estados de enlace, hay algunas reglas de orden:
* `a:hover` DEBE venir después de `a:link` y `a:visited`
* `a:active` DEBE venir después de `a:hover`

[Volver al inicio](#-Links)

## TEXT-DECORATION

---------------------------------------------------------------------------

La propiedad de `text-decoration` se utiliza principalmente para eliminar subrayados de los enlaces:

<p><b><a id="firstLink" style="text-decoration: none;" href="default.asp" target="_blank">This is a link</a></b></p>
<p><b><a id="secondLink" style="text-decoration: underline;" href="default.asp" target="_blank">This is a link</a></b></p>

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            #firstLink {
            text-decoration: none;
            }
            #secondLink {
            text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <p><b><a id="firstLink" href="default.asp" target="_blank">This is a link</a></b></p>
        <p><b><a id="secondLink" href="default.asp" target="_blank">This is a link</a></b></p>
    </body>
</html>
```

> **NOTA**: Además posee propiedades propias de `text`.

[Volver al inicio](#-Textos)
