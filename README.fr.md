## Traduction du fichier README

**Langues :**[Anglais](README.md)\|[Chinois simplifié](README.zh-CN.md)\|[Chinois traditionnel](README.zh-TW.md)\|[hindi](README.hi.md)\|[arabe](README.ar.md)\|[Française](README.fr.md)\|[Espagnol](README.es.md)\|[Allemand](README.de.md)\|[japonais](README.ja.md)\|[portugais](README.pt.md)\|[russe](README.ru.md)\|[italien](README.it.md)\|[coréen](README.ko.md)\|[turc](README.tr.md)\|[Néerlandais](README.nl.md)\|[thaïlandais](README.th.md)\|[vietnamien](README.vi.md)\|[polonais](README.pl.md)\|[ukrainien](README.uk.md)\|[grec](README.el.md)

# Bot d'assistance ChatID

Récupérez sans effort les identifiants de discussion avec facilité et commodité ! Ce bot Telegram, construit sur Cloudflare Workers, ne nécessite aucun déploiement de serveur.

**Exemple de robot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Guide de déploiement

### Étape 1 : Créez votre robot Telegram

1.  Aller à**@BotPère**sur Telegram et utilisez le`/newbot`commande pour créer votre bot.
2.  Suivez les invites pour fournir les informations requises.
3.  Une fois créé,**@BotPère**vous enverra le jeton du bot. Ce jeton est essentiel au déploiement : conservez-le pour une utilisation ultérieure.

### Étape 2 : Apprenez à déployer des Cloudflare Workers

1.  Refer to the [Guide de déploiement des travailleurs Cloudflare](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Téléchargez le code source du bot.
3.  Courir`npm run deploy`localement pour déployer votre travailleur.

### Étape 3 : configurer les variables d'environnement requises

Pour exécuter le bot avec succès, deux variables d'environnement doivent être définies :

-   **BOT_TOKEN**
-   **Je t'ai saoulé**

Reportez-vous à la documentation Cloudflare Workers pour[ajout de variables d'environnement](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Détails:

1.  **BOT_TOKEN**: Copiez et collez le jeton reçu de**@BotPère**dans cette variable.
2.  **Je t'ai saoulé**: C'est une valeur que vous définissez vous-même. Il doit répondre aux critères suivants :
    -   1 à 256 caractères.
    -   Caractères autorisés :`A-Z`,`a-z`,`0-9`,`_`, et`-`.
    -   Cela garantit la sécurité du bot.

### Étape 4 : Définir l'URL du Webhook

Accédez au point de terminaison d'API suivant dans votre navigateur pour configurer l'URL du webhook :

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Remplacer les espaces réservés`<token>`,`<url>`, et`<BOT_SECRET_TOKEN>`avec vos valeurs réelles :**

-   `<token>`: Le jeton de votre bot de**@BotPère**.
-   `<url>`: L'URL fournie par Cloudflare après le déploiement de votre travailleur.
-   `<BOT_SECRET_TOKEN>`: La valeur que vous avez définie à l'étape 3, en vous assurant qu'elle correspond exactement.
