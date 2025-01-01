## README การแปล

**ภาษา:**[ภาษาอังกฤษ](README.md)\|[จีนตัวย่อ](README.zh-CN.md)\|[จีนดั้งเดิม](README.zh-TW.md)\|[ฮินดี](README.hi.md)\|[อาหรับ](README.ar.md)\|[ภาษาฝรั่งเศส](README.fr.md)\|[สเปน](README.es.md)\|[เยอรมัน](README.de.md)\|[ญี่ปุ่น](README.ja.md)\|[โปรตุเกส](README.pt.md)\|[ภาษารัสเซีย](README.ru.md)\|[ภาษาอิตาลี](README.it.md)\|[เกาหลี](README.ko.md)\|[ภาษาตุรกี](README.tr.md)\|[ภาษาดัตช์](README.nl.md)\|[ไทย](README.th.md)\|[Tiếng Việt](README.vi.md)\|[Polski](README.pl.md)\|[ภาษายูเครน](README.uk.md) \| [กรีก](README.el.md)

# บอทผู้ช่วย ChatID

ดึง ID แชทได้อย่างง่ายดายและสะดวกสบาย! บอท Telegram นี้สร้างขึ้นบน Cloudflare Workers โดยไม่จำเป็นต้องปรับใช้เซิร์ฟเวอร์

**ตัวอย่างบอท**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## คู่มือการปรับใช้

### ขั้นตอนที่ 1: สร้างบอทโทรเลขของคุณ

1.  ไปที่**@BotFather**บน Telegram และใช้`/newbot`คำสั่งเพื่อสร้างบอทของคุณ
2.  ปฏิบัติตามคำแนะนำเพื่อระบุข้อมูลที่จำเป็น
3.  เมื่อสร้างแล้ว**@BotFather**จะส่งโทเค็นของบอทไปให้คุณ โทเค็นนี้จำเป็นสำหรับการปรับใช้ โปรดบันทึกไว้เพื่อใช้ในภายหลัง

### ขั้นตอนที่ 2: เรียนรู้การปรับใช้ Cloudflare Workers

1.  อ้างถึง[คู่มือการติดตั้งใช้งาน Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide/).
2.  ดาวน์โหลดซอร์สโค้ดของบอท
3.  วิ่ง`npm run deploy`ภายในเครื่องเพื่อปรับใช้พนักงานของคุณ

### ขั้นตอนที่ 3: กำหนดค่าตัวแปรสภาพแวดล้อมที่จำเป็น

หากต้องการรันบอทให้สำเร็จ ต้องตั้งค่าตัวแปรสภาพแวดล้อมสองตัว:

-   **BOT_TOKEN**  
-   **ฉันทำให้คุณเมา**

Refer to the Cloudflare Workers documentation for [การเพิ่มตัวแปรสภาพแวดล้อม](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### รายละเอียด:

1.  **BOT_TOKEN**: คัดลอกและวางโทเค็นที่ได้รับจาก**@BotFather**ลงในตัวแปรนี้
2.  **ฉันทำให้คุณเมา**: นี่คือค่าที่คุณกำหนดด้วยตัวเอง ต้องเป็นไปตามเกณฑ์ต่อไปนี้:
    -   ความยาว 1-256 ตัวอักษร
    -   อักขระที่อนุญาต:`A-Z`,`a-z`,`0-9`,`_`, และ`-`.
    -   สิ่งนี้ทำให้มั่นใจได้ถึงความปลอดภัยของบอท

### Step 4: Set the Webhook URL

เข้าถึงตำแหน่งข้อมูล API ต่อไปนี้ในเบราว์เซอร์ของคุณเพื่อกำหนดค่า URL ของเว็บฮุค:

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**แทนที่ตัวยึดตำแหน่ง`<token>`,`<url>`, และ`<BOT_SECRET_TOKEN>`ด้วยมูลค่าที่แท้จริงของคุณ:**

-   `<token>`: โทเค็นบอทของคุณจาก**@BotFather**.
-   `<url>`: URL ที่ Cloudflare ระบุไว้หลังจากปรับใช้พนักงานของคุณ
-   `<BOT_SECRET_TOKEN>`: ค่าที่คุณกำหนดไว้ในขั้นตอนที่ 3 เพื่อให้แน่ใจว่าตรงกันทุกประการ
