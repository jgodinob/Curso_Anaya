# Audio y video
  
[Volver al inicio](#-Audio-y-video)

## EVENTOS

---------------------------------------------------------------------------

* `play`, (cuando se reproduce)
* `pause`, (cuando se pausa)
* `ended`, (cuando termina el video)

[Volver al inicio](#-Audio-y-video)

## MÉTODOS

---------------------------------------------------------------------------

* `play()`
* `pause()`
* `load()`

[Volver al inicio](#-Audio-y-video)

## PROPIEDADES

---------------------------------------------------------------------------

* `currentTime`, tiempo actual de reproduccion
* `duration`, la duracion total del video
* `volume`, nivel de volumen (0 a 1)


```html
<!DOCTYPE html>
<html>
  <body>
    <video src="http://techslides.com/demos/sample-videos/small.webm" controls id="video"></video>
    <script>
      var video = document.getElementById('video');
      video.addEventListener('play', function(){
        console.log("se esta reproduciendo el video");
      });
      video.addEventListener('pause', function(){
        console.log("se ha pausado el video");
      });
      video.addEventListener('ended', function(){
        console.log("el video ha terminado");
      });
    </script>
  </body>
</html>
```

**Ejercicio:** reproductor de video

```html
<!DOCTYPE html>
<html>
  <body>
    <video src="http://techslides.com/demos/sample-videos/small.webm" controls id="video"></video>
    <button id="play">Play</button>
    <div id="time"></div>
    <input type="range" id="volume">
    <script>
      var video = document.getElementById('video');
      var playPause = document.getElementById('play');
      var volume = document.getElementById('volume');
      var time = document.getElementById('time');

      playPause.addEventListener('click', function(){
        console.log('click done');
        if(this.textContent === "Play") {
          video.play();
          this.textContent = "Pause";
        } else {
          video.pause();
          this.textContent = "Play";
        }
      });

      volume.addEventListener('change',function(){
        video.volume = this.value * 0.01;
      });
      var playTime = setInterval(function(){
        // time.textContent = '00:' + Math.floor(video.currentTime);
        time.textContent = video.currentTime;
      },100);
      video.addEventListener('play', playTime);
    </script>
  </body>
</html>
```

[Volver al inicio](#-Audio-y-video)