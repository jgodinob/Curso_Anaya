# Clases

[Volver al inicio](#-Clases)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Añada la clase "cities" al elemento `<div>`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .cities {
        background-color:black;
        color:white;
        padding:20px;
      }
    </style>
  </head>
  <body>
    <div>
      <h2>London</h2>
      <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
      <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
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
      .cities {
        background-color:black;
        color:white;
        padding:20px;
      }
    </style>
  </head>
  <body>
    <div class="cities">
      <h2>London</h2>
      <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
      <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
    </div> 
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Cree un selector de `class` llamado "especial". Añada la propiedad `color` con el valor "rojo" dentro de "especial".Por último, añada la `class` "especial" a `<span>` y `<p>`.**

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My <span>Important</span> Heading</h1>
    <p>My important paragraph.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .special {
        color:red;
      }
    </style>
  </head>
  <body>
    <h1>My <span class="special">Important</span> Heading</h1>
    <p class="special">My important paragraph.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Cree un selector de `class` llamado "`cities`" (ciudades). Añada los siguientes estilos:**
* **color negro de fondo**
* **color blanco de texto**
* **Relleno de 20 píxeles**
**Añada la `class` "`cities`" al elemento `<div>`.**

```html
<!DOCTYPE html>
<html>
  <body>
    <div>
      <h2>London</h2>
      <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
      <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
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
      .cities {
        background-color:black;
        color:white;
        padding:20px;
      }
    </style>
  </head>
  <body>
    <div class="cities">
      <h2>London</h2>
      <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
      <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Clases)