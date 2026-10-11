---
name: Francisco Peret — Portfolio
description: A game developer's itch.io page grown into a portfolio, laid out as a game title screen on a night river.
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
  ember-gold: "#f2b84b"
  online-green: "#5bd69a"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 7vw, 6rem)"
    fontWeight: 200
    lineHeight: 1
    letterSpacing: "-0.015em"
  display-contact:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 200
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)"
    fontWeight: 200
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title-light:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 1.75rem)"
    fontWeight: 300
    lineHeight: 1.15
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 500
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
  panel: "8px"
  dialog: "10px"
  pill: "999px"
spacing:
  gutter: "20px"
  container: "1200px"
  section: "clamp(96px, 11vw, 148px)"
  grid-gap: "28px"
  grid-row: "48px"
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
  game-card-title:
    textColor: "{colors.sky-link}"
    typography: "{typography.title}"
  cover:
    backgroundColor: "{colors.panel-raised}"
    rounded: "{rounded.base}"
  player-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
  modal:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.mist-text}"
    rounded: "{rounded.dialog}"
  email-button:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.moon-text}"
    rounded: "{rounded.base}"
    padding: "16px 24px"
  social-button:
    textColor: "{colors.muted-text}"
    rounded: "{rounded.base}"
    size: "42px"
---

# Design System: Francisco Peret — Portfolio

## Overview

**Creative North Star: "The Night-River Title Screen"**

The site is Francisco's itch.io page (franpe.itch.io) grown into a portfolio. Its world is a deep night-navy river crossed by thin drifting wind lines, a line-drawn mate gourd, and pale blue-grey type; its composition is a game title screen. The name reads like a game title, centred and thin, flanked by diamond-tipped ornament lines; a "Ficha de jugador" panel sits at the foot of the first screen like a character-select bar; the games sit in a boxless itch-style grid where the screenshot is the card.

Density is calm and centred. Display type is thin (Outfit 200–300) and large; UI type is regular to semibold (400–600). Structure is drawn with 1px hairlines and tonal panels, never with glow or neon. Decoration is line work in the single sky-blue accent: wave fields, ornament lines, diamonds. The screenshots and video are the proof and get the most colour on the page.

Dark only, by the user's decision: there is no light theme and none should be added. The world explicitly rejects the near-black + neon-lime developer template and the split hero.

**Key Characteristics:**
- Night-navy ground with tonal panels and 1px hairlines; one sky-blue accent.
- Outfit throughout: 200 for display, 300 for leads and sub-titles, 400–600 for UI.
- Diamond (◆) as the only ornament glyph: ornament line tips, nav active marker, skill and checklist bullets, timeline nodes.
- Generated SVG wave-line fields: drifting behind hero and Contacto, static inside placeholder art.
- Boxless game grid: 16:9 cover, blue title, muted text, no card container.
- Motion is slow and eased (ease-out 0.23,1,0.32,1; in-out 0.77,0,0.175,1), paused offscreen, removed under reduced motion.

## Colors

A single cool family: night navy grounds, blue-grey text, one sky-blue accent, with gold and green held for status only.

### Primary
- **Sky Link** (`sky-link`): the only accent. Primary buttons, card titles, typed hero role, active tab and tab indicator, nav diamond, ornament lines and diamonds (at 50% alpha as the `--accent-line` rule colour), wave-field strokes, focus outline, selection, progress hairline, timeline nodes.
- **Sky Link Strong** (`sky-link-strong`): hover state of the primary button and card titles only.

### Tertiary
- **Ember Gold** (`ember-gold`): status dot for "en desarrollo" work only. Never a decorative accent.
- **Online Green** (`online-green`): the pinging "open to work" status dot only.

### Neutral
- **Night River** (`night-river`): page ground, ghost button fill, ink on accent fills (`--accent-ink`), timeline node fill.
- **Night River Alt** (`night-river-alt`): alternating section band, bounded by hairlines at 45% alpha.
- **Night River Deep** (`night-river-deep`): footer.
- **Panel** (`panel`): player card, modal, email button.
- **Panel Raised** (`panel-raised`): covers before load, avatar and photo placeholders, tags, toast, gallery thumbs.
- **Hairline** (`hairline`): every border and divider; **Hairline Hover** (`hairline-hover`) for unselected chip hover and inline link underlines.
- **Moon Text** (`moon-text`): headings, names, values, emphasised copy.
- **Mist Text** (`mist-text`): body copy.
- **Muted Text** (`muted-text`): leads, sub-titles, taglines, nav at rest, secondary descriptions.
- **Faint Text** (`faint-text`): meta lines, uppercase labels, footer, hints.

