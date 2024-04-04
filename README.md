# Don't Laugh Challenge 😄

¡Bienvenido al desafío "Don't Laugh"!

Este proyecto es una aplicación web que te ofrece chistes aleatorios y te permite votar por ellos según tu grado de diversión. ¡Veamos cómo funciona!

## Funcionalidades

- **Obtención de chistes**: Puedes obtener un chiste aleatorio haciendo clic en el botón "More Joke".
- **Votación de chistes**: Después de leer un chiste, puedes votar su puntuación haciendo clic en una de las tres caras disponibles.
- **Seguimiento de votos**: Los votos que realices se registran junto con la fecha y se muestran en la consola del navegador.
- **Información del tiempo**: Se muestra la información del tiempo actual en la esquina superior izquierda de la página.


## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `chistes.html` en tu navegador web.

$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-shop


## Iniciar TypeScript

Si deseas utilizar TypeScript en este proyecto, aquí tienes los pasos para configurarlo:

## Instalar TypeScript

Asegúrate de tener TypeScript instalado globalmente en tu máquina. Si no lo tienes, puedes instalarlo usando npm (Node.js debe estar instalado):

$ npm install -g typescript

css
Copy code

Desvincula tu repositorio del repositorio de IT Academy con el siguiente comando:

$ git remote rm origin


## Configurar TypeScript

1. En la raíz de tu proyecto, crea un archivo de configuración de TypeScript llamado `tsconfig.json`:

$```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es6",
    "strict": true
  }
}

#### Ahora, puedes comenzar a escribir tu código en TypeScript. Los archivos deben tener la extensión .ts.
Compilar TypeScript
Para compilar tu código TypeScript a JavaScript, ejecuta el siguiente comando en la terminal

$ tsc

Este comando compilará todos los archivos TypeScript en la estructura de tu proyecto según la configuración definida en tsconfig.json.

## Ejecutar el Proyecto
Una vez que hayas compilado tu código TypeScript, puedes ejecutar tu proyecto de la misma manera que lo harías con JavaScript. Por ejemplo, si tienes un archivo index.ts que es tu punto de entrada:

$ node index.js

Enlaza tu repositorio con el repositorio que tienes que crear en tu cuenta de GitHub (Explicación: Ahora tu proyecto no está vinculado a ningún repositorio remoto. Para subir tu código, debes enlazar tu proyecto con el nuevo repositorio creado en github.com usando el siguiente comando):

$ git remote add origin <nombre de tu repositorio>

## Contribuir

¡Siéntete libre de contribuir a este proyecto! Puedes abrir un issue para reportar errores o sugerir nuevas funcionalidades. También puedes enviar pull requests con tus propias mejoras.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
