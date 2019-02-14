# Enlaces

Los enlaces se indican con la etiqueta `<a></a>` (de anchor) y requieren el atributo `href=""` que señalará su destino.

> **NOTA**: No confundir con la etiqueta `<link>`.

---------------------------------------------------------------------------

<h1>Enlaces</h1>
<a href="/">Volver al inicio</a>
<p><a href="http://www.google.es">Ir a Google</a></p>

```html    
<h1>Enlaces</h1>
<a href="/">Volver al inicio</a>
<p><a href="http://www.google.es">Ir a Google</a></p>
```

---------------------------------------------------------------------------

> **NOTA**: Si queremos que el destino se abra en una nueva ventana (o pestaña) se usa el atributo `target="_blank"`.

---------------------------------------------------------------------------

<p><a href="https://www.w3.org/" target="_blank">Ir a W3C</a></p>

```html
<p><a href="https://www.w3.org/" target="_blank">Ir a W3C</a></p>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Enlaces)

## RUTAS
---------------------------------------------------------------------------
        
Las rutas le indican al sistema como acceder a un recurso (como encontrarlo). Hay tres tipos de rutas:
* **Absolutas**. Son **url** únicas, y comienzan con un protocolo, el más conocido es [http://](http://) (hay otros como [https://](https://) [ftp://](ftp://))
* **Relativas**. Son relativas al archivo de origen. 
    * **Origen y destino en la misma carpeta**. Se pone el nombre del archivo.
    * **El destino está en una subcarpeta**. En ese caso se indica la ruta separando las carpetas con el signo `/` (slash) hasta llegar al archivo destino. Nunca se debe comenzar con un slash (`/`)
    * **Para subir de nivel se usa dos puntos y slash (`../`)** Se puede repetir si es que se necesita subir varios niveles.
* **Relativas a la raíz**
> **NOTA**: **La raiz se indica con `/`**

---------------------------------------------------------------------------

<p><a href="destino.html">Ir al destino</a></p>
<p><a href="subcarpeta/destino2.html">Ir al destino 2</a></p>
<p><a href="subcarpeta/subcarpeta2/destino3.html">Ir al destino 3</a></p>

```html    
<p><a href="destino.html">Ir al destino</a></p>
<p><a href="subcarpeta/destino2.html">Ir al destino 2</a></p>
<p><a href="subcarpeta/subcarpeta2/destino3.html">Ir al destino 3</a></p>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Enlaces)

### ATRIBUTOS
---------------------------------------------------------------------------

* **title**, define el título de un enlace, que aparece al usuario como un **tooltip**. `title="Buscador de Google"`

```html
<p><a href="http://www.google.es" title="Buscador de Google">Ir a Google</a></p>
```

* **rel**, indica la relacion del origen y el destino. El valor **nofollow** le dice a Google que no siga el enlace. 

```html
<a href="http://www.google.es" rel="nofollow">Ir a Google</a>
```

* **target**, objetivo:
    * `_blank` (nueva ventana)
    * `_self` (la misma ventana, predeterminado)
    * `_parent` (abre en el marco superior)
    * `_top` (abre en la ventana principal)

* **download**, fuerza al navegador a descargar un archivo en lugar de abrirlo.

```html
<p><a href="/foto.jpg" download="imagen">Foto</a></p>
```

[Volver al inicio](#-Enlaces)

### MARCADORES
---------------------------------------------------------------------------

Los marcadores permiten crear enlaces a lugares específicos de un documento HTML.

Los marcadores se indican con un **hash** (`#`) seguido del `id` del destino.

```html
<a href="#destino">Ir al destino</a>
<h2 id="destino">Yo soy el destino</h2>
```

---------------------------------------------------------------------------

<h1 id="inicio">Marcadores</h1>
<p><a href="#destino">Ir al destino 1</a></p>
<p><a href="#destino2">Ir al destino 2</a></p>
<p><a href="https://it.wikipedia.org/wiki/Capodimonte_(Napoli)#L.27isolamento" target="_blank">Marcador externo en Wikipedia</a></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas feugiat dolor. Quisque eget eros quis neque egestas ultricies. Aliquam porttitor metus ut egestas consequat. Nullam vel dui in justo scelerisque egestas. Cras non facilisis justo. Nunc in faucibus risus. Pellentesque felis diam, condimentum vitae mattis ut, sollicitudin a libero. Pellentesque malesuada pharetra justo, nec fringilla tortor adipiscing at. Maecenas accumsan, enim id mattis blandit, urna enim bibendum est, at volutpat massa neque vitae libero. Phasellus cursus leo hendrerit neque consequat gravida.</p>
<h2 id="destino">Yo soy el destino 1</h2>
<a href="#inicio">Ir arriba</a>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas feugiat dolor. Quisque eget eros quis neque egestas ultricies. Aliquam porttitor metus ut egestas consequat. Nullam vel dui in justo scelerisque egestas. Cras non facilisis justo. Nunc in faucibus risus. Pellentesque felis diam, condimentum vitae mattis ut, sollicitudin a libero. Pellentesque malesuada pharetra justo, nec fringilla tortor adipiscing at. Maecenas accumsan, enim id mattis blandit, urna enim bibendum est, at volutpat massa neque vitae libero. Phasellus cursus leo hendrerit neque consequat gravida.</p>

```html
<h1 id="inicio">Marcadores</h1>
<p><a href="#destino">Ir al destino 1</a></p>
<p><a href="#destino2">Ir al destino 2</a></p>
<p><a href="https://it.wikipedia.org/wiki/Capodimonte_(Napoli)#L.27isolamento" target="_blank">Marcador externo en Wikipedia</a></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas feugiat dolor. Quisque eget eros quis neque egestas ultricies. Aliquam porttitor metus ut egestas consequat. Nullam vel dui in justo scelerisque egestas. Cras non facilisis justo. Nunc in faucibus risus. Pellentesque felis diam, condimentum vitae mattis ut, sollicitudin a libero. Pellentesque malesuada pharetra justo, nec fringilla tortor adipiscing at. Maecenas accumsan, enim id mattis blandit, urna enim bibendum est, at volutpat massa neque vitae libero. Phasellus cursus leo hendrerit neque consequat gravida.</p>
<h2 id="destino">Yo soy el destino 1</h2>
<a href="#inicio">Ir arriba</a>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas feugiat dolor. Quisque eget eros quis neque egestas ultricies. Aliquam porttitor metus ut egestas consequat. Nullam vel dui in justo scelerisque egestas. Cras non facilisis justo. Nunc in faucibus risus. Pellentesque felis diam, condimentum vitae mattis ut, sollicitudin a libero. Pellentesque malesuada pharetra justo, nec fringilla tortor adipiscing at. Maecenas accumsan, enim id mattis blandit, urna enim bibendum est, at volutpat massa neque vitae libero. Phasellus cursus leo hendrerit neque consequat gravida.</p>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Enlaces)

## IFRAMES
---------------------------------------------------------------------------

**Iframe** (por inline frame o marco incorporado en inglés) es un elemento HTML que permite insertar o incrustar un documento HTML dentro de un documento HTML principal.

```html
<iframe src="http://www.google.es" width="400" height="500"></iframe>
```

[Volver al inicio](#-Enlaces)