Placeholder art tints each project by its own `color` from the data file, mixed 12% into Panel (`color-mix(in srgb, <project colour> 12%, panel)`), with the wave field drawn in that colour. Those per-project hues live in content, not in the system palette.

### Named Rules
**The One Sky Rule.** Sky Link is the only hue used for emphasis, line work and interaction. Gold and green appear only as status dots.

**The Hairline Rule.** Borders are 1px in Hairline. Hover and selection shift the border to Sky Link; they never thicken it or add a glow.

## Typography

**Display Font:** Outfit (with system-ui, sans-serif), loaded from Google Fonts at weights 200–700.
**Body Font:** Outfit.
**Label/Mono Font:** ui-monospace, Cascadia Mono, Consolas, used only for `kbd` keys.

**Character:** One geometric family carries everything; contrast comes from weight, not from pairing. Thin display reads like the itch banner's title; medium weights do the UI work.

### Hierarchy
- **Display** (200, clamp(2.9rem, 7vw, 6rem), 1): the hero name only, set as a game title between ornament lines. Under 560px it becomes clamp(2.6rem, 13vw, 3.4rem). The "Hola, soy" line above it is 200 at clamp(1.6rem, 2.8vw, 2.3rem). Contacto's closing heading uses the same voice at clamp(3rem, 9vw, 6rem), -0.02em.
- **Headline** (200, clamp(2.1rem, 4.6vw, 3.4rem), 1.15, -0.01em): section titles, centred, with ornament lines. "En desarrollo" sub-head is 200 at clamp(1.6rem, 3vw, 2rem). Modal title is 300 at clamp(1.9rem, 4vw, 2.6rem).
- **Title** (500, 1.3rem, 1.25): game card titles in Sky Link; 1.12rem in the four-column WIP grid. Light titles (300, clamp(1.4rem, 2.6vw, 1.75rem)) for timeline entries; 400 at 1.22rem for skill names.
- **Body** (400, 1.0625rem, 1.65): running copy; about text capped at 64ch, timeline detail at 60ch, hero lead at 56ch (300, 1.125rem).
- **Label** (500, 0.72–0.78rem, 0.1–0.14em, uppercase): data-list terms (stats, facts), about block headings, modal step hints, the player card's bar title, cover status badges (0.7rem). Labels name a field inside a component; they do not sit above section headings.

### Named Rules
**The Thin Title Rule.** Anything that reads as a title screen (hero name, section headings, Contacto) is Outfit 200. Weight rises only as text becomes interactive or informational.

## Layout

Single centred column: container `min(1200px, 100% - 40px)`. Sections pad clamp(96px, 11vw, 148px) vertically, alternate with the Night River Alt band, and open with a centred head (max 820px). Content blocks narrow inside the container: player card 1040px, about 1060px, skills 980px, timeline 760px. The fixed header is 68px and drives `scroll-padding-top`.

The hero fills `100svh` and centres everything: greeting, name, typed role, lead, actions, socials, then the player card.

The game grid is a centred flex-wrap of `--cols` columns with a 28px gap and 48px row gap; the WIP grid uses 4 columns, 22px gap, 40px rows. Partial last rows centre rather than left-align.

Breakpoints, as built:
- **1100px**: the mate leaves the flank of the title and sits above it at 64px.
- **1000px**: both grids go to 2 columns.
- **900px**: player card narrows to 560px and stacks (head above a 2×2 stats grid); about stacks with the photo capped at 240px.
- **820px**: nav collapses behind a two-bar menu button into a dropdown panel; the diamond marker is dropped.
- **720px**: main grid 1 column; WIP grid stays 2 columns, 14px gap, title-only; skills 1 column; tabs wrap without the underline rule; modal goes full-screen with a single-column body.
- **560px**: ornament lines are removed and the hero name shrinks; the status line in the player card wraps to its own row.

## Elevation & Depth

Depth is tonal: ground, alt band, panel and raised panel step up in lightness, separated by hairlines. Shadows exist only on things that float above the page, are always soft, dark and negative-spread, and are never coloured.

