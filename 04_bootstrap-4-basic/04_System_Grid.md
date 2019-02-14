# Sistema Grid

[Volver al inicio](#-Sistema-Grid)

## SISTEMA GRID

---------------------------------------------------------------------------

El sistema de rejillas de Bootstrap está construido con flexbox y permite hasta 12 columnas en toda la página.

Si no desea usar las 12 columnas individualmente, puede agrupar las columnas para crear
columnas más amplias:

<table class="table grid" style="text-align:center">
<tbody><tr>
  <td>span 1</td>
  <td>span 1</td>  
  <td>span 1</td>
  <td>span 1</td>
  <td>span 1</td>  
  <td>span 1</td>
  <td>span 1</td>
  <td>span 1</td>  
  <td>span 1</td>
  <td>span 1</td>
  <td>span 1</td>  
  <td>span 1</td>
</tr>
<tr>
  <td colspan="4">&nbsp;span 4</td>
  <td colspan="4">&nbsp;span 4</td>  
  <td colspan="4">&nbsp;span 4</td>
</tr>
<tr>
  <td colspan="4">span 4</td>
  <td colspan="8">span 8</td>  
</tr>
<tr>
  <td colspan="6">span 6</td>
  <td colspan="6">span 6</td>  
</tr>
<tr>
  <td colspan="12">span 12</td>
</tr>
</tbody></table>

El sistema de cuadrícula responde y las columnas se reorganizarán automáticamente dependiendo del tamaño de la pantalla.

Asegúrese de que la suma agregue hasta 12 o menos (no es necesario que use las 12 columnas
disponibles).

[Volver al inicio](#-Sistema-Grid)

### CLASES DE CUADRÍCULA

---------------------------------------------------------------------------

El sistema de cuadrícula Bootstrap 4 tiene cinco clases:
* `*.col-` (dispositivos extra pequeños - ancho de pantalla inferior a `576px`)
* `*.col-sm-` (dispositivos pequeños: ancho de pantalla igual o superior a `576 px`)
* `*.col-md-` (dispositivos medianos - ancho de pantalla igual o mayor que `768px`)
* `*.col-lg-` (dispositivos grandes - ancho de pantalla igual o mayor que `992px`)
* `*.col-xl-` (dispositivos `.col-xl-` : ancho de pantalla igual o superior a `.col-lg-` )

Las clases anteriores se pueden combinar para crear diseños más dinámicos y flexibles.

> **NOTA** cada clase aumenta, de modo que si desea establecer los mismos anchos para `sm` y `md`, solo necesita especificar `sm`.

[Volver al inicio](#-Sistema-Grid)

### ESTRUCTURA BÁSICA DE CUADRÍCULA

---------------------------------------------------------------------------

La siguiente es una estructura básica de una rejilla **Bootstrap 4**:

```html
<!-- Controla el ancho de las columnas, y cómo deben mostrarse en diferentes
dispositivos -->
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>
<!-- O permite que Bootstrap ajuste automáticamente el layout -->
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

Primer ejemplo: crear una fila ( `<div class="row">` ). Luego, agregue el número deseado de columnas (etiquetas con las `.col-*-*` apropiadas `.col-*-*` ). La primera estrella (`*`) representa la capacidad de respuesta: `sm`, `md`, `lg` o `xl`, mientras que la segunda estrella representa un número, que debe sumar hasta 12 para cada fila.

Segundo ejemplo: en lugar de agregar un número a cada col , deje que bootstrap maneje el diseño, para crear columnas de igual ancho: dos elementos `"col" = 50%` de ancho para cada columna. tres `cols = 33.33%` de ancho para cada `col.` cuatro `cols = 25%` de ancho, etc. También puede usar `.col-sm|md|lg|xl` para que las columnas sean receptivas.

A continuación, hemos recopilado algunos ejemplos de diseños de cuadrícula de **Bootstrap 4** básicos.

[Volver al inicio](#-Sistema-Grid)

#### 3 COLUMNAS IGUALES

---------------------------------------------------------------------------

El siguiente ejemplo muestra cómo crear tres columnas de ancho igual, en todos los dispositivos y anchos de pantalla:

<div class="row" style="width:100%">
  <div class="col" style="background-color:blue;display:inline-block;width:30%;">.col</div>
  <div class="col" style="background-color:orange;display:inline-block;width:30%;">.col</div>
  <div class="col" style="background-color:blue;display:inline-block;width:30%;">.col</div>
</div>

```html
<div class="row">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
</div>
```

[Volver al inicio](#-Sistema-Grid)

#### COLUMNAS RECEPTIVAS

---------------------------------------------------------------------------

El siguiente ejemplo muestra cómo crear cuatro columnas de ancho igual comenzando en tabletas y escalando a escritorios extra grandes. En teléfonos móviles o pantallas que miden menos de `576px` de ancho, las columnas se apilarán automáticamente una encima de la otra :

```html
<div class="row">
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
</div>
```

[Volver al inicio](#-Sistema-Grid)

#### DOS COLUMNAS DESIGUALES QUE RESPONDEN

---------------------------------------------------------------------------

El siguiente ejemplo muestra cómo obtener dos columnas de ancho variable comenzando en tabletas y escalando a grandes escritorios extra:

```html
<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-8">.col-sm-8</div>
</div>
```

[Volver al inicio](#-Sistema-Grid)


