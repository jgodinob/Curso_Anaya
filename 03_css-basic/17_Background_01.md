# Background

La propiedad `background` es un **shorthand** de:

* `background-color:`, define un color de fondo
* `background-image`, define una imagen como fondo
* `background-size:`, define el tamaño del fondo respecto a la caja
* `background-position:`, define la posicion del fondo
* `background-repeat`, define si el fondo se repite o no
* `background-attachment`, define si el fondo está enlazado a la caja o al viewport
* `background-clip:`, define hasta donde llega el fondo
* `background-origin:`, define desde donde se dibuja el fondo

[Volver al inicio](#-Background)

## PROPIEDADES

---------------------------------------------------------------------------

[Volver al inicio](#-Background)

### BACKGROUND-COLOR

---------------------------------------------------------------------------

`background-color:`, define un color de fondo

```css
/* Background-color*/
.bg-color {
  background-color: green;
}
```

[Volver al inicio](#-Background)

### BACKGROUND-IMAGE

---------------------------------------------------------------------------

`background-image`, define una imagen como fondo

```css
/*background-image*/
.bg-image {
  background-image: url(img/land.jpg);
}
```

[Volver al inicio](#-Background)

### BACKGROUND-SIZE

---------------------------------------------------------------------------

`background-size:`, define el tamaño del fondo respecto a la caja

Sintaxis:
* `background-size: x y;`

Posibles valores: `auto` | `cover` | `contain`

* `background:`
    * `auto:` el tamaño original del fondo
    * `cover:` cubre por completo la caja
    * `contain:` hace que el fondo este contenido en su totalidad dentro de la caja;

```css
/* background-size */
.bg-size {
  background-image: url(img/land.jpg);
  /*background-size: 100px 100px;*/
  /*background-size: 100%;*/
  /*background-size: auto;*/
  /*background-size: cover;*/
  background-size: contain;
```

[Volver al inicio](#-Background)


### BACKGROUND-POSITION

---------------------------------------------------------------------------

Sintaxis (coordenada 0,0 = top, left)
* `background-position: x y;`

Keywords:
* `x` = left | center | right
* `y` = top | center | bottom

```css
/*background-position*/
.bg-position {
  background-image: url(img/bird1.png), url(img/bird2.png);
  background-size: 50%;
  background-position: right bottom, left top;
  background-repeat: no-repeat;
}
```

[Volver al inicio](#-Background)

### BACKGROUND-REPEAT

---------------------------------------------------------------------------

`background-repeat` define si el fondo se repite o no.

Puede tener los siguientes valores: `repeat` | `no-repeat` |  `repeat-x` | `repeat-y`

```css
.bg-repeat {
  background-image: url(img/bird1.png);
  background-size: 50%;
  background-repeat: repeat-y;
}
```

[Volver al inicio](#-Background)

### BACKGROUND-ATTACHEMENT

---------------------------------------------------------------------------

`background-attachment` define si el fondo está enlazado a la caja o al viewport.

Posibles valores: `scroll` | `fixed`

```css
.bg-attachment {
  background-image: url(img/land2.jpg);
  background-attachment: fixed;
  background-size: 700px
}
```

[Volver al inicio](#-Background)

### BACKGROUND-CLIP

---------------------------------------------------------------------------

`background-clip:`, define hasta donde llega el fondo

Posibles valores: `content-box` | `padding-box` | `border-box`

```css
.bg-clip {
  border: 10px dotted black;
  background-color: yellow;
  background-clip: content-box;
  padding: 2em;
}
```

[Volver al inicio](#-Background)

### BACKGROUND-ORIGIN

---------------------------------------------------------------------------

`background-origin:`, define desde donde se dibuja el fondo

Posibles valores: `content-box` | `padding-box` | `border-box`

```css
.bg-origin {
  border: 10px dotted black;
  background-image: url(img/bird1.png);
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  background-origin: padding-box;
}
```

[Volver al inicio](#-Background)

### MÚLTIPLES BACKGROUND

---------------------------------------------------------------------------

Se pueden poner fondos múltiples separados por comas. Todas sus propiedades deben ponerse entre comas en el mismo orden.

> **NOTA**: Tener en cuenta que el primer background que aparezca en el codigo aparece encima en las capas.

```css
.bg-multiple {
  background-image: url(img/bird1.png), 
                    url(img/bird2.png),
                    url(img/land.jpg);
  background-size: 40%, 50%, cover;
  background-repeat: no-repeat;
  background-position: right center, 0 0, 0 0;
}
```

[Volver al inicio](#-Background)

## SHORTHAND

---------------------------------------------------------------------------

Un ejemplo de Shorthand con background sería:

```css
.bg-shorthand {
  background: 
    right center / 40% url(img/bird1.png) no-repeat,
    0 0 / 50% url(img/bird2.png) no-repeat,
    0 0 / cover url(img/land.jpg);
}
```

[Volver al inicio](#-Background)

