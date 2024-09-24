# Etiqueta `<img>`

La etiqueta `<img>` se utiliza para incrustar imágenes en un documento HTML. Esta etiqueta es un elemento vacío, lo que significa que no tiene una etiqueta de cierre. Debe incluir al menos el atributo `src`, que especifica la URL de la imagen, el atributo `alt`, que proporciona un texto alternativo para la imagen, y es buena práctica incluir también los atributos `width` y `height` para definir el ancho y alto de la imagen, respectivamente.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img

## Uso

```html
<!doctype html>
<html lang="es">
   <body>
      <h1>Mi imagen favorita</h1>
      <img src="ruta/a/mi-imagen.jpg" alt="Descripción de la imagen" />
   </body>
</html>
```

## Recomendaciones

- Siempre incluye el atributo `alt` para mejorar la accesibilidad y SEO.
- Utiliza imágenes de tamaño adecuado para no afectar el rendimiento de la página.
- Considera el uso de formatos de imagen modernos como [WebP](https://es.wikipedia.org/wiki/WebP) para una mejor compresión.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<h1>` con el texto "Mi imagen favorita".
   - Una etiqueta `<img>` que incluya:
     - Un atributo `src` con la ruta a una imagen (puedes usar una URL de una imagen en línea).
     - Un atributo `alt` con una descripción de la imagen.
     - Un atributo `width` para definir el ancho de la imagen.
     - Un atributo `height` para definir el alto de la imagen.
   - Un `<article>` que contenga:
     - Un `<h2>` con el texto "Descripción de la imagen".
     - Un `<p>` que describa la imagen.
   - Un `<footer>` que contenga:
     - Un `<p>` con el texto "© 2024 Mi Página Web. Todos los derechos reservados.".
     - Una lista desordenada (`<ul>`) con enlaces a "Contacto" (/contacto) y "Política de privacidad" (/politica), utilizando etiquetas `<a>`.

Asegúrate de usar correctamente las etiquetas `<img>`, `<h1>`, `<article>`, `<h2>`, `<p>`, `<footer>`, `<ul>`, y `<a>`.

## Cómo obtener imagen de ejemplo



https://github.com/user-attachments/assets/19c79882-c85a-4b98-9cec-c907557e086d



> Puedes obtener link de imágenes de prueba en https://unsplash.com/es o en https://www.pexels.com/es-es/ 
