# Antarctica Slides Progress

## Current State

- Project is a Reveal.js 3.9.2 slide deck.
- Local preview is served from the repo root with:

```bash
python -m http.server 8000
```

- Main URL:

```text
http://127.0.0.1:8000/
```

- The current code has been pushed to remote `main`.
- The `resources/` folder is intentionally ignored by Git for now; media files are copied separately by the user.

## Completed Slides

- `#/0`: Title page, Antarctica.
- `#/1`: Overall itinerary map, with animated route and right-side flight timeline.
- `#/2`: Day 1 title page, Argentina / Buenos Aires.
- `#/3`: Day 1 Buenos Aires itinerary page.
- `#/4`: Day 2-3 title page, Argentina / Ushuaia.
- `#/5`: Day 2-3 Ushuaia itinerary page.
- `#/6`: Day 4-16 title page, Quest for the Antarctic Circle.
- `#/7`: Tour Operator & Crew Member overview.
- `#/8/0` and `#/8/1`: Expedition Team Member pages, split into two vertical slides.
- `#/9`: Route of Our Travel, rendered from the G Adventures route PDF.
- `#/10`: Weather, rendered from selected pages of the weather PDF.
- `#/11` to `#/17`: Operation Day 1-7 itinerary pages.

## Day 1 Buenos Aires

- Layout follows the requested pattern:
  - Left side: daily timeline.
  - Right side: media thumbnails.
  - Clicking media opens a centered lightbox.
- Timeline title:
  - `在一场大罢工中抵达布宜诺斯艾利斯`
- Covered stops:
  - Teatro Colon
  - El Ateneo Grand Splendid
  - Santos Manjares
  - Plaza de Mayo
  - La Boca
  - La Bombonera
  - Puente de la Mujer
  - Mate and Tango Show
- Media is folder-driven, not filename-driven.

## Day 2-3 Ushuaia

- Header uses:
  - `Day 2-3 阿根廷 · 乌斯怀亚`
  - `Day 2 & 3 · 02-20 / 02-21`
- The history text is placed directly below the page title.
- Covered sections:
  - City Tour
  - Tierra del Fuego National Park
- Right-side media captions are in English.

## Expedition Slides

- `Tour Operator & Crew Member` page includes:
  - Tour Operator: G Adventures
  - Crew member: 75
  - Passengers: 124
  - Photo placeholder/source under `resources/g_adventure/`
- `Expedition Team Member` is split into two vertical slides:
  - 16 people total.
  - 8 people per slide.
  - 2 rows, 4 people per row.
  - Avatar above, name/title/nationality below.
  - No category grouping or background cards.
- Known corrections already applied:
  - Sarah Keenan, Joy Le Pesquer, and Anastasiia Ezhova avatar mapping.
  - Joy Le Pesquer and Anastasiia Ezhova rotation.
  - Storm Simpson title and nationality.
  - Anastasiia Ezhova title and nationality.
  - Brad title simplified to `Naturalist`.

## Route And Weather

- `Route of Our Travel` renders two pages from:

```text
resources/g_adventure/21FEB2026_Route_of_Our_Travels.pdf
```

- Only the red-box content is cropped and displayed.
- The PDF image is rendered directly without extra background frames.
- `Weather` renders selected pages from:

```text
resources/g_adventure/21FEB2026_Weather_Charts.pdf
```

- Display layout:
  - First row: wave charts.
  - Second row: wind charts.
  - 8 selected pages total.

## Operation Day Pages

- Operation day pages are based on:

```text
resources/g_adventure/21FEB2026_Daily_Program.pdf
resources/g_adventure/21FEB2026_Daily_Expedition_Journal.pdf
```

- Only daytime landing/cruising locations are summarized.
- Evening activities such as lectures and music events are not included.
- Operation days currently cover:
  - Operation Day 1: 24 February
  - Operation Day 2
  - Operation Day 3
  - Operation Day 4
  - Operation Day 5
  - Operation Day 6
  - Operation Day 7: 2 March

## Media Behavior

- Media galleries support both images and videos.
- Supported media extensions include:
  - `jpg`
  - `jpeg`
  - `png`
  - `webp`
  - `gif`
  - `mp4`
  - `webm`
  - `mov`
  - `m4v`
- Gallery content is loaded from folder paths, so filenames can be changed freely.
- Lightbox behavior:
  - Click thumbnail to enlarge.
  - Left/right keyboard arrows switch media.
  - Escape closes the lightbox.
  - Clicking outside the media closes the lightbox.
  - Space toggles video playback when a video is active.

## Resource Folder Strategy

- `resources/` is ignored by Git in `.gitignore`.
- The slide code still expects resources to exist locally.
- The user will copy or maintain media files manually.
- Empty operation-day media folders should be recreated locally if needed before adding photos.

## Files Changed In Code

- `index.html`
  - Adds all new slide sections.
  - Adds folder-driven image/video galleries.
  - Adds PDF rendering for route and weather pages.
  - Adds operation day itinerary content.
- `css/theme.css`
  - Adds slide layouts for Day 1, Ushuaia, expedition team, route, weather, and operation days.
  - Adds gallery, thumbnail, lightbox, avatar, PDF canvas, and timeline styling.
- `.gitignore`
  - Ignores `resources/` and temporary extraction/debug files.

## Next Work

- User can copy media into `resources/` locally.
- Operation day location folders can be filled with photos/videos later.
- Weather chart page selection can be adjusted if the user wants different wave/wind examples.
- Additional route, landing, or expedition journal details can be refined page by page.
