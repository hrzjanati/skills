# Test isolation

Before tests, require explicit test database settings and reject production hosts/credentials. Use fake API keys, disable telemetry and mock adapters at their import boundary. Deny network egress in the test container where possible, with a narrow allowlist for isolated infrastructure. Python socket/request guards are defense-in-depth, not a complete sandbox. Fail on unexpected attempts and restore patches in teardown. Test the guard itself. Never run live paid integrations as part of ordinary CI.
