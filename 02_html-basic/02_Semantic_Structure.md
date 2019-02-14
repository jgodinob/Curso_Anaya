# Estructura Semántica

[Volver al inicio](#-Estructura-Semántica)

## ELEMENTOS DE LÍNEA (INLINE) Y DE BLOQUE (BLOCK)
---------------------------------------------------------------------------

Los elementos **"inline"** se colocan uno al lado del otro hasta completar el espacio disponible, luego se colocan uno debajo del otro.

```html
<img>
<input>
<label>
<a>
<span>
```

Los elementos **"block"** reservan todo el espacio horizontal aunque no lo ocupen por completo.

```html
<h1>-<h6>
<p></p>
<ul>
<li>
```

> **REGLA**: Los elementos de **Bloque** **Bloquean todo el espacio** aunque no lo usen, (**Seran agonías... con el ansia viva!!!**).

[Volver al inicio](#-Estructura-Semántica)

## ETIQUETAS BÁSICAS
---------------------------------------------------------------------------

[Volver al inicio](#-Estructura-Semántica)

### ENCABEZADOS
---------------------------------------------------------------------------

Los **elementos de encabezado** permiten especificar que ciertas partes del contenido son encabezados, o subencabezados del contenido. De la misma forma que un libro tiene un título principal, y que a su vez puede tener títulos por cada capítulo individual, y subtítulos dentro de ellos, un documento HTML puede tenerlos también. HTML posee seis niveles de encabezados, `<h1>`–`<h6>`, aunque probablemente sólo llegues a usar `3`-`4` como mucho:

Representan un tipo de Títulos de mayor o menor peso.

```html
<h1>Encabezado</h1>
<h2>Encabezado</h2>
<h3>Encabezado</h3>
<h4>Encabezado</h4>
<h5>Encabezado</h5>
<h6>Encabezado</h6>
```

[Volver al inicio](#-Estructura-Semántica)

### PÁRRAFOS
---------------------------------------------------------------------------

Los elementos `<p>` se utilizan para encerrar párrafos de texto; los usarás frecuentemente para el marcado de contenido de texto regular:

```html
<p>Este es un simple parrafo</p>
```

[Volver al inicio](#-Básicos)

### IMÁGENES
---------------------------------------------------------------------------

Prestemos atención nuevamente a nuestro elemento imagen `<img>`:

```html
<img src="images/firefox-icon.png" alt="Mi imagen de prueba">
```

También incluimos un atributo `alt` (alternative) — el cual contiene un texto que debería describir la imagen, y que podría ser accedido por usuarios que no pueden ver la imagen, quizás porque:

* **Son ciegos o tienen deficiencias visuales**. Los usuarios con impedimentos visuales usualmente utilizan herramientas llamadas Screen Readers (Lectores de Pantalla), las cuales les leen el texto contenido en el atributo alt.
* **Se produjo algún error en el código que impide que la imagen sea cargada**. Como ejemplo, modifica deliberadamente el path dentro del atributo src para que éste sea incorrecto. Si guardas y recargas la página, deberías ver algo así en lugar de la imagen:

[Volver al inicio](#-Básicos)

### LISTAS
---------------------------------------------------------------------------

Mucho del contenido web está dado por **listas**, asi que **HTML** tiene elementos especiales para ellas. El marcado de listas se realiza siempre en al menos dos elementos. Los dos tipos de listas más comunes son las **listas ordenadas** y las **desordenadas**:

* Las **listas desordenadas** son aquellas en las que el orden de los items no es relevante, como en una lista de compras. Estas son encerradas en un elemento `<ul>` (**unordered list**).
* Las **listas ordenadas** son aquellas en las que el orden si es relevante, como en una receta. Estas son encerradas en un elemento `<ol>` (**ordered list**).

Cada elemento de la lista se coloca dentro de un elemento `<li>` (**list item**).

Por ejemplo, si queremos transformar parte del siguiente párrafo en una lista:

```html
<p>En Mozilla, somos una comunidad de tecnólogos, pensadores, y constructores que trabajan juntos... </p>
```

Podríamos hacer lo siguiente:

```html
<p>En Mozilla, somos una comunidad de</p>
<ul> 
  <li>tecnólogos</li>
  <li>pensadores</li>
  <li>constructores</li>
</ul>
<p>trabajando juntos... </p>
```

[Volver al inicio](#-Básicos)

### VÍNCULOS
---------------------------------------------------------------------------

Los **vínculos** son muy importantes — **son los que hacen de la web, la web**. Para implementar un vínculo, necesitamos usar un vínculo simple — `<a>` — la a es el diminutivo de **"anchor"** (**"ancla"**). Para convertir algún texto dentro de un párrafo en un vínculo, sigue los siguientes pasos:

```html
<a>Mozilla Manifesto</a>
Proporcionale al elemento <a> un atributo href, así:
<a href="">Mozilla Manifesto</a>
Completa el valor de este atributo con la dirección web con la que quieras conectar al vínculo:
<a href="https://www.mozilla.org/es-AR/about/manifesto/">Mozilla Manifesto</a>
```

Podrías obtener resultados inesperados si omites la parte [https://](https://), llamada protocolo, al comienzo de la dirección web. Así que luego del marcado del vínculo, haz click en él para asegurarte que te dirige a la dirección deseada.

`href` podría parecer, en principio, una opción un tanto oscura para un nombre de atributo. Si tienes problemas para recordarla, recuerda que se refiere a **hypertext reference**.

[Volver al inicio](#-Básicos)

## ETIQUETAS DE SECCIÓN

---------------------------------------------------------------------------

Las etiquetas de sección dividen toda la página web en bloques.

En **HTML4** habia muy pocas **etiquetas semánticas**. Para los casos en los que no habia una etiqueta específica se usaban dos etiquetas genéricas:
        
```html
<div></div> (block)
<span></span> (inline)
```
        
En **HTML5** se introducen nuevas etiquetas semánticas para elementos **block** e **inline**.
        
Para elementos **block**:
        
* `header` (**encabezados**)
* `nav` (**navegacion, para poner menus**)
* `footer` (**pie de página**)
* `article` (**contenido independiente**)
* `aside` (**contenido relacionado pero secundario**)
* `section` (**secciones o divisiones de un contenido**)
* `main` (**para mostrar el contenido principal, debe ser único**)

```diff
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- ... -->
  </head>
  <body>
++  <header></header>
++  <nav></nav>
++  <article>
++    <h1>Título</h1>
++    <section>
++      <h2>Subtítulo</h2>
++    </section>  
++  </article>
++  <aside></aside>
++  <footer></footer>
</body>  
```

* La etiqueta `<header></header>` es el encabezado.
* La etiqueta `<nav></nav>` es la barra de navegación.
* La etiqueta `<article></article>` es un bloque dentro de la página de contenido único.
* La etiqueta `<section></section>` es una sección dentro del article.
* La etiqueta `<aside></aside>` define algún contenido aparte del contenido en el que está colocado. El contenido aparte debe estar relacionado con el contenido circundante. **Ejemplo** En un periodico cuando ves un artículo, los artículos propuestos al lado deben encontrarse en un aside.

[Volver al inicio](#-Básicos)