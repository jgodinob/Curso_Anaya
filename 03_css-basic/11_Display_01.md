# Display

Es una propiedad que define como se comportará una caja. De forma predeterminada existen dos tipos de elementos:

* **block-level**
* **inline-level**
    
Los elementos `inline`:
1. No aceptan `width` y `height`
2. Aceptan `margin` y `padding` pero no altera el flujo (los verticales, los horizontales si lo alteran)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div style="border: 1px solid red; display:block; width:100%; height:180px;">
    <div class="inline" style="background: yellow; width: 100px; height: 50px; padding: 1em; margin: 1em;"></div>
    <div class="block" style="background: pink; width: 500px; height: 50px; margin-bottom: 5em;"></div>
</div>

```html
<div>
    <div class="inline"></div>
    <div class="block"></div>
</div>
```
```css
.inline {
  background: yellow;
  width: 100px;
  height: 50px;
  padding: 1em;
  margin: 1em;
  /*display: inline-block;*/
}
.block {
  background: pink;
  width: 500px;
  height: 50px;
  margin-bottom: 5em;
  /*display: none;*/
  /*visibility: hidden;*/
}
```

---------------------------------------------------------------------------

[Volver al inicio](#-Display)

## VALORES DE DISPLAY

---------------------------------------------------------------------------

Los posibles valores de display son:

* `display:`
    * `inline` (default)
    * `block`
    * `inline-block`, a un mismo elemento le da las propiedades de un elemento inline y de un elemento block.
    * `table`, Imita el layout de una tabla
    * `table-row`
    * `table-cell`
    * `table-caption`
    * `table-header-group`
    * `table-footer-group`
    * `none`, desaparece un elemento del flujo al igual se carga el elemento (y sus assets)
    * `flex`, nuevo CSS3.
    * `grid`, nuevo CSS3.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="table" style="display: table;">
    <div class="caption" style="display: table-caption;">
        <h2>Titulo de la tabla</h2>
    </div>
    <div class="footer" style="display: table-footer-group;">
        <div class="cell" style="display: table-cell;background: pink;">footer 1</div>
    </div>
     <div class="row">
        <div class="cell" style="display: table-cell;background: pink;">cell 1</div>
        <div class="cell" style="display: table-cell;background: yellow;">cell 2</div>
        <div class="cell" style="display: table-cell;background: pink;">cell 1</div>
        <div class="cell" style="display: table-cell;background: yellow;">cell 2</div>
        <div class="cell" style="display: table-cell;background: pink;">cell 1</div>
        <div class="cell" style="display: table-cell;background: yellow;">cell 2</div>
    </div>
    <div class="row">
        <div class="cell" style="display: table-cell;background: pink;">cell 1</div>
        <div class="cell" style="display: table-cell;background: yellow;">cell 2</div>
        <div class="cell" style="display: table-cell;background: pink;">cell 1</div>
        <div class="cell" style="display: table-cell;background: yellow;">cell 2</div>
        <div class="cell" style="display: table-cell;background: pink;">cell 1</div>
        <div class="cell" style="display: table-cell;background: yellow;">cell 2</div>
    </div>
</div>

```html
    <div class="table">
      <div class="caption">
        <h2>Titulo de la tabla</h2>
      </div>
      <div class="footer">
        <div class="cell">footer 1</div>
      </div>
      <div class="row">
        <div class="cell">cell 1</div>
        <div class="cell">cell 2</div>
        <div class="cell">cell 1</div>
        <div class="cell">cell 2</div>
        <div class="cell">cell 1</div>
        <div class="cell">cell 2</div>
      </div>
      <div class="row">
        <div class="cell">cell 1</div>
        <div class="cell">cell 2</div>
        <div class="cell">cell 1</div>
        <div class="cell">cell 2</div>
        <div class="cell">cell 1</div>
        <div class="cell">cell 2</div>
      </div>
    </div>
```
```css
.table {
  display: table;
}
.caption {
  display: table-caption;
}
.cell {
  display: table-cell;
}
.cell:nth-child(even) {
  background: yellow;
}
.cell:nth-child(odd) {
  background: pink;
}
.footer {
  display: table-footer-group;
}
```

---------------------------------------------------------------------------

[Volver al inicio](#-Display)