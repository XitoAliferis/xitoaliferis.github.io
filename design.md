# OpenUI Design Plan

## Variant 1

### Resolved inputs
- Topic: Xristopher Aliferis's machine-learning research and software engineering portfolio.
- Offer: A precise technical portfolio for assessing research focus, engineering depth, academic progression, recognition, and built work, with a direct route to contact.
- Audience: Research supervisors, graduate collaborators, and technical hiring teams.
- Primary user action: Contact Xristopher about research or engineering work.
- Deliverable: React components within the existing Next.js homepage.
- Style direction: Inference Console: clean AI-laboratory interface, structured technical typography, crisp red signal language, and compact data views.
- Tonal key: Deep neutral black with high-contrast white and vivid research-signal red.
- Icon policy: Minimal functional icons only; technical notation and labels provide structure.
- Proof assets: Existing project images in `public/`, existing resume and LoRA manuscript PDFs, and the existing factual education, publication, award, and experience content.
- Motion intensity: Ambient.

### Composition contract
- Hero archetype: asymmetrical
- First-viewport structure: A low-profile technical navigation line frames a clean, red-accented hero. A single readable content block carries Xristopher's name, a restored type-and-delete rotating role line, a short research positioning statement, and two actions. A restrained static red wash and fine signal rules provide atmosphere without forming a hero widget. The next-section hint is a single evidence rail at the fold.
- Primary visual/proof artifact: none; the hero is typography-led, with real project captures and publication content providing evidence below.
- Interaction behavior: The role line types and deletes through real descriptors; low-amplitude section reveals; expandable experience, education, and publication records preserve detail while keeping initial scan density low; project filtering remains available.
- Reuse boundary: Preserve all factual content, real links/assets, and useful filter/disclosure behaviors. Custom for this direction are the hero, clean background, type system, compact information hierarchy, timeline transitions, featured-honors hierarchy, and reduced project sizing. Do not revert to rounded generic card grids or the editorial fieldbook look.

### Filled generation prompt
Create one high-concept page for Xristopher Aliferis's machine-learning research and software engineering portfolio.

## Inputs
- Topic: Xristopher Aliferis's machine-learning research and software engineering portfolio.
- Offer: A precise technical portfolio for assessing research focus, engineering depth, academic progression, recognition, and built work, with a direct route to contact.
- Audience: Research supervisors, graduate collaborators, and technical hiring teams.
- Primary user action: Contact Xristopher about research or engineering work.
- Deliverable: React components within the existing Next.js homepage.
- Style direction: Inference Console: clean AI-laboratory interface, structured technical typography, crisp red signal language, and compact data views.
- Tonal key: Deep neutral black with high-contrast white and vivid research-signal red.
- Icon policy: Minimal functional icons only; technical notation and labels provide structure.
- Proof assets: Existing project images in `public/`, existing resume and LoRA manuscript PDFs, and existing factual education, publication, award, and experience content.
- Motion intensity: Ambient.

## Objective
Design one premium, memorable portfolio page with a dominant hero and one coherent visual world derived from ML experimentation, model traces, and hardware-aware engineering. It must feel like an AI researcher and engineer's site, not a newspaper layout and not a generic AI-generated SaaS template.

Choose the strongest clear solution. Preserve complete factual information while reducing cognitive load through disclosure, grouping, and hierarchy.

## Internal concept choice
Use an asymmetrical dominant hero with no right-hand artifact, a saturated red-on-neutral-black palette, a modern sans and mono type system, ambient entrance/disclosure motion, and minimal functional icons. Restore a typed rotating-role signal as the hero's only memorable interaction.

## Non-negotiables
- Use a strong hero-first composition with `Xristopher Aliferis` readable at large scale.
- Restore a type-and-delete rotating line for roles such as incoming MMath student, explainable AI researcher, and neuromorphic/FPGA builder.
- Include concise specific supporting copy and at most one primary contact action plus one CV action.
- Do not use an interactive particle/canvas field, inference-path showcase, or the editorial serif/newspaper treatment.
- Use one lower hero evidence rail only; do not repeat statistic mini-cards.
- Do not invent proof assets, metrics, testimonials, logos, screenshots, or affiliations.
- Do not use repeated rounded cards or pill badges as the organizing language.

## Composition
- Keep a clean technical grid: clear sections, red indexing/active signals, thin borders, square geometry, and compact records.
- Use unboxed but clearly partitioned content blocks, selective tonal panels, and disclosure controls so dense information is easy to scan.
- Experience must initially prioritize role, institution, date, and summary, with full retained highlights revealed on demand.
- Education must express progression visually as a connected chronological path from Miami to Western to incoming Waterloo.
- Honors must privilege the first-place result and pair the NSERC awards as a meaningful research-funding group, with remaining recognition subordinate.
- Projects must use moderate thumbnails and concise records, never giant plates.

## Visual system
- Use a clean black/charcoal background with extremely subtle engineering-grid or circuit-line structure; no grain texture.
- Use modern technical sans typography with mono measurement labels; no display serif.
- Red is the clear identifying accent for active state, typed cursor, paths, borders, and major recognition.
- Maintain square or lightly clipped geometry rather than frequent soft corners.

## Proof and concept expression
- Let the hero remain typography-led with only static red light/rule atmosphere.
- Use real project imagery at compact sizes and real content disclosures.
- Treat records as credible artifacts: lab focus, citation, work history, education transition, honors, and builds.

## Motion
- Use controlled Framer Motion entrance and accordion/disclosure transitions.
- Restore the role typing loop.
- Do not use pointer-reactive, diagram-based, or floating ornamental motion.
- Respect reduced-motion preferences.

## Accessibility and readability
- Use high text contrast, semantic headings, visible focus states, keyboard-friendly filters and disclosures, reduced-motion handling, and anchor offsets for fixed navigation.
- On mobile, keep summaries visible and details optional so no screen becomes a wall of copy.

## Anti-drift rules
- Do not drift back into either art-publication styling or generic rounded-card SaaS styling.
- Avoid noisy backgrounds, giant project imagery, undifferentiated lists, card nesting, and decorative pseudo-proof.
- Keep one red technical visual world, one dominant hero, and one clear reading sequence.

## Output
Return only the completed React implementation within the existing site structure.

## Final self-check
Before returning, verify: one dominant engineer/researcher hero; restored typing effect; red clean background system; no interactive canvas; progressive disclosure where text density was high; legible education progression; visible honors hierarchy; compact projects; no invented proof; and comfortable responsive behavior.

### Output target
- Path: `app/page.tsx` and its homepage components under `components/`, supported by `app/globals.css` and `app/layout.tsx`.
