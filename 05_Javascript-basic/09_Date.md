# Fechas

Para manejar fecha se utiliza el objeto `Date` que debe instanciarse cada vez que se requiera utilizarlo.

```js
(function(){
  "use strict";
  var fecha = new Date();
  var dia = fecha.getDay();
  // console.log(fecha);
  if(dia === 1){
    dia = "lunes";
  }else if (dia === 2){
    dia = "martes";
  }else if (dia === 3){
    dia = "miercoles";
  }else if (dia === 4){
    dia = "jueves";
  }else if (dia === 5){
    dia = "viernes";
  }
  console.log(dia);
})();
```

[Volver al inicio](#-Fechas)

## ESPECIFICAR FECHAS

---------------------------------------------------------------------------

Para especificar fechas se pueden  pasar parámetros en el siguiente orden **año / mes (0 index) / dia / hora / minuto / segundo**

```js
var miNacimiento = new Date(1980,1,4);
console.log(miNacimiento);
```

[Volver al inicio](#-Fechas)

## MÉTODOS PARA TRABAJAR CON FECHAS

---------------------------------------------------------------------------

Metodos para trabajar con fechas
* `.getFullYear()`, año
* `.getDay()`, dia de la semana (0, domingo a 6, sabado)
* `.getDate()`
* `.getMonth()`

```js
var miNacimiento = new Date(2000,11,8);
console.log('Año de nacimiento: ', miNacimiento.getFullYear());
console.log('Mes de nacimiento: ' + miNacimiento.getMonth());
console.log('Día del mes de nacimiento: ', miNacimiento.getDate());
console.log('Día de la semana de nacimiento: ', miNacimiento.getDay());
// Año de nacimiento:  2000
// Mes de nacimiento: 11
// Día del mes de nacimiento:  8
// Día de la semana de nacimiento:  5
```

[Volver al inicio](#-Fechas)