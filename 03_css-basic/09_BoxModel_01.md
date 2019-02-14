# Box Model

**¿Qué es una caja?** Todo elemento define una caja en el layout (una caja es un rectángulo en el layout)

**¿Qué es el layout?** Es la disposicion (organización y distribucion) de los elementos en el espacio disponible en pantall para la aplicacion o sitio web (viewport).

[Volver al inicio](#-Box-Model)

## BOX MODEL

---------------------------------------------------------------------------

![https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png)

Existen dos tipos de elementos:
* `block-level`, Ocupan el **100%** de ancho disponible (por default)
* `inline-level`, Su ancho está definido por su contenido.

Elementos de una caja

**INTERNOS**
* `content` (content-box). El contenido 
* `padding` (padding-box). Es el espacio entre el contenido y los limites de la caja (es un espacio interno, relleno)
* `border` (border-box). La linea que limita a la caja. Por defecto las cajas tiene el borde en "`none`"
**EXTERNOS**
* `margin` Es el espacio entre una caja y las cajas adyacentes.

```css
.box {
  background: yellow;
  width: 400px;
  height: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 50px;
}
```

**¿Cómo se calcula el tamaño de una caja?** Por defecto el navegador hace lo siguiente:

`dimensiones declaradas + padding total + borde total (content box + padding box + border box)`

Si las dimensiones no están declaradas, lo normal es:
* **ancho**: total del contenedor (bloque) o total del contenido (inline)
* **alto**: definido por su contenido

Sin embargo, **CSS3** trae una propiedad que indica como se calculará el tamaño de una caja: "`box-sizing`"

* `box-sizing`
    * `content-box` (default)
    * `padding-box`
    * `border-box`

```css
.box {
  box-sizing: border-box;
}
```

> **CONSEJO**: Asignar `box-sizing: border-box;` a todos los elementos SIEMPRE.

```css
* {
    box-sizing: border-box;
}
```

[Volver al inicio](#-Box-Model)

### DIMENSIONES EN PORCENTAJES

---------------------------------------------------------------------------
  
1. Siempre se calculan respecto al ancho del contendor.
2. Es imposible definir alturas en porcentajes (con ciertas excepciones, como con alto definido en el padre)

```css
.box2-container {
  background: yellow;
  width: 500px;
}

.box2 {
  border: 1px solid black;
  width: 50%;
  padding-top: 10%;
}
```

[Volver al inicio](#-Box-Model)