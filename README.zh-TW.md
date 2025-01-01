# ChatID 助手機器人

輕鬆方便輕鬆檢索聊天 ID！此 Telegram 機器人基於 Cloudflare Workers 構建，無需部署伺服器。

**機器人範例**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## 部署指南

### 第 1 步：建立您的 Telegram 機器人

1.  前往**@BotFather**在 Telegram 上並使用`/newbot`命令來創建你的機器人。
2.  依照提示提供所需的資訊。
3.  一旦創建，**@BotFather**將向您發送機器人的令牌。此令牌對於部署至關重要 - 保存它以供以後使用。

### 第 2 步：學習部署 Cloudflare Workers

1.  請參閱[Cloudflare Workers 部署指南](https://developers.cloudflare.com/workers/get-started/guide/).
2.  下載機器人的原始碼。
3.  跑步`npm run deploy`在本地部署您的工作人員。

### 步驟3：配置所需的環境變數

要成功運行機器人，必須設定兩個環境變數：

-   **BOT_TOKEN**
-   **我讓你醉了**

請參閱 Cloudflare Workers 文件了解[新增環境變數](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### 細節：

1.  **BOT_TOKEN**：複製並貼上從接收到的令牌**@BotFather**到這個變數中。
2.  **我讓你醉了**：這是您自己定義的值。它必須符合以下標準：
    -   長度為 1-256 個字元。
    -   允許的字元：`A-Z`,`a-z`,`0-9`,`_`， 和`-`.
    -   這確保了機器人的安全。

### 第 4 步：設定 Webhook URL

在瀏覽器中存取以下 API 端點以設定 Webhook URL：

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**替換佔位符`<token>`,`<url>`， 和`<BOT_SECRET_TOKEN>`與您的實際值：**

-   `<token>`：您的機器人的令牌來自**@BotFather**.
-   `<url>`：部署工作程序後 Cloudflare 提供的 URL。
-   `<BOT_SECRET_TOKEN>`：您在步驟 3 中定義的值，確保其完全符合。
