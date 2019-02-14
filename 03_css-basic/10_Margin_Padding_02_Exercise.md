# Margin & Padding

[Volver al inicio](#-Margin-&-Padding)

## EXERCISES

---------------------------------------------------------------------------

1. **Ajustar el margen izquierdo de `<h1>` a `20px`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1 {
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
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
                background-color: lightblue;
                margin-left: 20px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

2. **Ajustar todos los márgenes para `<h1>` a `25px`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1 {
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
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
                background-color: lightblue;
                margin: 25px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

3. **Utilice la propiedad margin para establecer los márgenes superior e inferior para `<h1>` a `50px`, y los márgenes izquierdo y derecho a `25px`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1 {
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
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
                background-color: lightblue;
                margin: 50px 25px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

4. **Utilice la propiedad margin para centrar la alineación del elemento `<h1>`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1 {
                background-color: lightblue;
                width: 300px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
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
                background-color: lightblue;
                width: 300px;
                margin: auto;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

5. **Ajustar el relleno superior de `<p>` a `30px`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
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
                background-color: lightblue;
                padding-top: 30px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

6. **Ajustar todos los acolchados para `<p>` a `50px`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
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
                background-color: lightblue;
                padding: 50px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

7. **Utilice la propiedad de acolchado para ajustar los acolchados superior e inferior para `<p>` a `25px`, y los acolchados izquierdo y derecho a `50px`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
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
                background-color: lightblue;
                padding: 25px 50px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```

---------------------------------------------------------------------------

8. **Alinee el elemento `<div>` usando márgenes.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                width: 300px;
                background-color: #b0e0e6;
            }
        </style>
    </head>
    <body>
        <div>
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
            <p>'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
        </div>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                margin-left: auto;
                margin-right: auto;
                width: 300px;
                background-color: #b0e0e6;
            }
        </style>
    </head>
    <body>
        <div>
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
            <p>'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
        </div>
    </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Margin-&-Padding)