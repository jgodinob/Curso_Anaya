# Etiquetas de Texto

[Volver al inicio](#-Etiquetas-de-Texto)

## ETIQUETAS EN LÍNEA
---------------------------------------------------------------------------

[Volver al inicio](#-Etiquetas-de-Texto)

### ETIQUETAS DE FORMATO
---------------------------------------------------------------------------

* `<b>Bold text</b>`,  Texto en negrita
* `<i>Italic text</i>`,  Texto en cursiva
* `<u>Underline text</u>`,  Texto subrayado 
* `<sup>Superindice</sup>`,  Texto pequeño en la parte superior
* `<sub>Subindice</sub>`,  Texto pequeño en la parte inferior

---------------------------------------------------------------------------

<p>
  x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>
</p>

```html
<p>
  x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>
</p>
```

---------------------------------------------------------------------------

<p>
  C0<sub>2</sub>
</p>

```html
<p>
  C0<sub>2</sub>
</p>
```

---------------------------------------------------------------------------

<p>
  <!-- <del></del> Tacha un texto y significa eliminado-->
  Hoy, todos los productos a <del>S/.50.00</del> S/.30.00
</p>

```html
<p>
  <!-- <del></del> Tacha un texto y significa eliminado-->
  Hoy, todos los productos a <del>S/.50.00</del> S/.30.00
</p>
```

---------------------------------------------------------------------------

<p>
  <!-- <mark></mark> resalta un texto e indica importancia -->
  Estudiar para el lunes, de la página <mark>100 hasta la 120</mark>.
</p>

```html
<p>
  <!-- <mark></mark> resalta un texto e indica importancia -->
  Estudiar para el lunes, de la página <mark>100 hasta la 120</mark>.
</p>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Etiquetas-de-Texto)

### ETIQUETAS DE CÓDIGO
---------------------------------------------------------------------------

* `<code></code>`
* `<var></var>`
* `<kbd></kbd>`

---------------------------------------------------------------------------

<p>Para abrir un archivo presionar <kbd>CTRL</kbd> <kbd>O</kbd></p>

```html
<p>Para abrir un archivo presionar <kbd>CTRL</kbd> <kbd>O</kbd></p>
```

---------------------------------------------------------------------------

<p>Las funciones se definen con la palabra <code>function</code>. Ejemplo de una funcion en JavaScript:</p>

```html
<p>Las funciones se definen con la palabra <code>function</code>. Ejemplo de una funcion en JavaScript:</p>
```

---------------------------------------------------------------------------

<pre>
  <code>
function(){
  console.log("Hola mundo");
}
  </code>
</pre>

```html
<pre>
  <code>
function(){
  console.log("Hola mundo");
}
  </code>
</pre>
```

---------------------------------------------------------------------------

<article>
  <h2>20 poemas de amor y una canción desesperada</h2>
  <pre class="poema">
Puedo escribir los versos más tristes esta noche. 

Escribir, por ejemplo: «La noche está estrellada, 
y tiritan, azules, los astros, a lo lejos.» 
  </pre>
</article>

```html
<article>
  <h2>20 poemas de amor y una canción desesperada</h2>
  <pre class="poema">
Puedo escribir los versos más tristes esta noche. 

Escribir, por ejemplo: «La noche está estrellada, 
y tiritan, azules, los astros, a lo lejos.» 
  </pre>
</article>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Etiquetas-de-Texto)

## ETIQUETAS SEMÁNTICAS DE TEXTO
---------------------------------------------------------------------------

* `<strong></strong>` se usa para indicar importancia
* `<em></em>` se usa para indicar enfasis
        
Para citas, ya sean bibliográficas o de cualquier otro tipo usaremos:Citas:

* `<q></q>` (en linea)
* `<blockquote></blockquote>` (de bloque)

---------------------------------------------------------------------------

<p>Sócrates dijo: <q><em>Solo sé que nada sé</em></q>.</p>
<p>Sócrates dijo:</p>
<blockquote>
  <em>Solo sé que nada sé</em>
</blockquote>

```html
<p>Sócrates dijo: <q><em>Solo sé que nada sé</em></q>.</p>
<p>Sócrates dijo:</p>
<blockquote>
  <em>Solo sé que nada sé</em>
</blockquote>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Etiquetas-de-Texto)