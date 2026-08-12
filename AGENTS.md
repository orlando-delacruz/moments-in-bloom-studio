# AGENTS.md

React 19 + Vite site for Moments in Blooms (Melbourne event styling). JavaScript (ESM, `"type": "module"`), no TypeScript. All styling via styled-components; copy and image metadata live in `src/constants/`.

## Commands

```bash
npm install
npm run dev      # Vite dev server on port 3000 (NOT the 5173 default; vite.config.js + package.json)
npm run lint     # eslint .
npm run build    # output to dist/
```

- No test framework, no test script, no typecheck. Manual QA only — never run `npm test`.
- `.env` is required for real enquiries: copy `.env.example` with `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`. Without it the site still works; the contact form falls back to demo mode (see below).

## Architecture facts that are not obvious

- **Component pattern:** every component is a folder with `Name.jsx`, `Name.styles.js`, and `index.js` (barrel). Follow this for any new component/section — do not add loose `Page.jsx` files at repo root.
- **Styling:** styled-components only, referencing tokens from `src/styles/theme.js` (colors, type, spacing, `breakpoints`, `EASE_LUXE`). No inline `style={{}}` except truly dynamic per-instance values. No CSS modules / Tailwind / etc.
- **Copy & content:** site text, CTAs, SKU data, SEO metadata, and image URLs live in `src/constants/*.js` (e.g. `homepage.js`, `about.js`, `services.js`, `contact.js`). `src/pages/public/Gallery/` is self-contained with its own `constants/`, `hooks/`, `utils/`. Never hardcode copy into JSX; edit the constants instead. Images are remote (Unsplash) URLs built via a local `imageUrl()` helper.
- **Reveal animations:** entry content is wrapped in `SafeReveal` / `TitleReveal`/ `ImageReveal` from `src/components/Reveal/`, which handle reduced-motion and use `EASE_LUXE`. Reuse these rather than raw `framer-motion` `motion.div`s where possible.
- **Routing:** all routes in `src/routes/AppRoutes.jsx` (React Router v7, lazy-loaded, Suspense fallback `LoadingScreen`). `/admin` redirects to `/admin/dashboard`. Public routes live under `PublicLayout`; admin under `AdminLayout`.
- **Stub pages:** the admin CMS routes (`/admin/homepage`, `/about`, `/services`, `/gallery`, `/faqs`, `/enquiries`, `/seo`, `/settings`) are placeholders rendering `PagePlaceholder` — they do NOT read from Supabase yet. Don't assume CMS data flows exist.

## Enquiries (the only live backend integration)

`src/services/enquiries.js` submits the contact form:

- Maps camelCase form values to snake_case `enquiries` columns; unknown columns are stripped with a 42703 fallback that appends `guest_count`/`setup_required` to the message.
- If `.env` is unset, `supabase` is `null` (`src/services/supabaseClient.js`) and submissions are stored in browser localStorage under `mib_demo_public_enquiries`. Don't add features that assume Supabase is always present — guard with `isSupabaseConfigured()`.
- Keep the DB column list in `DOCUMENTED_COLUMNS` in sync when the `enquiries` schema changes (full schema in `docs/DATABASE.md`, but the code is the source of truth).

## Git / workflow conventions (from `docs/CONTRIBUTING.md`)

- Conventional Commits: `feat(scoped-area): short description`, plus `fix|docs|style|refactor|chore`.
- Branch names `feature/<desc>` / `fix/<desc>`; PR into `main` required; `main` always deployable.
- No `console.log` left in committed code — prefer real error handling; `console.warn/error` already appears in `src/services/`.

## Docs caveats

The `docs/` folder is aspirational and partly stale. Trust the code and configs over docs when they disagree. Known mismatches:

- Docs say dev port 5173 and reference a `supabase/` migrations folder and `.github/workflows/` CI — none of these exist yet (no `supabase/` dir, no `.github/`, port is 3000).
- README's file tree and milestone descriptions lag behind `src/` (e.g. lists `src/animations/` which doesn't exist; About/Services/Gallery/Contact pages are implemented, not placeholders).