---
name: docker-deployment
description: Build reproducible secure Docker images and deploy Django services.
---

# docker-deployment

## Workflow and rules

Use pinned compatible bases, multi-stage build where useful, .dockerignore, non-root runtime when practical and no embedded secrets. Build static assets and collectstatic using only non-production build placeholders; verify manage.py check. Run migrations once per release with coordination, not concurrently across replicas. Set explicit service port and health endpoints. Verify startup, static assets, worker health, persistent storage and rollback path. Invoke hamravesh-darkube for target setup.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Release gate
Build and smoke-test a container locally or in CI, with synthetic environment and isolated PostgreSQL. Run migration checks, compilemessages, collectstatic, manage.py check --deploy (review findings), health endpoint and worker readiness. Verify .env excluded. Coordinate migration once, backup and rollback. Only deploy to the real Darkube environment with required authorization; report actual running revision and HTTPS response.
