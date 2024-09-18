# Ejercicios de HTML

Este repositorio contiene una serie de ejercicios para aprender las etiquetas HTML básicas. Cada carpeta representa un ejercicio dedicado a una etiqueta HTML específica.

## Cómo funciona

1. Cada carpeta contiene:
   - Una explicación de la etiqueta HTML.
   - Un ejercicio práctico para realizar.
   - Un archivo de prueba para verificar tu solución.

2. Para completar un ejercicio:
   - Lee la explicación de la etiqueta.
   - Sigue las instrucciones del ejercicio y crea el archivo HTML solicitado.
   - Cuando hayas terminado, ejecuta los tests para comprobar tu solución.

3. Para ejecutar los tests:
   - Abre una terminal.
   - Navega hasta la carpeta del ejercicio. (`cd RUTA_DE_LA_CARPETA`)
   - Ejecuta el comando `npm install` *dentro de la carpeta del ejercicio*.
   - Ejecuta el comando `npm test` *dentro de la carpeta del ejercicio que quieras validar*.
   - Si los tests pasan, ¡has completado el ejercicio correctamente!

### Explicación del repositorio

[![https://www.youtube.com/watch?v=h1F5Rt7H1yU](https://github.com/user-attachments/assets/3bc6380d-d18d-49d3-89c4-bb698c58ca3a)](https://www.youtube.com/watch?v=h1F5Rt7H1yU)

## Visualizar tu HTML

Tienes dos opciones para ver el resultado de tu HTML:

1. Abrir con el navegador:
   - Haz clic derecho sobre el archivo index.html que has creado.
   - Selecciona "Abrir con" y elige tu navegador preferido.

2. Usar Live Preview:
   - Instala la extensión ["Live Preview"](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) en tu editor de código.
   - Esta extensión te permitirá ver los cambios en tiempo real mientras editas tu HTML.

## Prerequisitos

### Windows:

1. Descargar e instalar nvm-windows desde [aquí](https://github.com/coreybutler/nvm-windows/releases)
2. Abrir el terminal (powershell)
3. Ejecutar el comando `nvm install 20.10.0`
4. Ejecutar el comando `nvm use 20.10.0`
5. Comprobar que node está correctamente instalado ejecutando `node -v`
6. Ahora ejecutar el comando `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
7. Comprobar que ponemos ejecutar el comando `npm -v` sin errores

### MacOS:

1. Descargar e instalar nvm desde [aquí](https://github.com/nvm-sh/nvm)
2. Abrir el terminal
3. Ejecutar el comando `nvm install 20.10.0`
4. Ejecutar el comando `nvm use 20.10.0`
5. Comprobar que node está correctamente instalado ejecutando `node -v`
6. Comprobar que ponemos ejecutar el comando `npm -v` sin errores

## Conceptos básicos de HTML

[![https://www.youtube.com/watch?v=J3Fmrh6UybQ](https://i.ytimg.com/vi/J3Fmrh6UybQ/hqdefault.jpg)](https://www.youtube.com/watch?v=J3Fmrh6UybQ)

## Comandos básicos de la terminal

### Moverte entre capetas (directorios)

`cd` + RUTA_DE_LA_CARPETA. Ejemplo:

```bash
cd ejercicio
```

Si el nombre de la carpeta conteiene espacios deberás poner el nombre entre comillas (`" "`)

Ejemplo:

```bash
cd "primer ejercicio"
```

### Ir a la carpeta (directorio) superior

```bash
cd ..
```

> CONSEJO: si presionas el botón TABULADOR (TAB) mientras estás escribiendo un comando o una ruta en la terminal se te autocompletará.


## Soporte

Si necesitas ayuda puedes pedirla en el discord de la comunidad: https://discord.gg/wjawp6eNr3
