# Antarctica Slides Progress

## Current State

- Project is a Reveal.js 3.9.2 slide deck.
- Slide 1 is the title page with the `moon`-style dark palette:
  - Background: `#002b36`
  - Chinese title: `南极`
  - English title: `Antarctica`
  - Text selection uses `#d33682`
- Slide 2 is the Antarctica trip itinerary page.

## Slide 2 Implementation

- The left panel uses Mapbox GL JS v1.13.3 with a local `world.geo.json` source.
- The Mapbox style is fully local/custom and does not use a hosted Mapbox basemap.
- The world map is rendered from `world.geo.json`.
- Trip points use the requested coordinates:
  - Shanghai: `[121.4737, 31.2304]`
  - Amsterdam: `[4.9041, 52.3676]`
  - Buenos Aires: `[-58.3821, -34.6037]`
  - Ushuaia: `[-68.3058, -54.8076]`
  - Paris: `[2.3514, 48.8575]`
- The plane icon uses Font Awesome classes:
  - `fa-whiteboard fa-semibold fa-plane fa-solid`
- The plane and route animation are controlled in `index.html` JavaScript:
  - Stop markers appear first.
  - Route segments are drawn only as the plane flies through them.
  - The animation plays once and then hides the plane at the end.
- Buenos Aires is shown as one map marker only.
  - Outbound time appears first.
  - Return time appears when the return flight reaches Buenos Aires.

## Right-Side Timeline

- The timeline is a three-column layout:
  - Place
  - Local time with timezone
  - Beijing time
- Flight duration gaps are inserted between flight segments.
- Current listed time zones:
  - Shanghai: UTC+8
  - Amsterdam: UTC+1
  - Buenos Aires: UTC-3
  - Ushuaia: UTC-3
  - Paris: UTC+1

## Files Changed

- `index.html`
  - Adds Mapbox GL JS and Font Awesome assets.
  - Adds the second itinerary slide.
  - Contains Mapbox setup, stop data, route data, and animation logic.
- `css/theme.css`
  - Contains title page styles.
  - Contains Mapbox map container, marker, timeline, and animation styles.
- `world.geo.json`
  - Local world GeoJSON map data used by Mapbox.

## Preview

Run a static server from the repo root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
http://localhost:8000/#/1
```

## Notes For Next Agent

- Keep Mapbox GL JS at v1.13.3 unless a valid Mapbox access token is added. Newer v3 builds require a valid token even with local data.
- The route animation timing lives in `tripLegs`, `bearingAt()`, and `startItineraryAnimation()` in `index.html`.
- If adjusting label placement, edit the `.map-stop-* .map-stop-label` rules in `css/theme.css`.
- If route curves overlap, adjust the `bend` values in `tripLegs`.