### Shadow Vocabulary
- **Player card lift** (`box-shadow: 0 28px 56px -32px rgb(0 0 0 / 0.75)`): seats the character-select bar on the waves.
- **Dialog** (`box-shadow: 0 40px 80px -24px rgb(0 0 0 / 0.75)`): the project modal, over a `rgb(6 12 22 / 0.8)` backdrop.
- **Toast** (`box-shadow: 0 18px 40px -18px rgb(0 0 0 / 0.8)`).
- **Menu drop** (`box-shadow: 0 24px 40px -24px rgb(0 0 0 / 0.6)`): mobile nav panel.
- **Cover ring** (`box-shadow: inset 0 0 0 1px rgb(197 211 230 / 0.09)`): an inner hairline so screenshots hold their edge on the ground.

The scrolled header is a translucent ground (`rgb(13 24 40 / 0.86)`) with a 12px backdrop blur and a hairline; it is a legibility scrim for the fixed bar, the one place blur is used.

### Named Rules
**The No-Glow Rule.** No coloured shadows, outer glows or neon. Accent appears as line and fill, never as light.

## Shapes

Gentle, consistent corners: 6px base for buttons, covers, icon buttons, social squares, avatar; 8px for larger panels (player card, about photo, facts box); 10px for the modal; 4px for tags, badges, kbd and thumbs; full pill only for filter chips. Status dots and the video play button are circles.

The diamond is the system's one geometric motif, drawn from a single 8×8 SVG token (`--diamond`) in Sky Link: tips of ornament lines (7px), nav active marker (7px), skill and checklist bullets (8px). Timeline nodes are 13px outlined squares rotated 45°.

Ornament lines ("◆——") are 1px rules at 50% Sky Link capped by a diamond, flanking the hero name (40–100px) and section headings (36–100px).

Covers are clipped with `clip-path: inset(0 round 6px)` so the reveal wipe and the radius are the same shape.

## Components

### Buttons
Quiet, solid, small-radius.
- **Shape:** 6px corners, 13px × 22px padding, 500 weight, 1rem, icon gap 10px.
- **Primary:** Sky Link fill, Night River ink. Hover to Sky Link Strong; the trailing arrow nudges 2px down.
- **Ghost:** Night River fill, Hairline border, Mist text. Hover turns the border Sky Link and text Moon.
- **Press:** every pressable scales to 0.97 (icon squares 0.94–0.95) over 160ms ease-out. Hover styles are gated behind `(hover: hover) and (pointer: fine)`.
- **Email button:** Panel fill, Hairline border, Moon text at clamp(1.02rem, 2.6vw, 1.35rem), Sky icon; copies the address and confirms with a toast.

### Chips
- **Style:** pill, Hairline border, no fill, Muted text, 8px × 16px.
- **State:** selected (`aria-pressed`) is a solid Sky fill with Night River ink; unselected hover lifts border to Hairline Hover and text to Moon.

### Tags
4px corners, Raised Panel fill, Hairline border, Mist text at 0.86rem. Used for tool lists in the about blocks.

### Game Card (signature)
Itch-style and boxless: a 16:9 cover with 6px corners and an inner hairline ring, then 16px below it a faint meta line, a Sky Link title (500, 1.3rem), a muted tagline, a dot-separated genre list, and a "more" link pushed to the bottom. The whole card is one button via a stretched pseudo-element on the title. Hover zooms the cover image to 1.04 over 0.6s, underlines the title in Sky Link Strong, and slides the arrow 4px. Focus draws a 2px Sky outline 8px outside the card. Status badges sit top-left on the cover: translucent ground, hairline, uppercase label, status dot.
- **Reveal:** the cover wipes up from the bottom (`clip-path` inset 100% → 0 over 1.1s in-out) while the image settles from scale 1.14 to 1 over 1.3s; the card rises 24px without blur.
- **Placeholder art:** no screenshot means a panel tinted by the project colour, a static wave field in that colour, and the title centred in 300 weight.

### Player Card (signature)
"Ficha de jugador": an 8px Panel with the lift shadow. A top bar (hairline below) carries the uppercase Sky label, the status line with a pinging dot, and a "P1" badge (4px, Sky fill, 600). The body pairs a 56px avatar plus name and place, divided by a vertical hairline, with a four-column stats list of uppercase faint terms over Moon values. Stacks at 900px.

### Navigation
Fixed 68px header, transparent at the top; after 8px of scroll it takes the translucent scrim and a hairline. Brand is a 34px hairline square with initials in Sky beside the name. Links are 0.95rem Muted, Moon on hover and when active; the active section (tracked by IntersectionObserver) shows a 7px diamond below the link. A 1px Sky progress hairline under the header fills with page scroll where scroll timelines are supported. Below 820px a two-bar button opens a dropdown panel; the bars cross into an X.

