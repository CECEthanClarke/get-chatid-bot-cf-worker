## README Çevirisi

**Diller:**[İngilizce](README.md)\|[Basitleştirilmiş Çince](README.zh-CN.md)\|[Geleneksel Çince](README.zh-TW.md)\|[Hintçe](README.hi.md)\|[Arap](README.ar.md)\|[Fransızca](README.fr.md)\|[İspanyol](README.es.md)\|[Almanca](README.de.md)\|[Japonca](README.ja.md)\|[Portekizce](README.pt.md)\|[Rusça](README.ru.md)\|[İtalyan](README.it.md)\|[kore](README.ko.md)\|[Türkçe](README.tr.md)\|[Flemenkçe](README.nl.md)\|[Tay dili](README.th.md)\|[Vietnam](README.vi.md)\|[Lehçe](README.pl.md)\|[Ukrayna](README.uk.md)\|[Yunan](README.el.md)

# ChatID Yardımcı Botu

Kolayca ve rahatlıkla sohbet kimliklerini zahmetsizce alın! Cloudflare Workers üzerine kurulu bu Telegram botu, sunucu dağıtımı gerektirmez.

**Örnek Bot**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Dağıtım Kılavuzu

### Adım 1: Telegram Botunuzu Oluşturun

1.  Git**@BotFather**Telegram'da ve`/newbot`botunuzu oluşturma komutu.
2.  Gerekli bilgileri sağlamak için talimatları izleyin.
3.  Bir kez oluşturulduktan sonra,**@BotFather**size botun jetonunu gönderecek. Bu belirteç dağıtım için gereklidir; daha sonra kullanmak üzere saklayın.

### 2. Adım: Cloudflare Çalışanlarını Dağıtmayı Öğrenin

1.  Şuraya bakın:[Cloudflare Çalışanları Dağıtım Kılavuzu](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Botun kaynak kodunu indirin.
3.  Koşmak`npm run deploy`Çalışanınızı dağıtmak için yerel olarak.

### 3. Adım: Gerekli Ortam Değişkenlerini Yapılandırın

Botu başarılı bir şekilde çalıştırmak için iki ortam değişkeninin ayarlanması gerekir:

-   **BOT_TOKEN**
-   **seni sarhoş ettim**

için Cloudflare Workers belgelerine bakın.[ortam değişkenleri ekleme](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Detaylar:

1.  **BOT_TOKEN**: Alınan jetonu kopyalayıp yapıştırın**@BotFather**bu değişkene.
2.  **seni sarhoş ettim**: Bu sizin kendi tanımladığınız bir değerdir. Aşağıdaki kriterleri karşılaması gerekir:
    -   1-256 karakter uzunluğunda.
    -   İzin verilen karakterler:`A-Z`,`a-z`,`0-9`,`_`, Ve`-`.
    -   Bu botun güvenliğini sağlar.

### 4. Adım: Web Kancası URL'sini ayarlayın

Webhook URL'sini yapılandırmak için tarayıcınızda aşağıdaki API uç noktasına erişin:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Yer tutucuları değiştirin`<token>`,`<url>`, Ve`<BOT_SECRET_TOKEN>`gerçek değerlerinizle:**

-   `<token>`: Botunuzun jetonu**@BotFather**.
-   `<url>`: Çalışanınızı dağıttıktan sonra Cloudflare tarafından sağlanan URL.
-   `<BOT_SECRET_TOKEN>`: 3. Adımda tanımladığınız değerin tam olarak eşleştiğinden emin olun.
