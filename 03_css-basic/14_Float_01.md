# Float

`Float` saca a un elemento del flujo y lo envia a la derecha o a la izquierda. El elemento siguiente lo envolverá de ser posible.

* `float`
    * `right`
    * `left`
    * `none`

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

```html
<div class="container clearfix" style="background: yellow; margin-bottom: 1em;">
    <img class="img" src="http://lorempixel.com/300/200" alt="" style="float: right; margin-left: 1em;">
    <p class="parrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde itaque eveniet quis, nisi perspiciatis minima repudiandae, sint qui accusantium! Perferendis commodi illo nesciunt voluptatum repellat saepe, iusto tenetur ab.</p>
</div>
<div class="container2 ">
    <img class="img2" src="http://lorempixel.com/300/200" alt="">
    <p class="parrafo2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde itaque eveniet quis, nisi perspiciatis minima repudiandae, sint qui accusantium! Perferendis commodi illo nesciunt voluptatum repellat saepe, iusto tenetur ab.</p>
</div>
```
```css
* {
  box-sizing: border-box;
}
[class^="img"] {
  float: right;
  margin-left: 1em;
}
[class^="container"] {
  background: yellow;
  /*display: table;*/
  margin-bottom: 1em;
  /*overflow: hidden;*/
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```

---------------------------------------------------------------------------

El contenedor de un elemento flotado deja de contenerlo. Para solucionarlo:
1. `overflow: hidden;`
2. `display: table;`
3. `clearfix` con un div vacio (no recomendado)
4. `clearfix` con pseudoelementos (recomendada)

La propiedad `clear` se usa para que un elemento no reciba elementos flotados a sus lados.
* `clear`
    * `left`
    * `right`
    * `both`

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="gallery-container" style="float: left;
  width: 23%;
  margin: 1%;
  border: 1px solid #ccc;
  padding: 3px;">
  <img class="gallery-item" src="http://lorempixel.com/200/200" alt="" style="display: block;
  width: 100%;">
</div>
<div class="gallery-container" style="float: left;
  width: 23%;
  margin: 1%;
  border: 1px solid #ccc;
  padding: 3px;">
  <img class="gallery-item" src="http://lorempixel.com/200/200" alt="" style="display: block;
  width: 100%;">
</div>
<div class="gallery-container" style="float: left;
  width: 23%;
  margin: 1%;
  border: 1px solid #ccc;
  padding: 3px;">
  <img class="gallery-item" src="http://lorempixel.com/200/200" alt="" style="display: block;
  width: 100%;">
</div>
<div style="clear:both"></div>

```html
<div class="gallery-container">
  <img class="gallery-item" src="http://lorempixel.com/200/200" alt="">
</div>
<div class="gallery-container">
  <img class="gallery-item" src="http://lorempixel.com/200/200" alt="">
</div>
<div class="gallery-container">
  <img class="gallery-item" src="http://lorempixel.com/200/200" alt="">
</div>
```

```css
.parrafo2 {
  clear: right
 }
.gallery-container {
  float: left;
  width: 23%;
  margin: 1%;
  border: 1px solid #ccc;
  padding: 3px;
}
.gallery-item {
  display: block;
  width: 100%;
}
```

---------------------------------------------------------------------------

[Volver al inicio](#-OverFlow)