### Tabs
Centred underline tabs: Muted labels, active in Sky, a 2px Sky indicator that slides (transform and width, 0.3s in-out) along a hairline rule. Panels pop in (opacity, scale 0.97, 0.4s); skill rows inside rise in sequence 50ms apart.

### Skill Rows
Two-column list (one under 720px) of rows divided by hairlines: a diamond bullet and Moon name (1.22rem), muted detail indented to align with the name.

### Timeline
A 1px vertical line fading from Sky to Hairline, with 13px outlined diamond nodes in Sky on Night River. Entries: light title, place in Mist, period in Sky, detail in Muted capped at 60ch.

### About Panel
Portrait at 4:5 with 8px corners on a Raised Panel; with no photo it shows the static wave field and initials in 200 weight. Text column opens with a 300-weight Moon lead, then muted paragraphs, then label-headed tag blocks above a hairline.

### Contact
A large thin heading, muted line, the email button, a faint hint with an underlined link, and socials. Two drifting wave layers rise behind it from the bottom, masked from transparent at 25% to solid at 90%.

### Modal
Native `dialog`, up to 980px, 10px corners, Panel fill, Hairline border, dialog shadow. Enters with translateY 16px + scale 0.97 (0.3s), exits in 0.2s. Gallery stage on near-black, with 96px 16:9 thumbs (4px corners) at 55% opacity; the active thumb is full opacity with a 2px Sky border. Body is main text plus a 280px facts box (8px, Night River fill, uppercase terms), diamond checklist, full-width actions. Previous/next steps are hairline buttons with uppercase hints. Full-screen with no corners under 720px. Arrow keys step between projects.

### Toast
Bottom-centre, Raised Panel, 6px, border at 50% Sky, toast shadow; slides up 0.4s and clears after 2.4s.

### Wave Fields (signature)
Generated SVG, not images: each layer is a set of thin quadratic-curve lines (two summed sines, 1440-unit period) in `currentColor` with `non-scaling-stroke` 1px and per-line opacity falling off down the stack. Animated fields use two layers at 200% width drifting with `translateX(-50%)` at different speeds (90–150s), the back layer reversed. The hero field covers the top `min(80svh, 760px)`, masked to fade by 96%; the Contacto field rises from below. Fields pause when their section is offscreen. Static fields fill placeholders.

### Motion Grammar
- **Load:** hero greeting and name letters enter staggered 35ms per letter (opacity, 0.3em lift, 8px blur, 1.1s ease-out); ornament lines draw outward from the name (clip-path, 1.2s in-out, 0.8s delay); the mate draws stroke by stroke (`pathLength` 1, 150ms apart), then its dotted band fades in and two steam wisps loop; remaining hero blocks rise in sequence from 450ms.
- **Scroll reveal:** `.reveal` elements fade, rise 24px and unblur (0.9s ease-out, 80ms stagger) once at 12% visibility; section ornament lines extend outward after them.
- **Scroll-driven (behind `@supports (animation-timeline: scroll())`, reduced-motion no-preference only):** header progress hairline; hero wave layers lift at -8% and -22% over the first viewport; hero title drifts up 56px and fades to 0.15; Contacto waves rise into place on `view()` entry.
- **Reduced motion:** all animation and transition durations collapse to 0.01ms, reveals are shown immediately, the mate is drawn statically, the role does not type, the modal closes without its exit animation, and the easter-egg burst is skipped.

## Do's and Don'ts

### Do:
- **Do** keep the page dark only, on Night River, as the user decided.
- **Do** use Outfit 200 for title-screen moments and 400–600 for UI.
- **Do** draw structure with 1px Hairline borders and tonal steps (ground, alt band, panel, raised panel).
- **Do** use the `--diamond` token for bullets, markers and ornament tips, and keep ornament lines at 50% Sky.
- **Do** generate wave fields from the shared wave function and pause any animated field when it is offscreen.
- **Do** present games as boxless cards: 16:9 cover, Sky title, muted text.
- **Do** gate hover styles behind `(hover: hover) and (pointer: fine)` and give every pressable a 0.94–0.97 press scale.
- **Do** put scroll-linked motion behind `@supports` and reduced-motion no-preference, and keep all content visible without animation.

### Don't:
- **Don't** add a light theme.
- **Don't** use the near-black + neon-lime developer palette or a split hero.
- **Don't** add glows, coloured shadows or glass panels; blur is reserved for the scrolled header scrim.
- **Don't** use Ember Gold or Online Green as decoration; they mark status only.
- **Don't** put a box, border or fill around game cards; the cover is the card.
- **Don't** place uppercase labels above section headings; labels name fields inside components.
