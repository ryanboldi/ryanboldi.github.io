/* ══════════════════════════════════════════════════════════════
   Ryan Bahlous-Boldi — Research Workspace
   Hand-written JS. No libraries, no network requests.
   ══════════════════════════════════════════════════════════════ */
(function () {
"use strict";

/* ── data ──────────────────────────────────────────────────── */

var ME = "Ryan Bahlous-Boldi";

var PAPERS = [
  {
    id: "dyncomp",
    file: "dynamic-compression.md",
    keys: ["dynamic", "compression", "recurrent", "memory", "state"],
    title: "Dynamic Compression in Recurrent Networks",
    authors: "Jyothish Pari, Ryan Bahlous-Boldi, Pulkit Agrawal",
    venue: "arXiv preprint",
    year: "2026",
    img: "../../images/dynamic_compression.jpg",
    alt: "Diagram of a recurrent model revisiting earlier tokens and revising its compressed state.",
    links: [{ url: "https://arxiv.org/abs/2608.17896", label: "PDF" }],
    tldr: "Recurrent models normally compress history into a fixed-size state in one causal pass, so each input must be compressed before the model knows how it will be used. We let the model selectively revisit past tokens and revise its state through extra recurrent updates, which substantially reduces the state size needed for accurate reuse and scales better as the number of stored functions grows."
  },
  {
    id: "vpo",
    file: "vpo.md",
    keys: ["vector", "policy", "optimization", "grpo", "llm", "diversity", "test-time", "search"],
    title: "Vector Policy Optimization: Training for Diversity Improves Test-Time Search",
    authors: "Ryan Bahlous-Boldi, Isha Puri, Idan Shenfeld, Akarsh Kumar, Mehul Damani, Sebastian Risi, Omar Khattab, Zhang-Wei Hong, Pulkit Agrawal",
    venue: "arXiv preprint",
    year: "2026",
    img: "../../images/VPO.png",
    alt: "Plot of a Pareto frontier in a two-objective reward space, with the VPO solution set spread along the frontier and GRPO clustered at one point.",
    links: [
      { url: "https://arxiv.org/abs/2605.22817", label: "PDF" },
      { url: "https://github.com/ryanboldi/vpo", label: "Code" },
      { url: "https://vpo-rl.github.io", label: "Website" }
    ],
    tldr: "We propose Vector Policy Optimization (VPO), a drop-in replacement for the GRPO advantage estimator that trains LLMs to produce diverse sets of solutions specialized to different trade-offs in a vector-valued reward space, improving test-time search (pass@k, best@k) and unlocking problems evolutionary search cannot otherwise solve."
  },
  {
    id: "drq",
    file: "digital-red-queen.md",
    keys: ["digital", "red", "queen", "core", "war", "self-play", "adversarial", "evolution"],
    title: "Digital Red Queen: Adversarial Program Evolution in Core War with LLMs",
    authors: "Akarsh Kumar, Ryan Bahlous-Boldi, Prafull Sharma, Phillip Isola, Sebastian Risi, Yujin Tang, David Ha",
    venue: "GECCO 2026",
    year: null,
    img: "../../images/DRQ.jpg",
    alt: "Trajectories through a Core War warrior behavior space, converging toward a generally robust region.",
    links: [{ url: "https://arxiv.org/abs/2601.03335", label: "PDF" }],
    tldr: "We study Digital Red Queen (DRQ), a self-play algorithm in which an LLM repeatedly evolves a new Core War program to defeat every program it produced before. Across rounds the programs get more general against held-out human warriors and less behaviorally diverse across independent runs, converging toward a single general-purpose strategy."
  },
  {
    id: "dns",
    file: "dominated-novelty-search.md",
    keys: ["dominated", "novelty", "search", "quality", "diversity", "map-elites", "gecco"],
    title: "Dominated Novelty Search: Rethinking Local Competition in Quality-Diversity",
    authors: "Ryan Bahlous-Boldi*, Maxence Faldor*, Luca Grillotti, Hannah Janmohamed, Lisa Coiffard, Lee Spector, Antoine Cully",
    venue: "GECCO 2025",
    year: null,
    img: "../../images/DNS.png",
    alt: "Scatter plot of solutions found by Dominated Novelty Search spread across a two-dimensional behavior space.",
    links: [
      { url: "https://arxiv.org/abs/2502.00593", label: "PDF" },
      { url: "https://doi.org/10.1145/3712256.3726310", label: "DOI" }
    ],
    tldr: "We propose a new class of quality-diversity algorithms that are simply genetic algorithms with fitness augmentations."
  },
  {
    id: "popl",
    file: "pareto-optimal-preferences.md",
    keys: ["pareto", "optimal", "preference", "learning", "hidden", "context", "rlhf", "alignment", "popl"],
    title: "Pareto Optimal Learning from Preferences with Hidden Context",
    authors: "Ryan Bahlous-Boldi, Li Ding, Lee Spector, and Scott Niekum",
    venue: "Reinforcement Learning Journal, vol. 6 (RLC 2025) & Pluralistic Alignment Workshop @ NeurIPS 2024",
    year: null,
    img: "../../images/POPL.png",
    alt: "Two groups with conflicting ground-truth utilities, and the POPL objective recovering a distribution for each group.",
    links: [
      { url: "https://arxiv.org/abs/2406.15599", label: "PDF" },
      { url: "https://rlj.cs.umass.edu/2025/papers/Paper54.html", label: "RLJ" }
    ],
    tldr: "We frame reward function inference from diverse groups of people as a multi-objective optimization problem."
  }
];

var NEWS = [
  { date: "Aug 18, 2026", tag: "preprint",
    html: 'New preprint with <a href="https://jyopari.github.io/">Jyo Pari</a>: <a href="https://arxiv.org/abs/2608.17896">Dynamic Compression in Recurrent Networks</a> is on arXiv. We let a recurrent model revisit past tokens and revise its fixed-size state, trading extra computation for a much smaller state.' },
  { date: "May 21, 2026", tag: "preprint",
    html: 'New preprint: <a href="https://arxiv.org/abs/2605.22817">Vector Policy Optimization (VPO)</a> is on arXiv. We train LLMs to produce diverse sets of solutions specialized to different trade-offs in a vector-valued reward space, improving test-time search and unlocking problems evolutionary search cannot otherwise solve.' },
  { date: "Jun 13, 2025", tag: "award",
    html: 'I\'m honored to have been awarded the <a href="https://www.nsfgrfp.org">NSF Graduate Research Fellowship</a>! This fellowship will support my PhD research on how intelligence emerges in adaptive artificial systems.' },
  { date: "May 9, 2025", tag: "accepted",
    html: '<a href="https://arxiv.org/abs/2406.15599">Pareto Optimal Preference Learning (POPL)</a> was accepted to the 2025 Reinforcement Learning Conference (RLC)!' },
  { date: "Apr 15, 2025", tag: "milestone",
    html: 'I\'m thrilled to announce that I have committed to the PhD in EECS at MIT!' },
  { date: "Mar 19, 2025", tag: "accepted",
    html: '<a href="https://arxiv.org/abs/2502.00593">Dominated Novelty Search (DNS)</a> was accepted to the 2025 Genetic and Evolutionary Computation Conference (GECCO)!' }
];

var LINKS = [
  { label: "CV",           sub: "../../pdfs/cv.pdf",   url: "../../pdfs/cv.pdf" },
  { label: "Google Scholar", sub: "citations",   url: "https://scholar.google.com/citations?user=-1bygdgAAAAJ&hl=en" },
  { label: "GitHub",       sub: "@ryanboldi",    url: "https://github.com/ryanboldi" },
  { label: "Twitter / X",  sub: "@RyanBoldi",    url: "https://x.com/RyanBoldi" },
  { label: "Blog",         sub: "ryanboldi.github.io/blog", url: "https://ryanboldi.github.io/blog/" }
];

var BIO = [
  "I'm a PhD student at MIT working on open-ended and continual learning. Most machine learning commits early, optimizing one fixed objective and converging onto a single solution. I'm interested in the opposite: systems that stay non-committal, keep exploring, and let what matters emerge rather than fixing it ahead of time. My work draws on reinforcement learning, evolutionary computation, and artificial life.",
  "I am advised by Pulkit Agrawal in the Improbable AI Lab. Previously, I was an undergrad at UMass Amherst advised by Lee Spector and Scott Niekum. I've also had the pleasure of collaborating with Stefanos Nikolaidis at USC and Katia Sycara at CMU.",
  "My work is supported by the NSF Graduate Research Fellowship."
];

var EMAIL = "ryanbb [at] mit [dot] edu";

/* ── tiny helpers ──────────────────────────────────────────── */

var $ = function (s) { return document.querySelector(s); };
function el(tag, cls, html) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}
function pad(s, n) {
  var out = String(s);
  while (out.length < n) out += " ";
  return out;
}
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function markAuthors(s) {
  return esc(s).replace(/Ryan Bahlous-Boldi(\*?)/g, '<span class="me">Ryan Bahlous-Boldi$1</span>');
}
function venueYear(p) {
  return p.year ? p.venue + " · " + p.year : p.venue;
}
function shortVenue(p) {
  if (/GECCO 2026/.test(p.venue)) return "GECCO 2026";
  if (/GECCO 2025/.test(p.venue)) return "GECCO 2025";
  if (/Reinforcement Learning Journal/.test(p.venue)) return "RLC 2025 · RLJ";
  return "arXiv " + (p.year || "");
}

/* ── documents ─────────────────────────────────────────────── */

var DOCS = {};

DOCS.about = {
  file: "about.md", ext: "md", path: "~ / about.md",
  title: "About", locked: true,
  render: function () {
    var d = el("div", "doc");
    var cards = PAPERS.map(function (p) {
      return '<button class="pcard" data-open="' + p.id + '">' +
        '<span class="pcard-fig"><img src="' + p.img + '" alt="' + esc(p.alt) + '" loading="lazy"></span>' +
        '<span class="pcard-body">' +
          '<span class="pcard-venue">' + esc(shortVenue(p)) + '</span>' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<span class="go">Read <span aria-hidden="true">→</span></span>' +
        '</span></button>';
    }).join("");

    d.innerHTML =
      '<div class="crumb"><b>~</b><span class="sep">/</span><b>about.md</b>' +
        '<span class="sep">·</span><span>last modified Aug 18, 2026</span></div>' +

      '<section class="hero">' +
        '<div>' +
          '<h1 class="hero-name">Ryan <span class="surname">Bahlous-Boldi</span></h1>' +
          '<div class="hero-pron">/ bah-LOOSE BOWL-dee /</div>' +
          '<p class="hero-lede">PhD student at MIT building learning systems that <em>never stop exploring</em>: machines that keep generating new problems and new skills instead of settling on one answer.</p>' +
          '<div class="chips">' +
            '<span class="chip b"><span class="dot" style="background:#7c9dff"></span> MIT CSAIL</span>' +
            '<span class="chip m"><span class="dot" style="background:#4fd6b8"></span> Improbable AI Lab</span>' +
            '<span class="chip a"><span class="dot" style="background:#ffb457"></span> NSF Graduate Research Fellow</span>' +
          '</div>' +
          '<div class="btnrow">' +
            '<a class="btn primary" href="../../pdfs/cv.pdf" target="_blank" rel="noopener">Curriculum vitae <span class="arr">↗</span></a>' +
            '<a class="btn" href="https://scholar.google.com/citations?user=-1bygdgAAAAJ&hl=en" target="_blank" rel="noopener">Scholar <span class="arr">↗</span></a>' +
            '<a class="btn" href="https://github.com/ryanboldi" target="_blank" rel="noopener">GitHub <span class="arr">↗</span></a>' +
            '<a class="btn" href="https://ryanboldi.github.io/blog/" target="_blank" rel="noopener">Blog <span class="arr">↗</span></a>' +
            '<button class="btn" data-open="contact">Contact</button>' +
          '</div>' +
        '</div>' +
        '<figure class="portrait-card" style="margin:0">' +
          '<img src="assets/portrait.png" alt="Portrait of Ryan Bahlous-Boldi" width="820" height="820">' +
          '<figcaption class="pc-cap"><span>portrait.png</span><span>820 × 820</span></figcaption>' +
        '</figure>' +
      '</section>' +

      '<section class="work">' +
        '<h2 class="sec-label">Selected work · ' + PAPERS.length + ' papers</h2>' +
        '<div class="cards">' + cards + '</div>' +
      '</section>' +

      '<section class="split">' +
        '<div class="prose">' +
          '<h2 class="sec-label">Research</h2>' +
          '<p>' + esc(BIO[0]) + '</p>' +
          '<p>' + esc(BIO[1]) + '</p>' +
          '<p>' + esc(BIO[2]) + '</p>' +
        '</div>' +
        '<aside class="rail">' +
          '<div class="rail-card"><h4>Working on</h4><ul class="rail-list">' +
            '<li><span class="k">▹</span><span>Open-ended learning</span></li>' +
            '<li><span class="k">▹</span><span>Continual learning</span></li>' +
            '<li><span class="k">▹</span><span>Reinforcement learning</span></li>' +
            '<li><span class="k">▹</span><span>Evolutionary computation</span></li>' +
            '<li><span class="k">▹</span><span>Artificial life</span></li>' +
          '</ul></div>' +
          '<div class="rail-card"><h4>Advisors &amp; collaborators</h4><ul class="rail-list">' +
            '<li><span class="k">›</span><div><b>Pulkit Agrawal</b><span>MIT · Improbable AI Lab</span></div></li>' +
            '<li><span class="k">›</span><div><b>Lee Spector · Scott Niekum</b><span>UMass Amherst · undergrad</span></div></li>' +
            '<li><span class="k">›</span><div><b>Stefanos Nikolaidis</b><span>USC</span></div></li>' +
            '<li><span class="k">›</span><div><b>Katia Sycara</b><span>CMU</span></div></li>' +
          '</ul></div>' +
        '</aside>' +
      '</section>';
    return d;
  }
};

PAPERS.forEach(function (p) {
  DOCS[p.id] = {
    file: p.file, ext: "md", path: "~ / papers / " + p.file, title: p.title, paper: p,
    render: function () {
      var d = el("div", "doc");
      var linkBtns = p.links.map(function (l, i) {
        return '<a class="btn' + (i === 0 ? " primary" : "") + '" href="' + l.url + '" target="_blank" rel="noopener">' +
          esc(l.label) + ' <span class="arr">↗</span></a>';
      }).join("");

      d.innerHTML =
        '<div class="crumb"><b>~</b><span class="sep">/</span><b>papers</b><span class="sep">/</span><b>' + esc(p.file) + '</b></div>' +
        '<header class="paper-head">' +
          '<div class="badges"><span class="badge">' + esc(venueYear(p)) + '</span>' +
            (p.links.some(function (l) { return l.label === "Code"; }) ? '<span class="badge alt">code available</span>' : '') +
          '</div>' +
          '<h1 class="paper-title">' + esc(p.title) + '</h1>' +
          '<div class="authors">' + markAuthors(p.authors) + '</div>' +
          '<div class="btnrow">' + linkBtns + '</div>' +
        '</header>' +
        '<div class="paper-grid">' +
          '<div>' +
            '<div class="tldr"><h4>In one paragraph</h4><p>' + esc(p.tldr) + '</p></div>' +
            '<div class="meta-table">' +
              '<div class="meta-row"><span class="mk">venue</span><span class="mv">' + esc(p.venue) + '</span></div>' +
              '<div class="meta-row"><span class="mk">authors</span><span class="mv">' + markAuthors(p.authors) + '</span></div>' +
              '<div class="meta-row"><span class="mk">links</span><span class="mv">' +
                p.links.map(function (l) { return '<a href="' + l.url + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>'; }).join(" · ") +
              '</span></div>' +
              '<div class="meta-row"><span class="mk">terminal</span><span class="mv">cat ' + p.id + '</span></div>' +
            '</div>' +
          '</div>' +
          '<figure class="figure" style="margin:0">' +
            '<div class="f-img"><img src="' + p.img + '" alt="' + esc(p.alt) + '" loading="lazy"></div>' +
            '<figcaption><span>figure · ' + esc(p.id) + '</span><span>' + esc(shortVenue(p)) + '</span></figcaption>' +
          '</figure>' +
        '</div>';
      return d;
    }
  };
});

DOCS.news = {
  file: "news.log", ext: "log", path: "~ / news.log", title: "News",
  render: function () {
    var d = el("div", "doc");
    var rows = NEWS.map(function (n) {
      return '<div class="logrow">' +
        '<div class="logdate">' + esc(n.date) + '</div>' +
        '<div class="logtag ' + n.tag + '">' + n.tag.toUpperCase() + '</div>' +
        '<div class="logtext">' + n.html + '</div>' +
      '</div>';
    }).join("");
    d.innerHTML =
      '<div class="crumb"><b>~</b><span class="sep">/</span><b>news.log</b><span class="sep">·</span><span>' + NEWS.length + ' entries · newest first</span></div>' +
      '<h1 class="paper-title" style="margin-bottom:26px">Recent updates</h1>' +
      '<div class="logwrap">' + rows + '</div>';
    return d;
  }
};

DOCS.contact = {
  file: "contact.card", ext: "card", path: "~ / contact.card", title: "Contact",
  render: function () {
    var d = el("div", "doc");
    var cells = LINKS.map(function (l) {
      var ext = /^https?:/.test(l.url) || /\.pdf$/.test(l.url);
      return '<a class="linkcell" href="' + l.url + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' +
        '<span>' + esc(l.label) + '<span class="sub">' + esc(l.sub) + '</span></span>' +
        '<span class="arr" aria-hidden="true">↗</span></a>';
    }).join("");
    d.innerHTML =
      '<div class="crumb"><b>~</b><span class="sep">/</span><b>contact.card</b></div>' +
      '<div class="contact-grid">' +
        '<div>' +
          '<h2 class="sec-label">Email</h2>' +
          '<p class="big-mail">' + esc(EMAIL) + '</p>' +
          '<p style="font-family:var(--sans);font-size:14px;line-height:1.7;color:#c3cadd;max-width:52ch;margin:0">' +
            'Written out to keep the crawlers away. I read everything, and I like hearing from people about open-ended learning, quality-diversity, or anything adjacent.' +
          '</p>' +
          '<div class="linklist">' + cells + '</div>' +
        '</div>' +
        '<aside class="rail">' +
          '<div class="rail-card"><h4>Find me at</h4><ul class="rail-list">' +
            '<li><span class="k">›</span><div><b>Improbable AI Lab</b><span>MIT CSAIL, Cambridge MA</span></div></li>' +
            '<li><span class="k">›</span><div><b>Advisor: Pulkit Agrawal</b><span>EECS, MIT</span></div></li>' +
          '</ul></div>' +
          '<div class="rail-card"><h4>Say the name</h4><ul class="rail-list">' +
            '<li><span class="k">▹</span><span>bah-LOOSE BOWL-dee</span></li>' +
          '</ul></div>' +
          '<div class="rail-card"><h4>Jump to a paper</h4><ul class="rail-list">' +
            PAPERS.map(function (p) {
              return '<li><span class="k">›</span><button class="railbtn" data-open="' + p.id + '">' + esc(p.file) + '</button></li>';
            }).join("") +
          '</ul></div>' +
        '</aside>' +
      '</div>';
    return d;
  }
};

/* ── file tree ─────────────────────────────────────────────── */

var TREE = [
  { kind: "file", id: "about" },
  { kind: "group", label: "papers", ids: PAPERS.map(function (p) { return p.id; }) },
  { kind: "file", id: "news" },
  { kind: "file", id: "contact" },
  { kind: "link", label: "cv.pdf", ext: "pdf", url: "../../pdfs/cv.pdf" }
];

var caret = '<svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var folder = '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M1.6 4.2A1.2 1.2 0 012.8 3h3.1l1.3 1.5h5A1.2 1.2 0 0113.4 5.7v6.1a1.2 1.2 0 01-1.2 1.2H2.8a1.2 1.2 0 01-1.2-1.2z" fill="currentColor" opacity=".55"/></svg>';

function extTag(ext) { return '<span class="ext ' + ext + '">' + ext.toUpperCase() + '</span>'; }

function buildTree() {
  var t = $("#tree");
  t.innerHTML = "";
  TREE.forEach(function (node) {
    if (node.kind === "file") {
      t.appendChild(fileBtn(node.id, DOCS[node.id]));
    } else if (node.kind === "link") {
      var a = el("a", "tw-file", extTag(node.ext) + '<span class="fname">' + node.label + "</span>" + '<span class="out">↗</span>');
      a.href = node.url; a.target = "_blank"; a.rel = "noopener";
      t.appendChild(a);
    } else {
      var g = el("div", "tree-group");
      var head = el("button", "tw-caret", caret + folder + '<span class="fname">' + node.label + "</span>" +
        '<span class="out">' + node.ids.length + "</span>");
      head.setAttribute("aria-expanded", "true");
      var kids = el("div", "tw-children");
      node.ids.forEach(function (id) { kids.appendChild(fileBtn(id, DOCS[id])); });
      head.addEventListener("click", function () {
        g.classList.toggle("closed");
        head.setAttribute("aria-expanded", g.classList.contains("closed") ? "false" : "true");
      });
      g.appendChild(head); g.appendChild(kids);
      t.appendChild(g);
    }
  });
}

function fileBtn(id, doc) {
  var b = el("button", "tw-file", extTag(doc.ext) + '<span class="fname">' + doc.file + "</span>");
  b.dataset.id = id;
  b.addEventListener("click", function () { openDoc(id); closeDrawer(); });
  return b;
}

/* ── tabs + panes ──────────────────────────────────────────── */

var open = ["about", "news"];
var active = "about";

function openDoc(id, opts) {
  if (!DOCS[id]) return;
  if (open.indexOf(id) === -1) open.push(id);
  active = id;
  renderTabs();
  renderPane();
  syncTree();
  $("#stDoc").textContent = DOCS[id].file;
  if (!(opts && opts.quiet)) $("#pane").scrollTop = 0;
}

function closeDoc(id) {
  if (DOCS[id].locked) return;
  var i = open.indexOf(id);
  if (i === -1) return;
  open.splice(i, 1);
  if (active === id) active = open[Math.max(0, i - 1)] || "about";
  if (open.indexOf(active) === -1) { active = "about"; if (open.indexOf("about") === -1) open.unshift("about"); }
  renderTabs(); renderPane(); syncTree();
  $("#stDoc").textContent = DOCS[active].file;
}

function renderTabs() {
  var strip = $("#tabstrip");
  strip.innerHTML = "";
  open.forEach(function (id) {
    var doc = DOCS[id];
    var t = el("button", "tab" + (id === active ? " active" : ""));
    t.setAttribute("role", "tab");
    t.setAttribute("aria-selected", id === active ? "true" : "false");
    t.innerHTML = extTag(doc.ext) + '<span>' + doc.file + '</span>';
    var x = el("span", "x" + (doc.locked ? " locked" : ""), "×");
    x.setAttribute("role", "button");
    x.setAttribute("aria-label", "Close " + doc.file);
    x.addEventListener("click", function (e) { e.stopPropagation(); closeDoc(id); });
    t.appendChild(x);
    t.addEventListener("click", function () { openDoc(id); });
    strip.appendChild(t);
  });
  var at = strip.querySelector(".tab.active");
  if (at && at.scrollIntoView) at.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function renderPane() {
  var pane = $("#pane");
  pane.innerHTML = "";
  pane.appendChild(DOCS[active].render());
}

function syncTree() {
  Array.prototype.forEach.call(document.querySelectorAll(".tw-file[data-id]"), function (b) {
    b.classList.toggle("active", b.dataset.id === active);
  });
}

/* delegated: any element with data-open opens a doc */
document.addEventListener("click", function (e) {
  if (!e.target.closest) return;
  var a = e.target.closest("a[href^='http']");
  if (a && !a.target) { a.target = "_blank"; a.rel = "noopener"; }
  var t = e.target.closest("[data-open]");
  if (t) { openDoc(t.dataset.open); }
});

/* ── terminal ──────────────────────────────────────────────── */

var out = $("#termOut");
var input = $("#termInput");
var history = [];
var hIdx = -1;

function line(html, cls) {
  var n = el("div", "l" + (cls ? " " + cls : ""), html);
  out.appendChild(n);
  return n;
}
function blank() { line("&nbsp;"); }
function scrollTerm() { var b = $("#termBody"); b.scrollTop = b.scrollHeight; }
function echo(cmd) {
  line('<span class="prompt"><span class="p-user">ryan@mit</span><span class="p-path">~/research</span><span class="p-sig">$</span></span> <span class="hl">' + esc(cmd) + "</span>", "cmd");
}

function resolvePaper(q) {
  if (!q) return null;
  q = q.toLowerCase().replace(/\.md$/, "").trim();
  for (var i = 0; i < PAPERS.length; i++) {
    var p = PAPERS[i];
    if (p.id === q || p.file.replace(/\.md$/, "") === q) return p;
  }
  for (var j = 0; j < PAPERS.length; j++) {
    var p2 = PAPERS[j];
    if (p2.title.toLowerCase().indexOf(q) !== -1) return p2;
    for (var k = 0; k < p2.keys.length; k++) if (p2.keys[k].indexOf(q) === 0) return p2;
  }
  return null;
}

var HELP = [
  ["whoami", "who is this person"],
  ["ls / ls papers", "list what is in the workspace"],
  ["cat <paper>", "read a paper summary (vpo, dns, drq, popl, dyncomp)"],
  ["open <page>", "open about, news, contact or cv"],
  ["news", "recent updates"],
  ["links", "cv, scholar, github, twitter, blog"],
  ["email", "how to reach me"],
  ["clear", "clear the terminal"]
];

function run(raw) {
  var cmd = raw.trim();
  if (!cmd) { echo(""); return; }
  echo(cmd);
  history.unshift(cmd); hIdx = -1;

  var parts = cmd.split(/\s+/);
  var c = parts[0].toLowerCase();
  var arg = parts.slice(1).join(" ").toLowerCase();

  switch (c) {
    case "help":
    case "?":
      line('<span class="g">Commands</span>');
      HELP.forEach(function (h) {
        line('  <span class="k">' + esc(pad(h[0], 20)).replace(/ /g, "&nbsp;") + '</span>' +
             '<span class="dim">' + esc(h[1]) + "</span>");
      });
      line('<span class="dim">Everything here is also clickable in the sidebar.</span>');
      break;

    case "whoami":
      whoami();
      break;

    case "ls":
    case "dir":
      if (arg.indexOf("paper") === 0) {
        PAPERS.forEach(function (p) {
          line('  <span class="a">' + esc(pad(shortVenue(p), 15)).replace(/ /g, "&nbsp;") + '</span>' +
               '<span class="k">' + esc(pad(p.file, 32)).replace(/ /g, "&nbsp;") + '</span>' +
               '<span class="dim">' + esc(p.title.slice(0, 44)) + (p.title.length > 44 ? "…" : "") + "</span>");
        });
        line('<span class="dim">' + PAPERS.length + ' files. Read one with </span><span class="g">cat vpo</span>');
      } else {
        line('  <span class="k">about.md</span>&nbsp;&nbsp;<span class="k">news.log</span>&nbsp;&nbsp;<span class="k">contact.card</span>&nbsp;&nbsp;<span class="m">papers/</span>&nbsp;&nbsp;<span class="a">cv.pdf</span>');
        line('<span class="dim">Try </span><span class="g">ls papers</span>');
      }
      break;

    case "cat":
    case "read":
    case "less": {
      var p = resolvePaper(arg);
      if (!p) { line('cat: ' + esc(arg || "(nothing)") + ': no such paper. Try <span class="g">ls papers</span>', "err"); break; }
      line('<span class="a">' + esc(p.title) + "</span>");
      line('<span class="dim">' + esc(venueYear(p)) + "</span>");
      line(esc(p.tldr));
      line('<span class="dim">opened ' + esc(p.file) + " in the editor →</span>");
      openDoc(p.id);
      break;
    }

    case "open":
    case "cd": {
      var target = arg.replace(/[\/\.].*$/, "");
      if (!target || target === "~" || target === "about") { openDoc("about"); line('<span class="dim">opened about.md</span>'); break; }
      if (target === "news") { openDoc("news"); line('<span class="dim">opened news.log</span>'); break; }
      if (target === "contact" || target === "email") { openDoc("contact"); line('<span class="dim">opened contact.card</span>'); break; }
      if (target === "cv") { window.open("../../pdfs/cv.pdf", "_blank"); line('<span class="dim">opening pdfs/cv.pdf in a new tab…</span>'); break; }
      if (target === "blog") { window.open("https://ryanboldi.github.io/blog/", "_blank"); line('<span class="dim">opening the blog in a new tab…</span>'); break; }
      var pp = resolvePaper(arg);
      if (pp) { openDoc(pp.id); line('<span class="dim">opened ' + esc(pp.file) + "</span>"); break; }
      line("open: " + esc(arg) + ": not found", "err");
      break;
    }

    case "news":
      NEWS.slice(0, 4).forEach(function (n) {
        var text = n.html.replace(/<[^>]+>/g, "");
        line('  <span class="a">' + esc(pad(n.date, 14)).replace(/ /g, "&nbsp;") + '</span><span class="dim">' + esc(pad("[" + n.tag + "]", 12)).replace(/ /g, "&nbsp;") + "</span>" + esc(text.slice(0, 80)) + (text.length > 80 ? "…" : ""));
      });
      line('<span class="dim">opened news.log in the editor →</span>');
      openDoc("news");
      break;

    case "papers":
      PAPERS.forEach(function (p) {
        line('  <span class="a">' + esc(pad(shortVenue(p), 15)).replace(/ /g, "&nbsp;") + '</span>' +
             '<span class="k">' + esc(pad(p.file, 32)).replace(/ /g, "&nbsp;") + '</span>' +
             '<span class="dim">' + esc(p.title.slice(0, 44)) + (p.title.length > 44 ? "…" : "") + "</span>");
      });
      line('<span class="dim">' + PAPERS.length + ' files. Read one with </span><span class="g">cat vpo</span>');
      break;

    case "links":
      LINKS.forEach(function (l) {
        line('  <span class="k">' + esc(pad(l.label, 18)).replace(/ /g, "&nbsp;") + '</span><span class="dim">' + esc(l.url) + "</span>");
      });
      break;

    case "email":
    case "contact":
      line('<span class="g">' + esc(EMAIL) + "</span>");
      line('<span class="dim">opened contact.card →</span>');
      openDoc("contact");
      break;

    case "cv":
      window.open("../../pdfs/cv.pdf", "_blank");
      line('<span class="dim">opening pdfs/cv.pdf in a new tab…</span>');
      break;

    case "clear":
      out.innerHTML = "";
      return;

    case "pwd":
      line("/home/ryan/research");
      break;

    case "date":
      line(new Date().toString());
      break;

    case "sudo":
      line("nice try. open-ended systems do not take orders.", "a");
      break;

    case "exit":
    case "quit":
      line('<span class="dim">there is no exit from open-ended learning.</span>');
      break;

    default:
      line(esc(c) + ": command not found. Type <span class=\"g\">help</span> for the list.", "err");
  }
  blank();
}

function whoami(compact) {
  line('<span class="g">Ryan Bahlous-Boldi</span> <span class="dim">· PhD student, MIT CSAIL (Improbable AI Lab)</span>');
  line('Open-ended &amp; continual learning <span class="dim">·</span> reinforcement learning <span class="dim">·</span> evolutionary computation' + (compact ? '' : ' <span class="dim">·</span> artificial life'));
  if (!compact) line('<span class="dim">Advised by Pulkit Agrawal. Supported by the NSF Graduate Research Fellowship.</span>');
}

/* preloaded session, staggered in so the terminal reads as alive */
function boot() {
  var narrow = window.innerWidth <= 760;
  var steps = [
    function () { echo("whoami"); },
    function () { whoami(narrow); blank(); },
    function () {
      line(narrow
        ? '<span class="dim">Type </span><span class="g">help</span><span class="dim"> or </span><span class="g">cat vpo</span><span class="dim">.</span>'
        : '<span class="dim">Type </span><span class="g">help</span><span class="dim">, </span><span class="g">cat vpo</span><span class="dim"> to read a paper, or click a file on the left.</span>');
      blank();
    }
  ];
  var i = 0;
  (function step() {
    if (i >= steps.length) { scrollTerm(); return; }
    steps[i++]();
    scrollTerm();
    setTimeout(step, 260);
  })();
}

function sizeInput() {
  input.style.width = Math.max(1, input.value.length + 1) + "ch";
}
input.addEventListener("input", sizeInput);
sizeInput();

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    var v = input.value;
    input.value = ""; sizeInput();
    run(v);
    scrollTerm();
  } else if (e.key === "ArrowUp") {
    if (history.length) { hIdx = Math.min(hIdx + 1, history.length - 1); input.value = history[hIdx]; sizeInput(); e.preventDefault(); }
  } else if (e.key === "ArrowDown") {
    if (hIdx > 0) { hIdx--; input.value = history[hIdx]; } else { hIdx = -1; input.value = ""; }
    sizeInput(); e.preventDefault();
  } else if (e.key === "Tab" && input.value.trim()) {
    e.preventDefault();
    var v2 = input.value.trim();
    var words = v2.split(/\s+/);
    var pool = words.length > 1
      ? PAPERS.map(function (p) { return p.id; }).concat(["papers", "about", "news", "contact", "cv", "blog"])
      : ["help", "whoami", "ls", "cat", "open", "news", "papers", "links", "email", "cv", "clear", "pwd", "date"];
    var last = words[words.length - 1].toLowerCase();
    var hit = pool.filter(function (x) { return x.indexOf(last) === 0; })[0];
    if (hit) { words[words.length - 1] = hit; input.value = words.join(" ") + " "; sizeInput(); }
  }
});

$("#termBody").addEventListener("click", function (e) {
  if (e.target.tagName === "A") return;
  if (window.getSelection && String(window.getSelection()).length) return;
  input.focus();
});

$("#termToggle").addEventListener("click", function () {
  var t = $("#terminal");
  var c = t.classList.toggle("collapsed");
  this.setAttribute("aria-expanded", c ? "false" : "true");
  if (!c) setTimeout(scrollTerm, 240);
});

/* ── command palette ───────────────────────────────────────── */

var PAL = [];
PAPERS.forEach(function (p) { PAL.push({ kind: "paper", label: p.title, sub: venueYear(p) + " · " + p.file, act: function () { openDoc(p.id); } }); });
PAL.push({ kind: "page", label: "About Ryan", sub: "about.md", act: function () { openDoc("about"); } });
PAL.push({ kind: "page", label: "News and recent updates", sub: "news.log", act: function () { openDoc("news"); } });
PAL.push({ kind: "page", label: "Contact", sub: "contact.card · " + EMAIL, act: function () { openDoc("contact"); } });
LINKS.forEach(function (l) {
  PAL.push({ kind: "link", label: l.label, sub: l.url, act: function () { window.open(l.url, "_blank", "noopener"); } });
});
NEWS.forEach(function (n) {
  var t = n.html.replace(/<[^>]+>/g, "");
  PAL.push({ kind: "news", label: t.slice(0, 70) + (t.length > 70 ? "…" : ""), sub: n.date, act: function () { openDoc("news"); } });
});

var palWrap = $("#paletteWrap"), palInput = $("#palInput"), palList = $("#palList");
var palSel = 0, palRes = [];

function hl(s, a, b) {
  return esc(s.slice(0, a)) + "<mark>" + esc(s.slice(a, b)) + "</mark>" + esc(s.slice(b));
}
function fuzzy(q, s) {
  if (!q) return { score: 0, html: esc(s) };
  var lq = q.toLowerCase(), ls = s.toLowerCase();
  var at = ls.indexOf(lq);
  if (at !== -1) {
    var boundary = at === 0 || /[\s\-:.\/(]/.test(ls[at - 1]);
    return { score: 1000 + (boundary ? 120 : 0) - at, html: hl(s, at, at + lq.length) };
  }
  var i = 0, j = 0, html = "", score = 0, run = 0, gaps = 0;
  while (i < ls.length && j < lq.length) {
    if (ls[i] === lq[j]) {
      html += "<mark>" + esc(s[i]) + "</mark>";
      run++; score += 3 + run * 2;
      if (i === 0 || /[\s\-:.\/(]/.test(ls[i - 1])) score += 10;
      j++;
    } else { html += esc(s[i]); if (run) gaps++; run = 0; }
    i++;
  }
  if (j < lq.length) return null;
  html += esc(s.slice(i));
  return { score: score - gaps * 6 - i * 0.05, html: html };
}
var KINDW = { paper: 40, page: 26, link: 14, news: 0 };

function palRender() {
  var q = palInput.value.trim();
  palRes = [];
  PAL.forEach(function (it) {
    var m = fuzzy(q, it.label);
    var m2 = m ? null : fuzzy(q, it.sub);
    var w = KINDW[it.kind] || 0;
    if (m) palRes.push({ it: it, score: m.score + w, html: m.html });
    else if (m2) palRes.push({ it: it, score: m2.score + w - 40, html: esc(it.label) });
  });
  palRes.sort(function (a, b) { return b.score - a.score; });
  if (palRes.length && palRes[0].score >= 1000) {
    palRes = palRes.filter(function (r) { return r.score >= 500; });
  }
  palRes = palRes.slice(0, 8);
  if (palSel >= palRes.length) palSel = 0;

  palList.innerHTML = "";
  if (!palRes.length) {
    palList.appendChild(el("li", "pal-empty", "Nothing matches “" + esc(q) + "”"));
    return;
  }
  palRes.forEach(function (r, i) {
    var li = el("li", "pal-item" + (i === palSel ? " sel" : ""));
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", i === palSel ? "true" : "false");
    li.innerHTML = '<span class="pi-k">' + r.it.kind + '</span>' +
      '<span class="pi-t"><b>' + r.html + "</b><span>" + esc(r.it.sub) + "</span></span>";
    li.addEventListener("mouseenter", function () { palSel = i; palRender(); });
    li.addEventListener("click", function () { r.it.act(); palClose(); });
    palList.appendChild(li);
  });
}

function palOpen() {
  palWrap.hidden = false;
  palInput.value = "";
  palSel = 0;
  palRender();
  palInput.focus();
}
function palClose() { palWrap.hidden = true; }

$("#omnibar").addEventListener("click", palOpen);
palWrap.addEventListener("click", function (e) { if (e.target === palWrap) palClose(); });
palInput.addEventListener("input", function () { palSel = 0; palRender(); });
palInput.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") { palSel = Math.min(palSel + 1, palRes.length - 1); palRender(); e.preventDefault(); }
  else if (e.key === "ArrowUp") { palSel = Math.max(palSel - 1, 0); palRender(); e.preventDefault(); }
  else if (e.key === "Enter") { if (palRes[palSel]) { palRes[palSel].it.act(); palClose(); } e.preventDefault(); }
  else if (e.key === "Escape") { palClose(); }
});

document.addEventListener("keydown", function (e) {
  if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
    e.preventDefault();
    if (palWrap.hidden) palOpen(); else palClose();
  } else if (e.key === "Escape" && !palWrap.hidden) {
    palClose();
  } else if (e.key === "/" && document.activeElement === document.body) {
    e.preventDefault(); palOpen();
  }
});

/* ── mobile drawer ─────────────────────────────────────────── */

function closeDrawer() {
  $("#sidebar").classList.remove("open");
  $("#scrim").hidden = true;
  $("#drawerBtn").setAttribute("aria-expanded", "false");
}
$("#drawerBtn").addEventListener("click", function () {
  var s = $("#sidebar");
  var openNow = s.classList.toggle("open");
  $("#scrim").hidden = !openNow;
  this.setAttribute("aria-expanded", openNow ? "true" : "false");
});
$("#scrim").addEventListener("click", closeDrawer);

/* ── status bar clock + platform key hint ──────────────────── */

function tick() {
  var d = new Date();
  var h = d.getHours(), m = d.getMinutes();
  $("#stClock").textContent = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
}
tick();
setInterval(tick, 20000);

if (/Mac|iPhone|iPad/.test(navigator.platform || "")) $("#kbdMod").textContent = "⌘";

/* ── go ────────────────────────────────────────────────────── */

buildTree();
renderTabs();
renderPane();
syncTree();
boot();

})();
