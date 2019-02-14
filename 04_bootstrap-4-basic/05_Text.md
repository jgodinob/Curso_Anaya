# Textos Tipografía

[Volver al inicio](#-Textos-Tipografía)

## CONFIGURACIÓN

---------------------------------------------------------------------------

**Bootstrap 4** usa un `font-size` predeterminado de `16 px`, y su `line-height` es `1.5`.

La `font-family` predeterminada es "`Helvetica Neue`", `Helvetica`, `Arial`, `sans-serif`.

Además, todos los elementos `<p>` tienen `margin-top: 0` y `margin-bottom: 1rem` (`16px` por defecto).

[Volver al inicio](#-Textos-Tipografía)

### TÍTULOS

---------------------------------------------------------------------------

**Bootstrap 4** estilos de encabezados HTML ( `<h1>` a `<h6>` ) con un `font-weight` más audaz y un tamaño de fuente aumentado:

**Ejemplo**

```html
<h1>h1 Bootstrap heading</h1>
<h2>h2 Bootstrap heading</h2>
<h3>h3 Bootstrap heading</h3>
<h4>h4 Bootstrap heading</h4>
<h5>h5 Bootstrap heading</h5>
<h6>h6 Bootstrap heading</h6>
```

[Volver al inicio](#-Textos-Tipografía)

### MOSTRAR ENCABEZADOS

---------------------------------------------------------------------------

Los encabezados de visualización se utilizan para resaltar más que los encabezados normales (tamaño de fuente más grande y peso de fuente más ligero), y hay cuatro clases para elegir: `.display-1`, `.display-2`, `.display-3`, `.display-4`.

**Ejemplo**

```html
<h1 class="display-1">Display 1</h1>
<h2 class="display-2">Display 2</h2>
<h3 class="display-3">Display 3</h3>
<h4 class="display-4">Display 4</h4>
```

[Volver al inicio](#-Textos-Tipografía)

### <SMALL>

---------------------------------------------------------------------------

En **Bootstrap 4**, el elemento HTML `<small>` se usa para crear un texto secundario más claro en cualquier encabezado:

```html
<h1>h1 heading <small>secondary text</small></h1>
<h2>h2 heading <small>secondary text</small></h2>
<h3>h3 heading <small>secondary text</small></h3>
<h4>h4 heading <small>secondary text</small></h4>
<h5>h5 heading <small>secondary text</small></h5>
<h6>h6 heading <small>secondary text</small></h6>
```

[Volver al inicio](#-Textos-Tipografía)

### <MARK>

---------------------------------------------------------------------------

**Bootstrap 4** diseñará el elemento HTML `<mark>` con un color de fondo amarillo y algo de relleno:

```html
<p>Use the mark element to <mark style="background-color:#fcf8e3;padding:.2em;">highlight</mark> text.</p>
```

[Volver al inicio](#-Textos-Tipografía)

### <ABBR>

---------------------------------------------------------------------------

**Bootstrap 4** usa `<abbr>` como elemento HTML `<abbr>` con una parte inferior del borde punteado:

```html
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

[Volver al inicio](#-Textos-Tipografía)

### <BLOCKQUOTE>

---------------------------------------------------------------------------

Agregue la clase .blockquote a `<blockquote>` cuando cotice bloques de contenido desde otra
fuente:

```html
<blockquote class="blockquote">
  <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in
  100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
  <br>
  <footer class="blockquote-footer">From WWF's website</footer>
</blockquote>
```

[Volver al inicio](#-Textos-Tipografía)

### <DL>

---------------------------------------------------------------------------

**Bootstrap 4** diseñará el elemento HTML `<dl>` de la siguiente manera:

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

[Volver al inicio](#-Textos-Tipografía)

### <CODE>

---------------------------------------------------------------------------

**Bootstrap 4** diseñará el elemento HTML `<code>` de la siguiente manera:

```html
<code>span</code>
```

[Volver al inicio](#-Textos-Tipografía)

### <KBD>

---------------------------------------------------------------------------

**Bootstrap 4** diseñará el elemento HTML `<kbd>` de la siguiente manera:

```html
<kbd>ctrl + p</kbd>
```

[Volver al inicio](#-Textos-Tipografía)

### <PRE>

---------------------------------------------------------------------------

**Bootstrap 4** diseñará el elemento HTML `<pre>` de la siguiente manera:

```html
<pre style="font-family:Consolas,'courier new';">Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks.
</pre>
```

[Volver al inicio](#-Textos-Tipografía)

### <PRE>

---------------------------------------------------------------------------

Las siguientes clases de **Bootstrap 4** se pueden agregar a los elementos HTML de estilo:

| Class                         | Description                                               |
|-------------------------------|-----------------------------------------------------------|
| `.font-weight-bold`           | Negrita                                                   |
| `.font-weight-normal`         | Normal                                                    |
| `.font-weight-light `         | Fina                                                      |
| `.font-italic`                | Italica                                                   |
| `.lead`                       | Hace un párrafo destacarse                                |
| `.small`                      | Más pequeño (85% del tamaño del padre)                    |
| `.text-left`                  | Aliniado inquierda|
| `.text-center`                | Aliniado centro|
| `.text-right`                 | Aliniado derecha|
| `.text-justify`               | Justificado|
| `.text-nowrap`                | Texto nowrap|
| `.text-lowercase`             | Texto en minúsculas|
| `.text-uppercase`             | Texto en mayúsculas|
| `.text-capitalize`            | Indicates capitalized text|
| `.initialism`                 | Muestra el texto en un elemento `<abbr>` en un ligeramente más pequeño tamaño de fuente |
| `.list-unstyled` |Quita el list-style y margin-left en elementos de lista (funciona en `<ul>` y `<ol>` ). Esta clase sólo se aplica a elementos de lista de hijos inmediatos (para quitar el estilo de lista en listas anidadas, aplicarse esta clase a ellas también) |
| `.list-inline`                | Coloca todos los elementos de una lista en una única línea (usado junto a .list-inline-item en cada elemento `<li>`) |
| `.pre-scrollable`             | Hace escrolable un elemento `<pre>` |

[Volver al inicio](#-Textos-Tipografía)