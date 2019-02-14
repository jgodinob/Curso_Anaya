# Background

[Volver al inicio](#-Background)

## EXERCISES

---------------------------------------------------------------------------

1. **Añada una segunda imagen de fondo (`img_flwr.gif`) al elemento `<body>`. Asegúrese de que `img_flwr.gif` aparece en la parte superior de la imagen de fondo actual.**

```html
<!DOCTYPE html>
<html>
      <head>
        <style> 
          body {
            background-image: url(paper.gif);
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
          body {
            background-image: url(img_flwr.gif), url(paper.gif);
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

[Volver al inicio](#-Background)