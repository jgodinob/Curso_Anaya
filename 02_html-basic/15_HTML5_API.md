# HTML5 API

API: Application Programming Interface

Es un conjunto de métodos, propiedades y patrones para desarrollar aplicaciones basadas en otra (u otro lenguaje).

La API de HTML5 se manipula con JavaScript y podría resumirse en tres partes:
1. Elementos HTML, sus métodos, eventos y propiedades
2. El DOM (Document Object Model)
3. El objeto navigator (también llamado BOM - Browser Object Model)

[Volver al inicio](#-HTML5-API)

## GEOLOCALIZACIÓN
--------------------------------------------------------------------------- 

Se realiza a través del objeto **navigator**.

Ejemplo para revisar si existe el objeto **navigator**

```javascript
if(navigator){
  console.log("su navegador soporta el objeto navigator")
} else {
  console.log("su navegador no soporta el objeto navigator")
}
```

El objeto **navigator** tiene el objeto **geolocation**, `navigator.geolocation`.

El objeto **geolocation** tiene tres métodos:

* `.getCurrentPosition()`, posicion actual
* `.watchPosition()`, seguir la posicion
* `.clearWatch()`, detener el `.watchPosition()`

El método `getCurrentPosition()` recibe dos parámetros. El primero en caso de éxito, y el segundo en caso de error

```javascript
navigator.geolocation.getCurrentPosition(exito,error);
function exito() {
  // TODO
}

function error() {
  // TODO
}
```

> **NOTA**: La funcion exito se ejecuta si el navegador consigue obtener la localizacion. Y la función error en el caso contrario.

```javascript
navigator.geolocation.getCurrentPosition(exito,error)
```

```javascript
// buscamos un elemento con id 'button'
var button = document.getElementById('button');
// creamos un evento 'click' sobre el elemento button que ejecute la función 'obtenerPosicion'
button.addEventListener('click', obtenerPosicion);
// Método 'obtenerPosicion()'
function obtenerPosicion(){
    navigator
        .geolocation
        .getCurrentPosition(mostrarPosicion);
}
// Método 'mostrarPosicion(position)'
function mostrarPosicion(position){
    var lati = position.coords.latitude;
    var longi = position.coords.longitude;
    var element = document.getElementById('mapa');
    // Un mapa de Google requiere dos parámetros:
    // 1. El elemento HTML en el cual se dibujará
    // 2. Las opciones, que es un objeto que requiere
    // dos propiedades obligatorias:
    // center:
    // zoom: 
    var options = {
        // Center es un objeto con latitude y longitute
        center: {
            lat: lati,
            lng: longi
        },
        // El zoom de Google Maps va de 1 a 20
        zoom: 16,
        scrollwheel: true,
        mapTypeId: google.maps.MapTypeId.SATELLITE // (ROADMAP)
    }
    var map = new google.maps.Map( element, options);
    var marker = new google.maps.Marker({
        position: options.center,
        map: map,
        title: 'Tu estas aqui'
    });
};
```

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Geolocalización en API HTML5</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>
            #mapa {
                width: 100%;
                height: 450px;
            }
        </style>
    </head>
    <body>
        <h1 id="titulo">Ejemplo de Geolocalizacion</h1>
        <button id="boton">¿Dónde estoy?</button>
        <div id="mapa"></div>
        <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script src="geolocation.js"></script>
    </body>
</html>
```
