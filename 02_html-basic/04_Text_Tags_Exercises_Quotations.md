# Citas

[Volver al inicio](#-Citas)

## EJERCICIOS

---------------------------------------------------------------------------

1. **Utilice un elemento HTML para añadir comillas alrededor de las letras "cool".**

```html
<!DOCTYPE html>
<html>
  <body>
    <p>I am so cool.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <p>I am so <q>cool</q>.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **El texto a continuación debe ser una sección entre comillas. Añada el elemento HTML adecuado y especifique que se cita desde la siguiente URL: [http://www.worldwildlife.org/who/index.html](http://www.worldwildlife.org/who/index.html)**

```html
<!DOCTYPE html>
<html>
  <body>
    For 50 years, WWF has been protecting the future of nature.
    The world's leading conservation organization,
    WWF works in 100 countries and is supported by
    1.2 million members in the United States and
    close to 5 million globally.
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
    For 50 years, WWF has been protecting the future of nature.
    The world's leading conservation organization,
    WWF works in 100 countries and is supported by
    1.2 million members in the United States and
    close to 5 million globally.
    </blockquote>
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Haga que el texto de abajo vaya de derecha a izquierda.**

```html
<!DOCTYPE html>
<html>
  <body>
    What a beautiful day!
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <bdo dir="rtl">What a beautiful day!</bdo>
  </body>
</html>
```

> **NOTA**: Ejercicio para investigar. ;o)

---------------------------------------------------------------------------

4. **Las letras "OMS" en el texto siguiente son una abreviatura de "Organización Mundial de la Salud". Utilice un elemento HTML para proporcionar la abreviatura especificada de "WHO".**

```html
<!DOCTYPE html>
<html>
  <body>
    <p>The WHO was founded in 1948.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <body>
    <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Citas)