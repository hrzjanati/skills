# Skills for Codex and Claude

## اتصال به هم‌روش و دارکوب

اسکیل `hamravesh-darkube` مسیر اتصال گیت‌هاب یا ایمیج داکر به دارکوب، تنظیم اپ و بررسی خطاهای بیلد و اجرا را توضیح می‌دهد.

[دانلود ZIP اسکیل](downloads/hamravesh-darkube.zip) · [مشاهده SKILL.md](hamravesh-darkube/SKILL.md) · [دانلود nginx.conf](https://raw.githubusercontent.com/hrzjanati/skills/main/hamravesh-darkube/examples/nginx.conf)

### نصب و استفاده

1. فایل ZIP اسکیل را دانلود و باز کنید.
2. پوشهٔ `hamravesh-darkube` را برای **Codex** در `~/.codex/skills/` یا برای **Claude Code** در `~/.claude/skills/` کپی کنید. در صورت نیاز پوشهٔ مقصد را بسازید.
3. در Codex با `$hamravesh-darkube` و در Claude Code با `/hamravesh-darkube` اسکیل را فراخوانی کنید. اگر در فهرست دیده نشد، یک نشست تازه باز کنید.
4. نام مخزن، شاخه و کاری را که می‌خواهید مشخص کنید. مثلاً «تنظیمات دیپلوی شاخهٔ main این پروژه روی دارکوب رو از روی Dockerfile بررسی کن». برای اتصال واقعی مخزن خصوصی، دسترسی GitHub App را در پنل دارکوب به همان مخزن بدهید.

### نمونهٔ Nginx

این فایل درگاه یک کانتینر با دو سرویس داخلی است. Nginx روی پورت `8000` گوش می‌دهد، مسیرهای جنگو را به `127.0.0.1:8001` می‌فرستد و مسیرهای وب، API و WebSocket موتور را به `127.0.0.1:8787` می‌رساند.

1. فایل را در ایمیج حاوی Nginx، مثلاً در `/etc/nginx/nginx.conf`، کپی کنید و مسیرها و پورت‌های upstream را با پروژهٔ خودتان تطبیق بدهید.
2. در همان ایمیج لینوکسی با `nginx -t -c /etc/nginx/nginx.conf` اعتبار فایل را بررسی کنید. برای اجرا در پیش‌زمینه از `nginx -c /etc/nginx/nginx.conf -g 'daemon off;'` استفاده کنید.
3. در دارکوب پورت سرویس `8000` و مسیر سلامت `/health/` را تنظیم کنید. اگر اپ پشت پراکسی دیگری قرار دارد، نحوهٔ ارسال `X-Forwarded-Proto` را بررسی کنید.
