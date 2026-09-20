-- api_cache: the latest upstream API-Football response per data set (e.g.
-- "day:2026-09-19", "live"), shared by every visitor and every Cloudflare
-- location. The Worker refreshes a row at most once per its TTL, so total
-- API calls are bounded by (number of data sets x refreshes per day) no
-- matter how much traffic there is — and if the upstream API errors or the
-- daily quota runs out, the last stored row is served instead of nothing.

CREATE TABLE IF NOT EXISTS api_cache (
  key TEXT PRIMARY KEY,
  body TEXT NOT NULL,
  fetched_at INTEGER NOT NULL
);
