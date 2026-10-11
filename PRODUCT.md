# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Game studios and recruiters looking for a junior developer. They arrive from a CV, LinkedIn or itch.io link, skim for a few minutes, and need to understand quickly what Francisco builds, see the games working, and find how to contact him.

## Product Purpose
Personal portfolio of Francisco Peret, a video game development student at UADE (Argentina) looking for his first professional experience. Success is a studio opening a project, seeing real gameplay, and writing to him.

## Positioning
A student who has shipped games in both Unity (C#) and Unreal (Blueprints), in 2D and 3D, multiplayer included, plus two games programmed by hand without an engine (C# and C++ with SDL). Every project is real, playable on itch.io, and documented with what he did.

## Operating Context
Static site on GitHub Pages (franperet.github.io), no frameworks, no build step. All copy, projects and links live in `js/data.js`; `js/main.js` renders the page from it. Opens locally by double-clicking `index.html`. The site is Spanish (Rioplatense voseo).

## Capabilities and Constraints
- Sections, in order: hero with player card, Proyectos (filters, cards, "En desarrollo"), Habilidades (tabs), Trayectoria (tabs), Sobre mí, Contacto, footer.
- Project modal with gallery, video (local MP4 or YouTube), facts, links and previous/next navigation.
- Konami code easter egg, typing roles in the hero, copy-email-to-clipboard.
- The user asked to keep all current content and the section structure exactly as they are.
- CV PDF, photo and LinkedIn are not provided yet; the UI must handle them being empty.

## Brand Commitments
- The visual identity follows his itch.io page (franpe.itch.io): deep night-navy ground, pale blue-grey text, sky-blue links, the Outfit typeface, thin flowing wave lines and a line-drawn mate gourd. Confirmed by the user as the portfolio's signature.
- Dark only, like the itch page; no light theme.
- Handle "franPe" is his itch.io identity.

## Evidence on Hand
- Screenshots per project in `assets/img/<project>/`, two gameplay MP4s with posters in `assets/video/`, YouTube IDs for three projects.
- No testimonials, metrics, employers or awards exist; never invent them.

## Product Principles
1. The games are the proof: real screenshots and video lead, decoration supports.
2. A recruiter must get name, role, and a way to contact within the first screen.
3. Keep the content truthful and in his own voice; never pad with claims.
4. Personal and Argentine, not a generic dev template.

## Accessibility & Inclusion
Respect `prefers-reduced-motion` (content always visible without animation), keyboard-operable tabs, modal and filters, readable contrast on the dark ground.
