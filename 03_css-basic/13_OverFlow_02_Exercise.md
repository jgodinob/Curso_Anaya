# OverFlow

[Volver al inicio](#-OverFlow)

## EXERCISES

---------------------------------------------------------------------------

1. **Añada una barra de desplazamiento al elemento `<div>`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                background-color: #eee;
                width: 200px;
                height: 70px;
                border: 1px dotted black;
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
                background-color: #eee;
                width: 200px;
                height: 70px;
                border: 1px dotted black;
                overflow: scroll;
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

2. **Especifique que el texto desbordante en el elemento `<div>` no debe ser visible, ni siquiera con el desplazamiento.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                background-color: lightblue;
                width: 200px;
                height: 200px;
            }
        </style>
    </head>
    <body>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
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
                background-color: lightblue;
                width: 200px;
                height: 200px;
                overflow: hidden;     
            }
        </style>
    </head>
    <body>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </body>
</html>
```

---------------------------------------------------------------------------

3. **Añada una barra de desplazamiento horizontal a `<div>`.**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                background-color: #eee;
                width: 150px;
                height: 70px;
                border: 1px dotted black;
                white-space: nowrap;
            }
        </style>
    </head>
    <body>
        <div>
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
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
                background-color: #eee;
                width: 150px;
                height: 70px;
                border: 1px dotted black;
                white-space: nowrap;
                overflow-x: scroll;   
            }
        </style>
    </head>
    <body>
        <div>
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
        </div>
    </body>
</html>
```

[Volver al inicio](#-OverFlow)