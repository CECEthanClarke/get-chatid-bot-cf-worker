## Léame Traducción

**Idiomas:**[Inglés](README.md)\|[Chino simplificado](README.zh-CN.md)\|[chino tradicional](README.zh-TW.md)\|[hindi](README.hi.md)\|[árabe](README.ar.md)\|[Francés](README.fr.md)\|[Español](README.es.md)\|[Alemán](README.de.md)\|[japonés](README.ja.md)\|[portugués](README.pt.md)\|[ruso](README.ru.md)\|[Italiano](README.it.md)\|[coreano](README.ko.md)\|[turco](README.tr.md)\|[Holandés](README.nl.md)\|[tailandés](README.th.md)\|[vietnamita](README.vi.md)\|[Polaco](README.pl.md)\|[ucranio](README.uk.md)\|[Griego](README.el.md)

# Bot auxiliar ChatID

¡Recupere ID de chat sin esfuerzo con facilidad y conveniencia! Este bot de Telegram, construido sobre Cloudflare Workers, no requiere implementación de servidor.

**robot de ejemplo**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guía de implementación

### Paso 1: crea tu bot de Telegram

1.  Ir a**@BotFather**en Telegram y utilizar el`/newbot`Comando para crear tu bot.
2.  Siga las indicaciones para proporcionar la información requerida.
3.  Una vez creado,**@BotFather**le enviará el token del bot. Este token es esencial para la implementación; guárdelo para usarlo más adelante.

### Paso 2: aprenda a implementar trabajadores de Cloudflare

1.  Consulte el[Guía de implementación para trabajadores de Cloudflare](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Descarga el código fuente del bot.
3.  Correr`npm run deploy`localmente para implementar a su trabajador.

### Paso 3: configurar las variables de entorno necesarias

Para ejecutar el bot correctamente, se deben configurar dos variables de entorno:

-   **BOT_TOKEN**
-   **te emborraché**

Consulte la documentación de Cloudflare Workers para[agregando variables de entorno](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Detalles:

1.  **BOT_TOKEN**: Copie y pegue el token recibido de**@BotFather**en esta variable.
2.  **te emborraché**: Este es un valor que usted mismo define. Debe cumplir los siguientes criterios:
    -   1-256 caracteres de longitud.
    -   Caracteres permitidos:`A-Z`,`a-z`,`0-9`,`_`, y`-`.
    -   Esto garantiza la seguridad del bot.

### Paso 4: configurar la URL del webhook

Acceda al siguiente punto final API en su navegador para configurar la URL del webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Reemplazar los marcadores de posición`<token>`,`<url>`, y`<BOT_SECRET_TOKEN>`con sus valores reales:**

-   `<token>`: El token de tu bot de**@BotFather**.
-   `<url>`: La URL proporcionada por Cloudflare después de implementar a su trabajador.
-   `<BOT_SECRET_TOKEN>`: El valor que definiste en el Paso 3, asegurándote de que coincida exactamente.
