# BOM

El BOM es el modelo de objetos del **navegador**

> **NOTA**: Todos los objetos del **BOM** parten de `Window`

* `window`
* `window.location`
* `window.navigator`
* `window.screen`
* `window.history`

[Volver al inicio](#-BOM)

## WINDOW

---------------------------------------------------------------------------

[Volver al inicio](#-BOM)

### PROPIEDADES

---------------------------------------------------------------------------

* `.innerWidth`   -> devuelve al ancho del viewport
* `.innerHeight`  -> devuelve el alto del viewport
* `.outerWidth`   -> devuelve el ancho del navegador
* `.outerHeight`  -> devuelve el alto del navegador
* `.pageXOffset`  -> scroll en el eje X
* `.pageYOffset`  -> scroll en el eje Y
* `.screenX` (`.screenLeft`)  -> indican la posicion de la ventana del navegador 
* `.screenY` (`.screenTop`)  -> indican la posicion de la ventana del navegador

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Click the button to display this frame's height and width.</p>
    <button onclick="myFunction()">Try it</button>
    <p><strong>Note:</strong> The innerWidth and innerHeight properties are not supported in IE8 and earlier.</p>
    <p id="demo"></p>
    <script>
      function myFunction() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        document.getElementById("demo").innerHTML = "Width: " + w + "<br>Height: " + h;
      }
    </script>
  </body>
</html>
```

Permiten obtener información:
* `.status`     -> mensaje en la barra de estado
* `.statusbar`  -> la barra de estado

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Look at the text in the statusbar.</p>
    <p><b>Note:</b> This property does not work in default configuration of IE, Firefox, Chrome, Safari or Opera 15+.</p>
    <script>
      window.status = "Some text in the status bar!!";
    </script>
  </body>
</html>
```

[Volver al inicio](#-BOM)

### MÉTODOS

---------------------------------------------------------------------------

* `alert('string')`   -> muestra un mensaje
* `prompt('string')`  -> pide información al usuario y la devuelve
* `confirm('string')` -> hace una consulta al usuario y devuelve un boolean

**Otros métodos**

* `open('url')` -> abre una nueva ventana
* `close()`     -> cierra una ventana
* `moveTo()`    -> mover la ventana
* `resizeTo()`  -> redimensiona la ventana
* `scrollTo(x,y)`  -> mueve el scroll a las coordenadas indicadas
* `scrollBy(x,y)`  -> mueve el scroll a partir de su posicion actual
* `print()`

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      var usuario = prompt('Escribe tu nombre');
      var usuarioEl = document.createElement('div');
      usuarioEl.textContent = 'Bienvenido ' + usuario;
      document.body.appendChild(usuarioEl);
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="boton">Click aquí </button>
    <script>
      var boton = document.getElementById('boton');
      boton.addEventListener('click',function(){
        var myWindow = open('http://www.google.es');
      });
    </script>
  </body>
</html>
```

[Volver al inicio](#-BOM)

## NAVIGATOR

---------------------------------------------------------------------------

* Contiene información sobre el navegador 
* Este objeto contiene al objeto `geolocation`
* No hay estándares definidos sobre la informacion que devuelve cada navegador.

> **NOTA**: Dentro del objeto navigator está el objeto `geolocation` que permite la geolocalización.

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      //si el navegador es chrome escribe el mensaje
      (function(){
        if(window.chrome !== undefined){
          alert("Estas usando Chrome")
        }
      })();
    </script>
  </body>
</html>
```

> **TIP**: Podemos saver el navegador así: [http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser](http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser)

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      (function(){
            if(window.chrome !== undefined){    alert("Estas usando Chrome")
            }else if (typeof InstallTrigger!==undefined){    alert("Estas usando Chrome")
            }
      })();
    </script>
  </body>
</html>
```

[Volver al inicio](#-BOM)

## LOCATION

---------------------------------------------------------------------------

Location da información sobre la URL, y devuelve o siguiente

* `.href`   -> url completa
* `.hash`   -> devuelve el hash
* `.host`   -> devuelve la info del host
* `.protocol` -> devuelve el protocolo
* `.port`    -> devuelve el puerto


```js
location.href 			  //"muestra el href"
location.pathname		  //"devuelve el path"
location.origin			  //"devuelve el origen de la url"
location.protocol    	//"http:"
location.host			    //"devuelve el host"
location.hostname		  // devuelve el hostname
location.hash			  //"parrafo" //devuelve los id
location.href="http://google.com"	// redirige a la ubicación
```

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      setTimeout (function(){
        location.href="http://google.com";
      },5000)
      // me devuelve a esa url en 5000 milisegundos
    </script>
  </body>
</html>
```

[Volver al inicio](#-BOM)

### MÉTODOS

---------------------------------------------------------------------------

* `.assign('url')`  -> redirecciona hacia la URL
* `.replace('url')` -> redirecciona limpiando el historial

```html
<!DOCTYPE html>
<html>
  <body>
    <select name="navigate" id="navigate">
      <option value="index">Index</option>
      <option value="about">About</option>
    </select>    
    <script>
      (function(){
        var navigate = document.getElementById('navigate');
        navigate.addEventListener('change',function(){
          var destino = this.value + '.html';
          location.href += destino;
        });
      })();
    </script>
  </body>
</html>
```

[Volver al inicio](#-BOM)

## HISTORY

---------------------------------------------------------------------------

Contiene el historial de la pestaña activa 
> **NOTA**: Por seguridad no se puede acceder las URL del historial

[Volver al inicio](#-BOM)

### MÉTODOS

---------------------------------------------------------------------------

* `.back()`     -> Retroceder
* `.forward()`  -> Avanzar
* `.go(numero)` -> Moverse en el historial segun el parametro

```html
<!DOCTYPE html>
<html>
  <body>
    <select name="navigate" id="navigate">
      <option value="index">Index</option>
      <option value="about">About</option>
    </select>    
    <script>
      history.back()
    </script>
  </body>
</html>
```

[Volver al inicio](#-BOM)

## TIMERS

---------------------------------------------------------------------------

Existen dos métodos del objeto **Window** para controlar la ejecución del código según el tiempo:

`setTimeOut(funcion,delay)`
  * `funcion` -> una función que contiene el código que se ejecutará.
  * `delay`   -> el tiempo en ms que pasará para que se ejecute la función

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Click "Try it". Wait 3 seconds, and the page will alert "Hello".</p>
    <button onclick="setTimeout(myFunction, 3000);">Try it</button>
    <script>
    function myFunction() {
      alert('Hello');
    }
    </script>
  </body>
</html>
```

`setInterval(funcion,interval)`
  * `funcion` -> una función que contiene el código que se ejecutará.
  * `interval` -> el tiempo que pasa para que la funcion se ejecute nuevamente

```html
<!DOCTYPE html>
<html>
  <body>
    <p>A script on this page starts this clock:</p>
    <p id="demo"></p>
    <script>
    var myVar = setInterval(myTimer, 1000);
    function myTimer() {
      var d = new Date();
      document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }
    </script>
  </body>
</html>
```

[Volver al inicio](#-BOM)