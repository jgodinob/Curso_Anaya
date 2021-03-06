# Cascada y Herencia

La **herencia** significa que elementos ancestros heredan algunas propiedades a sus descendientes. Generalmente estilos como fuentes, colores, etc. Mientras que estilos de layout por lo general no se heredan.

```css
h1 {
  color: red;
}
p {
  color: green;
}
```

[Volver al inicio](#-Cascada-y-Herencia)

## CASCADA

---------------------------------------------------------------------------

La cascada viene del nombre de **CSS** (**cascade Style Sheet**) y significa que los estilos que vienen en último lugar sobreescriben a los que estan antes.

```css
p {
    color: red;
    color: green;
}
```

Se usa mucho la cascada para crear **fallbacks** para navegadores viejos.

```css
p {
    background: red;
    background: linear-gradient(red,yellow);
}
```

Ten en cuenta que la cascada también se aplica cuando se inserta css con `<link>` o `@import`

También se usa la cascada para simplificar los estilos.

```css
.prev,
.netx {
    background: red;
    color: white;
    float: right;
}
.prev {
    float: left;
}
```

[Volver al inicio](#-Cascada-y-Herencia)