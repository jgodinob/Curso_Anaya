# Tablas

[Volver al inicio](#-Tablas)

## EXERCISES

---------------------------------------------------------------------------

1. **Ajuste el borde a "2px green solid" para los elementos de `tabla`, `th` y `td`.**

```html
<!DOCTYPE html>
<html>
  <head>
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

**SOLUCIÓN**

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

2. **Ocultar los bordes de la tabla en un solo borde.**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table {
        border-collapse: collapse;
      }
      table, td, th {
        border: 1px solid black;
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

3. **Ajustar el ancho de la tabla a "100%".**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table {
        width: 100%;
      }
      table, td, th {
        border: 1px solid black;
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

4. **Ajustar la alineación del texto en `<td>` elementos a "`right`".**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
      }
      td {
        text-align: right;
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

5. **Ajustar el relleno en elementos `<th>` a "`15px`".**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
      }
      th {
        padding: 15px;
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

6. **Ajuste el color de fondo de los elementos `<th>` a "`lightblue`".**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
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

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      table, td, th {
        border: 1px solid black;
      }
      th {
        background-color: lightblue;
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