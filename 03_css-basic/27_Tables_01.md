# Tablas

De forma predeterminada, las tablas se ajustan en su ancho al contenido

* `table-layout* `especifica como se distribuirá el espacio de las columnas. 
    
  Valores
    * `automatic` (default)
    * `fixed:` el ancho de la tabla se define con width. Si no se especifica un ancho para las columnas, serán uniformes.

* `caption-side* `Indica si el caption se mostrará arriba (top, default) o abajo (bottom)
* `border-spacing: x y;* `Indica la separacion entre las celdas (solo aplica si la tabla tiene border-collapse: separate)
* `border-collapse`, Indica si los bordes de la tabla y las celdas se unirán (collapse) o estarán separados (separate, default)

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<table style="border: 2px solid green;">
      <tr>
        <th style="border: 2px solid green;">Firstname</th>
        <th style="border: 2px solid green;">Lastname</th>
      </tr>
      <tr>
        <td style="border: 2px solid green;">Peter</td>
        <td style="border: 2px solid green;">Griffin</td>
      </tr>
      <tr>
        <td style="border: 2px solid green;">Lois</td>
        <td style="border: 2px solid green;">Griffin</td>
      </tr>
    </table>
  
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, th, td {
        border: 2px solid green;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
      </tr>
    </table>
  </body>
</html>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Tablas)