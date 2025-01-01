## README-Übersetzung

**Sprachen:**[Englisch](README.md)\|[Vereinfachtes Chinesisch](README.zh-CN.md)\|[Traditionelles Chinesisch](README.zh-TW.md)\|[Hindi](README.hi.md)\|[Araber](README.ar.md)\|[Französisch](README.fr.md)\|[Spanisch](README.es.md)\|[Deutsch](README.de.md)\|[japanisch](README.ja.md)\|[Portugiesisch](README.pt.md)\|[Russisch](README.ru.md)\|[Italienisch](README.it.md)\|[Koreanisch](README.ko.md)\|[Türkisch](README.tr.md)\|[Niederländisch](README.nl.md)\|[Thailändisch](README.th.md)\|[Vietnamesisch](README.vi.md)\|[Polieren](README.pl.md)\|[ukrainisch](README.uk.md)\|[griechisch](README.el.md)

# ChatID Helper Bot

Rufen Sie Chat-IDs mühelos und bequem ab! Dieser auf Cloudflare Workers basierende Telegram-Bot erfordert keine Serverbereitstellung.

**Example Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Bereitstellungshandbuch

### Schritt 1: Erstellen Sie Ihren Telegram-Bot

1.  Gehe zu**@BotFather**auf Telegram und nutzen Sie die`/newbot`Befehl zum Erstellen Ihres Bots.
2.  Befolgen Sie die Anweisungen, um die erforderlichen Informationen bereitzustellen.
3.  Einmal erstellt,**@BotFather**sendet Ihnen den Token des Bots. Dieses Token ist für die Bereitstellung unerlässlich – bewahren Sie es zur späteren Verwendung auf.

### Schritt 2: Erfahren Sie, wie Sie Cloudflare-Worker bereitstellen

1.  Siehe die[Cloudflare Workers-Bereitstellungshandbuch](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Laden Sie den Quellcode des Bots herunter.
3.  Laufen`npm run deploy`lokal, um Ihren Worker bereitzustellen.

### Schritt 3: Erforderliche Umgebungsvariablen konfigurieren

Um den Bot erfolgreich auszuführen, müssen zwei Umgebungsvariablen festgelegt werden:

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**

Weitere Informationen finden Sie in der Cloudflare Workers-Dokumentation[Umgebungsvariablen hinzufügen](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Einzelheiten:

1.  **BOT_TOKEN**: Kopieren Sie das von erhaltene Token und fügen Sie es ein**@BotFather**in diese Variable ein.
2.  **BOT_SECRET_TOKEN**: Dies ist ein Wert, den Sie selbst definieren. Es muss folgende Kriterien erfüllen:
    -   1-256 Zeichen lang.
    -   Erlaubte Zeichen:`A-Z`,`a-z`,`0-9`,`_`, Und`-`.
    -   Dies gewährleistet die Sicherheit des Bots.

### Schritt 4: Legen Sie die Webhook-URL fest

Greifen Sie in Ihrem Browser auf den folgenden API-Endpunkt zu, um die Webhook-URL zu konfigurieren:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Ersetzen Sie die Platzhalter`<token>`,`<url>`, Und`<BOT_SECRET_TOKEN>`mit Ihren tatsächlichen Werten:**

-   `<token>`: Das Token Ihres Bots von**@BotFather**.
-   `<url>`: Die von Cloudflare nach der Bereitstellung Ihres Workers bereitgestellte URL.
-   `<BOT_SECRET_TOKEN>`: Der Wert, den Sie in Schritt 3 definiert haben, um sicherzustellen, dass er genau übereinstimmt.
