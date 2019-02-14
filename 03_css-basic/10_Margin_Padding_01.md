# Margin & Padding

[Volver al inicio](#-Margin-&-Padding)

## MARGIN

---------------------------------------------------------------------------

El espacio entre una caja y las adyacentes. 

Son cuatro tipos de márgenes:
* `margin-top:`     (1)
* `margin-right:`   (2)
* `margin-bottom:`  (3)
* `margin-left:`    (4)

También se puede escribir con un **shorthand**

* `margin: 1em (1,2,3,4);`
* `margin: 1em(1,3) 2em(2,4);`
* `margin: 1em(1) 2em(2,4) 3em(3);`
* `margin: 1em(1) 2em(2) 3em(3) 4em(4);`

> **TIPS**: 
>   1. Comienza desde arriba
>   2. Avanza en sentido de las agujas del reloj
>   3. Si un elemento no tiene valor toma el de su opuesto

```css
.div1 {
  margin: 1em 1.5em;
  /*
    margin-top: 1em;
    margin-right: 1.5em;
    margin-bottom: 1em;
    margin-left: 1.5em;
  */
}

.div2 {
  margin: 1em auto 1.5em;
  /*
    margin-top: 1em;
    margin-right: auto;
    margin-bottom: 1.5em;
    margin-left: auto;
  */
}
```

> **TIPS**:
>   1. Puedes usar margenes negativos para mover elementos.
>   2. Puedes usar margin-left: auto; y margin-right: auto para centrar elementos de bloque con ancho definido.

[Volver al inicio](#-Margin-&-Padding)

### COLAPSADO DE MARGENES VERTICALES (ADYACENTES)

---------------------------------------------------------------------------

* Cuando hay margenes verticales que se superponen el mayor siempre absorbe al menor.

[Volver al inicio](#-Margin-&-Padding)

### COLAPSADO DE MARGENES VERTICALES 2 (PADRE HIJO)

---------------------------------------------------------------------------

* El margen vertical del hijo se escapa del padre. Para solucionarlo (en el padre):
    1. `padding`
    2. `overflow: hidden;`
    3. `float: right|left;` (no recomendado)

```css
[class^="box"]{
    background: red;
    width: 200px;
    height: 200px;
}
.box1 {
    margin-bottom: 11em;
}
.box2 {
    margin-top: 10em;
}
.padre {
    background: yellow;
    /*float: left;*/
    /*padding-top: 1px;*/
    /*overflow: hidden;*/
}
.hijo {
    margin-top: 2em;
}
```

[Volver al inicio](#-Margin-&-Padding)

## PADDING

---------------------------------------------------------------------------

Es la separacion entre el contenido y el limite de la caja

Son cuatro tipos de padding:
* `padding-top:`     (1)
* `padding-right:`   (2)
* `padding-bottom:`  (3)
* `padding-left:`    (4)

También se puede escribir con un **shorthand**

* `padding: 1em (1,2,3,4);`
* `padding: 1em(1,3) 2em(2,4);`
* `padding: 1em(1) 2em(2,4) 3em(3);`
* `padding: 1em(1) 2em(2) 3em(3) 4em(4);`

> **TIPS**:
>   1. Los paddings no colapsan
>   2. No hay paddings negativos
>   3. Los paddings con porcentajes pueden usarse para crear cajas con una proporcion

```css
.ratio {
  background: red;
  padding-bottom: 50%;
}
```

[Volver al inicio](#-Margin-&-Padding)  
