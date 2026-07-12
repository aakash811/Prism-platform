# PRISM browser extension

One-click OSINT scans from your browser. Select a domain, IP, email, phone, or
username on any page, right-click, and scan it with your PRISM instance — the scan
runs and the results show up right inside the extension popup. No redirect, nothing
leaves your setup.

Available in all 9 PRISM languages; it follows your browser's language.

## Features

- Right-click any selected text → **Scan with PRISM**
- Or open the popup and type a target
- Live progress, OPSEC score, findings, and per-module results in the popup
- Points at your own self-hosted PRISM (or the public demo)
- Optional API key for instances behind auth

## Install (Firefox)

1. Go to `about:debugging` → **This Firefox** → **Load Temporary Add-on**.
2. Pick `manifest.json` in this folder.
3. Open the popup and set **Server** to your PRISM URL (e.g. `http://localhost:8080`).

For a permanent install, load the signed `.xpi` from Firefox Add-ons once published.

## Install (Chrome / Edge, unpacked)

1. Go to `chrome://extensions`, enable **Developer mode**.
2. **Load unpacked** → select this folder.
3. Set your **Server** in the popup.

## Build a package

Zip the contents of this folder (not the folder itself) and upload the zip to
Firefox Add-ons or the Chrome Web Store:

```bash
cd extension && zip -r ../prism-extension.zip . -x "*.DS_Store"
```

## Notes

- Requires PRISM **2.6+** on the target instance (the `?target=` and API flow).
- `host_permissions` is broad so the extension can reach any instance URL you set;
  it only ever talks to the server you configure.
