---
name: Francisco Peret — Portfolio
description: A game developer's itch.io materials (night sea, wave lines, line-drawn mate, diamonds) set as a game-boot sequence that tilts into the sea and deals the player card.
colors:
  night-river: "#0d1828"
  night-river-alt: "#0f1c2f"
  night-river-deep: "#09121f"
  panel: "#13203a"
  panel-raised: "#182333"
  hairline: "#263b5b"
  hairline-hover: "#3a5682"
  mist-text: "#c5d3e6"
  moon-text: "#edf3fb"
  muted-text: "#97a4b6"
  faint-text: "#7d8a9c"
  sky-link: "#7fb4f2"
  sky-link-strong: "#a9cdf7"
  sky-line: "rgb(127 180 242 / 0.5)"
  ember-gold: "#f2b84b"
  online-green: "#5bd69a"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 7vw, 6rem)"
    fontWeight: 200
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5vw, 4rem)"
    fontWeight: 200
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  subhead:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 1.75rem)"
    fontWeight: 300
    lineHeight: 1.15
  role:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)"
    fontWeight: 400
    letterSpacing: "0.01em"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.25
  lead:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.65
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  meta:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  label:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.12em"
  mono:
    fontFamily: "ui-monospace, Cascadia Mono, Consolas, monospace"
    fontSize: "0.8rem"
    letterSpacing: "0.1em"
rounded:
  tag: "4px"
  base: "6px"
  inset: "8px"
  panel: "10px"
  pill: "999px"
spacing:
  gutter: "20px"
  container: "1200px"
  header: "68px"
  section: "clamp(96px, 11vw, 148px)"
  section-head: "clamp(40px, 5vw, 64px)"
  card-gap: "24px"
  wip-gap: "20px"
components:
  button-primary:
    backgroundColor: "{colors.sky-link}"
    textColor: "{colors.night-river}"
    rounded: "{rounded.base}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.sky-link-strong}"
  button-ghost:
    backgroundColor: "{colors.night-river}"
    textColor: "{colors.mist-text}"
    rounded: "{rounded.base}"
    padding: "13px 22px"
  chip:
    textColor: "{colors.muted-text}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  chip-selected:
    backgroundColor: "{colors.sky-link}"
    textColor: "{colors.night-river}"
    rounded: "{rounded.pill}"
  tag:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.mist-text}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  badge:
    backgroundColor: "{colors.sky-link}"
    textColor: "{colors.night-river}"
    rounded: "{rounded.tag}"
    padding: "1px 8px"
  project-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
  project-card-body:
    padding: "18px 22px 22px"
  project-card-title:
    textColor: "{colors.moon-text}"
    typography: "{typography.title}"
  cover:
    backgroundColor: "{colors.panel-raised}"
  player-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
  facts-box:
    backgroundColor: "{colors.night-river}"
    rounded: "{rounded.inset}"
    padding: "20px"
  modal:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.mist-text}"
    rounded: "{rounded.panel}"
  email-button:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.moon-text}"
    rounded: "{rounded.base}"
    padding: "16px 24px"
  social-button:
    backgroundColor: "{colors.night-river}"
    textColor: "{colors.muted-text}"
    rounded: "{rounded.base}"
    size: "42px"
  toast:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.moon-text}"
    rounded: "{rounded.base}"
    padding: "12px 20px"
---

# Design System: Francisco Peret — Portfolio

## Overview

**Creative North Star: "The Night-Sea Boot Sequence"**

The materials are Francisco's itch.io page (franpe.itch.io): a deep night-navy ground, thin pale-blue wave lines, a line-drawn mate gourd, pale blue-grey Outfit type and a small diamond. The composition is not the itch page. It is a game booting up: a left-aligned editorial title screen over a live sea of lines, which the scroll tilts into perspective until the player card is dealt up out of the water and a HUD prompt invites the player in. The rest of the page keeps that editorial left axis: thin headings that slide up from a mask with a rule running out to a diamond, and boxed project cards that tilt and sink under the cursor like physical cards.

