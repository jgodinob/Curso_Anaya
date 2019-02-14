# Transformaciones

Las transformaciones permiten alterar la forma de un elemento. Las principales son:

* `rotate()` Se le pasa un valor en grado
* `scale(x,y)` Si se pasa un solo valor, aplica para ambos ejes
* `translate(x,y)`
* `skew(Xdeg,Ydeg)`, Si se pasa un solo valor aplica a X

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `transform:rotate(10deg);`

---------------------------------------------------------------------------

<div id="myDIV" style="width: 150px;
        height: 80px;
        background-color:lightblue;
        transform:rotate(10deg);">
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #myDIV1 {
        width: 150px;
        height: 80px;
        background-color:lightblue;
        transform:rotate(10deg);
      }
    </style>
  </head>
  <body>
    <div id="myDIV1">
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: `transform:skew(20deg,20deg);`

---------------------------------------------------------------------------

<div id="myDIV2" style="width: 150px;
        height: 80px;
        background-color:lightblue;
        transform:skew(20deg,20deg);">
</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #myDIV2 {
        width: 150px;
        height: 80px;
        background-color:lightblue;
        transform:skew(20deg,20deg);
      }
    </style>
  </head>
  <body>
    <div id="myDIV2">
    </div>
  </body>
</html>
```

[Volver al inicio](#-Transformaciones)