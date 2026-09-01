# Minimal draft

A single static page: no images, no JavaScript, no external requests, 8.7KB total.
Black on white, 15px Georgia, one 36rem column.

Inspiration was two sites Ryan pointed at:

- colegottdank.com — bold name as a small heading, "Some things about me:" followed by
  default `<ul>` bullets, plain browser-default link colours, no chrome.
- harinsrikanth.com — Georgia at 15px on white, a narrow centred measure, plain
  paragraphs, a small row of links.

What it contains: the three bio paragraphs from the live homepage, a single link row,
all fourteen publications grouped into the same five sections `publications.html` uses,
and the five most recent news items.

Everything is generated from the live pages rather than retyped, so the wording matches.
It is a draft: not linked from the live site and not served by it.

Open it through a local server rather than `file://`, since it points at `../../pdfs/cv.pdf`
and the favicon:

    python3 -m http.server 8000
    # http://localhost:8000/drafts/minimal/
