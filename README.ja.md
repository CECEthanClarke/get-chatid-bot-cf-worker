## READMEの翻訳

**言語:**[英語](README.md)\|[簡体字中国語](README.zh-CN.md)\|[繁体中文](README.zh-TW.md)\|[ヒンディー語](README.hi.md)\|[アラブ](README.ar.md)\|[フランス語](README.fr.md)\|[スペイン語](README.es.md)\|[ドイツ語](README.de.md) \| [日本語](README.ja.md)\|[ポルトガル語](README.pt.md)\|[ロシア](README.ru.md)\|[イタリア語](README.it.md)\|[韓国語](README.ko.md)\|[トルコ語](README.tr.md)\|[オランダ語](README.nl.md)\|[タイ語](README.th.md)\|[ベトナム語](README.vi.md)\|[Polski](README.pl.md)\|[ウクライナ語](README.uk.md)\|[ギリシャ語](README.el.md)

# ChatID ヘルパー ボット

チャット ID を簡単かつ便利に取得できます。この Telegram ボットは Cloudflare Workers 上に構築されており、サーバーの展開は必要ありません。

**ボットの例**:[チャットIDヘルパーボット](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## 導入ガイド

### ステップ 1: Telegram ボットを作成する

1.  に行く**@BotFather**Telegram で、`/newbot`ボットを作成するコマンド。
2.  プロンプトに従って必要な情報を入力します。
3.  一度作成すると、**@BotFather**ボットのトークンを送信します。このトークンは展開に不可欠です。後で使用できるように保存しておいてください。

### ステップ2: Cloudflareワーカーのデプロイ方法を学ぶ

1.  を参照してください。[Cloudflare Workers Deployment Guide](https://developers.cloudflare.com/workers/get-started/guide/).
2.  ボットのソースコードをダウンロードします。
3.  走る`npm run deploy`ワーカーをローカルにデプロイします。

### ステップ 3: 必要な環境変数を構成する

ボットを正常に実行するには、2 つの環境変数を設定する必要があります。

-   **BOT_TOKEN**
-   **あなたを酔わせてしまった**

Cloudflare Workers のドキュメントを参照してください。[adding environment variables](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### 詳細：

1.  **BOT_TOKEN**: から受け取ったトークンをコピーして貼り付けます。**@BotFather**この変数に。
2.  **あなたを酔わせてしまった**：これはあなた自身が定義する値です。次の基準を満たしている必要があります。
    -   長さは 1 ～ 256 文字です。
    -   使用できる文字:`A-Z`,`a-z`,`0-9`,`_`、 そして`-`.
    -   これにより、ボットのセキュリティが確保されます。

### ステップ 4: Webhook URL を設定する

ブラウザで次の API エンドポイントにアクセスして、Webhook URL を構成します。

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**プレースホルダーを置き換える`<token>`,`<url>`、 そして`<BOT_SECRET_TOKEN>`実際の値を使用して:**

-   `<token>`: ボットのトークンの送信元**@BotFather**.
-   `<url>`: ワーカーのデプロイ後に Cloudflare によって提供される URL。
-   `<BOT_SECRET_TOKEN>`: ステップ 3 で定義した値。正確に一致することを確認します。
