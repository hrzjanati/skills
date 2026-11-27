<div align="center">

# HRZJanati Skills

### مجموعه اسکیل‌های هوش مصنوعی برای توسعه نرم‌افزار و ساخت استارتاپ

از طراحی محصول تا معماری، تست، امنیت و استقرار — با پشتیبانی ویژه از سرویس‌های ایرانی.

[![Stars](https://img.shields.io/github/stars/hrzjanati/skills?style=flat-square)](https://github.com/hrzjanati/skills/stargazers)
[![npm](https://img.shields.io/npm/v/hrzjanati-skills?style=flat-square)](https://www.npmjs.com/package/hrzjanati-skills)
![Claude Code](https://img.shields.io/badge/Claude-Code-orange)
![Codex](https://img.shields.io/badge/OpenAI-Codex-black)

[شروع سریع](#quick-start) · [فهرست اسکیل‌ها](#catalog) · [بسته استارتاپ](#startup) · [منابع پیشنهادی](#upstream) · [انتشار npm](#publish)

</div>

<a id="quick-start"></a>
## 🚀 شروع سریع

پیش‌نیاز: Node.js 20 یا جدیدتر. پس از انتشار رسمی npm:

```bash
npx hrzjanati-skills setup
```

تا پیش از انتشار npm، از نسخه گیت‌هاب استفاده کنید:

```bash
npx --package=github:hrzjanati/skills#startup-skills-kit hrzjanati-skills setup
```

نصب مستقل کاوه‌نگار در Claude Code:

```bash
npx hrzjanati-skills install kavenegar-sms --agent claude --yes
```

برای Codex مقدار `--agent codex` و برای هر دو `--agent both` را انتخاب کنید. برای نصب محدود به پروژه، `--project` را اضافه کنید. نصب‌کننده اسکیل‌های مدیریت‌نشده را جایگزین نمی‌کند؛ نسخه‌های قبلی مدیریت‌شده را پشتیبان می‌گیرد.

<a id="catalog"></a>
## 📚 فهرست اسکیل‌ها

هر اسکیل مستقل است و نصب آن سایر اسکیل‌ها را اجباری نمی‌کند. لینک سورس برای مطالعه و دریافت دستی در دسترس است. فایل‌های ZIP جداگانه پس از اجرای ابزار بسته‌بندی در بخش downloads قابل انتشار هستند.

<details>
<summary><b>startup-planning</b> — تحلیل محصول، تعیین MVP و معیار پذیرش</summary>

تحلیل محصول، تعیین MVP و معیار پذیرش. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](startup-planning/SKILL.md) · [نصب دستی: پوشه اسکیل](startup-planning/)

```bash
npx hrzjanati-skills install startup-planning --agent both --yes
```

</details>

<details>
<summary><b>startup-orchestrator</b> — مدیریت گردش کار کامل ساخت استارتاپ</summary>

مدیریت گردش کار کامل ساخت استارتاپ. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](startup-orchestrator/SKILL.md) · [نصب دستی: پوشه اسکیل](startup-orchestrator/)

```bash
npx hrzjanati-skills install startup-orchestrator --agent both --yes
```

</details>

<details>
<summary><b>frontend-design</b> — طراحی UI/UX، سیستم طراحی و UI/UX Pro Max</summary>

طراحی UI/UX، سیستم طراحی و UI/UX Pro Max. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](frontend-design/SKILL.md) · [نصب دستی: پوشه اسکیل](frontend-design/)

```bash
npx hrzjanati-skills install frontend-design --agent both --yes
```

</details>

<details>
<summary><b>web-development</b> — پیاده‌سازی وب واکنش‌گرا و کامپوننت‌ها</summary>

پیاده‌سازی وب واکنش‌گرا و کامپوننت‌ها. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](web-development/SKILL.md) · [نصب دستی: پوشه اسکیل](web-development/)

```bash
npx hrzjanati-skills install web-development --agent both --yes
```

</details>

<details>
<summary><b>python-development</b> — استانداردهای توسعه پایتون</summary>

استانداردهای توسعه پایتون. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](python-development/SKILL.md) · [نصب دستی: پوشه اسکیل](python-development/)

```bash
npx hrzjanati-skills install python-development --agent both --yes
```

</details>

<details>
<summary><b>django-architecture</b> — معماری ماژولار جنگو، اپ مستقل برای فیچر بزرگ و تست داخل اپ</summary>

معماری ماژولار جنگو، اپ مستقل برای فیچر بزرگ و تست داخل اپ. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](django-architecture/SKILL.md) · [نصب دستی: پوشه اسکیل](django-architecture/)

```bash
npx hrzjanati-skills install django-architecture --agent both --yes
```

</details>

<details>
<summary><b>django-api</b> — طراحی API، اعتبارسنجی و کنترل دسترسی</summary>

طراحی API، اعتبارسنجی و کنترل دسترسی. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](django-api/SKILL.md) · [نصب دستی: پوشه اسکیل](django-api/)

```bash
npx hrzjanati-skills install django-api --agent both --yes
```

</details>

<details>
<summary><b>python-testing</b> — تست پایتون با ایزوله‌سازی شبکه و سرویس پولی</summary>

