# Display

[Volver al inicio](#-Display)

## EXERCISES

---------------------------------------------------------------------------

1. **Ocultar el elemento `<h1>`. Debería seguir ocupando el mismo espacio que antes.**

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
                visibility: hidden;
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

2. **Ocultar el elemento `<h1>`. No debe ocupar ningún espacio.**

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
                display: none;
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

3. **Visualizar las posiciones de la lista como elementos en línea.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <h1>This is a Heading</h1>

        <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Pear</li>
        </ul>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            li {
                display: inline;
            }        
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>

        <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Pear</li>
        </ul>
    </body>
</html>
```

---------------------------------------------------------------------------

4. **Mostrar los elementos `<strong>` como elementos de bloque.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a <strong>paragraph</strong>, with some words more <strong>important</strong> than others </p>
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
            strong {
                display:block;
            }        
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a <strong>paragraph</strong>, with some words more <strong>important</strong> than others </p>
        <p>This is another paragraph.</p>
    </body>
</html>
```
