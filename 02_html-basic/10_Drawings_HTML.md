# Dibujos HTML

[Volver al inicio](#-Dibujos-HTML)

## SVG
---------------------------------------------------------------------------

Se necesita un elemento `<svg></svg>` con medidas que se pueden definir con atributos o con css. Dentro van los dibujos que no tienen etiqueta de cierre pero obligatoriamente deben cerrarse asi `<line />`.

<svg>
    <!-- Lineas 
        <line />
        Con los atributos:
        x1, y1 (coordenadas del punto inicial)
        x2,y2 (coordenadas del punto final)
        -->
    <line x1="250"  y1="150"  x2="0"  y2="300" id="line1" />
    <line x1="250"  y1="150"  x2="500"  y2="300" id="line2" />
    <!-- rectángulos 
        <rect />
        Con los atributos:
        x,y (coordenadas del punto inicial)
        width, height
        -->
    <rect x="50" y="50" width="200" height="100" id="rect1" />
    <!--
        Circulos
        <circle />
        Con los atributos:
        cx,cy (coordenadas del centro)
        r (radio)
        -->
    <circle cx="250" cy="150" r="120" id="circle1" />
    <!-- Textos
        <text></text>
        Con los atributos
        x,y (coordenadas de inicio)
        -->
    <text x="200" y="150" id="text1">
        Soy un texto SVG
    </text>
</svg>

```html
<svg>
    <!-- Lineas 
        <line />
        Con los atributos:
        x1, y1 (coordenadas del punto inicial)
        x2,y2 (coordenadas del punto final)
        -->
    <line x1="250"  y1="150"  x2="0"  y2="300" id="line1" />
    <line x1="250"  y1="150"  x2="500"  y2="300" id="line2" />
    <!-- rectángulos 
        <rect />
        Con los atributos:
        x,y (coordenadas del punto inicial)
        width, height
        -->
    <rect x="50" y="50" width="200" height="100" id="rect1" />
    <!--
        Circulos
        <circle />
        Con los atributos:
        cx,cy (coordenadas del centro)
        r (radio)
        -->
    <circle cx="250" cy="150" r="120" id="circle1" />
    <!-- Textos
        <text></text>
        Con los atributos
        x,y (coordenadas de inicio)
        -->
    <text x="200" y="150" id="text1">
        Soy un texto SVG
    </text>
</svg>
```

[Volver al inicio](#-Dibujos-HTML)

## CANVAS
---------------------------------------------------------------------------

El elemento `<canvas></canvas>` crea un contexto en html para dibujar usando JavaScript. Esto significa que canvas no tiene utilidad sin JS.

En html, lo único que se hace es crear el elemento `<canvas></canvas>` y asignarle tres atributos:
 
* `id = ""`, identificador único
* `width = ""`, ancho del canvas
* `height = ""`, alto del canvas

<canvas id="mycanvas" width="450" height="550"></canvas>
<!-- Aqui se inserta un documento javascript externo-->
<script src="./Examples/10_Drawings_HTML/canvas.js"></script>

```html
<canvas id="mycanvas" width="450" height="550"></canvas>
<!-- Aqui se inserta un documento javascript externo-->
<script src="./Examples/10_Drawings_HTML/canvas.js"></script>
```

[Volver al inicio](#-Dibujos-HTML)

### INTRODUCCIÓN A JAVASCRIPT
---------------------------------------------------------------------------

JS es un lenguaje de programación del lado del cliente (significa que el navegador lo interpreta).

**VARIABLES**, son contenedores para valores: `var profesor = "Juan Perez";`

[Volver al inicio](#-Dibujos-HTML)

#### OBJETOS
---------------------------------------------------------------------------

Casi todo en JS es un objeto. Los objetos tienen propiedades y métodos. Las propiedades son características mientras que los métodos son funciones (hacen algo).

```javascript
profesor.edad       // (propiedad)
profesor.caminar    // (método)
```

[Volver al inicio](#-Dibujos-HTML)

#### SINTAXIS
---------------------------------------------------------------------------

Los métodos y las propiedades se escriben con punto después del objeto al que hacen referencia.

Las propiedades pueden servir para dos fines:

1. Obtener un valor (`get` - `getters`)
2. Definir un valor (`set` - `setters`)

```javascript
profesor.edad = 35;                  // (set)
var edadProfesor = profesor.edad;    // (get)
```

Los métodos también pueden ser getters o setters. Su sintaxis es con paréntesis. Dentro de los paréntesis pueden pasarse valores con los cuales el método trabajará.

```javascript
profesor.caminar()
profesor.dormir('10pm')
```

[Volver al inicio](#-Dibujos-HTML)

#### TIPOS DE DATOS
---------------------------------------------------------------------------

Existen tres tipos de datos primitivos:

* **Number** (numero, se usa para cálculos)
* **String** (cadenas de texto y numeros, se encierran entre comillas)
* **Boolean** (valores de verdadero,true, o false, false)

[Volver al inicio](#-Dibujos-HTML)