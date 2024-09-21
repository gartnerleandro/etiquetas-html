# Etiqueta `<a>`

La etiqueta `<a>` (anchor) crea un hipervínculo a otras páginas web, archivos, ubicaciones dentro de la misma página, direcciones de correo electrónico o cualquier otra URL.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

## Uso

### Diferentes tipos de links

```html
// Link a otra página reemplazando la página actual
<a href="https://www.ejemplo.com">Visita nuestro sitio web</a>

// Link a otra página en una nueva pestaña
<a target="_blank" href="https://www.ejemplo.com">Visita nuestro sitio web</a>

// Link a un elemento de la misma página
<a target="_blank" href="#ID_ELEMENTO">Visita nuestro sitio web</a>

// Link al proveedor de correo electrónico por defecto
<a href="mailto:test@example.com">Envía un email</a>

// Link al proveedor de teléfono por defecto
<a href="tel:666666666">Llama por teléfono</a>
```

### Link a un elemento de la página
```html
<!doctype html>
<html lang="es">
    <body>
         // Link a un elemento de la misma página
         <a target="_blank" href="#capitulo4">Ir al capítulo 4</a>
         <section id="capitulo1">
            <h2>Introducción</h2>
            <p>Este es el contenido de la introducción.</p>
         </section>
         <section id="capitulo2">
            <h2>Capítulo 1</h2>
            <p>Este es el contenido del capítulo 1.</p>
         </section>
         <section id="capitulo3">
            <h2>Capítulo 3</h2>
            <p>Este es el contenido del capítulo 3.</p>
         </section>
         <section id="capitulo4">
            <h2>Capítulo 4</h2>
            <p>Este es el contenido del capítulo 4.</p>
         </section>
    </body>
</html>
```

## Atributos principales

- `href`: Especifica la URL del enlace.
- `target`: Especifica dónde abrir el enlace (por ejemplo, `_blank` para una nueva pestaña).
- `rel`: Especifica la relación entre la página actual y la página enlazada.

## Recomendaciones

- Usa texto descriptivo para los enlaces, evitando frases como "haz clic aquí".
- Si el enlace abre en una nueva pestaña, considera usar `rel="noopener noreferrer"` por razones de seguridad.
- Asegúrate de que los enlaces sean claramente distinguibles del texto normal.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<h1>` con el texto "Mis sitios favoritos".
   - Tres párrafos (`<p>`), cada uno conteniendo un enlace `<a>` a un sitio web diferente.
   - El primer enlace debe abrirse en la misma pestaña.
   - El segundo enlace debe abrirse en una nueva pestaña.
   - El tercer enlace debe ser a una dirección de correo electrónico.

Asegúrate de usar correctamente las etiquetas `<a>` con sus atributos correspondientes.