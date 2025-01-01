## Μετάφραση README

**Γλώσσες:**[αγγλικός](README.md)\|[Απλοποιημένα κινέζικα](README.zh-CN.md)\|[Παραδοσιακά κινέζικα](README.zh-TW.md)\|[Χίντι](README.hi.md)\|[Άραβας](README.ar.md)\|[Γάλλος](README.fr.md)\|[ισπανικά](README.es.md)\|[Γερμανός](README.de.md)\|[Ιαπωνικά](README.ja.md)\|[Πορτογάλος](README.pt.md)\|[ρωσικός](README.ru.md)\|[ιταλικά](README.it.md)\|[κορεάτης](README.ko.md)\|[τούρκικος](README.tr.md)\|[Ολλανδός](README.nl.md)\|[Ταϊλανδός](README.th.md)\|[Βιετναμέζικο](README.vi.md)\|[Στίλβωση](README.pl.md)\|[Ουκρανός](README.uk.md)\|[Ελληνικά](README.el.md)

# ChatID Helper Bot

Ανακτήστε τα αναγνωριστικά συνομιλίας με ευκολία και ευκολία! Αυτό το bot Telegram, που έχει δημιουργηθεί σε Cloudflare Workers, δεν απαιτεί ανάπτυξη διακομιστή.

**Παράδειγμα Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Οδηγός ανάπτυξης

### Step 1: Create Your Telegram Bot

1.  Μεταβείτε στο**@BotFather**στο Telegram και χρησιμοποιήστε το`/newbot`εντολή για τη δημιουργία του bot σας.
2.  Ακολουθήστε τις οδηγίες για να δώσετε τις απαιτούμενες πληροφορίες.
3.  Μόλις δημιουργηθεί,**@BotFather**θα σας στείλει το διακριτικό του bot. Αυτό το διακριτικό είναι απαραίτητο για την ανάπτυξη - αποθηκεύστε το για μελλοντική χρήση.

### Βήμα 2: Μάθετε να αναπτύσσετε το Cloudflare Workers

1.  Ανατρέξτε στο[Οδηγός ανάπτυξης Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Κατεβάστε τον πηγαίο κώδικα του bot.
3.  Τρέξιμο`npm run deploy`τοπικά για να αναπτύξετε τον εργάτη σας.

### Βήμα 3: Διαμόρφωση απαιτούμενων μεταβλητών περιβάλλοντος

To run the bot successfully, two environment variables must be set:  

-   **BOT_TOKEN**
-   **σε μεθύσασα**

Ανατρέξτε στην τεκμηρίωση του Cloudflare Workers για[προσθήκη μεταβλητών περιβάλλοντος](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Καθέκαστα:

1.  **BOT_TOKEN**: Αντιγράψτε και επικολλήστε το διακριτικό που λάβατε από**@BotFather**σε αυτή τη μεταβλητή.
2.  **σε μεθύσασα**: Αυτή είναι μια αξία που ορίζετε μόνοι σας. Πρέπει να πληροί τα ακόλουθα κριτήρια:
    -   Μήκος 1-256 χαρακτήρες.
    -   Επιτρεπόμενοι χαρακτήρες:`A-Z`,`a-z`,`0-9`,`_`, και`-`.
    -   Αυτό διασφαλίζει την ασφάλεια του bot.

### Βήμα 4: Ορίστε τη διεύθυνση URL του Webhook

Αποκτήστε πρόσβαση στο ακόλουθο τελικό σημείο API στο πρόγραμμα περιήγησής σας για να διαμορφώσετε τη διεύθυνση URL του webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Αντικαταστήστε τα σύμβολα κράτησης θέσης`<token>`,`<url>`, και`<BOT_SECRET_TOKEN>`με τις πραγματικές σας αξίες:**

-   `<token>`: Το bot σας είναι διακριτικό από**@BotFather**.
-   `<url>`: Η διεύθυνση URL που παρέχεται από το Cloudflare μετά την ανάπτυξη του εργάτη σας.
-   `<BOT_SECRET_TOKEN>`: Η τιμή που ορίσατε στο Βήμα 3, διασφαλίζοντας ότι ταιριάζει ακριβώς.
