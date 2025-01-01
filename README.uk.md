## Переклад README

**мови:**[англійська](README.md)\|[Спрощена китайська](README.zh-CN.md)\|[Традиційна китайська](README.zh-TW.md)\|[Хінді](README.hi.md)\|[араб](README.ar.md)\|[французька](README.fr.md)\|[Іспанська](README.es.md)\|[Німецький](README.de.md)\|[Японський](README.ja.md)\|[португальська](README.pt.md)\|[Українська](README.ru.md)\|[італійська](README.it.md)\|[корейська](README.ko.md)\|[турецька](README.tr.md)\|[голландська](README.nl.md)\|[тайська](README.th.md)\|[в'єтнамська](README.vi.md)\|[польський](README.pl.md)\|[Українська](README.uk.md)\|[грецька](README.el.md)

# Бот-помічник ChatID

Отримайте ідентифікатори чату з легкістю та зручністю! Цей бот Telegram, створений на Cloudflare Workers, не вимагає розгортання сервера.

**Приклад бота**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Посібник із розгортання

### Крок 1: Створіть свого Telegram-бота

1.  Перейти до**@BotFather**у Telegram і використовуйте`/newbot`команда для створення бота.
2.  Дотримуйтесь підказок, щоб надати необхідну інформацію.
3.  Після створення**@BotFather**надішле вам маркер бота. Цей маркер необхідний для розгортання — збережіть його для подальшого використання.

### Крок 2. Навчіться розгортати Cloudflare Workers

1.  Зверніться до[Посібник із розгортання Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Завантажте вихідний код бота.
3.  бігти`npm run deploy`локально, щоб розгорнути свого працівника.

### Крок 3: Налаштуйте необхідні змінні середовища

Для успішного запуску бота необхідно встановити дві змінні середовища:

-   **BOT_TOKEN**
-   **Я тебе напив**

Зверніться до документації Cloudflare Workers для[додавання змінних середовища](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Подробиці:

1.  **BOT_TOKEN**: Скопіюйте та вставте маркер, отриманий від**@BotFather**у цю змінну.
2.  **Я тебе напив**: це цінність, яку ви визначаєте самі. Він повинен відповідати наступним критеріям:
    -   Довжина 1-256 символів.
    -   Дозволені символи:`A-Z`,`a-z`,`0-9`,`_`, і`-`.
    -   Це гарантує безпеку бота.

### Крок 4. Встановіть URL-адресу Webhook

Отримайте доступ до такої кінцевої точки API у своєму браузері, щоб налаштувати URL-адресу веб-перехоплення:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Замініть заповнювачі`<token>`,`<url>`, і`<BOT_SECRET_TOKEN>`з вашими фактичними значеннями:**

-   `<token>`: маркер вашого бота з**@BotFather**.
-   `<url>`: URL-адреса, надана Cloudflare після розгортання вашого робочого файлу.
-   `<BOT_SECRET_TOKEN>`: значення, яке ви визначили на кроці 3, переконавшись, що воно точно збігається.
