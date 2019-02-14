# Formularios

El elemento `<form></form>` envuelve al formulario y el atributo `action=""` indica el archivo que procesará el formulario.

> **NOTA**: Todo formulario debe encerrarse con la etiqueta `<form action=""></form>`.

Los formularios reciben los datos en campos. Y hay varios elementos para definir campos en HTML.

<form action="form.html">
    <div>
        <label for="nombre">Su nombre</label>
        <input type="text" id="nombre" name="nombre" required placeholder="Su nombre" tabindex="2">
    </div>
</form>

```html
<form action="form.html">
    <div>
        <label for="nombre">Su nombre</label>
        <input type="text" id="nombre" name="nombre" required placeholder="Su nombre" tabindex="2">
    </div>
</form>
```

Tres formas de enviar el formulario
1. `<input type="submit">` (recomendada)
2. `<button>Enviar</button>` (alternativa)
3. Presionar **Enter** dentro de un input

[Volver al inicio](#-Formularios)

## CAMPOS
--------------------------------------------------------------------------- 

> **NOTA**: La etiqueta `<fieldset></fieldset>` agrupa campos. Y con la etiqueta `<legend></legend>` se asigna un nombre a cada grupo de campos

[Volver al inicio](#-Formularios)

### INPUT
---------------------------------------------------------------------------

El campo más usado es `<input type="">` siendo el atributo `type` (obligatorio) el que indica qué tipo de **input** es (son más de 20 aprox).

El elemento `<label></label>` sirve para mostrar nombres de campos. Requiere un atributo `for=""` que coincida con el `id` del campo al que se refiere.

Todo campo debe llevar el atributo `name=""` aunque este **"aparentemente"** no haga nada. Porque eso permite que los lenguajes de backend lean los campos.

`input type="text"` (para introducir texto) 

---------------------------------------------------------------------------

<form action="form.html">
    <fieldset>
        <legend>Datos personales</legend>
        <div>
            <label for="nombre">Su nombre</label>
            <input type="text" id="nombre" name="nombre" required placeholder="Su nombre" tabindex="2">
        </div>
        <div>
            <label for="nombre">Sus apellidos</label>
            <input type="text" id="nombre" name="nombre" placeholder="Sus apellidos" tabindex="1">  
        </div>
    </fieldset>
</form>

```html
<form action="form.html">
    <fieldset>
        <legend>Datos personales</legend>
        <div>
            <label for="nombre">Su nombre</label>
            <input type="text" id="nombre" name="nombre" required placeholder="Su nombre" tabindex="2">
        </div>
        <div>
            <label for="nombre">Sus apellidos</label>
            <input type="text" id="nombre" name="nombre" placeholder="Sus apellidos" tabindex="1">  
        </div>
    </fieldset>
</form>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Formularios)

### CHECKBOX
---------------------------------------------------------------------------

El input `type="checkbox"` sirve para poner casillas de seleccion.

---------------------------------------------------------------------------

<form action="form.html">
    <fieldset>
        <legend>Datos adicionales</legend>
        <p>Escoja sus pasatiempos favoritos</p>
        <input type="checkbox" id="checkbox1" name="cine">
        <label for="checkbox1">Cine</label><br>
        <input type="checkbox" id="checkbox2" name="musica">
        <label for="checkbox2">Musica</label><br>
        <input type="checkbox" id="checkbox3" name="deporte">
        <label for="checkbox3">Deporte</label>
    </fieldset>
</form>

```html
<form action="form.html">
    <fieldset>
        <legend>Datos adicionales</legend>
        <p>Escoja sus pasatiempos favoritos</p>
        <input type="checkbox" id="checkbox1" name="cine">
        <label for="checkbox1">Cine</label><br>
        <input type="checkbox" id="checkbox2" name="musica">
        <label for="checkbox2">Musica</label><br>
        <input type="checkbox" id="checkbox3" name="deporte">
        <label for="checkbox3">Deporte</label>
    </fieldset>
</form>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Formularios)

### RADIO
---------------------------------------------------------------------------

El input `type="radio"` sirve para escoger una sola opción de un grupo de opciones.

---------------------------------------------------------------------------

<form action="form.html">
    <fieldset>
        <p>Escoja su país</p>
        <input type="radio" id="radio1" name="pais">
        <label for="radio1">Colombia</label><br>
        <input type="radio" id="radio2" name="pais">
        <label for="radio2">Chile</label><br>
        <input type="radio" id="radio3" name="pais">
        <label for="radio3">México</label><br>
        <input type="radio" id="radio4" name="pais">
        <label for="radio4">España</label><br>
        <input type="radio" id="radio5" name="pais">
        <label for="radio5">Perú</label><br>
    </fieldset>
</form>

```html
<form action="form.html">
    <fieldset>
        <p>Escoja su país</p>
        <input type="radio" id="radio1" name="pais">
        <label for="radio1">Colombia</label><br>
        <input type="radio" id="radio2" name="pais">
        <label for="radio2">Chile</label><br>
        <input type="radio" id="radio3" name="pais">
        <label for="radio3">México</label><br>
        <input type="radio" id="radio4" name="pais">
        <label for="radio4">España</label><br>
        <input type="radio" id="radio5" name="pais">
        <label for="radio5">Perú</label><br>
    </fieldset>
</form>
```

---------------------------------------------------------------------------

[Volver al inicio](#-Formularios)

### SELECT
---------------------------------------------------------------------------

El elemento `<select name="" id=""></select>` se usa para mostrar una lista de desplegable de opciones. Cada opcion usa la etiqueta `<option value=""></option>`

> **NOTA**: El atributo `value` no tiene utilidad en HTML, sin embargo es el que lee el lenguaje de servidor. Por tanto, el contenido de `<option></option>` es el que muestra el navegador y no necesariamente debe coincidir con el atributo value="".

Puede recibir el atributo multiple (boolean) para que se escojan varias opciones. Y combinado con el atributo size se define la cantidad de opciones visibles.

> **NOTA**: `<optgroup></optgroup>` se usa para envolver grupos de opciones. Con el atributo label="" se indica un título.

---------------------------------------------------------------------------

<form action="form.html">
    <fieldset>
        <p>Escoja su rango de edad</p>
        <select name="edad" id="edad">
            <optgroup label="Niños y jovenes">
                <option value="">Menos de 10</option>
                <option value="">Entre 11 y 20</option>
            </optgroup>
            <optgroup label="Adultos">
                <option value="">Entre 21 y 30</option>
                <option value="">Más de 30</option>
            </optgroup>
        </select>
    </fieldset>
</form>

```html
<form action="form.html">
    <fieldset>
        <p>Escoja su rango de edad</p>
        <select name="edad" id="edad">
            <!-- <optgroup></optgroup> se usa para envolver grupos de opciones. Con el atributo label="" se indica un título-->
            <optgroup label="Niños y jovenes">
                <!-- <option></option> 
                Puede recibir los atributos booleanos
                selected
                disabled
                -->
                <option value="">Menos de 10</option>
                <option value="">Entre 11 y 20</option>
            </optgroup>
            <optgroup label="Adultos">
                <option value="">Entre 21 y 30</option>
                <option value="">Más de 30</option>
            </optgroup>
        </select>
    </fieldset>
</form>
```

> **NOTA**: Puede recibir los atributos booleanos `selected` o `disabled`.
> **NOTA**: El atributo `multiple` (boolean) permite escoger múltiples opciones (presionando CTRL) y cambia el formato de lista a caja. Con el atributo size se puede definir cuantas lineas de alto tendrá esta caja.

---------------------------------------------------------------------------

[Volver al inicio](#-Formularios)

### TEXTAREA
---------------------------------------------------------------------------

Dibuja un area de varias columnas y filas para escribir texto.

<form action="form.html">
    <label for="textarea">Dejenos una sugerencia</label><br>
    <textarea name="sugerencia" id="textarea" cols="50" rows="5" placeholder="Deje una sugerencia"></textarea>
</form>

```html
<form action="form.html">
    <label for="textarea">Dejenos una sugerencia</label><br>
    <textarea name="sugerencia" id="textarea" cols="50" rows="5" placeholder="Deje una sugerencia"></textarea>
</form>
```

[Volver al inicio](#-Formularios)

### SUBMIT
---------------------------------------------------------------------------

El input `type="submit"` Se usa para enviar el form.

<form action="form.html">
    <input type="submit" value="Enviar formulario">
</form>

```html
<form action="form.html">
    <!-- input type="submit" Se usa para enviar el form -->
    <input type="submit" value="Enviar formulario">
</form>
```

[Volver al inicio](#-Formularios)

## NOVEDADES HTML 5
---------------------------------------------------------------------------

En HTML5 llegan nuevos campos, o mejor dicho, nuevos tipos de input.

Lo más resaltante que nos trae HTML5 para formularios es:
1. Nuevos tipos de input
2. Validación desde el navegador (no al 100%)
3. Nuevos atributos

[Volver al inicio](#-Formularios)

### EMAIL
---------------------------------------------------------------------------

<form action="form.html">
    <div>
        <label for="email">Su correo electrónico</label>
        <input type="email" id="email">
    </div>
</form>

```html
<form action="form.html">
    <div>
        <label for="email">Su correo electrónico</label>
        <input type="email" id="email">
    </div>
</form>
```

[Volver al inicio](#-Formularios)

### PASSWORD
---------------------------------------------------------------------------

<form action="form.html">
    <div>
        <label for="password">Password</label>
        <input type="password" id="password">
    </div>
</form>

```html
<form action="form.html">
    <div>
        <label for="password">Password</label>
        <input type="password" id="password">
    </div>
</form>
```

[Volver al inicio](#-Formularios)

### URL
---------------------------------------------------------------------------

<form action="form.html">
    <div>
        <label for="url">Su página web</label>
        <input type="url" id="url">
    </div>
</form>

```html
<form action="form.html">
    <div>
        <label for="url">Su página web</label>
        <input type="url" id="url">
    </div>
</form>
```

[Volver al inicio](#-Formularios)

### BÚSQUEDA
---------------------------------------------------------------------------

<form action="form.html">
    <div>
        <label for="search">Buscar</label>
        <input type="search" id="buscar">
    </div>
</form>

```html
<form action="form.html">
    <div>
        <label for="search">Buscar</label>
        <input type="search" id="buscar">
    </div>
</form>
```
     
[Volver al inicio](#-Formularios)

### NUMBER
---------------------------------------------------------------------------

Atributos
* `min` (valor minimo)
* `max` (valor maximo)
* `step` (saltos de valores permitidos)

<form action="form.html">
    <h2>Comprar</h2>
    <div>
        <label for="cantidad">Cantidad</label>
        <input 
            type="number" 
            id="cantidad" 
            value="1"
            min="1"
            max="10"
            step="2"
        >
    </div>
</form>

```html
<form action="form.html">
    <h2>Comprar</h2>
    <div>
        <label for="cantidad">Cantidad</label>
        <input 
            type="number" 
            id="cantidad" 
            value="1"
            min="1"
            max="10"
            step="2"
        >
    </div>
</form>
```

[Volver al inicio](#-Formularios)

### TELÉFONO
---------------------------------------------------------------------------

<form action="form.html">
    <label for="tel">Teléfono</label>
    <input type="tel" id="tel">
</form>

```html
<form action="form.html">
    <label for="tel">Teléfono</label>
    <input type="tel" id="tel">
</form>
```

[Volver al inicio](#-Formularios)

### FECHA
---------------------------------------------------------------------------

Este tipo de input dispone de las sigueintes variaciones:
* `type="month"`
* `type="week"`
* `type="time"`
* `type="datatime-local"`

<form action="form.html">
    <label for="fecha">Fecha</label>
    <input type="date" id="fecha">
</form>

```html
<form action="form.html">
    <label for="fecha">Fecha</label>
    <input type="date" id="fecha">
</form>
```

[Volver al inicio](#-Formularios)

### COLOR
---------------------------------------------------------------------------

<form action="form.html">
    <label for="color">Selecciona tu color</label>
    <input type="color" id="color">
</form>

```html
<form action="form.html">
    <label for="color">Selecciona tu color</label>
    <input type="color" id="color">
</form>
```

[Volver al inicio](#-Formularios)

### RANGO
---------------------------------------------------------------------------

<form action="form.html">
    <input 
        type="range" 
        min="0"
        max="100"
        step="10"
    >
    <input type="submit" value="Pagar">
</form>

```html
<form action="form.html">
    <input 
        type="range" 
        min="0"
        max="100"
        step="10"
    >
    <input type="submit" value="Pagar">
</form>
```

[Volver al inicio](#-Formularios)

### AUTOCOMPLETADO
---------------------------------------------------------------------------

Para crear autocompletes en los input `type="text"`.

Dentro de `<datalist></datalist>` se ponen las opciones con la etiqueta `<option value="">`. El valor del atributo `value=""` indica la opcion. Por ultimo, el `id` del datalist debe coincidir con el atributo `list` del input

<form action="form.html">
    <div>
        <label for="lenguajes">Escribe el lenguaje que más dominas</label>
        <input type="text" id="lenguajes" list="lenguajes-opciones">
        <datalist id="lenguajes-opciones">
            <option value="php">
            <option value="html">
            <option value="javascript">
            <option value="css">
        </datalist>
    </div>
</form>

```html
<form action="form.html">
    <div>
        <label for="lenguajes">Escribe el lenguaje que más dominas</label>
        <input type="text" id="lenguajes" list="lenguajes-opciones">
        <datalist id="lenguajes-opciones">
            <option value="php">
            <option value="html">
            <option value="javascript">
            <option value="css">
        </datalist>
    </div>
</form>
```

[Volver al inicio](#-Formularios)

### KEYGEN
---------------------------------------------------------------------------

`keygen` se utiliza para generar claves privadas.

<form action="/action_page.php" method="get">
    Username: <input type="text" name="usr_name">
    Encryption: <keygen name="security">
    <input type="submit">
</form>

```html
<form action="/action_page.php" method="get">
    Username: <input type="text" name="usr_name">
    Encryption: <keygen name="security">
    <input type="submit">
</form>
```

[Volver al inicio](#-Formularios)

### OUTPUT
---------------------------------------------------------------------------

`output` se utiliza para devolver resultados de operaciones JS.

<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
  <input type="range" id="a" value="50">100
  +<input type="number" id="b" value="50">
  =<output name="x" for="a b"></output>
  <input type="submit">
</form>

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
  <input type="range" id="a" value="50">100
  +<input type="number" id="b" value="50">
  =<output name="x" for="a b"></output>
  <input type="submit">
</form>
```

[Volver al inicio](#-Formularios)

## RESUMEN DE ATRIBUTOS
---------------------------------------------------------------------------

**Booleans:**
* `required`        (campo obligatorio)
* `disabled`        (campo desactivo)
* `readonly`        (campo de solo lectura)
* `checked`         (checkbox marcado)
* `selected`        (option de un select este seleccionado)
* `multiple`        (para que un select admita multiples options)
* `autofocus`       (para que un campo este seleccionado por defecto)
* `novalidate`      (para no validar el campo o el form completo)
* `hidden`          (para ocultar un campo)

**Otros atributos**
* `accesskey`       (atajo de teclado para activar un campo, cambia segun el navegador, Chrome alt + accesskey)
* `maxlength`       (longitd maxima permitida en un campo)
* `min`             (valor minimo de un number o un range)
* `max`             (valor maximo)
* `step`            (saltos de valor)
* `tabindex`        (como valor se pasa un numero que indica la posicion del campo al presionar tab)
* `autocomplete`    (recibe valores on|off para indicar si el navegador autompletará el formulario)
* `cols`            (ancho por columnas)
* `rows`            (alto por filas)
* `size`            (alto por filas para los select multiple)
* `for`             (conecta al label con el campo, debe coincidir con el id del campo al que se refiere)
* `placeholder`     (para poner un texto de muestra)
* `type`            (define el tipo de input o button)
* `action`          (indica el destino del formulario)
* `method`          (indica como se envian los datos del formulario)

[Volver al inicio](#-Formularios)