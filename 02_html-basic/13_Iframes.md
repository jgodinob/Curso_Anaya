# Iframes

El elemento HTML `<iframe>` representa un contexto de navegación anidada, el cual permite incorporar otra página HTML en la página actual. 

Cada elemento `<iframe>` tiene su propia historial de sesión y su propio objeto Document. 

El contexto de navegación que incluye el contenido implícito se llama contexto de navegación principal. El contexto de navegación de nivel superior (que no tiene padre) es típicamente la ventana del navegador.

```html
<script type="text/javascript">
  var iframe = window.getElementsByTagName( "iframe" )[ 0 ];
  alert( "Frame title: " + iframe.contentWindow.title );
</script>


<iframe src="page.html" width="300" height="300">
  <p>Your browser does not support iframes.</p>
</iframe>
```

[Volver al inicio](#-Iframes)