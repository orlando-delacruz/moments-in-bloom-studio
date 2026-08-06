# API

## Purpose
To document how the frontend talks to the backend — there is no custom REST/GraphQL API in this project, so this document defines the Supabase client usage patterns that serve the same role.

## Overview
All data access goes through the Supabase JS client, wrapped in per-table service modules under `src/services/`. There is no separately hosted API server; Supabase's auto-generated PostgREST layer, combined with RLS, is the API.

## Current Status
Service-module pattern established on prior projects (e.g., `patients.js`, `branches.js`, `appointments.js` conventions); being applied here per the `DATABASE.md` schema as each CMS screen is built.

## Responsibilities

**Future APIs**
No custom backend API is planned for the current scope. If Phase 2 introduces payments, a Supabase Edge Function (or small serverless function) will be needed to handle webhook verification (e.g., from a payment provider) — this is the only anticipated departure from "Supabase client only."

**Supabase Client**
- Single client instance initialized in `src/services/supabaseClient.js` from `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` environment variables.
- Never instantiated more than once; imported wherever a service module needs it.

**Data Fetching**
- Public reads use `.select()` with `is_published.eq.true` filters baked into the relevant service function, so components never need to know about the publish flag directly.
- Admin reads omit the publish filter and include all rows, ordered by `sort_order` or `created_at` as appropriate.
- Example pattern (services list, public):
```js
// src/services/services.js
export async function getPublishedServices() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data;
}
```

**Mutations**
- All writes are wrapped in service functions (`createService`, `updateService`, `deleteService`, etc.) rather than called inline from components, so validation and error shaping happen in one place.
- Enquiry submission is the one public-facing mutation and is rate-limited at the application layer (basic client-side debounce/disable-on-submit) in addition to relying on RLS to prevent abuse of other tables.

**Caching**
- No dedicated caching library (e.g., React Query) is in the current stack; given the content volume and update frequency of a marketing site, component-level `useEffect`/`useState` fetching is sufficient. This is flagged in Future Improvements below as the first thing to reconsider if the admin dashboard grows.

## Implementation Notes
Every service function must throw or return a typed error shape consistently (`{ data, error }` or throwing), never silently swallow Supabase errors — this was a recurring debugging issue on prior projects (403/406 errors going unnoticed) and is called out explicitly here to avoid repeating it.

## Checklist
- [ ] `supabaseClient.js` initialized with env-based config
- [ ] Service modules created per table (`services.js`, `gallery.js`, `faqs.js`, `enquiries.js`, `siteSettings.js`)
- [ ] Consistent error handling pattern applied across all service modules

## Future Improvements
Introduce React Query (or SWR) if/when the admin dashboard's data needs (caching, revalidation, optimistic updates) outgrow plain `useEffect` fetching — not needed for current scope.

## Related Documents
`ARCHITECTURE.md`, `DATABASE.md`, `SECURITY.md`
