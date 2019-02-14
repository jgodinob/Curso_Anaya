# Links

[Volver al inicio](#-Links)

## EXERCISES

---------------------------------------------------------------------------

1. **Establezca el color de los enlaces en `green`.**

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
        <p><a href="https://www.google.com">Google</a></p>
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
                color: green;
            }        
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="https://www.google.com">Google</a></p>
    </body>
</html>
```

---------------------------------------------------------------------------

2. **Establezca el color para los enlaces no visitados en `red`, y el color para los enlaces visitados en `blue`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* mouse over link */
            a:hover {
                color: black;
            }

            /* selected link */
            a:active {
                color: green;
            }        
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="https://www.google.com">Google</a></p>
    </body>
</html>
```

**SOLUCIÓN**

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
                color: blue;
            }
            /* mouse over link */
            a:hover {
                color: black;
            }
            /* selected link */
            a:active {
                color: green;
            }       
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="https://www.google.com">Google</a></p>
    </body>
</html>
```

---------------------------------------------------------------------------

3. **Elimine los subrayados de los enlaces visitados y no visitados, y especifique `underline` para los estados `hover` y `active` de los enlaces.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* unvisited link */
            a:link {
            
            }

            /* visited link */
            a:visited {
            
            }

            /* mouse over link */
            a:hover {
            
            }

            /* selected link */
            a:active {
            
            }        
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="https://www.google.com">Google</a></p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* unvisited link */
            a:link {
                text-decoration: none;
            }

            /* visited link */
            a:visited {
                text-decoration: none;
            }

            /* mouse over link */
            a:hover {
                text-decoration: underline;
            }

            /* selected link */
            a:active {
                text-decoration: underline;
            }       
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="https://www.google.com">Google</a></p>
    </body>
</html>
```

---------------------------------------------------------------------------

4. **Establezca el color de fondo para los enlaces visitados y no visitados en `azul claro`, y el color de fondo para los estados `hover` y `active` de los enlaces en `amarillo`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* unvisited link */
            a:link {
            
            }

            /* visited link */
            a:visited {
            
            }

            /* mouse over link */
            a:hover {
            
            }

            /* selected link */
            a:active {
            
            }        
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="https://www.google.com">Google</a></p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* unvisited link */
            a:link {
                background-color: lightblue;
            }

            /* visited link */
            a:visited {
                background-color: lightblue;
            }

            /* mouse over link */
            a:hover {
                background-color: yellow;
            }

            /* selected link */
            a:active {
                background-color: yellow;
            }      
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <p><a href="https://www.google.com">Google</a></p>
    </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Links)