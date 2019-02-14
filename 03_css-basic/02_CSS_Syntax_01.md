# Sintaxis CSS

[Volver al inicio](#-Sintaxis-CSS)

## SINTAXIS CSS

---------------------------------------------------------------------------

### REGLA CSS

---------------------------------------------------------------------------

Es un bloque de instrucciones css. Comienza con un selector y termina con una llave de cierre. Su estructura es así:

```css
selector {
    propiedad1: valor1;
    propiedad2: valor2;
}
```

> **NOTA**: Hay ciertos tipos de reglas que inician con `@` a las que se les conoce como **at-rules**. Ejemplos:

```css
@media {
    // TODO
}
@font-face {
    // TODO
}

@keyframes {
    // TODO
}
```

[Volver al inicio](#-Sintaxis-CSS)

### SELECTOR

---------------------------------------------------------------------------

Indican a que elemento HTML se va a aplicar el estilo. Ejemplo:

```css
p {
    estilos (se aplicarán a los parrafos)
}
```

[Volver al inicio](#-Sintaxis-CSS)

### DECLARACIÓN

---------------------------------------------------------------------------

Una **declaracion** es un estilo especifico. Y se conforma por una **propiedad** (que es el estilo a manipular) y un **valor** (que es es **"valor"** que tomará ese estilo). Ejemplo:

```css
p {
    color: red;
}
```

En otras palabras, una declaracion es una pareja de **propiedad** y **valor**. Su sintaxis es:

```css
propiedad: valor;
```

El **valor** y la **propiedad** se separan por dos puntos, `:`. Y la declaración se termina con punto y coma, `;`.
        
> **NOTA**: El conjunto de todas las declaraciones encerradas entre llaves, se conoce como **"bloque de declaracion (declaration block)"**

> **NOTA**: Tradicionalmente una propiedad tomaba un valor. Sin embargo en CSS3 existen varias propiedades que pueden tomar múltiples valores:

```css
propiedad: valor1, valor2, valor3, valor4;
```

[Volver al inicio](#-Sintaxis-CSS)

### PROPIEDAD

---------------------------------------------------------------------------

Una **propiedad** indica un estilo de un elemento. Ej:

```css
color (propiedad)
```

[Volver al inicio](#-Sintaxis-CSS)

### VALOR

---------------------------------------------------------------------------

El **valor** indica el valor que tomará una propiedad. Ej
 
```css
yellow (valor)
```   

Ejemplo de regla CSS:

```css
h1 {
    color: yellow;
    background: black;
}
```

[Volver al inicio](#-Sintaxis-CSS)