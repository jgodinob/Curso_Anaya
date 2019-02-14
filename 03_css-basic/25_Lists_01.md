# Listas

Existen tres propiedades específicas para las listas:

* `list-style-position`
    * `outside` (default)
    * `inside`

* `list-style-image` (no recomendado, se prefiere pseudo elementos o background-image)
    * `url()`

* `list-style-type`
    * `disc`
    * `circle`
    * `square`
    * `decimal`
    * `decimal-leading-zero`
    * `lower-alpha`
    * `lower-roman`
    * `lower-greek`
    * `lower-latin`
    * `upper-alpha`
    * `upper-roman`
    * `upper-latin`

Y un shorthand que agrupa a las tres: `list-style`

> **NOTA** Estas propiedades pueden aplicarse a los `<li></li>` o al contenedor `<ul></ul>`, `<ol></ol>`.
> **NOTA** Las listas `<ol></ol>` `<ul></ul>` tienen las siguientes propiedades establecidas en el navegador:

* `margin-top`
* `margin-bottom`
* `padding-left`

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: LIST-STYLE-TYPE

---------------------------------------------------------------------------

<div>
  <p>Example of unordered lists:</p>
  <ul class="a" style="list-style-type: circle;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Coca Cola</li>
  </ul>
  <ul class="b" style="list-style-type: square;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Coca Cola</li>
  </ul>
  <p>Example of ordered lists:</p>
  <ol class="c" style="list-style-type: upper-roman;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Coca Cola</li>
  </ol>
  <ol class="d" style="list-style-type: lower-alpha;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Coca Cola</li>
  </ol>
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      ul.a {
        list-style-type: circle;
      }
      ul.b {
        list-style-type: square;
      }
      ol.c {
        list-style-type: upper-roman;
      }
      ol.d {
        list-style-type: lower-alpha;
      }
    </style>
  </head>
  <body>
    <p>Example of unordered lists:</p>
    <ul class="a">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    <ul class="b">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
    <p>Example of ordered lists:</p>
    <ol class="c">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ol>
    <ol class="d">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ol>
  </body>
</html>
```

[Volver al inicio](#-Listas)