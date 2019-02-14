# Sombras

> **SUGERENCIA**: Usar herramientas online.

[Volver al inicio](#-Sombras)

## BOX-SHADOWS

---------------------------------------------------------------------------

La propiedad CSS `box-shadow` describe uno o más efectos de sombra como una lista separada por comas. Permite proyectar una sombra difuminada en la estructura de casi cualquier elemento.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div style="width: 300px;  height: 100px; padding: 15px; background-color: yellow; box-shadow: 10px 10px 5px grey;">This is a div element with a box-shadow</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style> 
      div {
        width: 300px;
        height: 100px;
        padding: 15px;
        background-color: yellow;
        box-shadow: 10px 10px 5px grey;
      }
    </style>
  </head>
  <body>
    <div>This is a div element with a box-shadow</div>
  </body>
</html>
```

---------------------------------------------------------------------------

Si un `border-radius` es especificado en un elemento con un `box shadow`, el `box shadow` asume las mismas esquinas redondeadas.

```css
box-shadow:  none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
```

Si no se especifica (por defecto), la sombra asume una sombra difuminada (como si la caja fuera levantada por encima del contenido).

* `inset` cambia la sombra a una dentro del marco (como si el contenido estuviera deprimido dentro de la caja). Inset shadows dibuja dentro del borde (incluso de los transparentes), por encima del fondo, pero por debajo del contenido.
* `<offset-x> <offset-y>`
Estos son dos valores **length** para definir el desplazamiento de la sombra. `<offset-x>` especifica la distancia horizontal. Los valores negativos colocan las combra a la izquierda de el elemento. `<offset-y>` Especifica la distancia vertical. Los valores negativos colocan la sombra por encima del elemento. Ver **length** para posibles unidades.
Si ambos valores son 0, la sombra es ubicada detras del elemento (y puede generar un efecto de difuminación `<blur-radius>` y/o `<spread-radius>` está establecido).
* `<blur-radius>`, este es el tercer valor **length**. Cuando mayor sea este valor, mayor sera la difuminación, por consecuencia la sombra se vuelve más grande y ligera. Los valores negativos no son permitidos. Si esto no es especificado, su valor será 0 (el borde de la sombra es fuerte).
* `<spread-radius>`, este es el cuarto valor **length**. Los valores positivos harán que la sombra se expanda y crezca más, los valores negativos harán que la sombra se reduzca de tamaño. Si no se especifica, este será 0 (la sombra será del mismo tamaño del elemento).
* `<color>`, ver los valores de `<color>` para las posibles palabras claves y anotaciones.

Si no se especifica, el color depende del navegador. En **Gecko** (Firefox), **Presto** (Opera) y **Trident** (Internet Explorer). 

> **NOTA**: Para simplificar el trabajo podemos usar esta herramienta [https://www.cssmatic.com/es/box-shadow](https://www.cssmatic.com/es/box-shadow)

[Volver al inicio](#-Sombras)

## TEXT-SHADOWS

---------------------------------------------------------------------------

La propiedad `text-shadow` agrega sombra al texto. Acepta una lista de sombras separadas por coma, para aplicarlas al texto y a la propiedad `text-decorations` del elemento.

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<h1 style="color: white; text-shadow: 8px 8px 4px #000000;">Text-shadow effect!</h1>
<p><b>Note:</b> Internet Explorer 9 and earlier versions, do not support the text-shadow property.</p>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        color: white;
        text-shadow: 8px 8px 4px #000000;
      }
    </style>
  </head>
  <body>
    <h1>Text-shadow effect!</h1>
    <p><b>Note:</b> Internet Explorer 9 and earlier versions, do not support the text-shadow property.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

* `<color>` Opcional. Puede ser especificado antes o después de los valores de offset. Si el color no es especificado, se usa el predeterminado del agente usuario.
> **NOTA**: Para asegurar consistencia entre navegadores, se recomienda especificar un color explícito.
* `<offset-x> <offset-y>`, Requeridos. Estos valores **length** especifican el ófset de la sombra del texto. `<offset-x>` especifica la distancia horizontal; un valor negativo pone la sombra a la izquierda del texto. `<offset-y>` especifica la distancia vertical; un valor negativo pone la sombra encima del texto. 
> **NOTA**: Si ambos valores son 0, la sombra es colocada detrás del texto (y puede generar un efecto de difuminado cuando se define el valor `<blur-radius>`).
* `<blur-radius>`, Opcional. Éste es un valor **length**. Si no se especifica, su valor predeterminado es 0. Mientras más alto sea el valor, mayor será la difuminación; la sombra se vuelve más amplia y clara.

> **NOTA**: Para simplificar el trabajo podemos usar esta herramienta [https://html-css-js.com/css/generator/text-shadow/](https://html-css-js.com/css/generator/text-shadow/)