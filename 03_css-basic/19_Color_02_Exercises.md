# Color

[Volver al inicio](#-Color)

## EXERCISES

---------------------------------------------------------------------------

1. **Ajustar la `transparencia/opacidad` (`opacity`)del elemento `<img>` a `0,4`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <img src="klematis.jpg" width="150" height="113">
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    img {
      opacity: 0.4;
    }
    </style>
  </head>
  <body>
    <img src="klematis.jpg" width="150" height="113">
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Elimine la transparencia/opacidad del elemento `<img>` cuando el usuario pase el puntero del ratón sobre él.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    img {
      opacity: 0.4;
    }
    </style>
  </head>
  <body>
    <img src="klematis.jpg" width="150" height="113">
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        opacity: 0.4;
      }
      img:hover {
        opacity: 1.0;
      }
    </style>
  </head>
  <body>
    <img src="klematis.jpg" width="150" height="113">
  </body>
</html>
```

---------------------------------------------------------------------------