Density is calm and generous, on one strong left axis. Display type is thin (Outfit 200) and very large; informational and interactive type is 400–600. Structure is drawn with 1px hairlines and tonal panels. Line work in the single sky-blue accent is the decoration: the sea, the mate, rules, diamonds. Light is not a surface treatment; it exists only where the cursor is (the sea's cursor light, the Contacto light, the card glare). Screenshots and video are the proof and carry the most colour.

Dark only, by the user's decision. The user's revision-2 direction rejects reproducing the itch banner layout and the centred-hero template; the near-black + neon-lime developer palette remains an anti-reference.

**Key Characteristics:**
- Night-navy ground, tonal panels, 1px hairlines; one sky-blue accent; gold and green for status only.
- Outfit throughout: 200 for display and headings, 300 for leads and sub-heads, 400–600 for UI.
- One left axis: the hero title column, section headings, the dealt Ficha and the HUD prompt all start on the container's left edge.
- A live canvas sea in real perspective with drift, depth fog and a cursor light; SVG wave layers elsewhere.
- Diamond (◆) from one SVG token: rule terminals, nav marker, bullets, HUD prompt, timeline nodes, mate gems.
- Boxed cards (Panel, hairline, 10px) that tilt and sink toward the cursor on a spring, with a screen-blended glare.
- Motion is slow and eased, scrubbed by scroll where it narrates, paused offscreen, and removed under reduced motion.

## Colors

A single cool family: night-navy grounds, blue-grey text, one sky-blue accent, with gold and green held for status.

### Primary
- **Sky Link** (`sky-link`): the only accent. Primary button and selected chip fills, the typed hero role, HUD prompt, active tab and tab indicator, card "Ver proyecto" link, Ficha bar label and P1 badge, timeline period and nodes, sea and wave strokes, mate gems and steam, focus outline, selection, header progress hairline, caret.
- **Sky Link Strong** (`sky-link-strong`): primary button hover and the bright core of the card glare.
- **Sky Line** (`sky-line`): Sky at 50%, the colour of rules: the section rule that runs to the diamond, the hero role's hairline lead-in, the toast border.

### Tertiary
- **Ember Gold** (`ember-gold`): status dot for "en desarrollo" work (WIP sub-head and cover badges).
- **Online Green** (`online-green`): the pinging "open to work" dot in the Ficha.

### Neutral
- **Night River** (`night-river`): page ground, ghost and icon-button fills, ink on Sky fills, timeline node fill, facts box, the hero text scrim (at 72% fading to 40%).
- **Night River Alt** (`night-river-alt`): alternating section band (Habilidades, Sobre mí), bounded by hairlines at 45%.
- **Night River Deep** (`night-river-deep`): footer.
- **Panel** (`panel`): project cards, the Ficha, modal, email button.
- **Panel Raised** (`panel-raised`): covers before load, avatar and photo, tags, toast, gallery thumbs.
- **Hairline** (`hairline`): every border and divider; **Hairline Hover** (`hairline-hover`) for unselected chip hover and inline link underlines.
- **Moon Text** (`moon-text`): headings, the hero name, card titles, names, values.
- **Mist Text** (`mist-text`): body copy and the "Hola, soy" greeting.
- **Muted Text** (`muted-text`): leads, sub-heads, taglines, nav at rest, details.
- **Faint Text** (`faint-text`): meta lines, uppercase field labels, footer, hints, the scroll cue.

Placeholder art tints each project by its own `color` from the data file mixed 12% into Panel, with a static wave field in that colour. Those hues are content, not palette.

### Named Rules
**The One Sky Rule.** Sky Link is the only hue for emphasis, line work and interaction. Gold and green appear only as status dots; the Konami confetti is an easter egg, not a precedent.

**The Hairline Rule.** Borders are 1px Hairline. Hover and selection move the border toward Sky (cards to Sky at 45%); they never thicken it.

## Typography

**Display Font:** Outfit (with system-ui, sans-serif), Google Fonts variable 200–700.
**Body Font:** Outfit.
**Label/Mono Font:** ui-monospace, Cascadia Mono, Consolas; only for `kbd` keys.

**Character:** One geometric family; contrast comes from weight and size, never from pairing. The thin display reads as a game title; medium weights do the UI work.

### Hierarchy
- **Display** (200, clamp(3.2rem, 7vw, 6rem), 0.98, -0.02em): the hero name, one word per masked line, the last line indented 1.5em ("Francisco" / "Peret"). Above it the greeting "Hola, soy" is 200 at clamp(1.5rem, 2.4vw, 2.1rem) in Mist. Under 560px the name is clamp(2.7rem, 14vw, 3.6rem) with a 1em indent. Contacto's "¿Hablamos?" uses the same voice at clamp(3rem, 8vw, 6rem).
- **Headline** (200, clamp(2.3rem, 5vw, 4rem), 1.15, -0.015em): section headings, left-aligned, followed by the rule.
- **Subhead** (300, clamp(1.4rem, 2.6vw, 1.75rem)): timeline entries. The same step clusters the WIP sub-head (200, clamp(1.7rem, 3vw, 2.2rem)), the about opening line (300, clamp(1.35rem, 2.3vw, 1.7rem), 1.4) and the modal title (300, clamp(1.9rem, 4vw, 2.6rem)).
- **Role** (400, clamp(1.1rem, 1.8vw, 1.35rem), Sky): the typed hero role behind a 40px hairline and before a blinking caret. The HUD prompt is the same voice at 1.05rem, 0.04em.
- **Title** (400, 1.3rem, 1.25, Moon): project card titles (1.12rem in the WIP grid, 1rem on mobile WIP); Ficha name 1.25rem; skill names 1.22rem.
- **Lead** (300, 1.125rem): hero lead (46ch), section sub-line (1.08rem, 58ch), WIP note, Contacto line (1.15rem, 46ch).
- **Body** (400, 1.0625rem, 1.65): running copy; about text 64ch, timeline detail 60ch. Card taglines and Ficha values sit at 0.98rem.
- **Meta** (400, 0.84–0.92rem, Faint): card context line, genre lists, hints, footer, status line.
- **Label** (500, 0.7–0.78rem, 0.1–0.14em, uppercase): field names inside components (Ficha stats, facts, about blocks, modal step hints, cover badges, the Ficha bar title) and the hero scroll cue (0.75rem, 0.22em). Labels name a field; they never sit above a section heading.

### Named Rules
**The Thin Title Rule.** Anything read as a title (hero name, section headings, Contacto) is Outfit 200. Weight rises only as text becomes informational or interactive.

**The Masked Line Rule.** Display and headline text enter by sliding up from behind their own mask (`overflow: clip`), never by fading letters or blurring in.

## Layout

One container, `min(1200px, 100% - 40px)`, and one left axis. Sections pad clamp(96px, 11vw, 148px) vertically and alternate with the Night River Alt band. Every section head is a two-column grid: the heading at auto width, then a rule (min 48px) filling the rest of the line to a diamond at the container's right edge; a sub-line can span below. Gap to content clamp(40px, 5vw, 64px). The fixed header is 68px and drives `scroll-padding-top`.

**Hero (intro).** Full-bleed sea under a grid of 1.2fr / 0.8fr columns (40px gap). The left column stacks the title and role, then lead, actions and socials; a left-to-right scrim (Night River 72% → 40% at 36% → clear at 62%) keeps the text column readable over the lines. The right column holds the mate at clamp(200px, 23vw, 360px), vertically centred. A scroll cue (a 1px line with a travelling Sky segment and "Bajá") sits bottom-left on the axis. The sea fades out from 62% to 98% of the stage height.

**Pinned intro (≥900px wide and ≥620px tall, motion allowed).** The section becomes 260vh with a sticky 100vh stage that the scroll scrubs. End frame is a player-select screen: the Ficha on the left axis at 25% from the top (min(720px, 56%) wide, stats in a 2×2 grid), the mate settled on the sea at right, and the "◆ Ver proyectos ◆" HUD prompt bottom-left at 30px. Below the threshold the intro is not pinned: the Ficha follows the hero in flow (max 1040px, 72px below) and the sea still tilts with scroll up to 80%.

**Project grid.** Flex-wrap with `--cols` columns: 3 at 24px gap; the WIP grid 4 at 20px. Partial last rows stay left-aligned.

Breakpoints, as built:
- **1100px**: in the pinned end frame the Ficha body stacks (head above stats).
- **1000px**: both grids go to 2 columns.
- **899px / 900px**: the pin threshold. Below it the hero is one column, the mate shrinks to clamp(96px, 26vw, 150px) and sits top-right above the title; the scroll cue hides; the Ficha narrows to 560px and stacks with a 2×2 stats grid; about and Contacto stack, with the Contacto mate (110px) above the heading.
- **820px**: nav collapses behind a two-bar button into a dropdown panel; the nav diamond is dropped.
- **720px**: main grid 1 column; WIP stays 2 columns at 12px, title-only; skills 1 column; tabs wrap without the hairline; modal is full-screen with a single-column body.
- **560px**: smaller hero name and indent; section head gap 16px; the Ficha status wraps to its own row.

## Elevation & Depth

Depth is tonal first: ground, alt band, panel and raised panel step up in lightness and are separated by hairlines. Shadows exist only under things that are lifted or floating, and are always soft, black, large-offset and negative-spread. The second depth system is literal 3D: the sea is a projected plane, and cards rotate and sink in perspective toward the cursor. Light is a third, interactive layer, screen-blended and present only under the pointer.

### Shadow Vocabulary
- **Dealt card** (`box-shadow: 0 40px 80px -40px rgb(0 0 0 / 0.85)`): the Ficha, lifted off the sea.
- **Card hover** (`box-shadow: 0 34px 64px -34px rgb(0 0 0 / 0.85)`): project cards while the cursor tilts them.
- **Dialog** (`box-shadow: 0 40px 80px -24px rgb(0 0 0 / 0.75)`): the project modal over a `rgb(6 12 22 / 0.8)` backdrop.
- **Toast** (`box-shadow: 0 18px 40px -18px rgb(0 0 0 / 0.8)`).
- **Menu drop** (`box-shadow: 0 24px 40px -24px rgb(0 0 0 / 0.6)`): mobile nav panel.
- **Play button** (`box-shadow: 0 12px 30px -8px rgb(0 0 0 / 0.6)`): the round video-facade button.

The scrolled header is translucent ground (`rgb(13 24 40 / 0.86)`) with a 12px backdrop blur and a hairline: the one glass surface.

### Named Rules
**The Cursor Light Rule.** Light only exists under the pointer: the sea's cursor light (a soft Sky halo plus brightened strokes), the Contacto light (820px radial, screen blend), the card and Ficha glare (420px radial, screen blend). At rest nothing glows; no coloured shadows, outer glows or neon. All of it is off without a fine pointer or with reduced motion.

**The Dark Shadow Rule.** Shadows are black, soft and negative-spread, and only under lifted or floating things.

## Shapes

Gentle corners on a small scale: 4px for tags, badges, kbd and thumbs; 6px base for buttons, icon buttons, social squares, the brand mark, avatar and toast; 8px for the inset facts box; 10px for every panel (project cards, Ficha, modal, about photo); pills only for filter chips. Status dots and the play button are circles. The modal loses its corners full-screen under 720px.

The diamond is the one geometric motif, drawn from a single 8×8 SVG token in Sky: the right terminal of every section rule, the nav active marker (7px), skill and checklist bullets and HUD prompt flanks (8px). Timeline nodes are 13px outlined squares rotated 45°; the mate's gems are five small diamonds; the Konami confetti is rotated squares.

Rules are 1px Sky Line from the heading to the diamond. Covers are 16:9, clipped by the card and separated from its body by a hairline.

## Components

### Buttons
Quiet, solid, small-radius.
- **Shape:** 6px corners, 13px × 22px, 500 weight, 1rem, icon gap 10px.
- **Primary:** Sky fill, Night River ink; hover to Sky Strong with the arrow nudging 2px down.
- **Ghost:** Night River fill, Hairline border, Mist text; hover turns the border Sky and text Moon. Hidden when no CV is configured.
- **Press:** every pressable scales to 0.97 (chips 0.96, icon squares 0.94–0.95) over 160ms ease-out. Hover styles are gated behind `(hover: hover) and (pointer: fine)`.
- **Email button:** Panel fill, Hairline border, Moon text at clamp(1.02rem, 2.6vw, 1.35rem), Sky copy icon; copies the address and confirms with a toast.
- **Social squares:** 42px, Night River fill, Hairline, Muted icon; hover to Sky icon and border.

### Chips
- **Style:** pill, Hairline border, no fill, Muted text 0.94rem, 8px × 16px.
- **State:** selected (`aria-pressed`) is solid Sky with Night River ink; unselected hover lifts border to Hairline Hover and text to Moon. Filtering replays a 0.4s pop on the shown cards.

### Tags and Badges
Tags: 4px, Raised Panel, Hairline, Mist 0.86rem, for tool lists. Cover badges: 4px, translucent ground, hairline, uppercase label with a status dot, top-left on the cover. The P1 badge: 4px, Sky fill, 600 weight.

### Project Card (signature)
A boxed card that behaves like a physical one.
- **Shape:** 10px Panel with a Hairline border; 16:9 cover on top with a hairline beneath; body 18px × 22px × 22px: Moon title, faint context line, muted tagline, dot-separated genre list, Sky "Ver proyecto" link pushed to the bottom. The whole card is one button via a stretched pseudo-element on the title.
- **Tilt and sink:** under a fine pointer, the card rotates up to 5° (7° in the WIP grid) toward the cursor and sinks 18px (`perspective(1000px) … translateZ(-18px)`), chasing its target on a spring (12% per frame), and springs back on leave. A 420px screen-blended glare follows the cursor; the border goes to Sky at 45%, the card-hover shadow appears, the cover zooms +0.05, the arrow slides 4px.
- **Reveal:** the card rises 48px and fades (0.9s ease-out, staggered per column) while the cover wipes up from the bottom (`clip-path: inset(100% 0 0)` → `inset(0)`, 1.1s in-out).
- **Cover parallax:** where view timelines exist, the cover image is held at 1.12 and drifts −5% → 5% across its pass through the viewport.
- **Focus:** a 2px Sky outline 4px outside the card.
- **Placeholder art:** project-tinted panel, static wave field, title centred in 300.

### Player Card / Ficha (signature)
"Ficha de jugador": a 10px Panel with the dealt-card shadow and the same tilt (6°, sink 10px) and glare. A top bar (hairline below) carries the uppercase Sky label, a status line with a pinging dot, and the P1 badge. The body pairs a 60px avatar (static wave field and initials when there is no photo) with name and place, divided by a vertical hairline from a four-column stats list of faint uppercase terms over Moon values. In the pinned end frame its stats are a 2×2 grid whose rows light in sequence.

### HUD Prompt
"◆ Ver proyectos ◆": Sky text at 1.05rem, 0.04em, between two 8px diamonds, pulsing to 55% opacity every 1.8s like a game's "press start". Only in the pinned intro, bottom-left on the axis; on hover it stops pulsing and underlines.

### Section Heading
Left-aligned Headline whose text slides up 110% from its mask on reveal (1.1s ease-out), with a 1px Sky Line rule filling the rest of the row to an 8px diamond. Where view timelines exist the rule draws left to right, scrubbed by its own scroll position (entry 30% → cover 42%).

### Navigation
Fixed 68px header, transparent at top; after 8px of scroll it takes the translucent scrim and a hairline. Brand is a 34px hairline square with initials in Sky beside the name. Links are 0.95rem Muted, Moon on hover and when active; the active section shows a 7px diamond below. A 1px Sky progress hairline under the header fills with page scroll where scroll timelines exist. Under 820px a two-bar button opens a dropdown panel and the bars cross into an X.

### Tabs
Left-aligned underline tabs: Muted labels, active in Sky, a 2px Sky indicator sliding along the top of a hairline row (0.3s in-out). Panels pop in; skill rows rise in sequence 50ms apart.

### Skill Rows
Two columns (one under 720px) of rows divided by hairlines: diamond bullet and Moon name, muted detail indented to the name.

### Timeline
A 1px vertical line fading from Sky to Hairline, 13px outlined diamond nodes on Night River. Entries: subhead title, place in Mist, period in Sky, detail in Muted.

### About
4:5 portrait in a 10px Raised Panel frame (wave field and 200-weight initials without a photo), then a 300 Moon opening line, muted paragraphs and label-headed tag blocks above a hairline.

### Contact
Display heading, lead line, email button, faint hint with an underlined link, socials; a second mate (stroke 0.9) draws itself in the right column. Two SVG wave layers drift behind, masked from transparent at 25% to solid at 90%, rising into place on view entry, with the screen-blended cursor light over them.

### Modal
Native `dialog` up to 980px, 10px, Panel, Hairline, dialog shadow; enters with translateY 16px + scale 0.97 (0.3s), exits in 0.2s. Gallery stage on near-black with 96px 16:9 thumbs (4px) at 55% opacity, active thumb full with a 2px Sky border. Body is main text plus a 280px facts box (8px, Night River, uppercase terms), diamond checklist, full-width actions; previous/next steps are hairline buttons with uppercase hints. Full-screen under 720px.

### Toast
Bottom-centre, Raised Panel, 6px, Sky Line border, toast shadow; slides up 0.4s, clears after 2.4s.

### Sea (signature)
A 2D canvas, not an image. The wave function of the itch banner (two summed sines, 1440-unit period) is laid out as a plane 1.9× the stage height in two layers (72 rows and 30 fainter rows, 1px strokes, drifting in opposite directions) and projected in real perspective: rotation 0 → 62° around a horizon at 42% height, depth 1100. Rows thin and fade with distance (fog), lines off the top are culled, and DPR is capped at 2. Under a fine pointer a cursor light (440px Sky halo at 15% plus a 300px gradient that brightens the strokes it crosses) follows the pointer with easing. On load the sea wipes in from the left (clip-path, 1.8s in-out). It stops drawing when offscreen, when the tab is hidden, and never animates under reduced motion.

### Wave Layers
Generated SVG from the same wave function, used for Contacto (two drifting layers at 200% width, 95–140s, back layer reversed, paused offscreen) and as static fields in placeholders, avatar and photo.

### Mate (signature)
A generated SVG gourd (120×160) drawn in Mist strokes with round caps: seven `pathLength`-normalised lines draw in 140ms apart (1.5s in-out), then the body fill and details fade in, five Sky diamond gems sit on a dotted band, and two Sky steam wisps loop every 4.2s. Stroke weight is a variable (0.62 hero, 1.1 small hero, 0.9 Contacto, 1.3 small Contacto). The hero mate bobs ±10px and ±1.5° over 7s.

### Motion Grammar
- **Easing:** ease-out `cubic-bezier(0.23, 1, 0.32, 1)` for entrances, reveals, hovers and press; ease-in-out `cubic-bezier(0.77, 0, 0.175, 1)` for draws and wipes (sea-in, mate lines, cover wipe, tab indicator, scroll cue). The intro scrub uses cubic ease-out and ease-in-out on scroll progress.
- **Load:** title lines rise from their masks 120ms apart from 200ms (1.15s); the role rises at 650ms and types (75ms per letter, 35ms delete, 1.9s hold); lead, actions and socials rise from 750ms, 90ms apart; the cue fades in at 1.6s.
- **Pinned intro timeline (scroll progress p):** sea tilt 0–0.62; title lifts 10vh and scales to 0.88 over 0–0.45 and fades over 0.22–0.42; lead and actions rise 90px and fade over 0.16–0.34; HUD prompt fades in over 0.24–0.32; mate settles (+2vw, +2vh, scale 0.78) over 0.10–0.70; the Ficha is dealt from 50vh below and 40° back over 0.28–0.70, visible from 0.32–0.46; stat rows light from 0.50, 0.05 apart; the cue leaves by 0.06. The typed role freezes whole while scrubbing.
- **Scroll reveal:** `.reveal` fades, rises 24px and unblurs 6px (0.9s ease-out, 80ms stagger), once at 12% visibility.
- **Scroll-driven (behind `@supports (animation-timeline: view())` and reduced-motion no-preference):** header progress, section rule draw, cover parallax, Contacto tide.
- **Reduced motion:** all durations collapse to 0.01ms with one iteration; reveals are shown immediately; the intro is not pinned; the sea is drawn once; no tilt, glare-follow or cursor light; the role does not type; the Konami burst is skipped.

## Do's and Don'ts

### Do:
- **Do** keep the page dark only, on Night River, as the user decided.
- **Do** compose on the container's left axis: left-aligned headings with a Sky Line rule to a diamond, the hero title column on the left, the Ficha and HUD prompt on the same edge.
- **Do** set titles in Outfit 200 and bring them in from a mask; use 400–600 for UI.
- **Do** draw structure with 1px Hairline borders and tonal steps (ground, alt band, panel, raised panel).
- **Do** box interactive cards as 10px Panels with a hairline, and give them the spring tilt, sink and screen-blended glare under a fine pointer.
- **Do** use the `--diamond` token for bullets, markers and rule terminals.
- **Do** build wave fields from the shared wave function, in perspective on canvas for the hero sea, and stop any animated field when it is offscreen or the tab is hidden.
- **Do** keep a scrim behind any text column that sits over the sea.
- **Do** gate hover, tilt and cursor light behind `(hover: hover) and (pointer: fine)` and give every pressable a 0.94–0.97 press scale.
- **Do** put scroll-scrubbed motion behind `@supports` or a size/motion check and keep all content visible and unpinned without it.

### Don't:
- **Don't** add a light theme.
- **Don't** centre the hero title or reproduce the itch banner layout; the itch page supplies materials, not composition.
- **Don't** use the near-black + neon-lime developer palette.
- **Don't** add static glows, coloured shadows or neon; light appears only under the cursor, and blur only in the scrolled header.
- **Don't** use Ember Gold or Online Green as decoration; they mark status only.
- **Don't** place uppercase labels above section headings; labels name fields inside components.
