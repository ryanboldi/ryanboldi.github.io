# The Workspace

## Concept

The site is a small operating system: a research workstation rendered in the browser,
where the page itself is the interface rather than a document about one. It has a title
bar, a file explorer, an editor with closable tabs, a command palette, a live terminal
docked at the bottom, and a status bar. Ryan's papers are files in `papers/`, his updates
are a `news.log`, his details are a `contact.card`. It opens already populated: `about.md`
is the active tab with his portrait, name, one-sentence positioning line, affiliation
chips, links and a five-card strip of his real papers, and the terminal has already run
`whoami` so the identity is on screen before anyone types anything. Interaction is the
reward, never the price of entry. All content comes from `content.json` (bio, five papers
with real authors, venues, links and TL;DRs, six news items); paper figures are the real
site images shown on light "preview" cards so the plots stay legible against the dark
editor theme.

## What a visitor can interact with

- **File explorer** (left): click any file to open it in the editor; the `papers` folder
  collapses and expands; `cv.pdf` opens the real PDF.
- **Editor tabs**: multiple documents stay open, tabs highlight the active one, each has a
  close button (`about.md` is pinned), and the strip scrolls horizontally when full.
- **Paper cards** on the about page: hover lifts them, click opens that paper's document
  with its figure, authors (Ryan's name marked), TL;DR, metadata table and links.
- **Command palette**: `Cmd/Ctrl-K`, the `/` key, or clicking the search bar in the title
  bar. Fuzzy search over papers, pages, news items and links, with match highlighting,
  arrow-key navigation, `Enter` to open, `Esc` to close.
- **Terminal** (bottom): a real command line. `help`, `whoami`, `ls`, `ls papers`,
  `cat vpo` (or `dns`, `drq`, `popl`, `dyncomp`), `open news`, `news`, `links`, `email`,
  `cv`, `pwd`, `date`, `clear`, plus command history with the up/down arrows and `Tab`
  completion. `cat` and `open` also open the matching document in the editor above.
  Its header collapses and expands the panel.
- **Status bar**: shows the active file and a live clock.
- **Mobile (≤760px)**: the explorer becomes a drawer behind the hamburger button, the
  portrait moves above the name, the terminal stays live, and the tab strip scrolls.

## Technical notes

- Hand-written HTML, CSS and JS in three files. No frameworks, no libraries, no network
  requests. Content is embedded as JS objects, so it works from `file://`.
- Verified with Playwright at 1280, 768 and 390 px: no console errors, no failed requests,
  no horizontal overflow, and every image has a non-zero natural width.
- Fonts are system stacks only (monospace for the chrome and terminal, sans for document
  prose). Respects `prefers-reduced-motion`.
