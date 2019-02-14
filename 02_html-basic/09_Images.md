# Imágenes

Existen dos tipos de imágenes

* **Render**, están formadas por pixeles. En este tipo de imágenes tenemos tres formatos:
  * **jpg**, formato con pérdida. Ideales para fotografía. 
  * **png**, formato sin pérdida, admite transparencias y es ideal para logos, capturas de pantalla e imágenes como mucho color sólido.
  * **gif**, es un formato con poca profundidad de color (256), admite transparencias y animaciones.
* **Vectoriales**, son código xml que el navegador interpreta al vuelo.
  * svg


[Volver al inicio](#-Imágenes)

## ETIQUETA IMG
---------------------------------------------------------------------------

La etiqueta `<img src="" alt="">` requiere dos atributos:
* `src=""` (indica la ruta de la imagen)
* `alt=""` (indica un texto alternativo para las ocasiones en las que la imagen no se muestre, para los motores de búsqueda y para los lectores de pantalla).

---------------------------------------------------------------------------

<img src="./Examples/09_Images/mujer-small.jpg" alt="Mujer con lentes oscuros">
<img src="./Examples/09_Images/circulo.png" alt="Circulo rojo">
<img src="./Examples/09_Images/logo.svg" alt="Logo de Sass">

```html
<img src="mujer-small.jpg" alt="Mujer con lentes oscuros">
<img src="circulo.png" alt="Circulo rojo">
<img src="logo.svg" alt="Logo de Sass">
```

---------------------------------------------------------------------------

[Volver al inicio](#-Imágenes)

## COMPRESIÓN DE IMÁGENES
---------------------------------------------------------------------------

> **NOTA**: Antes de comprimir, debes redimensionar la imagen a la resolución que necesitas.

* Las imágenes para web deben ser de 72ppp.
* El formato jpg admite compresiones de 0% a 100%
* El formato png se comprime en png8 (256 colores)

<a href="http://tinypng.com" target="_blank">Tiny PNG</a>

[Volver al inicio](#-Imágenes)

## ELEMENTOS FIGURE Y FIGCAPTION
---------------------------------------------------------------------------

La etiqueta `<figure></figure>` sirve para encerrar elementos multimedia como imagenes o videos acompañados de una leyenda con el elemento `<figcaption></figcaption>`.

---------------------------------------------------------------------------

<figure>
  <img src="" alt="">
  <figcaption>
  </figcaption>
</figure>

```html
<figure>
  <img src="" alt="">
  <figcaption>
  </figcaption>
</figure>
```

---------------------------------------------------------------------------

<figure>
  <img src="./Examples/09_Images/mujer-small.jpg" alt="Mujer con lentes oscuros">
  <img src="./Examples/09_Images/juguete.jpg" alt="Oveja de peluche">
  <figcaption>
    Mujer con lentes oscuros y oveja de peluche. Fuente: <a href="http://pexels.com">Pexels</a>
  </figcaption>
</figure>

```html
<figure>
  <img src="./Examples/09_Images/mujer-small.jpg" alt="Mujer con lentes oscuros">
  <img src="./Examples/09_Images/juguete.jpg" alt="Oveja de peluche">
  <figcaption>
    Mujer con lentes oscuros y oveja de peluche. Fuente: <a href="http://pexels.com">Pexels</a>
  </figcaption>
</figure>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Imágenes)

## PICTURE
---------------------------------------------------------------------------

<picture>
  <source srcset="./Examples/09_Images/juguete.jpg" media="(min-width: 1000px)">
  <source srcset="./Examples/09_Images/hombre.jpg" media="(min-width: 600px)">
  <img src="./Examples/09_Images/logo.svg" alt="Mujer">
</picture>

```html
<picture>
  <source srcset="./Examples/09_Images/juguete.jpg" media="(min-width: 1000px)">
  <source srcset="./Examples/09_Images/hombre.jpg" media="(min-width: 600px)">
  <img src="./Examples/09_Images/logo.svg" alt="Mujer">
</picture>
```

> **NOTA**: Prueba cambiando el ancho del navegador a ver que ocurre...

[Volver al inicio](#-Imágenes)