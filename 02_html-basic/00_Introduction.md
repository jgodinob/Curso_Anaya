# Introducción

En esta **Introducción** explicaremos que software básico es recomendado para hacer el desarrollo web simple, y la forma de instalarlos correctamente.

[Volver al inicio](#-Introducción)

## ¿QUÉ HERRAMIENTAS USAN LOS PROFESIONALES?

---------------------------------------------------------------------------

* **Un PC**
* **Un editor de texto, para escribir código**.
* **Navegadores web**, para probar el código. 
* **Un editor de gráficos o imágenes**, como GIMP, Paint.NET, o Photoshop, para crear imágenes para tus páginas web.
* **Un sistema de control de versiones**, para administrar archivos en servidores, colaborar en un proyecto con un equipo, compartir código y recursos, y evitar conflictos de edición. Hoy en día Git es el sistema de control de versiones más popular y el servicio de alojamiento de código Github, basado en Git, también es muy popular.
* **Un programa de FTP**, para cargar páginas web en un servidor para el público (Git está reemplazando cada vez más a FTP para ese fin). 
* **Un sistema de automatización**, como Grunt, para realizar tareas repetitivas de forma automática, por ejemplo minimización de código y ejecución de pruebas.
* **Plantillas, bibliotecas, frameworks, etc., para acelerar la escritura de funcionalidad común.**
* **...**

> **IMPORTANTE**: **¿Qué diferencia existe entre *Editores de Texto* e *IDE* (*Entorno de Desarrollo Integrado*)?**

[Volver al inicio](#-Introducción)

## MAYÚSCULAS, MINÚSCULAS Y ESPACIOS

---------------------------------------------------------------------------

Muchas **computadoras**, y particularmente **servidores**, son sensibles a mayúsculas y minúsculas . Por ejemplo, si pones una imagen en tu sitio asi: [sitio-prueba/MiImagen.jpg](./sitio-prueba/MiImagen.jpg), y luego en un archivo diferente tratas de invocarla como [sitio-prueba/miimagen.jpg](./sitio-prueba/miimagen.jpg), ésta no se mostrará.

> **NOTA**: Los **Navegadores**, **servidores Web** y los **lenguajes de programación** no manejan bien los espacios en blanco. <br> Por ejemplo, si usas espacios en el nombre de archivo, algunos sistemas podrían creer que en realidad se trata de dos nombres de archivo. Algunos servidores reemplazan el espacio en los nombres con `"%20"` (**código para el espacio en las URI**s**), rompiendo todos tus enlaces. Es mejor separar las palabras con guiones, en lugar de guiones bajos: [mi-archivo.html](./mi-archivo.html) contra [mi_archivo.html](./mi_archivo.html).

[Volver al inicio](#-Introducción)

## ¿QUÉ ESTRUCTURA DE CARPETAS DEBE TENER NUESTRA WEB?

---------------------------------------------------------------------------

* [index.html](./index.html): Este archivo contendrá generalmente el contenido de tu página web inicial, es decir, el texto y las imágenes que la gente ve cuando accede por primera vez a tu sitio. Usando el editor de texto, crea un nuevo archivo llamado `index.html` y guárdarlo justo dentro de tu carpeta `sitio-prueba`.
* **Carpeta** [images](./images): Esta carpeta almacenará todas las imágenes que vas a usar en tu sitio. Crea una carpeta llamada `images` dentro de tu carpeta sitio-prueba.
* **Carpeta** [styles](./styles): Esta carpeta tendrá todos tus códigos CSS usados para darle estilo a tus contenidos (por ejemplo, establecer el color de tus textos y de fondos). Crea una carpeta llamada styles, dentro de tu carpeta `sitio-prueba`.
* **Carpeta** [scripts](./scripts): Esta carpeta tendrá todos tus códigos JavaScript usados para darle interactividad y funcionalidad a tu sitio (por ejemplo. botones que cargan datos cuando hacen clic). Crea una carpeta llamada `scripts`, dentro de tu carpeta `sitio-prueba`.

[Volver al inicio](#-Introducción)

## PLUGINS VISUAL STUDIO

---------------------------------------------------------------------------

* Spanish Language Pack for Visual Studio Code
* Rainbow Brackets
* MarkdownLint

[Volver al inicio](#-Introducción)

## RECOMENDACIONES

---------------------------------------------------------------------------

* **Autoguardado**, BH >> Archivo >> Guardado Automático

[Volver al inicio](#-Introducción)

## WEBS DE REFERENCIA

---------------------------------------------------------------------------

* [https://caniuse.com/](https://caniuse.com/)
* [https://codepen.io/](https://codepen.io/)
* [https://schema.org/](https://schema.org/)
* [https://www.w3.org/](https://www.w3.org/)
* [https://www.w3schools.com](https://www.w3schools.com)
* [https://www.lipsum.com/](https://www.lipsum.com/)

[Volver al inicio](#-Introducción)