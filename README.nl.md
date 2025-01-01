## README-vertaling

**Talen:**[Engels](README.md)\|[Vereenvoudigd Chinees](README.zh-CN.md)\|[Traditioneel Chinees](README.zh-TW.md)\|[Hindi](README.hi.md)\|[Arabisch](README.ar.md) \| [Frans](README.fr.md)\|[Spaans](README.es.md)\|[Duits](README.de.md)\|[Japanse](README.ja.md)\|[Portugees](README.pt.md)\|[Russisch](README.ru.md)\|[Italiaans](README.it.md)\|[Koreaans](README.ko.md)\|[Turks](README.tr.md)\|[Nederlands](README.nl.md)\|[Thais](README.th.md)\|[Vietnamees](README.vi.md)\|[Pools](README.pl.md)\|[Oekraïens](README.uk.md)\|[Grieks](README.el.md)

# ChatID-helperbot

Haal moeiteloos chat-ID's op met gemak! Deze Telegram-bot, gebouwd op Cloudflare Workers, vereist geen serverimplementatie.

**Voorbeeld Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Implementatiehandleiding

### Stap 1: Maak uw Telegram-bot

1.  Ga naar**@BotFather**op Telegram en gebruik de`/newbot`opdracht om uw bot te maken.
2.  Volg de aanwijzingen om de vereiste informatie op te geven.
3.  Eenmaal gemaakt,**@BotFather**zal u het token van de bot sturen. Dit token is essentieel voor de implementatie; bewaar het voor later gebruik.

### Stap 2: Leer hoe u Cloudflare-werknemers kunt inzetten

1.  Raadpleeg de[Implementatiehandleiding voor Cloudflare-werknemers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Download de broncode van de bot.
3.  Loop`npm run deploy`lokaal om uw werknemer in te zetten.

### Step 3: Configure Required Environment Variables

Om de bot succesvol te laten werken, moeten twee omgevingsvariabelen worden ingesteld:

-   **BOT_TOKEN**
-   **Ik heb je dronken gemaakt**

Raadpleeg de Cloudflare Workers-documentatie voor[omgevingsvariabelen toevoegen](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Details:

1.  **BOT_TOKEN**: Kopieer en plak het token dat is ontvangen van**@BotFather**in deze variabele.
2.  **Ik heb je dronken gemaakt**: Dit is een waarde die u zelf definieert. Het moet aan de volgende criteria voldoen:
    -   1-256 tekens lang.
    -   Toegestane tekens:`A-Z`,`a-z`,`0-9`,`_`, En`-`.
    -   Dit garandeert de veiligheid van de bot.

### Stap 4: Stel de webhook-URL in

Ga in uw browser naar het volgende API-eindpunt om de webhook-URL te configureren:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Vervang de tijdelijke aanduidingen`<token>`,`<url>`, En`<BOT_SECRET_TOKEN>`met uw werkelijke waarden:**

-   `<token>`: Het token van uw bot**@BotFather**.
-   `<url>`: De URL die door Cloudflare wordt verstrekt nadat uw werker is geïmplementeerd.
-   `<BOT_SECRET_TOKEN>`: De waarde die u in stap 3 hebt gedefinieerd, waarbij u ervoor zorgt dat deze exact overeenkomt.
