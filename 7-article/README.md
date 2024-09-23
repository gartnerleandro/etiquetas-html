# Etiqueta `<article>`

La etiqueta `<article>` representa una composición independiente en un documento, página, aplicación o sitio que es destinada a ser distribuida o reutilizada de forma independiente. Un `<article>` puede contener texto, imágenes, videos, etc.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article

## Uso

```html
<!doctype html>
<html lang="es">
   <body>
      <article>
         <h2>Título del artículo</h2>
         <p>Este es el contenido del artículo.</p>
      </article>
   </body>
</html>
```


## Recomendaciones

- Utiliza `<article>` para contenido que puede ser distribuido o reutilizado, como publicaciones de blog, noticias, comentarios, etc.
- Asegúrate de que cada `<article>` tenga un encabezado (`<h1>`, `<h2>`, etc.) que describa su contenido.
- Puedes anidar otros elementos como `<section>`, `<header>`, `<footer>`, etc., dentro de un `<article>`.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<article>` con un `<h2>` que contenga el título "Mi primer artículo".
   - Un párrafo (`<p>`) que describa el contenido del artículo.
   - Un segundo párrafo (`<p>`) que contenga información adicional sobre el artículo.

Asegúrate de usar correctamente las etiquetas `<article>`, `<h2>`, y `<p>`.