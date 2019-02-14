# Herencia y Especificidad

[Volver al inicio](#-Herencia-y-Especificidad)

## HERENCIA

---------------------------------------------------------------------------

Es el efecto de que los padres le dan a sus hijos (y descendientes) sus propiedades css.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div style="background: #b37b7b; color: red;">
    <h1>CSS3 Desde Cero</h1>
    <ul>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
    </ul>
    <p id="parrafo" class="parrafo" style="color: yellow">Lorem ipsum dolor sit amet, </p>
</div>

```css
<div>
    <h1>CSS3 Desde Cero</h1>
    <ul>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
    </ul>
    <p id="parrafo" class="parrafo" style="color: yellow">Lorem ipsum dolor sit amet, </p>
</div>
```
```css
div {
  background: #f6f6f6;
  color: red;
}
```

---------------------------------------------------------------------------

El valor "inherit" fuerza a un elemento a heredar la propiedad correspondiente.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div style="background: #b37b7b; color: red;">
    <h1>CSS3 Desde Cero </h1>
    <ul style="color: steelblue;">
      <li><a href="#" style="color: inherit;">Item</a></li>
      <li><a href="#" style="color: inherit;">Item</a></li>
      <li><a href="#" style="color: inherit;">Item</a></li>
      <li><a href="#" style="color: inherit;">Item</a></li>
    </ul>
    <p id="parrafo" class="parrafo" style="color: yellow">Lorem ipsum dolor sit amet, </p>
</div>

```css
<div>
    <h1 style="background: #b37b7b">CSS3 Desde Cero</h1>
    <ul>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
    </ul>
    <p id="parrafo" class="parrafo" style="color: yellow">Lorem ipsum dolor sit amet, </p>
</div>
```
```diff
div {
  background: #f6f6f6;
}
++ a {
++    color: inherit;
++ }
++ ul {
++    color: steelblue;
++ }
```

---------------------------------------------------------------------------

[Volver al inicio](#-Herencia-y-Especificidad)

## ESPECIFICIDAD

---------------------------------------------------------------------------

La especifidad es un conjunto de valores numéricos que se aplican a los selectores para calcular qué estilo gana en caso de conflicto.

La especificidad siempre le gana a la cascada.

**¿Cómo se calcula la especificidad?**

| TIPO             | PESO  | VALOR   |
|------------------|-------|---------|
| etiquetas        | 1     | 0,0,0,1 |
| clases           | 10    | 0,0,1,0 |
| id               | 100   | 0,1,0,0 |
| estilo en linea  | 1000  | 1,0,0,0 |

Ejemplos: 

```css
html body p.parrafo#parrafo { color: teal; }  /*Especificidad: 113*/
body p.parrafo#parrafo { color: steelblue; }  /*Especificidad: 112*/
p.parrafo#parrafo { color: black; }           /*Especificidad: 111*/
p#parrafo { color: orange; }                  /*Especificidad: 101*/
#parrafo { color: green; }                    /*Especificidad: 100*/
.parrafo { color: blue; }                     /*Especificidad: 10*/
p { color: purple; }                          /*Especificidad: 1*/
```

[Volver al inicio](#-Herencia-y-Especificidad)

## !IMPORTANT

---------------------------------------------------------------------------

Se usa `!important` para ignorar la especificidad y ganar siempre en un posible conflicto de estilos.

```css
p.parrafo {
  color: black !important;
}
p {
  color: red !important;
}
```

**RESUMIENDO** css: *!important* **>** *Especificidad* **>** *Cascada*

[Volver al inicio](#-Herencia-y-Especificidad)