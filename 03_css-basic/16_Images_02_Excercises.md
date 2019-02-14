# Imágenes

[Volver al inicio](#-Imágenes)

## EXERCISES

---------------------------------------------------------------------------

1. **Utilice la propiedad `border-radius` para crear imágenes circulares:**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <h2>Rounded Images</h2>
    <p>Use the border-radius property to create circled images:</p>
    <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Paris" width="300" height="300">
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Utilice la propiedad `border` para crear imágenes en miniatura:**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 150px;
      }
    </style>
  </head>
  <body>
    <h2>Thumbnail Images</h2>
    <p>Use the border property to create thumbnail images:</p>
    <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Paris">
  </body>
</html>
```

---------------------------------------------------------------------------

3. **Utilice la propiedad `border` para crear imágenes en miniatura. Envuelva la imagen con un `anchor` para usarla como enlace.**
**Pase el ratón por encima de la imagen y haga clic en ella para ver el efecto.**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 150px;
      }

      img:hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
    </style>
  </head>
  <body>
    <h2>Thumbnail Image as Link</h2>
    <p>Use the border property to create thumbnail images. Wrap an anchor around the image to use it as a link.</p>
    <p>Hover over the image and click on it to see the effect.</p>

    <a target="_blank" href="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg">
      <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Paris">
    </a>
  </body>
</html>
```

---------------------------------------------------------------------------

4. **Las imágenes con capacidad de respuesta se ajustarán automáticamente para ajustarse al tamaño de la pantalla.**
**Cambie el tamaño de la ventana del navegador para ver el efecto:**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        max-width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <h2>Responsive Images</h2>
    <p>Responsive images will automatically adjust to fit the size of the screen.</p>
    <p>Resize the browser window to see the effect:</p>

    <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Cinque Terre" width="1000" height="300">
  </body>
</html>
```

---------------------------------------------------------------------------

5. **Para centrar una imagen, establezca el margen izquierdo y derecho en automático y conviértala en un elemento de bloque.**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    </style>
  </head>
  <body>
    <h2>Center an Image</h2>
    <p>To center an image, set left and right margin to auto, and make it into a block element.</p>

    <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg"  alt="Paris" style="width:50%">
  </body>
</html>
```

---------------------------------------------------------------------------

6. **Imágenes / Tarjetas Polaroid con capacidad de respuesta.**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {margin:25px;}

      div.polaroid {
        width: 80%;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-bottom: 25px;
      }

      div.container {
        text-align: center;
        padding: 10px 20px;
      }
    </style>
  </head>
  <body>
    <h2>Responsive Polaroid Images / Cards</h2>
    <div class="polaroid">
      <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="5 Terre" style="width:100%">
      <div class="container">
      <p>Cinque Terre</p>
      </div>
    </div>
    <div class="polaroid">
      <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Norther Lights" style="width:100%">
      <div class="container">
      <p>Northern Lights</p>
      </div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

7. **La propiedad opacidad especifica la transparencia de un elemento. Cuanto más bajo sea el valor, más transparente será:**
**Imagen con un 50% de opacidad:**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        opacity: 0.5;
        filter: alpha(opacity=50); /* For IE8 and earlier */
      }
    </style>
  </head>
  <body>
    <h1>Image Transparency</h1>
    <p>The opacity property specifies the transparency of an element. The lower the value, the more transparent:</p>

    <p>Image with 50% opacity:</p>
    <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Forest" width="170" height="100">
  </body>
