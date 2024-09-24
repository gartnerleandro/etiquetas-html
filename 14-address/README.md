# Etiqueta `<address>`

La etiqueta `<address>` se utiliza para proporcionar información de contacto sobre el autor de un documento o una sección. Este elemento puede incluir direcciones físicas, números de teléfono, direcciones de correo electrónico, y otros datos de contacto. El uso de la etiqueta `<address>` no solo ayuda a estructurar la información de contacto de manera semántica, sino que también mejora la accesibilidad, ya que los lectores de pantalla y otros dispositivos de asistencia pueden identificar fácilmente la información de contacto y presentarla de manera adecuada a los usuarios.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address

```html
<!doctype html>
<html lang="es">
    <body>
        <header>
            <h1>Mi sitio web</h1>
        </header>
        <main>
            <h2>Contenido principal</h2>
            <p>Este es el contenido principal de la página.</p>
        </main>
        <footer>
            <h2>Contacto</h2>
            <address>
                <p>Juan Pérez</p>
                <p>123 Calle Principal</p>
                <p>Ciudad, Estado, 12345</p>
                <p>Email: <a href="mailto:juan.perez@example.com">juan.perez@example.com</a></p>
                <p>Teléfono: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </address>
            <p>© 2024 Mi Página Web. Todos los derechos reservados.</p>
        </footer>
    </body>
</html>
```

## Recomendaciones

- Utiliza la etiqueta `<address>` para agrupar la información de contacto de manera semántica.
- Asegúrate de que la información de contacto sea clara y fácil de entender.
- Puedes incluir enlaces de correo electrónico y números de teléfono para facilitar el contacto.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<header>` que contenga un `<h1>` con el texto "Bienvenido a mi sitio web".
   - Un `<main>` que contenga un `<h2>` con el texto "Contenido principal" y un párrafo (`<p>`) que describa el contenido principal de la página.
   - Un `<footer>` que contenga un `<h2>` con el texto "Contacto" y un `<address>` que incluya:
     - Un nombre.
     - Una dirección física.
     - Un correo electrónico como un enlace (`<a>`).
     - Un número de teléfono como un enlace (`<a>`).
   - Un párrafo (`<p>`) con el texto "© 2024 Mi Página Web. Todos los derechos reservados."

Asegúrate de usar correctamente las etiquetas `<header>`, `<main>`, `<footer>`, `<h1>`, `<h2>`, `<p>`, `<address>`, y `<a>`.