---
name: docker-deployment
description: Build reproducible secure Docker images and deploy Django services.
---

# docker-deployment

## Workflow and rules

Use pinned compatible bases, multi-stage build where useful, .dockerignore, non-root runtime when practical and no embedded secrets. Build static assets and collectstatic using only non-production build placeholders; verify manage.py check. Run migrations once per release with coordination, not concurrently across replicas. Set explicit service port and health endpoints. Verify startup, static assets, worker health, persistent storage and rollback path. Invoke hamravesh-darkube for target setup.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.
