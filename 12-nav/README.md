# Etiqueta `<nav>`

La etiqueta `<nav>` se utiliza para definir un conjunto de enlaces de navegación en un documento HTML. Generalmente, se utiliza para crear menús de navegación que permiten a los usuarios moverse entre diferentes secciones de un sitio web. La etiqueta `<nav>` puede contener listas de enlaces (`<ul>` y `<li>`) que apuntan a diferentes páginas o secciones dentro de la misma página. Además, se puede utilizar CSS para estilizar el menú de navegación y hacerlo más atractivo visualmente, lo que mejora la experiencia del usuario.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav

## Uso

```html
<!doctype html>
<html lang="es">
    <body>
        <header>
            <h1>Mi sitio web</h1>
            <nav>
                <ul>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#mis-hobbies">Mis hobbies</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2>Contenido principal</h2>
            <p>Este es el contenido principal de la página.</p>
        </main>
        <footer>
            <p>© 2023 Mi Página Web. Todos los derechos reservados.</p>
        </footer>
    </body>
</html>
````

## Recomendaciones

- Utiliza la etiqueta `<nav>` para agrupar los enlaces de navegación de tu sitio web.
- Asegúrate de que los enlaces sean claros y descriptivos para mejorar la usabilidad.
- Puedes estilizar el menú de navegación utilizando CSS para que se ajuste al diseño de tu sitio.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<h1>` con el texto "Bienvenido a mi sitio web".
   - Un `<nav>` que contenga una lista desordenada (`<ul>`) con varios elementos de lista (`<li>`) que incluyan enlaces (`<a>`) a diferentes secciones de la página, como "Sobre mí", "Mis hobbies" y "Contacto".
   - Un `<main>` que contenga:
     - Un `<section>` con el id "sobre-mi" que incluya un `<h2>` con el texto "Sobre mí" y un párrafo (`<p>`) que describa información sobre ti.
     - Un `<section>` con el id "mis-hobbies" que incluya un `<h2>` con el texto "Mis hobbies" y varios párrafos (`<p>`) que describan tus hobbies.
     - Un `<section>` con el id "contacto" que incluya un `<h2>` con el texto "Contacto" y un párrafo (`<p>`) con información de contacto.
   - Un `<footer>` que contenga un párrafo (`<p>`) con el texto "© 2023 Mi Página Web. Todos los derechos reservados."

Asegúrate de usar correctamente las etiquetas `<nav>`, `<ul>`, `<li>`, `<a>`, `<main>`, `<section>`, `<h2>`, `<p>`, y `<footer>`.


> Recuerda poner bien los acentos y el logo "©" para poder superar el test con éxito.
