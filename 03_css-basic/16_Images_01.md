# Imágenes

No existen propiedades específicas para las imágenes. Sin embargo, daremos algunos tips.

1. Imágenes responsive

```css
img {
    max-width: 100%;
    height: auto;
}
```

> **NOTA**: También se puede poner `width: 100%;`

2. Espaciado por debajo de las imágenes

Esto se debe a que son elementos inline y su altura de línea (line-height) es quien genera ese espacio. 

  Existen 2 soluciones:
  * `line-height: 0;`, al contenedor
  * `display:block;`, a la misma imagen

3. Centrado de imágenes, dos formas de centrar imágenes:
    * A la imagen:
        * `display:block;`
        * `margin-left: auto;`
        * `margin-right: auto;`
    * Al contenedor (siempre que la imagen no tenga un display:block):
        * `text-align: center;`

4. Centrado vertical respecto a un texto
    * Darle a la imagen y al texto: `vertical-align: middle;`
    * Darle al contenedor de la imagen y texto: `display: table;`
    * Y al texto:
        * `display: table-cell;`
        * `vertical-align: middle;`

## FUENTE DE IMÁGENES ALEATORIAS

[http://lorempixel.com/200/200](http://lorempixel.com/200/200)

[Volver al inicio](#-Imágenes)