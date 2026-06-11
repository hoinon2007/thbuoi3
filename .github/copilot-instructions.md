# Copilot / AI agent instructions for this repository

Purpose: concise, actionable guidance so an AI coding agent can be immediately productive editing this small static website.

- Big picture:
  - This is a static website: root `index.html`, additional pages in the `html/` folder, assets under `assets/` (images in `assets/img/`), styles in `css/`, and client JS in `js/lib.js`.
  - There is no build system, package.json, or tests detected; changes should preserve plain-file workflows and browser compatibility.

- Key files to inspect first:
  - `index.html` — main entry; contains high-level navigation and links to `html/` pages.
  - `html/bang.html`, `html/bangsp.html`, `html/bang-cuu-chuong.html` — representative content pages.
  - `css/style.css`, `css/style2.css`, `css/style3.css` — styling is split across multiple files; modify with care to avoid duplicate rules.
  - `js/lib.js` — single client-side JavaScript file handling site behaviors; keep changes minimal and test in browser.
  - `assets/img/` — image assets referenced from HTML; filenames are used literally (see "Filename rules").

- Project-specific conventions & gotchas:
  - Filenames include spaces and non-ASCII characters (for example `html/dang nhap.html`, `html/xac  thuc.html`). Always preserve exact filenames and URL-encode spaces when generating links programmatically.
  - Relative links are used between pages. When moving or renaming files, update all relative href/src references in the HTML files.
  - CSS is split: look for duplicated selectors across `style.css`, `style2.css`, `style3.css`. Prefer adding small, specific rules rather than broad overrides.
  - JavaScript is centralized in `js/lib.js`. Avoid introducing additional global scripts unless necessary.

- Typical developer workflow (no build):
  - Quick local preview: use a static file server (recommended) rather than opening files via file:// to avoid CORS/relative-path issues. Examples:
    - `npx http-server .` (if Node available)
    - `python -m http.server 8000` (Python 3)
  - Inspect/debug in the browser DevTools when changing `js/lib.js` or CSS.

- Editing patterns and examples (concrete):
  - To change homepage content: edit `index.html` and update the navigation links that reference files in `html/`.
  - To add an image: place it in `assets/img/` and reference it from HTML using the relative path `assets/img/your-image.jpg`.
  - To change site-wide behavior: modify `js/lib.js`, then refresh the page in the browser — this repository has no automated bundling step.

- Safety and scope notes for AI agents:
  - Do not add new build tooling or tests unless the user requests it — this repository intentionally uses plain HTML/CSS/JS files.
  - When renaming files with spaces or non-ASCII characters, update all references and prefer URL-encoded link targets in generated code.
  - Keep pull requests small and focused: change at most one page or one logical component per PR.

- If uncertain or making a cross-file change, ask the user these quick questions:
  1. Should I rename files to remove spaces/diacritics, or preserve original filenames?
 2. Do you want a local dev server added (package.json / devDependencies)?

If this file is incomplete or you want additional developer automation documented (linting, a Node-based preview, or CI), tell me which area to expand.
