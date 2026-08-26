# Drafts

Work-in-progress redesigns. Nothing here is served by the live site, which is built
from the root of the `modern` branch. This directory only exists on the
`workspace-draft` branch.

## workspace/

A research-workstation redesign: the site as an IDE. File explorer where papers are
files, tabbed editor pane, a working terminal, and a command palette. It opens already
populated, so nothing important is hidden behind interaction.

Open `drafts/workspace/index.html` through a local server rather than `file://`, since
it loads figures from the repository's `images/` directory:

    python3 -m http.server 8000
    # then visit http://localhost:8000/drafts/workspace/

What works: the file tree opens papers into closable tabs, Ctrl-K (or `/`) opens a fuzzy
command palette over papers, news and links, and the terminal runs `help`, `whoami`,
`ls papers`, `cat <paper>`, `open news`, `links`, `email`, `cv`, with history and tab
completion. Paper content is currently duplicated in `app.js` rather than read from the
live pages, so it needs updating alongside `index.html` and `publications.html`.

See `workspace/NOTES.md` for the fuller description.
