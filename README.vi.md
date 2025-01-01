## Bản dịch README

**Ngôn ngữ:**[Tiếng Anh](README.md)\|[Tiếng Trung giản thể](README.zh-CN.md)\|[Tiếng Trung phồn thể](README.zh-TW.md)\|[Tiếng Hindi](README.hi.md)\|[Ả Rập](README.ar.md)\|[người Pháp](README.fr.md)\|[tiếng Tây Ban Nha](README.es.md)\|[tiếng Đức](README.de.md)\|[tiếng Nhật](README.ja.md)\|[tiếng Bồ Đào Nha](README.pt.md)\|[tiếng Nga](README.ru.md)\|[người Ý](README.it.md)\|[hàn quốc](README.ko.md)\|[tiếng Thổ Nhĩ Kỳ](README.tr.md)\|[tiếng Hà Lan](README.nl.md)\|[tiếng Thái](README.th.md)\|[Tiếng Việt](README.vi.md)\|[Đánh bóng](README.pl.md)\|[tiếng Ukraina](README.uk.md)\|[tiếng Hy Lạp](README.el.md)

# Bot trợ giúp ChatID

Dễ dàng truy xuất ID trò chuyện một cách dễ dàng và thuận tiện! Bot Telegram này, được xây dựng trên Cloudflare Workers, không yêu cầu triển khai máy chủ.

**Bot ví dụ**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## Deployment Guide

### Bước 1: Tạo Bot Telegram của bạn

1.  đi tới**@BotFather**trên Telegram và sử dụng`/newbot`lệnh để tạo bot của bạn.
2.  Làm theo lời nhắc để cung cấp thông tin cần thiết.
3.  Sau khi được tạo,**@BotFather**sẽ gửi cho bạn mã thông báo của bot. Mã thông báo này rất cần thiết cho việc triển khai—hãy lưu nó để sử dụng sau.

### Bước 2: Tìm hiểu cách triển khai Cloudflare Workers

1.  Tham khảo[Hướng dẫn triển khai nhân viên Cloudflare](https://developers.cloudflare.com/workers/get-started/guide/).
2.  Tải xuống mã nguồn của bot.
3.  Chạy`npm run deploy`cục bộ để triển khai nhân viên của bạn.

### Bước 3: Định cấu hình các biến môi trường cần thiết

Để chạy bot thành công, phải đặt hai biến môi trường:

-   **BOT_TOKEN**
-   **Tôi đã làm bạn say**

Tham khảo tài liệu Cloudflare Workers để biết[thêm các biến môi trường](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### Chi tiết:

1.  **BOT_TOKEN**: Sao chép và dán mã thông báo nhận được từ**@BotFather**vào biến này.
2.  **Tôi đã làm bạn say**: Đây là giá trị do bạn tự xác định. Nó phải đáp ứng các tiêu chí sau:
    -   Độ dài 1-256 ký tự.
    -   Ký tự được phép:`A-Z`,`a-z`,`0-9`,`_`, Và`-`.
    -   Điều này đảm bảo tính bảo mật của bot.

### Bước 4: Đặt URL Webhook

Truy cập điểm cuối API sau trong trình duyệt của bạn để định cấu hình URL webhook:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**Thay thế phần giữ chỗ`<token>`,`<url>`, Và`<BOT_SECRET_TOKEN>`với giá trị thực tế của bạn:**

-   `<token>`: Mã thông báo bot của bạn từ**@BotFather**.
-   `<url>`: URL được Cloudflare cung cấp sau khi triển khai nhân viên của bạn.
-   `<BOT_SECRET_TOKEN>`: Giá trị bạn đã xác định ở Bước 3, đảm bảo nó khớp chính xác.