</html>
```

---------------------------------------------------------------------------

8. **Agregar texto a una imagen en la esquina superior izquierda:**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        position: relative;
      }

      .topleft {
        position: absolute;
        top: 8px;
        left: 16px;
        font-size: 18px;
      }

      img { 
        width: 100%;
        height: auto;
        opacity: 0.3;
      }
    </style>
  </head>
  <body>
    <h2>Image Text</h2>
    <p>Add some text to an image in the top left corner:</p>

    <div class="container">
      <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Cinque Terre" width="1000" height="300">
      <div class="topleft">Top Left</div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

9. **Prueba los filtros CSS**
> **NOTA**: La propiedad de filtro no es compatible con Internet Explorer, Edge 12 o Safari 5.1 y versiones anteriores.

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        width: 33%;
        height: auto;
        float: left; 
        max-width: 235px;
      }

      .blur {-webkit-filter: blur(4px);filter: blur(4px);}
      .brightness {-webkit-filter: brightness(250%);filter: brightness(250%);}
      .contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}
      .grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}
      .huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}
      .invert {-webkit-filter: invert(100%);filter: invert(100%);}
      .opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}
      .saturate {-webkit-filter: saturate(7); filter: saturate(7);}
      .sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}
      .shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}
    </style>
  </head>
  <body>
    <p><strong>Note:</strong> The filter property is not supported in Internet Explorer, Edge 12, or Safari 5.1 and earlier.</p>
    <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="blur" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="brightness" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="contrast" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="grayscale" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="huerotate" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="invert" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="opacity" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="saturate" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="sepia" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
    <img class="shadow" src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Pineapple" width="300" height="300">
  </body>
</html>
```

---------------------------------------------------------------------------

10. **Fade in Overlay**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      width: 50%;
    }

    .image {
      display: block;
      width: 100%;
      height: auto;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: #008CBA;
    }

    .container:hover .overlay {
      opacity: 1;
    }

    .text {
      color: white;
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  </style>
  </head>
  <body>
    <h2>Fade in Overlay</h2>
    <div class="container">
      <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Avatar" class="image">
      <div class="overlay">
        <div class="text">Hello World</div>
      </div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

11. **Slide in Overlay from the Top**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      width: 50%;
    }

    .image {
      display: block;
      width: 100%;
      height: auto;
    }

    .overlay {
      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;
      background-color: #008CBA;
      overflow: hidden;
      width: 100%;
      height:0;
      transition: .5s ease;
    }

    .container:hover .overlay {
      bottom: 0;
      height: 100%;
    }

    .text {
      white-space: nowrap; 
      color: white;
      font-size: 20px;
      position: absolute;
      overflow: hidden;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  </style>
  </head>
  <body>
    <h2>Slide in Overlay from the Top</h2>

    <div class="container">
      <img src="https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg" alt="Avatar" class="image">
      <div class="overlay">
        <div class="text">Hello World</div>
      </div>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

12. **Imagen Modal**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #myImg {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }

      #myImg:hover {opacity: 0.7;}

      /* The Modal (background) */
      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
      }

      /* Modal Content (image) */
      .modal-content {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
      }

      /* Caption of Modal Image */
      #caption {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 150px;
      }

      /* Add Animation */
      .modal-content, #caption {  
        -webkit-animation-name: zoom;
        -webkit-animation-duration: 0.6s;
        animation-name: zoom;
        animation-duration: 0.6s;
      }

      @-webkit-keyframes zoom {
        from {-webkit-transform: scale(0)} 
        to {-webkit-transform: scale(1)}
      }

      @keyframes zoom {
        from {transform: scale(0.1)} 
        to {transform: scale(1)}
      }

      /* The Close Button */
      .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
      }

      .close:hover,
      .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
      }

      /* 100% Image Width on Smaller Screens */
      @media only screen and (max-width: 700px){
        .modal-content {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>

    <h2>Image Modal</h2>
    <p>In this example, we use CSS to create a modal (dialog box) that is hidden by default.</p>
    <p>We use JavaScript to trigger the modal and to display the current image inside the modal when it is clicked on. Also note that we use the value from the image's "alt" attribute as an image caption text inside the modal.</p>
    <p>Don't worry if you do not understand the code right away. When you are done with CSS, go to our JavaScript Tutorial to learn more.</p>

    <img id="myImg" src="img_lights.jpg" alt="Northern Lights, Norway" width="300" height="200">

    <!-- The Modal -->
    <div id="myModal" class="modal">
      <span class="close">×</span>
      <img class="modal-content" id="img01">
      <div id="caption"></div>
    </div>

    <script>
      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById('myImg');
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() { 
        modal.style.display = "none";
      }
    </script>

  </body>
</html>
```