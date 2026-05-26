# Changelog

All notable changes to PRISM are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [2.2.0] — 2026-05-26

### Added
- Multilingual report translation layer via `modules/report_i18n.py` for EN/RU/DE report rendering.
- New map i18n keys for precision metadata (`precision`, `approximate`) across EN/RU/DE locales.

### Changed
- Frontend map rendering switched from single-marker OSM iframe to Leaflet multi-marker rendering in `ScanResults`.
- Frontend version labels updated to `v2.2.0` in topbar and loading screen.
- Backend and frontend application versions bumped to `2.2.0`.

### Fixed
- `#27` map view now renders all discovered locations instead of only the first marker.
- `#26` Wayback sensitive URL findings are included in dashboard flow (`wayback.interesting`) and displayed in results.
- `#25` phone map no longer fabricates coordinates from region/country guesses; marker is shown only for explicit coordinates.
- `#21` API key is no longer accepted via query string and permissive wildcard CORS default is removed.
- `#20` auth bypass with missing API keys is removed by default; anonymous mode requires explicit `ALLOW_ANON_API=true`.
- Comment/docstring cleanup completed across source files with build-safe manual TSX repairs.

---

## [2.1.1] — 2026-05-18

### Added
- **Webhook callback support** — pass an optional `webhook_url` in
  `POST /api/scan`; a `POST` is delivered to that URL when the scan
  reaches a terminal state. Signed with `X-Prism-Secret` when
  `WEBHOOK_SECRET` is set. Private/loopback hosts are rejected.
  Docs: `docs/ARCHITECTURE.md` (issue #18).
- **OPSEC category tooltips** — hover over a category in the score bar
  to see a one-line explanation of what it measures (issue #17).
- **Alt+T keyboard shortcut** to toggle dark/light theme. Topbar
  tooltip updated with the hint (issue #15).
- **German (DE) locale** — full UI translation; language switcher now
  cycles EN → RU → DE and auto-detects from `navigator.language`
  (issue #12).
- AI summary copy button refactored to share the global
  `copyValue` + toast mechanism (PR #19 follow-up).

### Changed
- **PDF export** switched from WeasyPrint (52.5, broken on Windows
  without GTK) to **xhtml2pdf** (pure-Python). A dedicated
  PDF-friendly template is used so output is stable across OSes.

### Fixed
- PDF export endpoint no longer returns `501` / install errors on
  Windows. Generated PDFs render OPSEC score, findings, WHOIS, DNS,
  GeoIP, subdomains, threat intel and phone data correctly.

---

## [2.1.0] — 2026-04-26

### Added
- **Module-level scan progress bar** — real-time `5/8 modules · 62%`
  visual indicator with per-module status chips (issue #9).
- **PDF report export** — `GET /api/scan/{id}/report/pdf` renders the
  HTML report with WeasyPrint. Frontend "PDF Report" button (issue #8).
- **Censys integration** — host services + certificate-based subdomain
  discovery via Censys Search API v2 (issue #3).
- **Dark-web `.onion` mirror checker** — aggregates Ahmia + DarkSearch
  for any domain or organization name (issue #2).
- **i18n / multi-language UI** — English & Russian out of the box,
  language switcher in the topbar, auto-detection from
  `navigator.language` (issue #1).
- **One-click copy buttons** across scan results
  (target, IP, emails, DNS records, subdomains, account URLs, ports).
- **Architecture documentation** — `docs/ARCHITECTURE.md`.
- **Roadmap & Star History** sections in README.

### Changed
- README rewritten for v2.1: refreshed badges, module table, key list,
  features list, roadmap section.
- "Print PDF" button now downloads a server-rendered PDF instead of
  invoking the browser print dialog.
- 22+ modules, 14 of which work with **zero API keys**.

### Fixed
- Merge conflict in `ScanResults.tsx` header that broke the build on
  certain mirror checkouts.
- Module progress in `ScanProgress` no longer relies on log parsing.

---

## [2.0.0] — 2026-04-08

### Added
- Initial public release.
- 20+ OSINT modules across 5 scan types (domain, ip, email, phone, username).
- Real-time WebSocket dashboard.
- AI summary + chat via OpenRouter (Nvidia Nemotron).
- HTML scan reports.
- OPSEC scoring (0–100) with categorical breakdown.
- Entity relationship graph and GeoIP map.
- Docker / docker-compose deploy.
