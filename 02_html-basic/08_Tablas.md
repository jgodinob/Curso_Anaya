# Tablas

Las tablas se usan para mostrar datos en formato tabla (filas y columnas, tipo hoja de cálculo). La etiqueta `<table></table>` es el contenedor de la tabla. Mientras que `<tr></tr>` es una fila y `<td></td>` es una celda dentro de la fila.

* `<table></table>` (contenedor de la tabla)
* `<tr></tr>` (table-row, fila - horizontal)
* `<td></td>` (table-data, aqui se insertan los datos)

[Volver al inicio](#-Tablas)

## TABLAS
---------------------------------------------------------------------------

Un ejemplo básico de tabla sería el siguiente:

<h2>Etiquetas table, tr, td</h2>
<table>
    <tr>
        <td>Hola Mundo</td>
    </tr>
</table>
<table>
    <tr>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4</td>
    </tr>
</table>

```html
<h2>Etiquetas table, tr, td</h2>
<table>
    <tr>
        <td>Hola Mundo</td>
    </tr>
</table>
<table>
    <tr>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <td>3</td>
        <td>4</td>
    </tr>
</table>
```

[Volver al inicio](#-Tablas)

### CABECERA, FOOTER Y BODY
---------------------------------------------------------------------------

`<th></th>` Son cabeceras de columnas. Van dentro del primer `<tr></tr>` de ser necesario.

---------------------------------------------------------------------------

<table>
    <tr>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
    </tr>
    <tr>
        <td>Ir al veterinario</td>
        <td>Ir al dentista</td>
        <td>Curso HTML5</td>
    </tr>
    <tr>
        <td>Instituto</td>
        <td>Lavanderia</td>
        <td>Curso HTML5</td>
    </tr>
</table>

```html
<table>
    <tr>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
    </tr>
    <tr>
        <td>Ir al veterinario</td>
        <td>Ir al dentista</td>
        <td>Curso HTML5</td>
    </tr>
    <tr>
        <td>Instituto</td>
        <td>Lavanderia</td>
        <td>Curso HTML5</td>
    </tr>
</table>
```

---------------------------------------------------------------------------

* `<thead></thead>` es la cabecera e incluye a los `<th></th>`
* `<tbody></tbody>` es el cuerpo e incluye a los datos
* `<tfoot></tfoot>` es el pie y debe ir antes de `<tbody></tbody>`

---------------------------------------------------------------------------

<table>
    <thead>
        <tr>
            <th>Mes</th>
            <th>Productos vendidos</th>
            <th>Ingresos</th>
            <th>Impuestos</th>
            <th>Ganancia</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td colspan="4">Total</td>
            <td>$2400.00</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>Enero</td>
            <td>10</td>
            <td>$500.00</td>
            <td>$100.00</td>
            <td>$400.00</td>
        </tr>
        <tr>
            <td>Febrero</td>
            <td>10</td>
            <td>$500.00</td>
            <td>$100.00</td>
            <td>$400.00</td>
        </tr>
    </tbody>
</table>

```html
<table>
    <thead>
        <tr>
            <th>Mes</th>
            <th>Productos vendidos</th>
            <th>Ingresos</th>
            <th>Impuestos</th>
            <th>Ganancia</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td colspan="4">Total</td>
            <td>$2400.00</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>Enero</td>
            <td>10</td>
            <td>$500.00</td>
            <td>$100.00</td>
            <td>$400.00</td>
        </tr>
        <tr>
            <td>Febrero</td>
            <td>10</td>
            <td>$500.00</td>
            <td>$100.00</td>
            <td>$400.00</td>
        </tr>
    </tbody>
</table>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Tablas)

### CAPTION
---------------------------------------------------------------------------

La etiqueta `<caption></caption>` se usa para nombrar a la tabla. Debe ir inmediatamente después de la etiqueta de apertura `<table>`

---------------------------------------------------------------------------

<table>
    <caption>Registrados al evento</caption>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
        <th>telefono</th>
        <th>edad</th>
    </tr>
    <tr>
        <td>Héctor</td>
        <td>Franco</td>
        <td>hector.franco.aceituno@gmail.com</td>
        <td>987-654-321</td>
        <td>17</td>        
    </tr>
    <tr>
        <td>Héctor</td>
        <td>Franco</td>
        <td>hector.franco.aceituno@gmail.com</td>
        <td>987-654-321</td>
        <td>17</td>         
    </tr>
</table>

```html
<table>
    <caption>Registrados al evento</caption>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
        <th>telefono</th>
        <th>edad</th>
    </tr>
    <tr>
        <td>Héctor</td>
        <td>Franco</td>
        <td>hector.franco.aceituno@gmail.com</td>
        <td>987-654-321</td>
        <td>17</td>        
    </tr>
    <tr>
        <td>Héctor</td>
        <td>Franco</td>
        <td>hector.franco.aceituno@gmail.com</td>
        <td>987-654-321</td>
        <td>17</td>         
    </tr>
</table>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Tablas)

### COLGROUP
---------------------------------------------------------------------------

La etiqueta `<colgroup></colgroup>` se utiliza para definir atributos para columnas. Dentro de ella deben ir etiquetas `<col>` que representen a cada columna. Usando el atributo span="numero" en `<col>` se puede referenciar a varias columnas.

Se pueden añadir atributos que se apliquen a toda la columna.

---------------------------------------------------------------------------

<table>
    <colgroup>
        <col style="background: yellow">
        <col style="background: red" span="2">
        <col style="background: green">
        <col class="red">
    </colgroup>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
</table>

```html

<table>
    <colgroup>
        <col style="background: yellow">
        <col style="background: red" span="2">
        <col style="background: green">
        <col class="red">
    </colgroup>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
    </tr>
</table>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Tablas)

### ROWSPAN Y COLSPAN
---------------------------------------------------------------------------

* **rowspan** combina varias filas
* **colspan** combina varias columnas

Ambos son atributos de la etiqueta `<td></td>` o `<th></th>` jamas de `<tr></tr>`

---------------------------------------------------------------------------

<table>
    <tr>
        <td rowspan="2">a</td>
        <td>b</td>
        <td>c</td>
    </tr>
    <tr>
        <td>b</td>
        <td>c</td>
    </tr>
    <tr>
        <td>a</td>
        <td colspan="2">b</td>
    </tr>
</table>

```html
<table>
    <tr>
        <td rowspan="2">a</td>
        <td>b</td>
        <td>c</td>
    </tr>
    <tr>
        <td>b</td>
        <td>c</td>
    </tr>
    <tr>
        <td>a</td>
        <td colspan="2">b</td>
    </tr>
</table>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Tablas)