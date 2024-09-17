# Scrap-italki

Este proyecto utiliza tecnologías como Puppeteer y Nodemailer para realizar un scrapping en una página web y enviar un correo electrónico con los resultados.

## Dependencias

* `puppeteer`: para realizar el scrapping en la página web
* `nodemailer`: para enviar el correo electrónico con los resultados
* `typescript`: para definir el tipo de datos y realizar la compilación

## Estructura del proyecto

* `src`: carpeta que contiene el código fuente del proyecto
	+ `app.ts`: archivo principal que ejecuta el scrapping y envía el correo electrónico
	+ `scrapper`: carpeta que contiene la lógica de scrapping
		- `scrap_spanish_lang.ts`: archivo que realiza el scrapping en la página web
	+ `email_sender`: carpeta que contiene la lógica de envío de correos electrónicos
		- `email_sender.ts`: archivo que envía el correo electrónico con los resultados
	+ `adapters`: carpeta que contiene adaptadores para configurar el proyecto
		- `config`: carpeta que contiene la configuración del proyecto
			- `envs.ts`: archivo que define las variables de entorno del proyecto
* `package.json`: archivo que define las dependencias y scripts del proyecto

## Funcionamiento

1. El archivo `app.ts` ejecuta la función `main` que realiza el scrapping en la página web utilizando la lógica definida en `scrap_spanish_lang.ts`.
2. La función `main` obtiene los resultados del scrapping y los procesa para enviar un correo electrónico con los resultados.
3. El correo electrónico se envía utilizando la lógica definida en `email_sender.ts`.

## Configuración

Para configurar el proyecto, es necesario definir las variables de entorno en el archivo `envs.ts`. Estas variables incluyen:

* `TRANSPORT_SERVICE`: servicio de transporte de correos electrónicos
* `TRANSPORT_HOST`: host del servicio de transporte de correos electrónicos
* `TRANSPORT_PORT`: puerto del servicio de transporte de correos electrónicos
* `TRANSPORT_SECURE`: protocolo de seguridad del servicio de transporte de correos electrónicos
* `TRANSPORT_AUTH_USER`: usuario de autenticación del servicio de transporte de correos electrónicos
* `TRANSPORT_AUTH_PASS`: contraseña de autenticación del servicio de transporte de correos electrónicos
* `MAIL_OPTIONS_FROM`: dirección de correo electrónico del remitente
* `MAIL_OPTIONS_TO`: dirección de correo electrónico del destinatario
* `SCRAP_URL`: URL de la página web que se va a scrapear
* `USER_AGENT`: agente de usuario para el scrapping

## Ejecución

Para ejecutar el proyecto, es necesario ejecutar el script `start` definido en `package.json`. Esto ejecutará la función `main` que realiza el scrapping y envía el correo electrónico con los resultados.

## Automatización con Crontab

Para automatizar la ejecución del proyecto cada 4 horas, es necesario agregar una tarea en el crontab del sistema Linux. Para hacer esto, sigue los siguientes pasos:

1. Abre la terminal y escribe `crontab -e` para editar el crontab.
2. Agrega la siguiente línea al final del archivo: `0 */4 * * * cd /ruta/al/proyecto && npm start`
3. Guarda y cierra el archivo.

La tarea se ejecutará cada 4 horas, comenzando desde la hora actual. Asegúrate de reemplazar `/ruta/al/proyecto` con la ruta real del proyecto en tu sistema.

Nota: Asegúrate de que el proyecto esté configurado correctamente y que las dependencias estén instaladas antes de agregar la tarea en el crontab.