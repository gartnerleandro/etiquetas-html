# Etiqueta `<main>`

La etiqueta `<main>` se utiliza para encapsular el contenido principal de un documento HTML. Este contenido es único y relevante para el documento, y no debe incluirse en otros elementos como `<header>`, `<footer>`, o `<aside>`. La etiqueta `<main>` ayuda a mejorar la accesibilidad y la estructura del documento.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main

## Uso

```html
<!doctype html>
<html lang="es">
    <body>
        <main>
          <h1>Mi sitio web</h1>
          <h2>Contenido principal</h2>
          <p>Este es el contenido principal de la página.</p>
        </main>
        <footer>
            <p>© 2023 Mi Página Web. Todos los derechos reservados.</p>
        </footer>
    </body>
</html>
`````

## Recomendaciones

- Utiliza `<main>` para el contenido principal de la página, asegurándote de que no haya más de un elemento `<main>` por documento.
- Asegúrate de que el contenido dentro de `<main>` sea relevante y único para la página.
- No incluyas elementos de navegación o de pie de página dentro de `<main>`.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<h1>` que contenga el texto "Bienvenido a mi sitio web".
   - Un `<main>` que contenga un `<h2>` con el texto "Contenido principal" y un párrafo (`<p>`) que describa el contenido principal de la página.
   - Un `<footer>` que contenga un párrafo (`<p>`) con el texto "© 2023 Mi Página Web. Todos los derechos reservados."

Asegúrate de usar correctamente las etiquetas `<main>`, `<h1>`, y `<footer>`.