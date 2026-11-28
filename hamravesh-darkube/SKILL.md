---
name: hamravesh-darkube
description: Connect a GitHub repository or prebuilt Docker image to Hamravesh Darkube, configure a deployment, or diagnose build and runtime failures. Includes settings for hrzjanati/zoul. Use for هم‌روش، دارکوب، or Darkube deployment requests.
---

# Hamravesh Darkube

Identify the target app, repository, branch and cluster or namespace from the user's request and the current setup. For an existing app, inspect its current source, settings and latest deployment before proposing changes. Review the repository's Dockerfile, entrypoint and deployment configuration to determine the service port, environment variables, storage and health paths.

## Connect and configure

- For GitHub builds, choose **Git source → GitHub** in the Darkube console. If the Darkube GitHub App needs installation or additional repository access, use the authorization flow from the console and select the required repository. Then choose the branch, relative Dockerfile path and build context. Automatic deploy on push is optional and should follow the user's preference or existing setting. [GitHub setup](https://docs.hamravesh.com/products/darkube/create/git-repo/github/)
- For an image that is already built, choose **Docker image** and use its registry address and tag. For a private registry, verify that Darkube has pull access. [Image setup](https://docs.hamravesh.com/products/darkube/create/docker-image/intro/)
- Set the service port to the container's externally listening port. Use the app's runtime environment settings for secrets. Collect the names needed from the repo's example environment file and settings. Keep secret values out of chat, source control and build logs.
- Use an available authenticated console or integration to make requested changes. Have the user complete interactive sign-in or GitHub authorization when required. The skill itself supplies no credentials.

## Zoul

Use these values for `hrzjanati/zoul` after checking the current revision. The local clone may be at `~/Desktop/zoul`.

| Darkube setting | Value |
| --- | --- |
| Git source | Public GitHub repository `hrzjanati/zoul` (or the user's own fork, which may be private), branch `main` by default |
| Dockerfile and context | `./Dockerfile`, `.` |
| Service port | `8000` |
| Start command | Keep the image entrypoint |
| Persistent disk mount | `/data` |
| HTTP health path | `/health/` |

The Dockerfile builds the UI and creates a single image. At startup its entrypoint runs migrations and starts OpenMuse, Gunicorn and Nginx. Nginx listens on port 8000 and routes browser traffic and WebSockets. Check `deploy/nginx.conf`, `docker-entrypoint.sh`, `config/settings.py` and `.env.example` when updating these values.

Use `DEBUG=False` and supply a stable `SECRET_KEY` at runtime. For a custom domain, use the hostname in `ALLOWED_HOSTS` and the full HTTPS origin in `CSRF_TRUSTED_ORIGINS`. Leave `DB_HOST` unset for SQLite on the persistent disk. Set `DB_HOST` and the corresponding database credentials for PostgreSQL. Check `.env.example` for OpenMuse authentication and provider settings.

For a same-container Django and OpenMuse setup, see [the Nginx example](examples/nginx.conf). Adapt routes and upstream ports to the application and validate it with `nginx -t` in the target image.

## Verify and diagnose

- If the repository is missing from Darkube, check access for the GitHub App and that it is installed on the correct owner. For build failures, inspect the failing build step before changing the Dockerfile or registry settings.
- After deployment, verify the deployed revision or image tag, runtime status and HTTP response. For Zoul, check `/health/` for Django and inspect the response from `/engine/health/` for OpenMuse status. For chat failures, check the WebSocket upgrade on `/ws`. For lost state, check the disk mounted at `/data`.
- Report what was verified, along with any pending authorization or unavailable logs. A successful build establishes that the image was created. A live HTTP check establishes that the service responds.

[Official Darkube quickstart](https://docs.hamravesh.com/products/darkube/getting-started)
