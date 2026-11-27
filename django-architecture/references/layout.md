# Suggested layout

```text
config/settings.py
config/urls.py
config/test_runner.py
config/test_safety.py
accounts/
orders/models/
orders/services/
orders/views/
orders/tests/test_services.py
orders/tests/test_permissions.py
orders/migrations/
orders/templates/orders/
extensions/
.env.example
Dockerfile
manage.py
```
Small apps may use models.py or views.py rather than packages. Keep test files discoverable and use __init__.py where needed. Never copy private project-specific business rules into a public skill.
