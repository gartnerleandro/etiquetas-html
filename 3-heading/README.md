# Etiqueta `<h1> <h2> <h3> <h4> <h5> <h6>`

Las etiquetas desde `<h1>` hasta `<h6>` representan seis niveles de encabezados (títulos). La etiqueta `<h1>` es el título más importante (primer nivel) y el `<h6>` es el menos importante (último nivel de anidamiento). Un elemento de encabezado describe brevemente el tema de la sección que presenta. Este elemento puede tener cualquier [atributo global](https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes).

> Fuente: https://developer.mozilla.org/es/docs/Web/HTML/Element/Heading_Elements

## Uso

```html
<!doctype html>
<html lang="es">
    <body>
        <h1>Título principal</h1>
        <h2>subtítulo</h2>
        <h3>título de sección</h3>
        <h4>título menos importante que el anterior</h4>
        <h5>título menos importante que el anterior</h5>
        <h6>título menos importante que el anterior</h6>
        ¡Hola Mundo!
    </body>
</html>  
```

## Recomendaciones

Nunca omitas un nivel de encabezado, por ejemplo, no empieces por el `<h2>`, el primero siempre tiene que ser un `<h1>` después un `<h2>` y así sucesivamente.

Utiliza únicamente un elemento `<h1>` por página.

No utilices un nivel de encabezado inferior únicamente para reducir el tamaño del texto, eso se puede cambiar con CSS.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir la etiqueta `<body>` dentro de `<html>`.
4. Dentro de `<body>`, añade:
   - Un `<h1>` con el texto "Mi página web".
   - Un `<h2>` con el texto "Sobre mí".
   - Un `<h3>` con el texto "Mis hobbies".
   - Un `<h4>` con el texto "Deportes".
   - Un `<h5>` con el texto "Fútbol".
   - Un `<h6>` con el texto "Equipos favoritos".

Asegúrate de seguir el orden correcto de los encabezados y no omitir ningún nivel.

> ¡Ojo! Asegúrate de poner bien los acentos en los textos para superar el test.