تست پایتون با ایزوله‌سازی شبکه و سرویس پولی. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](python-testing/SKILL.md) · [نصب دستی: پوشه اسکیل](python-testing/)

```bash
npx hrzjanati-skills install python-testing --agent both --yes
```

</details>

<details>
<summary><b>webapp-testing</b> — تست رابط کاربری و مرورگر با Playwright</summary>

تست رابط کاربری و مرورگر با Playwright. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](webapp-testing/SKILL.md) · [نصب دستی: پوشه اسکیل](webapp-testing/)

```bash
npx hrzjanati-skills install webapp-testing --agent both --yes
```

</details>

<details>
<summary><b>secure-coding</b> — کدنویسی امن و محافظت داده‌ها</summary>

کدنویسی امن و محافظت داده‌ها. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](secure-coding/SKILL.md) · [نصب دستی: پوشه اسکیل](secure-coding/)

```bash
npx hrzjanati-skills install secure-coding --agent both --yes
```

</details>

<details>
<summary><b>penetration-testing</b> — ارزیابی امنیتی مجاز و غیرمخرب</summary>

ارزیابی امنیتی مجاز و غیرمخرب. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](penetration-testing/SKILL.md) · [نصب دستی: پوشه اسکیل](penetration-testing/)

```bash
npx hrzjanati-skills install penetration-testing --agent both --yes
```

</details>

<details>
<summary><b>environment-secrets</b> — مدیریت .env و متغیرهای محیطی هم‌روش</summary>

مدیریت .env و متغیرهای محیطی هم‌روش. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](environment-secrets/SKILL.md) · [نصب دستی: پوشه اسکیل](environment-secrets/)

```bash
npx hrzjanati-skills install environment-secrets --agent both --yes
```

</details>

<details>
<summary><b>database-design</b> — طراحی دیتابیس، تراکنش و مهاجرت</summary>

طراحی دیتابیس، تراکنش و مهاجرت. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](database-design/SKILL.md) · [نصب دستی: پوشه اسکیل](database-design/)

```bash
npx hrzjanati-skills install database-design --agent both --yes
```

</details>

<details>
<summary><b>code-review</b> — بازبینی کد و ریسک تغییرات</summary>

بازبینی کد و ریسک تغییرات. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](code-review/SKILL.md) · [نصب دستی: پوشه اسکیل](code-review/)

```bash
npx hrzjanati-skills install code-review --agent both --yes
```

</details>

<details>
<summary><b>systematic-debugging</b> — عیب‌یابی مبتنی بر شواهد</summary>

عیب‌یابی مبتنی بر شواهد. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](systematic-debugging/SKILL.md) · [نصب دستی: پوشه اسکیل](systematic-debugging/)

```bash
npx hrzjanati-skills install systematic-debugging --agent both --yes
```

</details>

<details>
<summary><b>docker-deployment</b> — ساخت Docker و استقرار</summary>

ساخت Docker و استقرار. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](docker-deployment/SKILL.md) · [نصب دستی: پوشه اسکیل](docker-deployment/)

```bash
npx hrzjanati-skills install docker-deployment --agent both --yes
```

</details>

<details>
<summary><b>hamravesh-darkube</b> — اتصال و دیپلوی روی دارکوب هم‌روش</summary>

اتصال و دیپلوی روی دارکوب هم‌روش. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](hamravesh-darkube/SKILL.md) · [نصب دستی: پوشه اسکیل](hamravesh-darkube/)

```bash
npx hrzjanati-skills install hamravesh-darkube --agent both --yes
```

</details>

<details>
<summary><b>github-ci-cd</b> — خط لوله تست و انتشار در GitHub</summary>

خط لوله تست و انتشار در GitHub. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](github-ci-cd/SKILL.md) · [نصب دستی: پوشه اسکیل](github-ci-cd/)

```bash
npx hrzjanati-skills install github-ci-cd --agent both --yes
```

</details>

<details>
<summary><b>monitoring-logging</b> — لاگ، Sentry و مانیتورینگ</summary>

لاگ، Sentry و مانیتورینگ. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](monitoring-logging/SKILL.md) · [نصب دستی: پوشه اسکیل](monitoring-logging/)

```bash
npx hrzjanati-skills install monitoring-logging --agent both --yes
```

</details>

<details>
<summary><b>performance-optimization</b> — اندازه‌گیری و بهینه‌سازی عملکرد</summary>

اندازه‌گیری و بهینه‌سازی عملکرد. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](performance-optimization/SKILL.md) · [نصب دستی: پوشه اسکیل](performance-optimization/)

```bash
npx hrzjanati-skills install performance-optimization --agent both --yes
```

</details>

<details>
<summary><b>seo-accessibility</b> — سئو و دسترس‌پذیری</summary>

سئو و دسترس‌پذیری. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](seo-accessibility/SKILL.md) · [نصب دستی: پوشه اسکیل](seo-accessibility/)

```bash
npx hrzjanati-skills install seo-accessibility --agent both --yes
```

</details>

<details>
<summary><b>skill-creator</b> — ساخت و ارزیابی اسکیل</summary>

