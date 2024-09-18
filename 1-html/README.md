# Etiqueta `<html>`

Esta etiqueta representa la raíz (el elemento más externo) de un documento HTML, por ese motivo se le llama también elemento `root` o `raíz`. Todas las demás etiquetas deberán estar dentro de la etiqueta `<html>`.

## Uso

```html
<!doctype html>
<html lang="es">

</html>  
```

> No olvides indicar siempre el `doctype` en tu archivo html, esto ayudará a los navegadores a saber cómo interpretar tu HTML

## Recomendaciones

El atributo `lang` que tiene la etiqueta `<html>` en el ejemplo no es obligatoria, pero se recomienda poner para la accesibilidad de la página. El valor del atributo tiene que ser un valor [válido](https://datatracker.ietf.org/doc/html/rfc5646). Este atributo ayudará a los lectores de pantalla a determinar el lenguaje correcto con el que tienen que interpretar la página.

## Ejercicio

Crea un archivo HTML llamado `index.html` dentro de la carpeta `ejercicio` con la estructura básica de un documento HTML. Asegúrate de:

1. Incluir la declaración del tipo de documento (`doctype`).
2. Usar la etiqueta `<html>` como elemento raíz.
3. Agregar el atributo `lang` a la etiqueta `<html>` con el valor `"es"` para indicar que el idioma de la página es español.