# Gaming & Video Creator Portfolio — XOTOEDITZ

A high-performance portfolio website tailored for content creators and video editors with a cyber/gaming black & gold aesthetic.

## Navigation & Pages

- [**`index.html`**](index.html): Main Landing Page featuring:
  - **Official Browser Tab Favicon**: Metallic lightning "X" emblem set as the browser tab favicon (`favicon.ico` and `assets/favicon.png`) for the URL bar/tab.
  - **XOTOEDITZ** clean typographic brand header positioned near the top.
  - **Subscriber Tracker (`1.4K / 1.5K`)**: Rounded off to 1.4K with a sleek floating slider filled to 93.3%, equipped with a rocket-thruster cursor and backward-streaming plasma sparks.
  - **One-Time Typewriter Narrative**: Types out once when a visitor opens the site:
    > *"I'm an editor who started my journey from zero, and now I'm at 1.4k subscribers! I'm very happy with how far we've come, so I made this site to share the custom extensions I built along with the apps and presets I use in my edits."*
  - **Custom Gaming Scrollbar**: Floating golden thumb with completely transparent track (no underlay / no track gutter line).
  - **Cinematic Zoom Navigation**: Clicking any page link triggers a smooth background camera zoom-in before opening the next page, which then smoothly zooms out upon arrival.
- [**`extensions.html`**](extensions.html): Dedicated Extension Suite Showcase featuring:
  - **Vertical AE-Panel Aspect Ratio**: Panel width is reduced (580px width < 680px height), creating a sleek, authentic After Effects docked panel view (not square).
  - Clean typographic switcher tabs without emojis (`WORKFLOW V2` & `AKUSOKU (悪即)`).
  - **Direct ZIP Downloads**:
    - Workflow button directly downloads `downloads/workflow/Workflow-v2.zip`.
    - Akusoku button directly downloads `downloads/akusoku/Akusoku.zip`.
  - Live interactive emulator window with `browser-ae-mock.js` simulation.
- [**`ffx.html`**](ffx.html): Dynamic After Effects Preset Library:
  - **Real `portfolio/FFX/` Folder Structure**: Organized into category subfolders (`Color Correction`, `Shakes`, `Text Animation`, `Transitions`, `Glows & VFX`).
  - **Empty Dropzone Standby State**: Displays `0 PRESETS` and a standby drop-zone notice until real `.ffx` files are added (no fake/dummy presets).
  - **Automatic Inventory Sync**: Run `node sync-ffx.js` after dropping your `.ffx` files to automatically update `ffx.html`.
  - **Live Search Bar**: Type to filter presets across all categories instantly in real time.
  - **Quick Category Filter Pills**: Easily switch between categories with one click.
  - **Direct Preset Downloads**: Each preset card links directly to its `.ffx` file inside the corresponding `FFX/` category folder with one-click download.
- **Creator Bio Modal (Top-Right Avatar)**:
  - Displays your authentic story log.
  - Dedicated, themed **YouTube** (brand red) and **Instagram** (brand gradient) buttons ready for your channel links.
  - Removed all generic skill tags and AI labels.

---

## Folder Architecture for Your Files

```text
portfolio/
├── index.html              # Main Landing Page
├── extensions.html         # Extension Suite tab page
├── ffx.html                # Dynamic FFX Preset Library
├── style.css               # Global styles, zoom transitions, custom scrollbar
├── script.js               # Modal controls, typewriter engine, zoom handler
├── README.md               # Documentation
├── assets/
│   ├── bg.jpg              # Pristine full-viewport background art (clean, no fuzzy overlays)
│   └── avatar.jpg          # 90x90 circular creator avatar
├── downloads/
│   ├── workflow/
│   │   └── Workflow-v2.zip # Drop your full Workflow extension zip here
│   └── akusoku/
│       └── Akusoku.zip     # Drop your full Akusoku extension zip here
└── FFX/                    # Drop your .ffx preset files here
    ├── Color Correction/
    ├── Glows & VFX/
    ├── Shakes/
    ├── Text Animation/
    └── Transitions/
```
