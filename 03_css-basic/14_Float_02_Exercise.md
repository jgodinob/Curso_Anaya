# Float

[Volver al inicio](#-Float)

## EXERCISES

---------------------------------------------------------------------------

1. **Deje que la imagen se muestre justo donde aparece en el texto (flotación: ninguna):**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <h1>The float Property</h1>
    <p>In this example, the image will be displayed just where it occurs in the text (float: none;).</p>
    <p><img src="http://app-prod-icarito.s3-us-west-1.amazonaws.com/wp-content/uploads/2010/04/22133200/913285.jpg" alt="Pineapple" style="width:170px;height:170px;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        float: none;
      }
    </style>
  </head>
  <body>
    <h1>The float Property</h1>
    <p>In this example, the image will be displayed just where it occurs in the text (float: none;).</p>
    <p><img src="http://app-prod-icarito.s3-us-west-1.amazonaws.com/wp-content/uploads/2010/04/22133200/913285.jpg" alt="Pineapple" style="width:170px;height:170px;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
  </body>
</html>
```

---------------------------------------------------------------------------

2. **Deje que la primera letra de un párrafo flote a la izquierda y modele la letra:**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <p><span>T</span>his is some text.
        This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        </p>
        <p>In the paragraph above, the first letter of the text is embedded in a span element. The span element has a width that is 0.7 times the size of the current font. The font-size of the span element is 400% (quite large) and the line-height is 80%. The font of the letter in the span will be in "Algerian".</p>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
          span {
            float: left;
            width: 0.7em;
            font-size: 400%;
            font-family: algerian, courier;
            line-height: 80%;
          }
        </style>
    </head>
    <body>
        <p><span>T</span>his is some text.
        This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        </p>
        <p>In the paragraph above, the first letter of the text is embedded in a span element. The span element has a width that is 0.7 times the size of the current font. The font-size of the span element is 400% (quite large) and the line-height is 80%. The font of the letter in the span will be in "Algerian".</p>
    </body>
</html>
```

---------------------------------------------------------------------------

3. **Utilice `float` con una lista de hipervínculos para crear un menú horizontal:**

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
    <head>
                <style>
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }

          li {
            float: left;
          }

          li a {
            display: inline-block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }

          li a:hover {
            background-color: #111;
          }
        </style>
    </head>
    <body>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </body>
</html>
```

---------------------------------------------------------------------------

4. **Utilice `float` para crear una página de inicio con un encabezado, pie de página, contenido izquierdo y contenido principal:**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Chania</h1>
    </div>
    <div class="clearfix">
      <div class="column menu">
        <ul>
          <li>The Flight</li>
          <li>The City</li>
          <li>The Island</li>
          <li>The Food</li>
        </ul>
      </div>
      <div class="column content">
        <h1>The City</h1>
        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
        <p>You will learn more about web layout and responsive web pages in a later chapter.</p>
      </div>
    </div>
    <div class="footer">
      <p>Footer Text</p>
    </div>
  </body>
</html>
```

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    * {
      box-sizing: border-box;
    }
    .header, .footer {
      background-color: grey;
      color: white;
      padding: 15px;
    }
    .column {
      float: left;
      padding: 15px;
    }
    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
    .menu {
      width: 25%;
    }
    .content {
      width: 75%;
    }
    .menu ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    .menu li {
      padding: 8px;
      margin-bottom: 8px;
      background-color: #33b5e5;
      color: #ffffff;
    }
    .menu li:hover {
      background-color: #0099cc;
    }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Chania</h1>
    </div>
    <div class="clearfix">
      <div class="column menu">
        <ul>
          <li>The Flight</li>
          <li>The City</li>
          <li>The Island</li>
          <li>The Food</li>
        </ul>
      </div>
      <div class="column content">
        <h1>The City</h1>
        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
        <p>You will learn more about web layout and responsive web pages in a later chapter.</p>
      </div>
    </div>
    <div class="footer">
      <p>Footer Text</p>
    </div>
  </body>
</html>
```

---------------------------------------------------------------------------

5. **Si un elemento flotante es más alto que el elemento que lo contiene, se desbordará fuera de su contenedor. Es posible arreglar esto con el "`clearfix hack`":**

**SOLUCIÓN**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        border: 3px solid #4CAF50;
        padding: 5px;
      }

      .img1 {
        float: right;
      }

      .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }

      .img2 {
        float: right;
      }
    </style>
  </head>
  <body>
    <h1>The Clearfix Hack</h1>
    <p>Here, the floating image is taller than the element containing it, so it overflows outside its container:</p>
    <div>
    <img class="img1" src="http://app-prod-icarito.s3-us-west-1.amazonaws.com/wp-content/uploads/2010/04/22133200/913285.jpg" alt="Pineapple" width="170" height="170">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...</div>
    <p style="clear:right">Add the clearfix hack to the containing element, to fix this problem:</p>
    <div class="clearfix">
    <img class="img2" src="http://app-prod-icarito.s3-us-west-1.amazonaws.com/wp-content/uploads/2010/04/22133200/913285.jpg" alt="Pineapple" width="170" height="170">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...</div>
  </body>
</html>
```

[Volver al inicio](#-Float)