# Eventos

**¿QUÉ SON LOS EVENTOS EN JAVASCRIPT?** Todo lo que ocurre en la aplicación y que el navegador captura.
Ejemplos:
  * Cuando termina de cargar la pagina
  * Cuando salimos de la pagina
  * Cuando se hace click
  * Cuando se hace scroll
  * Cuando se presiona una tecla
  * Cuando se redimensiona la ventana
  * etc.

Todo evento esta asociado a un elemento HTML. Sin embargo, si no se asocia a ningun elemento estaría vinculado al objeto global.

[Volver al inicio](#-Eventos)

## ADDEVENTLISTENER

---------------------------------------------------------------------------

JS tiene el método `addEventListener()` que escucha los eventos que ocurren.

Su sintaxis es la siguiente: `elemento.addEventListener('evento',eventHandler);`

**¿Que es un Event Handler?** Es una función que se ejecuta cuando se dispara un evento.

El siguiente evento está asignado al objeto global

```js
var logClick = function(){
  console.log("hiciste click");
};
addEventListener('click', logClick);
```

```js
addEventListener('click', function(){
  console.log('Hiciste click');
});
```

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="boton">Boton</button>
    <script>
      var boton = document.getElementById('boton');
      boton.addEventListener('click', logClick);
    </script>
  </body>
</html> 
```

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="hora">Dime la hora</button>
    <script>
      // Dar la hora al pulsar el boton hora
      var hora = document.getElementById('hora');
      var dameHora = function(){
        var fecha     = new Date(),
            hora      = fecha.getHours(),
            minutos   = fecha.getMinutes(),
            segundos  = fecha.getSeconds();
        alert("Son las " + hora + ":" + minutos + ":" +segundos);
      };
      hora.addEventListener('click', dameHora);
    </script>
  </body>
</html> 
```

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="hora">Dime la hora</button>
    <script>
      // Obtener el tamaño de la ventana
      window.addEventListener('resize', function(){
        var w = window.innerWidth;
        var h = window.innerHeight;
        console.log("La ventana es de " + w + " x " + h);
      });
    </script>
  </body>
</html> 
```

Resumiendo existen:

* Eventos al cargar la pagina
  * load (del objeto global)
  * DOMContentLoaded (de document)

[Volver al inicio](#-Eventos)

## OBJETO EVENTO

---------------------------------------------------------------------------

Cada vez que se dispara un evento toda la información de este, se almacena en un objeto. Para acceder a ese objeto, basta con pasar un parámetro al **handler**. Este parametro puede tener cualquier nombre pero por lo general se le llama `event` o `e`.

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="boton">Boton</button>
    <script>
      var boton = document.getElementById('boton');

      boton.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        console.log(this);
      });
    </script>
  </body>
</html> 
```


```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      window.addEventListener('mousedown', function(e){
        //console.log(e.which); // saber que boton se pulsó
        if(e.which === 3){
          alert("Esta prohibido el click derecho en esta página");
        }
      });

      window.addEventListener('keyup',function(e){
        console.log(e.which); // saber que tecla se pulsó
      });
    </script>
  </body>
</html> 
```

[Volver al inicio](#-Eventos)

## PROPAGACIÓN Y DEFAULT

---------------------------------------------------------------------------

Cuando se dispara un evento se produce un fenomeno llamado **bubbling**, que consiste en que el mismo evento se dispara en los ancestros en el DOM.

Para evitarlo se usa el método `stopPropagation()` del objeto evento.

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="container">
      <button id="container-button">Estoy dentro del div</button>
    </div>    
    <script>
      var div = document.getElementById('container');
      var boton = document.getElementById('container-button');
      boton.addEventListener('click', function(e){
        console.log("Hiciste click en el boton");
        //e.stopPropagation();
      });
      div.addEventListener('click', function(){
        console.log("Hiciste click en el div");
      });
    </script>
  </body>
</html> 
```

**Comportamiento por defecto del navegador**, Para evitar el comportamiento por defecto se usa el método `preventDefault()` del objeto evento.

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="http://google.es" id="google">Ir a Google</a>
    <script>
      var ed = document.getElementById('google');
      ed.addEventListener('click', function(e){
        console.log("Yendo a la web de Google");
        e.preventDefault();
      });
    </script>
  </body>
</html> 
```

[Volver al inicio](#-Eventos)

## EVENTOS DE MOUSE

---------------------------------------------------------------------------

Eventos del Ratón:
  * `mousedown`, al pulsar cualquier boton (antes de ser soltado)
  * `mouseup`, cuando se suelta cualquier boton
  * `click`, cuando se pulsa el boton izquierdo
  * `dblclick`, cuando se pulsa dos veces el boton izquierdo
  * `mousemove`, cuando se mueve el mouse
  * `mouseenter`, cuando el mouse entra el area del elemento del que se esta escuchando el evento
  * `mouseleave`, cuando el mouse sale del area del elemento del que se esta escuchando el evento

```html
<!DOCTYPE html>
<html>
  <body>
    <style>
      .punto {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: tomato;
        position: absolute;
      }
    </style>
    <script>
      var dibujar = function(e){
        var punto = document.createElement('div');
        punto.classList.add('punto');
        punto.style.left = (e.pageX - 6) + "px";
        punto.style.top = (e.pageY - 6) + "px";
        document.body.appendChild(punto);
      };

      window.addEventListener('mousedown', function(){
        addEventListener('mousemove', dibujar);
        addEventListener('mouseup', function(){
          removeEventListener('mousemove', dibujar);
        });
      });
    </script>
  </body>
</html> 
```

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      // pinta en consola la información siguiente
      window.addEventListener('mousemove', function(e){
        console.log(e.pageX + " " + e.pageY);
      });
    </script>
  </body>
</html> 
```

[Volver al inicio](#-Eventos)

## EVENTOS DE KEYBOARD

---------------------------------------------------------------------------

Eventos del Teclado:
  * `keydown`, Cuando se presiona una tecla (antes de soltarla)
  * `keyup`, Cuando se suelta una tecla
  * `keypress`, Cuando se presiona una tecla que imprime un caracter

**Ejercicio 1:** conocer la tecla pulsada

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      window.addEventListener('keydown', function(e){
        console.log(e.which);
        console.log(e);
        if(e.which === 74) {
          alert("pulsaste la tecla j");
        }
      });
    </script>
  </body>
</html>
```

**Ejercicio 2:** combinaciones de teclas

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      window.addEventListener('keyup', function(e){
        // con la combinacion CTRL + Y
        if(e.ctrlKey && e.which === 89){
          alert("Bienvenido al juego");
        }
      });
    </script>
  </body>
</html>
```

**Ejercicio 3:** keylogger

```html
<!DOCTYPE html>
<html>
  <body>
    <label for="keylogger">Su contraseña: </label>
    <input type="password" id="keylogger">
    <script>
      var keylogger = document.getElementById('keylogger');
      var keylog;
      keylogger.addEventListener('keyup', function(){
        keylog = this.value;
        console.log(keylog);
      });
    </script>
  </body>
</html>
```

[Volver al inicio](#-Eventos)

## EVENTOS DE FORMULARIO

---------------------------------------------------------------------------

Eventos del Formulario:
  * `focus`, cuando se activa un campo (con el mouse o con la tecla Tab) 
  * `blur`, cuando se sale del campo
  * `change`, cuando cambia el valor de un input, textarea o select
  * `submit`, cuando se envia el formulario (se asocia al formulario, no al boton submit)

**Ejercicio 1** detectar la opcion escogida en un select

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="">
      <div>
      <select name="pais" id="pais">
        <option value="Peru">Perú</option>
        <option value="Chile">Chile</option>
        <option value="España">España</option>
      </select>
      </div>
      <input type="submit" value="Enviar">
    </form>
    <script>
      var selectPais = document.getElementById('pais');
      selectPais.addEventListener('change', function(e){
        console.log(e.target);
        console.log(this);
        console.log('Tu pais es ' + this.value);
      });
    </script>
  </body>
</html>
```

**Ejercicio 2:** detectar si se activo un checkbox o radio button

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="">
      <div>
        <input type="checkbox" id="check"> <label for="check">¿Quiere recibir noticias de en su correo?</label>
      </div>
      <input type="submit" value="Enviar">
    </form>
    <script>
      var check = document.getElementById('check');
      check.addEventListener('change', function(e){
        if(e.target.checked) {
          alert("Gracias por suscribirte a nuestro boletin");
        } else {
          alert("Lamentamos tu desicion =(");
        }
      });
    </script>
  </body>
</html>
```

[Volver al inicio](#-Eventos)