ساخت و ارزیابی اسکیل. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](skill-creator/SKILL.md) · [نصب دستی: پوشه اسکیل](skill-creator/)

```bash
npx hrzjanati-skills install skill-creator --agent both --yes
```

</details>

<details>
<summary><b>kavenegar-sms</b> — کاوه‌نگار، OTP و پیامک سیستمی</summary>

کاوه‌نگار، OTP و پیامک سیستمی. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](kavenegar-sms/SKILL.md) · [نصب دستی: پوشه اسکیل](kavenegar-sms/)

```bash
npx hrzjanati-skills install kavenegar-sms --agent both --yes
```

</details>

<details>
<summary><b>sabanovin-sms</b> — صبانوین، یادآوری و وضعیت تحویل</summary>

صبانوین، یادآوری و وضعیت تحویل. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](sabanovin-sms/SKILL.md) · [نصب دستی: پوشه اسکیل](sabanovin-sms/)

```bash
npx hrzjanati-skills install sabanovin-sms --agent both --yes
```

</details>

<details>
<summary><b>zibal-payment</b> — زیبال، تأیید پرداخت و تسویه بدون تکرار</summary>

زیبال، تأیید پرداخت و تسویه بدون تکرار. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](zibal-payment/SKILL.md) · [نصب دستی: پوشه اسکیل](zibal-payment/)

```bash
npx hrzjanati-skills install zibal-payment --agent both --yes
```

</details>

<details>
<summary><b>reverse-engineering-fa</b> — مهندسی معکوس مجاز و مستند با REA و گزارش فارسی</summary>

مهندسی معکوس مجاز و مستند با REA و گزارش فارسی. راهنمای کامل، قواعد اجرا و بررسی نتیجه در فایل اسکیل آمده است.

[مشاهده سورس](reverse-engineering-fa/SKILL.md) · [نصب دستی: پوشه اسکیل](reverse-engineering-fa/)

```bash
npx hrzjanati-skills install reverse-engineering-fa --agent both --yes
```

</details>

<a id="startup"></a>
## 🧩 بسته استارتاپ

```bash
npx hrzjanati-skills install startup --agent both --yes
```

بسته استارتاپ شامل اسکیل‌های توسعه و سرویس‌های ایرانی است؛ مهندسی معکوس و ساخت اسکیل جداگانه نصب می‌شوند. برای نصب تمام موارد از `install all` استفاده کنید. پس از نصب، اسکیل startup-orchestrator را برای برنامه‌ریزی و اجرای پروژه فراخوانی کنید. نصب اسکیل هیچ پرداخت، پیامک، استقرار یا ابزار خارجی را خودکار اجرا نمی‌کند.

## مدیریت نصب

```bash
npx hrzjanati-skills list
npx hrzjanati-skills doctor
npx hrzjanati-skills@latest update --agent both --yes
npx hrzjanati-skills uninstall kavenegar-sms --agent both --yes
```

Claude Code: `~/.claude/skills` · Codex: `~/.agents/skills`. ChatGPT وب با Codex متفاوت است و این CLI مستقیماً آن را تغییر نمی‌دهد.

<a id="upstream"></a>
## 🌐 منابع خارجی پیشنهادی

این مخازن مستقل‌اند، همراه پکیج نصب نمی‌شوند و مالکیت آن‌ها متعلق به سازندگانشان است.

| پروژه | کاربرد |
| --- | --- |
| [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | سیستم طراحی و تجربه کاربری |
| [Superpowers](https://github.com/obra/superpowers) | برنامه‌ریزی، تست و عیب‌یابی |
| [Anthropic Skills](https://github.com/anthropics/skills) | نمونه اسکیل‌های تخصصی |
| [Trail of Bits Skills](https://github.com/trailofbits/skills) | مهندسی امن |
| [REA](https://github.com/morluto/rea) | تحلیل نرم‌افزار دارای مجوز |

## بسته‌بندی ZIP

با Python 3، دستور `python3 scripts/package-skills.py` را در ریشه مخزن اجرا کنید. برای هر اسکیل یک ZIP مستقل و برای بسته استارتاپ یک ZIP جدا ساخته می‌شود.

<a id="publish"></a>
## انتشار npm (برای نگهدارنده)

ابتدا نام و مالکیت پکیج را در npm بررسی کنید. سپس `npm test` و `npm pack --dry-run` را اجرا کنید. اولین انتشار با حساب مجاز، `npm login` و `npm publish --access public` یا تنظیم Trusted Publishing انجام می‌شود. هیچ توکنی در Git ذخیره نکنید. برای نسخه‌های بعدی، انتشار از طریق workflow دستی npm-publish.yml بعد از پیکربندی OIDC امکان‌پذیر است. نسخه package.json باید افزایش یابد.

## مشارکت و امنیت

پیشنهاد و گزارش خطا را در [Issues](https://github.com/hrzjanati/skills/issues) ثبت کنید. کلید واقعی، داده خصوصی و کد اختصاصی را منتشر نکنید. تست نفوذ و مهندسی معکوس فقط در محدوده مجاز انجام شوند.
