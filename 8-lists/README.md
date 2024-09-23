# Etiquetas `<ul>`, `<ol>` y `<li>`

Las etiquetas `<ul>` y `<ol>` se utilizan para crear listas en HTML. La etiqueta `<ul>` crea una lista desordenada (con viñetas), mientras que `<ol>` crea una lista ordenada (numerada). Cada elemento de la lista se define con la etiqueta `<li>`.

> Fuente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul

## Uso

### Lista desordenada (`<ul>`)

```html
<ul>
   <li>Elemento 1</li>
   <li>Elemento 2</li>
   <li>Elemento 3</li>
</ul>
```


### Lista ordenada (`<ol>`)

```html
<ol>
   <li>Primer elemento</li>
   <li>Segundo elemento</li>
   <li>Tercer elemento</li>
</ol>
```

## Recomendaciones

- Utiliza `<ul>` para listas donde el orden de los elementos no es importante.
- Utiliza `<ol>` para listas donde el orden de los elementos es significativo.
- Asegúrate de que cada elemento de la lista esté contenido dentro de una etiqueta `<li>`.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz con el atributo `lang="es"`.
3. Incluir las etiquetas `<head>` y `<body>`.
4. Dentro de `<body>`, crea:
   - Un `<h1>` con el texto "Mis frutas favoritas".
   - Una lista desordenada (`<ul>`) con al menos tres elementos de lista (`<li>`) que contengan nombres de frutas.
   - Un `<h2>` con el texto "Pasos para hacer un batido".
   - Una lista ordenada (`<ol>`) con al menos tres pasos en el proceso de hacer un batido.

Asegúrate de usar correctamente las etiquetas `<ul>`, `<ol>`, y `<li>`.
