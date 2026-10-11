---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["css/style.css","js/main.js"]
---

# Portfolio home (index.html)

Scope: the single-page portfolio. Mode: Experience (the games lead), with a Persuade duty: a studio recruiter must get name, role and contact in the first viewport.

Audience and job: studio recruiters skimming for a junior; they open a project, watch it, and write. Constraints: keep every piece of content and the section order (hero + ficha, Proyectos + En desarrollo, Habilidades, Trayectoria, Sobre mí, Contacto). Dark only. Static HTML/CSS/JS, content from js/data.js.

## Direction contract

THESIS: The site is his itch.io page (franpe.itch.io) grown into a portfolio: the night-river banner with wind lines and the drawn mate, laid out as a game title screen. It refuses the near-black + neon-lime dev template and the split hero.

OWN-WORLD: Ground #0D1828, panels #182333, hairlines #263B5B, text #C5D3E6, links and primary #7FB4F2, a warm gold only for "en desarrollo". Outfit throughout: thin (200–300) for display, 400–600 for UI. 6px corners, 1px hairlines, no glows, no glass. Signatures: drifting wave-line fields, line-drawn mate, "◆——" ornament lines flanking headings, itch-style game grid (cover + blue title + muted text, no card box).

STORY: The visitor reads the name like a game title, sees what he does, and goes into Proyectos to open a game. Then they skim skills and path, read about him, and copy the email.

FIRST VIEWPORT: Full-bleed animated waves across the top. "Hola, soy" over "Francisco Peret" centred at up to 6rem, weight 200, flanked by ornament lines, with the mate drawing itself at the right like the itch banner. Typed role in blue below, then the lead. "Ver proyectos" is the primary action, centred, next to the CV link and socials. A wide "Ficha de jugador" panel sits at the bottom of the screen like a character-select bar.

FORM: Pinned by the user (the itch.io world); no concept roll was run. Ordered list position: pinned. Seed key: none (pinned direction).

SIGNATURE MOTION: The mate draws itself on load and the waves drift continuously. Scrolling lifts the hero waves at parallax rates and fills a progress hairline under the header. Heading ornament lines extend outward on reveal, and project covers wipe in with a clip-path. The waves rise again behind Contacto as the page closes.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
