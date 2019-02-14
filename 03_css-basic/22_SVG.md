# SVG

Los vectores no aplican en todos los casos las mismas propiedades que el css tradicional

* `fill` (equivalente a background)
* `stroke` (equivalente a border-color)
* `stroke-width` (equivalente a border-with)
* `stroke-dasharray` (indica la separacion del trazo)
* `stroke-dashoffset` (permite mover el inicio del trazo)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<svg class="vector" style="width: 500px;  height: 300px;  border: 2px solid black;  margin: auto;  display: block;">
  <circle style ="fill: none;  stroke: green;  stroke-width: 10px;  stroke-dasharray: 628px;  stroke-dashoffset: 50px;  animation: borde 6s linear infinite;" cx="250" cy="150" r="100">
</svg>

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    .vector {
      width: 500px;
      height: 300px;
      border: 2px solid black;
      margin: auto;
      display: block;
    }
    circle {
      fill: none;
      stroke: green;
      stroke-width: 10px;
      stroke-dasharray: 628px;
      stroke-dashoffset: 50px;
      animation: borde 6s linear infinite;
    }
  </style>
</head>
<body>
  <h1>SVG</h1>
  <svg class="vector">
    <circle cx="250" cy="150" r="100">
  </svg>
</body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-SVG)