# World Cup Watch Party App

Location-based app for finding and hosting World Cup watch parties.

## Setup
1. `npm install`
2. Fill in `.env.local` with your Firebase project keys
3. `npm run dev`

## Structure
- `src/firebase/` — all Firestore/Auth calls live here
- `src/hooks/` — custom hooks (geolocation, live party/match listeners)
- `src/components/` — UI components, grouped by feature (map, party, match, common)
- `src/pages/` — top-level routed pages
- `src/utils/` — helpers (e.g. distance calculation)
