# Border

[Volver al inicio](#-Border)

## EXERCISES

---------------------------------------------------------------------------

1. **Poner un borde `4px`, "punteado" para `<p>`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
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
                border-style: dotted;
                border-width: 4px;
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

2. **Ajuste el color del borde para `<p>` a `rojo`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                border-style: dotted;
                border-width: 4px;
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                border-style: dotted;
                border-width: 4px;
                border-color: red;                
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

3. **Cambie las propiedades de los 3 bordes, de modo que sólo muestren el borde en la parte superior.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                border-style: dotted;
                border-width: 4px;
                border-color: red;
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                border-top-style: dotted;
                border-top-width: 4px;
                border-top-color: red;
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

4. **Con la propiedad de la frontera: Ajuste el borde para `p` a `10px`, `sólido` y `verde`.**

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
            p {
                border: 10px solid green;
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

---------------------------------------------------------------------------

5. **Indique las esquinas redondeadas del elemento `<div>` (utilice la propiedad shorthand y el valor `25px`).**

```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            div {
                background: #73AD21;
                padding: 20px; 
                width: 200px;  
            }
        </style>
    </head>
    <body>
        <div>This is a div element. It has some text.</div>
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
                border-radius: 25px;
                background: #73AD21;
                padding: 20px; 
                width: 200px;  
            }
        </style>
    </head>
    <body>
        <div>This is a div element. It has some text.</div>
    </body>
</html>
```

---------------------------------------------------------------------------

6. **Dale al elemento `<div>` una esquina redondeada (`25px` radio) en la parte inferior izquierda.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            div {
                background: #73AD21;
                padding: 20px; 
                width: 200px;  
            }
        </style>
    </head>
    <body>
        <div>This is a div element. It has some text.</div>
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
                border-bottom-left-radius: 25px;
                background: #73AD21;
                padding: 20px; 
                width: 200px;  
            }
        </style>
    </head>
    <body>
        <div>This is a div element. It has some text.</div>
    </body>
</html>
```

---------------------------------------------------------------------------

7. **Con la propiedad `outline:` establecer `sólido`, `5px` para `<p>`.**

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
                outline-style: solid;
                outline-width: 5px;
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

8. **Con la propiedad `outline:` establecer color `verde` para `<p>`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            p {
                outline-style: solid;
                outline-width: 4px;
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
                outline-style: solid;
                outline-width: 4px;
                outline-color: green;
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

9. **Con la propiedad `outline:` Ajustar el esquema de `p` a `rojo`, `punteado` y `10px`.**

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
                outline: red dotted 10px;
            }
        </style>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>
```