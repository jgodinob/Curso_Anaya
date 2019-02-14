# MicroDatos

Permiten especificar el significado del texto. Usando un set de parámetros especificados en [https://schema.org/](https://schema.org/).
       
Se indican con atributos (son tres):
       
* `itemscope` (indica el contexto, es un atributo booleano o vacío)
* `itemtype` (indica el tipo de schema, extraido desde schema.org)
* `itemprop` (indica el tipo de dato)

```html
<article itemscope itemtype="http://schema.org/Person">
    <img itemprop="image" src="https://www.prodigia.com/sites/default/files/styles/capturas_trabajadores/public/hector_2.png" alt="Hector Franco">
    <h2 itemprop="name">Hector Franco</h2>
    <p itemprop="jobTitle">Director de proyectos. Desarrollador y diseñador web. Docente.</p>
    <p itemprop="email">seo@prodigia.com</p>
    <p itemprop="address">Cabra, Córdoba</p>
</article>

<article>
    <img src="https://www.prodigia.com/sites/default/files/styles/capturas_trabajadores/public/hector_2.png" alt="Hector Franco">
    <h2>Hector Franco</h2>
    <p>Director de proyectos. Desarrollador y diseñador web. Docente.</p>
    <p>seo@prodigia.com</p>
    <p>Cabra, Córdoba</p>
</article>

<article itemscope itemtype="http://schema.org/Book">
    <img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/61HOpyVqSeL._SX260_.jpg" alt="Libro">
    <h2 itemprop="name">Don Quijote de la Mancha</h2>
    <p itemprop="about">La historia de Don Quijote y sus aventuras</p>
    <p itemprop="author">Miguel de Cervantes</p>
    <p itemprop="copyrightYear">1535</p>
</article>

<article>
    <img src="https://images-eu.ssl-images-amazon.com/images/I/61HOpyVqSeL._SX260_.jpg" alt="Libro">
    <h2>Don Quijote de la Mancha</h2>
    <p>La historia de Don Quijote y sus aventuras</p>
    <p>Miguel de Cervantes</p>
    <p>1535</p>
</article>
```

[Volver al inicio](#-MicroDatos)
