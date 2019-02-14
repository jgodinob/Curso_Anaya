# Introducción

[Volver al inicio](#-Introducción)

## VINCULAR HTML Y CSS

---------------------------------------------------------------------------

Existen 4 métodos:

1. `<link>`, La etiqueta **link** conecta al HTML con un recurso externo. La sintaxis para conectar css es (recomendable en el head):

```html
<link rel="stylesheet" href="ruta/archivo.css">
```

> **NOTA**: En HTML5 no es necesario `type="text/css"`.

2. `<style></style>`, La etiqueta `<style></style>` permite embeber código css dentro de html. Se recomienda ponerla dentro de `<head<></head>`.

3. `@import`, La regla `@import` añade una hoja de estilos externa dentro de otra. Por lo tanto, si se usa en HTML, debe estar dentro de la etiqueta `<style></style>`

Su sintaxis es:

```css
@import url(ruta/archivo.css);
@import url("ruta/archivo.css");
```

> **NOTA**: Las comillas en la ruta son opcionales

4. `style=""`, El atributo style permite insertar estilos en un elemento específico de HTML.

Su sintaxis es:

```html
<tag style="estilos..."></tag>
```

Ejemplo:

```html
<h1 style="color: red">Curso CSS3 Desde Cero</h1>
```

## RECURSOS

---------------------------------------------------------------------------

> **NOTA**: Podemos acceder a [https://caniuse.com/](https://caniuse.com/) para comprobar la compatibilidad de navegadores.
> **NOTA**: Fuente de recursos CSS [https://cssreference.io/](https://cssreference.io/)

[Volver al inicio](#-Introducción)
