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

## Startup Skills Kit

مجموعه اسکیل‌های ساخت استارتاپ برای Codex و Claude Code. هر پوشه را در مسیر skills ابزار خود قرار دهید. اسکیل مادر `startup-orchestrator` است. اسکیل طراحی از UI/UX Pro Max به‌عنوان وابستگی خارجی استفاده می‌کند؛ سورس آن در این مخزن کپی نشده است.

- [startup-planning](startup-planning/SKILL.md): Plan a startup MVP, prioritize features, validate assumptions, and define acceptance criteria.
- [frontend-design](frontend-design/SKILL.md): Design accessible, responsive product interfaces using UI/UX Pro Max and a coherent design system.
- [web-development](web-development/SKILL.md): Implement websites and web interfaces with maintainable components and verified behavior.
- [python-development](python-development/SKILL.md): Write or refactor Python code with clear boundaries, typing and reproducible tooling.
- [django-architecture](django-architecture/SKILL.md): Create or evolve a modular Django backend with feature-owned apps and tests.
- [django-api](django-api/SKILL.md): Design and test Django REST APIs with explicit contracts and access controls.
- [python-testing](python-testing/SKILL.md): Write safe Python/Django unit, integration, permission and regression tests.
- [webapp-testing](webapp-testing/SKILL.md): Test web UI behavior with browser automation in local or authorized staging environments.
- [secure-coding](secure-coding/SKILL.md): Implement secure application code and review authentication, authorization, data handling and dependencies.
- [penetration-testing](penetration-testing/SKILL.md): Perform authorized, non-destructive security assessment of owned applications and document remediation.
- [environment-secrets](environment-secrets/SKILL.md): Manage local .env files and runtime environment variables securely in Hamravesh and CI.
- [database-design](database-design/SKILL.md): Design relational schemas, safe migrations and transactional data operations.
- [code-review](code-review/SKILL.md): Review changes for correctness, security, maintainability and test gaps.
- [systematic-debugging](systematic-debugging/SKILL.md): Diagnose bugs from evidence before changing code.
- [docker-deployment](docker-deployment/SKILL.md): Build reproducible secure Docker images and deploy Django services.
- [github-ci-cd](github-ci-cd/SKILL.md): Configure GitHub Actions checks and controlled releases.
- [monitoring-logging](monitoring-logging/SKILL.md): Configure safe application logs, Sentry, health checks and background worker observability.
- [performance-optimization](performance-optimization/SKILL.md): Measure and improve backend and frontend performance without premature complexity.
- [seo-accessibility](seo-accessibility/SKILL.md): Improve discoverability and accessibility of public web pages.
- [skill-creator](skill-creator/SKILL.md): Create and maintain portable Agent Skills for Codex and Claude Code.
- [startup-orchestrator](startup-orchestrator/SKILL.md): Coordinate startup development from idea through design, backend, testing, security and release.

منابع خارجی به‌صورت لینک معرفی شده‌اند، نه نسخه کپی‌شده. قواعد دائمی هر پروژه را در AGENTS.md و CLAUDE.md ثبت کنید. هیچ کلید واقعی یا سورس خصوصی در این مجموعه قرار ندهید.
