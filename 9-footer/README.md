# Etiqueta `<footer>`

La etiqueta `<footer>` se utiliza para definir un pie de página para un documento o una sección. Generalmente, contiene información sobre el autor, derechos de autor, enlaces relacionados, o información de contacto.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer

## Uso

```html
<!doctype html>
<html lang="es">
   <body>
      <footer>
         <p>© 2023 Mi Página Web. Todos los derechos reservados.</p>
      </footer>
   </body>
</html>
```

## Recomendaciones

- Utiliza `<footer>` para incluir información que se relaciona con el contenido de la página o sección.
- Puedes incluir elementos como `<p>`, `<a>`, y otros elementos de bloque dentro de un `<footer>`.
- Asegúrate de que el contenido del pie de página sea relevante y útil para los usuarios.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<h1>` con el texto "Bienvenido a mi sitio web".
   - Una sección (`<section>`) con un `<h2>` que contenga el texto "Sobre mí" y un párrafo (`<p>`) que describa quién eres.
   - Una segunda sección (`<section>`) con un `<h2>` que contenga el texto "Mis proyectos" y al menos dos artículos (`<article>`) que describan diferentes proyectos. Cada artículo debe incluir un título con un `<h2>` y un párrafo (`<p>`) que describa el proyecto.
   - Un pie de página (`<footer>`) que contenga un párrafo (`<p>`) con el texto "© 2023 Mi Página Web. Todos los derechos reservados." y una lista desordenada (`<ul>`) con enlaces a "Contacto" (/contacto) y "Política de privacidad" (/politica).

Asegúrate de usar correctamente las etiquetas `<footer>`, `<section>`, `<article>`, `<p>`, y `<ul>`.

> Recuerda poner bien los acentos y el logo "©" para poder superar el test con éxito.