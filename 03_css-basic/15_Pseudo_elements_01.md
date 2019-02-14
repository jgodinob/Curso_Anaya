# Pseudoelementos

Un pseudo-elemento CSS se utiliza para dar estilo a partes específicas de un elemento.

Por ejemplo, se puede utilizar para:
* Estilo de la primera letra o línea de un elemento
* Insertar contenido antes o después del contenido de un elemento

[Volver al inicio](#-Pseudoelementos)

## SINTÁXIS

---------------------------------------------------------------------------

La sintaxis de los pseudo-elementos:

```css
selector::pseudo-element {
  property:value;
}
```

> **NOTA**: Fíjese en la notación de la doble colonización - `::first-line` versus `:first-line`.<br>
> El par de **dos puntos** reemplazó la notación de un solo par para pseudo-elementos en CSS3. Este fue un intento del W3C para distinguir entre **pseudo-clases** y **pseudo-elementos**.<br>
> **NOTA**: La sintaxis de un solo par se utilizó tanto para pseudoclases como para pseudo-elementos en CSS2 y CSS1. Para la compatibilidad con versiones anteriores, la sintaxis de un solo par es aceptable para los pseudo-elementos CSS2 y CSS1.

[Volver al inicio](#-Pseudoelementos)

### ::FIRST-LINE PSEUDO-ELEMENTO

---------------------------------------------------------------------------

El pseudoelemento `::first-line` se utiliza para añadir un estilo especial a la primera línea de un texto.

El siguiente ejemplo formatea la primera línea del texto en todos los elementos `<p>`:

```css
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```

> **NOTA**: El pseudoelemento `::first-line` sólo se puede aplicar a elementos de nivel de bloque.

[Volver al inicio](#-Pseudoelementos)

### ::FIRST-LETTER PSEUDO-ELEMENTO

---------------------------------------------------------------------------

El pseudo-elemento `::first-letter` se utiliza para añadir un estilo especial a la primera letra de un texto.

El siguiente ejemplo formatea la primera letra del texto en todos los elementos <p>: 

```css
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
```

> **NOTA**: El pseudoelemento `::first-letter` sólo se puede aplicar a elementos de nivel de bloque.

[Volver al inicio](#-Pseudoelementos)

### ::FIRST-LETTER PSEUDO-ELEMENTOS Y CLASES CSS

---------------------------------------------------------------------------

Los pseudo-elementos se pueden combinar con clases CSS: 

```css
p.intro::first-letter {
  color: #ff0000;
  font-size:200%;
}
```

El ejemplo anterior mostrará la primera letra de los párrafos con `class="intro"`, en rojo y en un tamaño mayor.

[Volver al inicio](#-Pseudoelementos)

### MÚLTIPLES PSEUDO-ELEMENTOS

---------------------------------------------------------------------------

También se pueden combinar varios pseudo-elementos.

En el siguiente ejemplo, la primera letra de un párrafo será roja, en un tamaño de letra `xx-large`. El resto de la primera línea será azul, y en `small-caps` (minúsculas). El resto del párrafo será el tamaño y color de fuente por defecto:

```css
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}

p::first-line {
  color: #0000ff;
  font-variant: small-caps;
}
```

[Volver al inicio](#-Pseudoelementos)

### CSS - EL PSEUDOELEMENTO ::BEFORE

---------------------------------------------------------------------------

El pseudo-elemento `::before` puede ser usado para insertar algún contenido antes del contenido de un elemento.

El siguiente ejemplo inserta una imagen antes del contenido de cada elemento `<h1>`:

```css
h1::before {
  content: url(smiley.gif);
}
```

[Volver al inicio](#-Pseudoelementos)

### CSS - EL PSEUDOELEMENTO ::AFTER

---------------------------------------------------------------------------
El pseudo-elemento `::after` puede ser usado para insertar algún contenido después del contenido de un elemento.

El siguiente ejemplo inserta una imagen después del contenido de cada elemento `<h1>`:

```css
h1::after {
  content: url(smiley.gif);
}
```

[Volver al inicio](#-Pseudoelementos)

### CSS - EL PSEUDOELEMENTO ::SELECTION

---------------------------------------------------------------------------

El pseudoelemento `::selection` coincide con la parte de un elemento que ha sido seleccionado por el usuario.

Las siguientes propiedades de CSS se pueden aplicar a `::selection: color`, `background`, `cursor`, y `outline` (contorno).

El siguiente ejemplo hace que el texto seleccionado sea rojo sobre un fondo amarillo:

```css
::selection {
  color: red; 
  background: yellow;
}
```

[Volver al inicio](#-Pseudoelementos)