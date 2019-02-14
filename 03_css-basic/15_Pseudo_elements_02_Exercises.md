# Pseudo elementos

[Volver al inicio](#-Pseudo-elementos)

## EXERCISES

---------------------------------------------------------------------------

1. **Set text color to red, for the first line of the `<p>` element.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p::first-line {
                color: red;
            }
        </style>
    </head>
    <body>
        <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
    </body>
</html>
```

---------------------------------------------------------------------------

2. **Set text color to "`red`", and the text size to "`xx-large`", for the first letter of the `<p>` element.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style></style>
    </head>
    <body>
        <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p::first-letter {
                color: red;
                font-size: xx-large;
            }
        </style>
    </head>
    <body>
        <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
    </body>
</html>
```

---------------------------------------------------------------------------

3. **Insert the image "`http://lorempixel.com/200/200`" before, and after `<p>` elements, using the `::before` and `::after` pseudo-elements.**

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
            p::before{
                content: url(http://lorempixel.com/200/200);
            }
            p::after{
                content: url(http://lorempixel.com/200/200);
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