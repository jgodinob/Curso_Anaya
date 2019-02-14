# Audio y Vídeo

[Volver al inicio](#-Audio-y-Vídeo)

## VÍDEO
--------------------------------------------------------------------------- 

**Resolución de video:**
* 480p (854w)   - SD
* 720p (1280w)  - HD
* 1080p (1920w) - Full HD
* 2k            - 2 * Full HD
* 4k            - 4 * Full HD

**Frame Rate (cuadros por segundo fps)**
* Estándar:       30fps
* Formato cine:   25fps

**Formatos de video:**
* .mp4 (soportado por todos los navegadores)

**Codecs (codificador/decodificador):**
* theora/vorbis   (ogg)
* h264            (mp4)
* vp8             (webm)

> **NOTA**: Hace años hubo una guerra de codecs (Mozilla vs Google)

En los inicios de HTML5 era necesario indicar varios formatos de audio y video porque los navegadores entendian solo algunos de ellos.

Esto se hacia con el elemento `<source src="">` dentro de los elementos `<video></video>` o `<audio></audio>`.

<video>
    <source src="./Examples/11_Media/video.mp4" type="video/mp4">
    <source src="./Examples/11_Media/video.ogg" type="video/ogg">
    <source src="./Examples/11_Media/video.mpg" type="video/mpg">
    <source src="./Examples/11_Media/video.webm" type="video/webm">
    <p>Tu navegador no soporta video HTML5</p>
</video>

```html
<video>
    <source src="./Examples/11_Media/video.mp4" type="video/mp4">
    <source src="./Examples/11_Media/video.ogg" type="video/ogg">
    <source src="./Examples/11_Media/video.mpg" type="video/mpg">
    <source src="./Examples/11_Media/video.webm" type="video/webm">
    <p>Tu navegador no soporta video HTML5</p>
</video>
```

Esto sigue siendo válido hoy en día. Sin embargo, los formatos mp3 y mp4 son completamente soportados por todos los navegadores. Por lo cual, bastaría una sintaxis más sencilla:

<video src="./Examples/11_Media/video.mp4"></video>
<audio src="./Examples/11_Media/audio.mp3"></audio>

```html
<video src="./Examples/11_Media/video.mp4"></video>
<audio src="./Examples/11_Media/audio.mp3"></audio>
```

[Volver al inicio](#-Audio-y-Vídeo)

### ATRIBUTOS
---------------------------------------------------------------------------

* `controls`    (boolean)
* `autoplay`    (boolean)
* `loop`        (boolean)
* `muted`       (boolean)
* `poster`      (string)

Ejemplo Vídeo con pantalla inicial:

<section>
    <h2>Video</h2>
    <!-- Atributos
        controls    (boolean)
        autoplay    (boolean)
        loop        (boolean)
        muted       (boolean)
        poster      (string)
        -->
    <video src="video.mp4" id="video"></video>
    <div>
        <button onclick="reproducir()">Play</button>
        <button onclick="pausar()">Pause</button>
    </div>
</section>
<script>
    var v = document.getElementById('video');
    v.controls = false;
    v.autoplay = false;
    v.poster = "poster.png";
    function reproducir(){
        v.play();
    }
    function pausar(){
        v.pause();
    }
    // API -> Aplication Programing Interface
</script>

```html
<section>
    <h2>Video</h2>
    <!-- Atributos
        controls    (boolean)
        autoplay    (boolean)
        loop        (boolean)
        muted       (boolean)
        poster      (string)
        -->
    <video src="video.mp4" id="video"></video>
    <div>
        <button onclick="reproducir()">Play</button>
        <button onclick="pausar()">Pause</button>
    </div>
</section>
<script>
    var v = document.getElementById('video');
    v.controls = false;
    v.autoplay = false;
    v.poster = "poster.png";
    function reproducir(){
        v.play();
    }
    function pausar(){
        v.pause();
    }
    // API -> Aplication Programing Interface
</script>
```

[Volver al inicio](#-Audio-y-Vídeo)

## AUDIO
---------------------------------------------------------------------------

El **Audio** y **video** comparten casi todos los atributos y propiedades de la API.

**Formatos de audio:**
* .mp3 (soportado por todos los navegadores)

<audio>
    <source src="./Examples/11_Media/audio.mp3" type="audio/mp3">
    <source src="./Examples/11_Media/audio.wav" type="audio/wav">
    <source src="./Examples/11_Media/audio.aac" type="audio/aac">
    <p>Tu navegador no soporta audio HTML5</p>
</audio>

```html
<audio>
    <source src="./Examples/11_Media/audio.mp3" type="audio/mp3">
    <source src="./Examples/11_Media/audio.wav" type="audio/wav">
    <source src="./Examples/11_Media/audio.aac" type="audio/aac">
    <p>Tu navegador no soporta audio HTML5</p>
</audio>
```

[Volver al inicio](#-Audio-y-Vídeo)

### ATRIBUTOS
---------------------------------------------------------------------------

* `controls` (muestra los controles)
* `loop`
* `autoplay`

<section>
    <h2>Audio</h2>
    <audio src="./Examples/11_Media/audio.mp3" controls></audio>
</section>

```html
<section>
    <h2>Audio</h2>
    <audio src="./Examples/11_Media/audio.mp3" controls></audio>
</section>
```