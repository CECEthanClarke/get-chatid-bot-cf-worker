## Traduzione README

**Lingue:**[Inglese](README.md)\|[Cinese semplificato](README.zh-CN.md)\|[Cinese tradizionale](README.zh-TW.md)\|[hindi](README.hi.md)\|[arabo](README.ar.md)\|[francese](README.fr.md)\|[spagnolo](README.es.md)\|[tedesco](README.de.md)\|[giapponese](README.ja.md)\|[portoghese](README.pt.md)\|[russo](README.ru.md)\|[Italiano](README.it.md)\|[coreano](README.ko.md)\|[turco](README.tr.md)\|[Olandese](README.nl.md)\|[tailandese](README.th.md)\|[vietnamita](README.vi.md)\|[Polacco](README.pl.md)\|[ucraino](README.uk.md)\|[greco](README.el.md)

# Bot di supporto ChatID

Recupera facilmente gli ID chat con facilità e comodità! Questo bot di Telegram, basato su Cloudflare Workers, non richiede l'implementazione del server.

**Esempio Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guida alla distribuzione

### Passaggio 1: crea il tuo bot Telegram

1.  Vai a**@BotFather**su Telegram e usa il file`/newbot`comando per creare il tuo bot.
2.  Segui le istruzioni per fornire le informazioni richieste.
3.  Una volta creato,**@BotFather**ti invierà il token del bot. Questo token è essenziale per la distribuzione: salvalo per un utilizzo successivo.

### Passaggio 2: impara a distribuire i lavoratori Cloudflare

1.  Fare riferimento al[Guida all'implementazione di Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Scarica il codice sorgente del bot.
3.  Correre`npm run deploy`localmente per distribuire il tuo lavoratore.

### Passaggio 3: configurare le variabili di ambiente richieste

Per eseguire correttamente il bot, è necessario impostare due variabili di ambiente:

-   **BOT_TOKEN**
-   **Ti ho fatto ubriacare**

Fare riferimento alla documentazione di Cloudflare Workers per[aggiunta di variabili d'ambiente](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Dettagli:

1.  **BOT_TOKEN**: copia e incolla il token ricevuto da**@BotFather**in questa variabile.
2.  **Ti ho fatto ubriacare**: Questo è un valore che definisci tu stesso. Deve soddisfare i seguenti criteri:
    -   Lunghezza compresa tra 1 e 256 caratteri.
    -   Caratteri consentiti:`A-Z`,`a-z`,`0-9`,`_`, E`-`.
    -   Ciò garantisce la sicurezza del bot.

### Passaggio 4: imposta l'URL del webhook

Accedi al seguente endpoint API nel tuo browser per configurare l'URL del webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Sostituisci i segnaposto`<token>`,`<url>`, E`<BOT_SECRET_TOKEN>`con i tuoi valori reali:**

-   `<token>`: il token del tuo bot da**@BotFather**.
-   `<url>`: l'URL fornito da Cloudflare dopo aver distribuito il tuo lavoratore.
-   `<BOT_SECRET_TOKEN>`: il valore definito nel passaggio 3, assicurandoti che corrisponda esattamente.
