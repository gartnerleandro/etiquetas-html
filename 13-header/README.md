# Etiqueta `<header>`

La etiqueta `<header>` se utiliza para definir un encabezado para un documento o una sección. Puede contener elementos como un título (`<h1>`), un subtítulo (`<h2>`), un logotipo, un menú de navegación (`<nav>`), y otros elementos que se consideran parte del encabezado de la página o sección. La etiqueta `<header>` ayuda a estructurar el contenido y mejorar la accesibilidad.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header

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
            <p>© 2024 Mi Página Web. Todos los derechos reservados.</p>
        </footer>
    </body>
</html>
```

## Recomendaciones

- Utiliza la etiqueta `<header>` para agrupar los elementos que forman el encabezado de tu documento o sección.
- Asegúrate de que el contenido dentro de `<header>` sea relevante y útil para los usuarios.
- Puedes incluir un logotipo o un título que represente el sitio web.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<header>` que contenga un `<h1>` con el texto "Bienvenido a mi sitio web".
   - Un `<nav>` que contenga una lista desordenada (`<ul>`) con varios elementos de lista (`<li>`) que incluyan enlaces (`<a>`) a diferentes secciones de la página, como "Sobre mí", "Mis hobbies" y "Contacto".
   - Un `<main>` que contenga un `<h2>` con el texto "Contenido principal" y un párrafo (`<p>`) que describa el contenido principal de la página.
   - Un `<footer>` que contenga un párrafo (`<p>`) con el texto "© 2024 Mi Página Web. Todos los derechos reservados."

Asegúrate de usar correctamente las etiquetas `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`, `<main>`, `<h2>`, `<p>`, y `<footer>`.