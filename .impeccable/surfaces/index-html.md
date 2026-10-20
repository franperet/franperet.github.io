---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["css/style.css","js/main.js"]
---

# Portfolio home (index.html)

Scope: the single-page portfolio. Mode: Experience (the games lead), with a Persuade duty: a studio recruiter must get name, role and contact in the first viewport.

Audience and job: studio recruiters skimming for a junior; they open a project, watch it, and write. Constraints: keep every piece of content and the section order (hero + ficha, Proyectos with in-progress games in the same grid and an "En desarrollo" filter, Habilidades, Trayectoria, Sobre mí, Contacto). Dark only. Static HTML/CSS/JS, content from js/data.js.

Revision 2 (user feedback): the itch.io materials stay, but the composition must not look like the itch page. Restore the mouse-following light and the 3D tilt/sink on info cards. The intro must be a real scroll-driven sequence and feel professional.

## Direction contract

THESIS: The itch.io materials (night navy, wave lines, line-drawn mate, diamonds) carry a game-boot sequence: a title screen that the camera tilts down into a night sea, where the player card is dealt. It refuses both the itch banner layout and the centred-hero template.

OWN-WORLD: Ground #0D1828, panels #13203A/#182333, hairlines #263B5B, text #C5D3E6, accent #7FB4F2, gold only for "en desarrollo". Outfit throughout, thin 200 for display. 4–10px corners and pill chips, 1px hairlines, diamond ornament. Boxed panels tilt and sink under the cursor with a soft glare. A light follows the mouse over the wave fields (drawn in the hero canvas, a screen-blend layer in Contacto).

STORY: The visitor reads the name and role like a game title and scrolls. The sea tilts into perspective and the Ficha de jugador rises over it. Then they open projects, skim skills and path, read about him, and copy the email beside the mate.

FIRST VIEWPORT: Full-bleed wave sea lit by the cursor. One text block centred on the screen, left-aligned inside: staggered title "Hola, soy" / "Francisco" / indented "Peret", the typed role on its own row below behind a hairline, then lead, "Ver proyectos" and socials. A small line-drawn mate floats in the bottom-right corner as a companion, not the protagonist. A scroll cue sits bottom-left on the block edge.

FORM: Pinned by the user (the itch.io world); no concept roll was run. Seed key: none (pinned direction).

SIGNATURE MOTION: A pinned intro (desktop) scrubbed by scroll. The wave plane rotates into perspective, the title lifts and hands off, the mate stays in its corner, and the Ficha is dealt up on the text block's left edge while its stats light in sequence; a "◆ Ver proyectos ◆" HUD prompt holds the bottom-left so an action is always visible. Elsewhere: left-aligned headings whose text slides up from a mask while a rule scrubs out to a diamond. Project cards are dealt in and tilt/sink on hover. Cover images parallax. Contacto's waves rise and a second mate draws itself.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
