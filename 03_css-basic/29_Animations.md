# Animaciones

> **NOTA**: Podemos acceder a [https://caniuse.com/](https://caniuse.com/) para comprobar la compatibilidad de navegadores.

Son animaciones que no requieren un evento o un cambio de estado para ejecutarse.

<style>
@keyframes brillar {
  from {
    box-shadow: 0 0 1px 0 #fff;
  }
  to {
    box-shadow: 0 0 8px 8px rgba(255,255,255,.3);
  }
}
@keyframes girar {
  from {
    transform: rotate(0);
    /*background-color: red;*/
  }

  to {
    transform: rotate(360deg);
    /*background-color: green;*/
    border-color: blue red green orange;
  }
}
@keyframes girar-imagen{
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(180deg);
  }
}
</style>

---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<div class="disc" style="width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 20px solid;
  border-color: steelblue pink seagreen tomato;
  animation: girar 2s infinite linear;"></div>
<div class="star" style="  width: 3px;
  height: 3px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  animation: brillar 1s infinite linear alternate;"></div>
<div class="star" style="  width: 3px;
  height: 3px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  animation: brillar 1s infinite linear alternate;
  left: 10%;
  top: 60%;"></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .disc {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 20px solid;
        border-color: steelblue pink seagreen tomato;
        animation: girar 2s infinite linear;
      }
      .star {
        width: 3px;
        height: 3px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        animation: brillar 1s infinite linear alternate;
      }
      .star:nth-of-type(2){
        left: 10%;
        top: 60%;
      }
       @keyframes brillar {
        from {
            box-shadow: 0 0 1px 0 #fff;
        }
        to {
            box-shadow: 0 0 8px 8px rgba(255,255,255,.3);
        }
      }
      @keyframes girar {
        from {
            transform: rotate(0);
            /*background-color: red;*/
        }
        to {
            transform: rotate(360deg);
            /*background-color: green;*/
            border-color: blue red green orange;
        }
      }
    </style>
  </head>
  <body>
    <div class="disc"></div>
    <div class="star"></div>
    <div class="star"></div>
  </body>
</html>
```

---------------------------------------------------------------------------

Para crear una animacion se requiere 2 pasos básicos:
1. Definir la animacion en el elemento
2. Crear los keyframes

La animacion requiere como minimo el nombre y la duracion.

```css
animation: girar 2s;
```

Se le pueden pasar más valores. Por ejemplo: `infinite` para que nunca se detenga, `alternate` para que se anime de ida y vuelta o `linear` para que la velocidad sea constante.

```css
animation: girar 2s infinite alternate linear;
```
---------------------------------------------------------------------------

**EJEMPLO CÓDIGO**: 

---------------------------------------------------------------------------

<img src="http://lorempixel.com/200/200" alt="" style="animation: girar-imagen 2s infinite alternate linear;">

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        animation: girar-imagen 2s infinite alternate linear;
      }

      @keyframes girar-imagen{
        from {
          transform: rotateY(0);
        }
        to {
          transform: rotateY(180deg);
        }
      }
    </style>
  </head>
  <body>
    <img src="http://lorempixel.com/200/200" alt="">
  </body>
</html>
```

---------------------------------------------------------------------------

Los keyframes determinan los momentos en los que los estilos cambian. Lo más fácil es poner `from {}` y `to{}` Pero también se podrían poner keyframes específicos con porcentajes.

```cs
@keyframes girar {
    0% {
        color: red;
    }
    50% {
        color: green; 
    }
    100% {
        color: blue;
    }
}
```

[Volver al inicio](#-Animaciones)