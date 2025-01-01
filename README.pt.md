## Tradução LEIA-ME

[Inglês](README.md),[Chinês simplificado](README.zh-CN.md),[Chinês Tradicional](README.zh-TW.md),[hindi](README.hi.md),[árabe](README.ar.md),[Francês](README.fr.md),[Espanhol](README.es.md),[Alemão](README.de.md),[japonês](README.ja.md),[Português](README.pt.md),[russo](README.ru.md),[Italiano](README.it.md)

# Bot auxiliar ChatID

Recupere facilmente IDs de bate-papo com facilidade e conveniência! Este bot do Telegram, desenvolvido com base no Cloudflare Workers, não requer implantação de servidor.

**Exemplo de bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guia de implantação

### Etapa 1: crie seu bot de telegrama

1.  Vá para**@BotFather**no Telegram e use o`/newbot`comando para criar seu bot.
2.  Siga as instruções para fornecer as informações necessárias.
3.  Uma vez criado,**@BotFather**enviará a você o token do bot. Esse token é essencial para implantação – salve-o para uso posterior.

### Etapa 2: Aprenda a implantar trabalhadores da Cloudflare

1.  Consulte o[Guia de implantação do Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Baixe o código-fonte do bot.
3.  Correr`npm run deploy`localmente para implantar seu trabalhador.

### Etapa 3: configurar variáveis ​​de ambiente necessárias

Para executar o bot com sucesso, duas variáveis ​​de ambiente devem ser definidas:

-   **BOT_TOKEN**
-   **Eu te deixei bêbado**

Consulte a documentação do Cloudflare Workers para[adicionando variáveis ​​de ambiente](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Detalhes:

1.  **BOT_TOKEN**: Copie e cole o token recebido de**@BotFather**nesta variável.
2.  **Eu te deixei bêbado**: Este é um valor que você mesmo define. Deve atender aos seguintes critérios:
    -   1-256 caracteres de comprimento.
    -   Caracteres permitidos:`A-Z`,`a-z`,`0-9`,`_`, e`-`.
    -   Isso garante a segurança do bot.

### Etapa 4: definir o URL do webhook

Acesse o seguinte endpoint de API em seu navegador para configurar o URL do webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Substitua os espaços reservados`<token>`,`<url>`, e`<BOT_SECRET_TOKEN>`com seus valores reais:**

-   `<token>`: o token do seu bot de**@BotFather**.
-   `<url>`: o URL fornecido pela Cloudflare após a implantação do seu trabalhador.
-   `<BOT_SECRET_TOKEN>`: O valor que você definiu na Etapa 3, garantindo que corresponda exatamente.
