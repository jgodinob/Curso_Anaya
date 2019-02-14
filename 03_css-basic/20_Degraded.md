# Degradados

Los degradados permiten poner como fondo varios colores. Existen dos tipos: los lineales (`linear-gradient`) y los circulares (`radial-gradient`);

> **NOTA**: Los degradados se consideran `background-image`.

La sintaxis es **"entre parentesis van los colores separados por comas"**.

```css
linear-gradient(color1,color2,color3)
radial-gradient(color1,color2,color3)
```

También se puede definir una para cada color.

```css
linear-gradient(color1 20px,color2 50px,color3, 100px)
radial-gradient(color1 10%,color2 60%,color3 80%)
```

Para poner un angulo se pone al inicio, antes del primer color (en `deg`)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<h1>Degradados</h1>
<div class="linear-gradient" style="width: 400px; height: 250px; border: 2px solid black; margin: 1em auto; background-image: linear-gradient(50deg, yellow 50%,red 50%);"></div>
<div class="radial-gradient" style="width: 400px; height: 250px; border: 2px solid black; margin: 1em auto; background-image: radial-gradient(yellow,red); "></div>

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Degradados</h1>
  <div class="linear-gradient"></div>
  <div class="radial-gradient"></div>
</body>
</html>
```
```css
[class$="gradient"] {
  width: 400px;
  height: 250px;
  border: 2px solid black;
  margin: 1em auto;
}
.linear-gradient {
  background-image: linear-gradient(50deg, yellow 50%,red 50%); 
}
.radial-gradient {
  background-image: radial-gradient(yellow,red); 
}
```

---------------------------------------------------------------------------

[Volver al inicio](#-Degradados)