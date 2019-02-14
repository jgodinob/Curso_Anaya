# Listas

Se usan para listar datos. Existen tres tipos:

* `<ol></ol>` (**ordened list**)
* `<ul></ul>` (**unordened list**)
* `<dl></dl>` (**definition list**)

Tanto `<ul></ul>` y `<ol></ol>` usan la etiqueta `<li></li>` (**list item**) para indicar sus elementos.

[Volver al inicio](#-Listas)

## LISTAS ORDENADAS
---------------------------------------------------------------------------

<h2>Ordened list</h2>
<ol>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miércoles</li>
</ol>

```html
<h2>Ordened list</h2>
<ol>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miércoles</li>
</ol>
```

[Volver al inicio](#-Listas)

### ATRIBUTOS LISTAS ORDENADAS
---------------------------------------------------------------------------

Atributos para `ol`:

* `type="1|a|A|i|I"` (para indicar el tipo de numeración)
* `start="numero"` (indica donde comienza la numeración)
* `reversed` (es vacio, no tiene valor)

<ol start="10" reversed>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
</ol>

```html
<ol start="10" reversed>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
</ol>
```

[Volver al inicio](#-Listas)

## LISTAS DESORDENADAS
---------------------------------------------------------------------------

<h2>Unordened list</h2>
<ul>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miércoles</li>
</ul>

```html
<h2>Unordened list</h2>
<ul>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miércoles</li>
</ul>
```


[Volver al inicio](#-Listas)

### ATRIBUTOS LISTAS DESORDENADAS
---------------------------------------------------------------------------

Atributos para `ul`:

* `type="disc|circle|square"`

<ul type="square">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>

```html
<ul type="square">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```

[Volver al inicio](#-Listas)

## LISTAS DE DEFINICIÓN
---------------------------------------------------------------------------

Se usan para indicar parejas de término y su definición. Por ejemplo, en glosarios, enciclopedias, diccionarios, etc.

La estructura es la siguiente:

<dl>  
    <dt>HTML</dt>   <!-- (Definition term - titulo) -->
    <dd>Lenguaje de marcado de hipertexto</dd>     <!-- (Definition description - explicacion) -->  
    <dt>CSS</dt>
    <dd>Hojas de estilo en cascadas</dd>         
    <dt>JavaScript</dt>
    <dd>Lenguaje de programación del lado del cliente.</dd>     
</dl>

```html
<dl>  
    <dt>HTML</dt>   <!-- (Definition term - titulo) -->
    <dd>Lenguaje de marcado de hipertexto</dd>     <!-- (Definition description - explicacion) -->  
    <dt>CSS</dt>
    <dd>Hojas de estilo en cascadas</dd>         
    <dt>JavaScript</dt>
    <dd>Lenguaje de programación del lado del cliente.</dd>     
</dl>
```

[Volver al inicio](#-Listas)

## LISTAS ANIDADAS
---------------------------------------------------------------------------

Son listas hijas de un `<li></li>`. Se recomienda poner la sublista (lista hija) justo antes de `</li>`.

---------------------------------------------------------------------------

<h2>Listas anidadas</h2>
<!-- Con ol -->
<ol>
    <li>Lunes
        <ol>
            <li>Bañar al perro</li>     
            <li>Ir al dentista</li>
        </ol> 
    </li>
    <li>Martes
        <ol>
            <li>Recoger la ropa de la lavanderia</li>
            <li>Presentar el trabajo del instituto</li>
        </ol>
    </li>
    <li>Miércoles</li>
</ol>

```html
<h2>Listas anidadas</h2>
<!-- Con ol -->
<ol>
    <li>Lunes
        <ol>
            <li>Bañar al perro</li>     
            <li>Ir al dentista</li>
        </ol> 
    </li>
    <li>Martes
        <ol>
            <li>Recoger la ropa de la lavanderia</li>
            <li>Presentar el trabajo del instituto</li>
        </ol>
    </li>
    <li>Miércoles</li>
</ol>
```

---------------------------------------------------------------------------

<h2>Listas anidadas</h2>
<!-- con ul -->
<ul>
    <li>Lunes
        <ul>
            <li>Bañar al perro</li>     
            <li>Ir al dentista
                <ol>
                    <li>sub sub item 1</li>
                    <li>sub sub item 2</li>
                    <li>sub sub item 3</li>
                </ol>
            </li>
        </ul> 
    </li>
    <li>Martes
        <ul>
            <li>Recoger la ropa de la lavanderia</li>
            <li>Presentar el trabajo del instituto</li>
        </ul>
    </li>
    <li>Miércoles</li>
</ul>

```html
<h2>Listas anidadas</h2>
<!-- con ul -->
<ul>
    <li>Lunes
        <ul>
            <li>Bañar al perro</li>
            <li>Ir al dentista
                <ol>
                    <li>sub sub item 1</li>
                    <li>sub sub item 2</li>
                    <li>sub sub item 3</li>
                </ol>
            </li>
        </ul> 
    </li>
    <li>Martes
        <ul>
            <li>Recoger la ropa de la lavanderia</li>
            <li>Presentar el trabajo del instituto</li>
        </ul>
    </li>
    <li>Miércoles</li>
</ul>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Listas)