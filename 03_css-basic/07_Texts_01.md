# Textos

Los tipos de letras en el mundo profesional se conocen como familias de fuentes o tipografía.

[Volver al inicio](#-Textos)

## TEXTOS

---------------------------------------------------------------------------

[Volver al inicio](#-Textos)

### FAMILIAS

---------------------------------------------------------------------------

* **Familias tipográficas**: Son fuentes específicas con nombres **"comerciales"** (**Arial, Verdana, Times New Roman, Helvetica, Ubuntu.**)
* **Familias genéricas**: Son grupos de fuentes según sus características.
    * `serif`, Con adorno (serifa) en los remates
    * `sans-serif`, Sin adorno en los remates (de palo seco)
    * `cursive`, Letras inclinadas (algunas falsas, fake) y otras provienen de la fuente
    * `monospace`, Cada caracter ocupa el mismo espacio horizontal (ideal para escribir código)

Si se asigna una familia tipográfica en un estilo, esta deberá estar instalada en el sistema operativo del cliente sino no la verá.

**Maneras de solucionarlo**:

1. **Definir fuentes alternativas**. Se separan por comas. Si la primera no es encontrada, se busca la segunda y así sucesivamente. Se recomienda terminar con una fuente genérica.
> **NOTA**: Si el nombre de una fuente tiene más de una palabra se debe encerrar entre comillas, `"..."`.

```css
p {
    font-family: "Times New Roman", serif;
}
```

2. Usar un proveedor de fuentes en internet ([Google Fonts](https://fonts.google.com/) y [Adobe Typekit](https://fonts.adobe.com/))

3. Almacenar las fuentes en un servidor propio y usar la regla `@font-face { }` Sin embargo para evitarse el trabajo de convertir los formatos (para el **cross-browser**) se recomienda usar generadores como [Font Squirrel](http://www.fontsquirrel.com/) o [Font2web](http://www.font2web.com/).
    
```css
@font-face {
    font-family: 'starwars';
    src: url('fonts/stjedise-webfont.eot');
    src: url('fonts/stjedise-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/stjedise-webfont.woff2') format('woff2'),
         url('fonts/stjedise-webfont.woff') format('woff'),
         url('fonts/stjedise-webfont.ttf') format('truetype'),
         url('fonts/stjedise-webfont.svg#starjedi_special_editionRg') format('svg');
    font-weight: normal;
    font-style: normal;
}

h1 {
    font-family: starwars, arial;
    font-weight: normal;
    color: #fff;
}
body {
    background: black;
    margin: 0;
}
```

[Volver al inicio](#-Textos)

### TAMAÑOS DE LAS FUENTES

---------------------------------------------------------------------------

Unidades de medida para definir el tamaño de la fuente

* `px`  -> tamaño absoluto
* `em`  -> tamaño relativo al contexto
* `rem` -> tamaño relativo al `<html></html>`
* `%`   -> tamaño normal de una fuente
* `vh`  -> **1vh = 1%** del alto (height) del viewport
* `vw`  -> **1vw = 1%** del ancho (width) del viewport

![https://help.autodesk.com/cloudhelp/ENU/Scaleform-Help/cpp_ref/viewportdiagram_doc.jpg](https://help.autodesk.com/cloudhelp/ENU/Scaleform-Help/cpp_ref/viewportdiagram_doc.jpg)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<h4 style="font-size: 1.5em; color: yellow;">Probando Css</h4>
<p style="color: red; font-size: 2em;">En una galaxia muy muy <span style="font-size: 1rem;">lejana...</span></p>
<ul>
    <li style="text-align: left; color: blue; font-size: .7rem;">Item 1</li>
    <li style="text-align: left; color: blue; font-size: .7rem;">Item 2</li>
</ul>

```html
<h4>Probando Css</h4>
<p>En una galaxia muy muy <span>lejana...</span></p>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```
```css
h4 {
    font-size: 1.5em;
    color: yellow;
}
p {
    color: red;
    font-size: 2em;
}
p span {
    font-size: 2rem;
}
li {
    text-align: left;
    color: #fff;
    font-size: .7rem;
}
```

---------------------------------------------------------------------------

> **NOTA**: El body por defecto tiene un `font-size: 16px`

<p style="color: red; font-size: 2em;">En una galaxia muy muy <span style="color: white; font-family: starwars; font-size: 30vh;line-height: 100vh; text-align: center; display: block;">lejana...</span></p>

```html
<p>En una galaxia muy muy <span>lejana...</span></p>
```
```css
span {
    color: white;
    font-family: starwars;
    font-size: 4vh;
    line-height: 6vh;
    text-align: center;
    display: block;
}
```

[Volver al inicio](#-Textos)

### OTRAS PROPIEDADES

---------------------------------------------------------------------------

Otras propiedades de los textos:

```css
line-height: determina la altura de la linea;
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<p style="line-height: 1.5; text-transform: capitalize; text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptatum cupiditate non minima, sed dolorum illum eveniet aliquam, maiores incidunt porro, quasi veniam earum saepe! Exercitationem, a quasi vitae placeat.</p>
<div style="width: 300px; height: 100px; background: yellow; font-size: 3em; text-align: center; line-height: 100px; text-transform: capitalize; letter-spacing: 20px;">Hola</div>

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptatum cupiditate non minima, sed dolorum illum eveniet aliquam, maiores incidunt porro, quasi veniam earum saepe! Exercitationem, a quasi vitae placeat.</p>
<div>Hola</div>
```
```css
p {
    line-height: 1.5;
    text-transform: capitalize;
    text-align: justify;
}
div {
    width: 300px;
    height: 100px;
    background: yellow;
    font-size: 3em;
    text-align: center;
    line-height: 100px;
    text-transform: capitalize;
    letter-spacing: 20px;
}
```

---------------------------------------------------------------------------

* `text-transform:`
    * `lowercase` (minusculas)
    * `uppercase` (mayusculas)
    * `capitalize` (primera letra de cada palabra en mayusculas);
* `text-align:`
    * `center`
    * `left`
    * `right`
    * `justify` 
    (solo se aplica a elementos block)
* `font-weight:`
    * `bold` (negritas)
    * `normal`
* `font-style:`
    * `italic` (cursivas)
    * `normal`
* `text-decoration:`
    * `underline` (subrayado)
    * `none` (sin subrayado)
* `letter-spacing: value;` (con una unidad determina la separacion de las letras)
* `text-indent:` mueve la primera linea de un "bloque" de texto;
* `word-break:` Rompe las palabras para que se justifiquen los textos con el ancho del contenedor.
    * `break-all`
    * `keep-all`
    * `none` 
* `word-wrap:` Rompe solo las palabras que salgan de su contenedor (es decir que la misma palabra sea más ancha que el contenedor)
    * `break-word`
    * `normal`;`
* `overflow: hidden` oculta cualquier contenido que se salga de su contenedor
* `text-overflow:`
    * `clip`
    * `ellipsis`
    * `clip`, oculta el texto que se escapa del contenedor
    * `ellipsis`, oculta el texto pero añade ...;

* `white-space:`, imita y extiende el comportamiento de `<pre></pre>`
    * `pre`, imita al `<pre></pre>` de HTML
    * `nowrap`, pone todo en una linea
    * `pre-line`, respeta los espacios y deja que salten las líneas

[Volver al inicio](#-Textos)

### SHORTHANDS

---------------------------------------------------------------------------

Las propiedades **shorthand** agrupan un conjunto de propiedades relacionadas. Por ejemplo, tenemos la propiedad font (shorthand). 

```css
font
    font-style
    font-weigth
    font-size / line-height * (obligatorio solo font-size)
    font-family *
```

Cuando se usa una propiedad **shorthand** si no se especifican ciertos valores estos se setean automáticamente.

Cuando usamos **font**, tenemos que definir obligatoriamente `font-size` y `font-family` (`font-family` siempre al final).

Si usas `line-height` debe estar después de `font-size` y separado por un slash (`/`).

```css
p {
  /*font: italic 20px/30px verdana;*/
  /*font-style: italic;*/
  font-size: 20px;
  line-height: 30px;
  font-family: Verdana, sans-serif;
}
div {
  width: 400px;
  background: yellow;
  /*text-align: justify;*/
  /*word-break: break-all;*/
  /*word-wrap: break-word;*/
  white-space: nowrap;
  text-overflow: clip;
  overflow: hidden;
}
```

[Volver al inicio](#-Textos)

### TAMAÑOS CON EM

---------------------------------------------------------------------------

```css
body { font-size:62.5%; }
h1 { font-size: 2.4em; } /* =24px */
p  { font-size: 1.4em; } /* =14px */
li { font-size: 1.4em; } /* =14px? */
li li, li p /* etc */ { font-size: 1em; }
```

> **FUENTE**: [https://snook.ca/archives/html_and_css/font-size-with-rem](https://snook.ca/archives/html_and_css/font-size-with-rem)

```sass
html {
  font-size: 16px;
    
  @media screen and (min-width: 900px) {
    font-size: 18px;
  }
    
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
}
h2 { 
  font-size: 2em;
}

pre {
  font-size: 0.8em;
}
```

> **FUENTE**: [https://css-tricks.com/rem-global-em-local/](https://css-tricks.com/rem-global-em-local/)

[Volver al inicio](#-Textos)

### TAMAÑOS CON REM

---------------------------------------------------------------------------

```css
html { font-size: 62.5%; } 
body { font-size: 14px; font-size: 1.4rem; } /* =14px */
h1   { font-size: 24px; font-size: 2.4rem; } /* =24px */
```

> **FUENTE**: [https://snook.ca/archives/html_and_css/font-size-with-rem](https://snook.ca/archives/html_and_css/font-size-with-rem)


```sass
html {
  font-size: 16px;
    
  @media screen and (min-width: 900px) {
    font-size: 18px;
  }
    
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
}
.module {
  font-size: 1.1rem;
}

.another-module {
  font-size: 1.3rem;
}
```

> **FUENTE**: [https://css-tricks.com/rem-global-em-local/](https://css-tricks.com/rem-global-em-local/)

[Volver al inicio](#-Textos)