# Sprites

Un **sprite** de imágenes es una colección de imágenes puestas en una sola imagen. Una página web con muchas imágenes puede tardar mucho tiempo en cargarse y generar múltiples solicitudes de servidor. El uso de sprites de imágenes reducirá el número de peticiones del servidor y ahorrará ancho de banda.

```css
[class^="social-"] {
  width: 36px;
  height: 36px;
  display: inline-block;
  background: 0 0 / 144px 180px url(img/social1.png);
}
.social-facebook {
  background-position: -72px 0;
}
.social-twitter {
  background-position: 0 -36px;
}
.social-linkedin {
  background-position: -108px -108px;
}
.social-youtube {
  background-position: -108px -144px;
}
.social-instagram {
  background-position: -72px -108px;
}
```

> **NOTA**: El sprite original es de 400x500 y tiene 4 x 5 iconos, por lo que cada icono es de 100x100. Como en nuestro caso cada icono es de 36 x 36, debemos reescalar el fondo a 36x4 (horizontal) y 36x5 (vertical)
> **NOTA**: Ver ejemplo para entender...

[Volver al inicio](#-Sprites)