# Etiqueta `<section>`

La etiqueta `<section>` representa una sección genérica de un documento. Se utiliza para agrupar contenido temáticamente relacionado. Cada `<section>` idealmente incluye un encabezado.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section

## Uso

```html
<!doctype html>
<html lang="es">
    <body>
        <section>
            <h2>Introducción</h2>
            <p>Este es el contenido de la introducción.</p>
        </section>
        <section>
            <h2>Capítulo 1</h2>
            <p>Este es el contenido del capítulo 1.</p>
        </section>
    </body>
</html>
```

## Recomendaciones

- Usa `<section>` para agrupar contenido temáticamente relacionado.
- Generalmente, cada `<section>` debe tener un encabezado (h1-h6).
- No uses `<section>` solo como contenedor de estilo; para eso, usa `<div>`.
- Evita anidar `<section>` innecesariamente.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea dos secciones:
   - La primera sección debe tener un `<h2>` con el texto "Sobre mí" y un párrafo con una breve descripción.
   - La segunda sección debe tener un `<h2>` con el texto "Mis habilidades" y tres párrafos, cada uno describiendo una habilidad.

Asegúrate de usar correctamente las etiquetas `<section>`, `<h2>`, y `<p>`.
