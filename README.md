# Reviewable Discussion Toggler

A lightweight Chrome Extension to declutter Reviewable by adding a toggle button to discussion threads.

## Features
- **Instant Toggling:** Adds a **toggle** link to the line number area of every discussion.
- **Minimalist:** Collapses the discussion content (`display: none`) while keeping the context visible.

## Installation
1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing these files.

## How it Works
The extension waits for the Reviewable DOM to load and then scans for discussion segments (`.ui.discussion.segment.corner`). It injects a toggle link into the `.line.number` container that hides the main comment body.

## Development
To apply changes after modifying `content.js`:
1. Go to `chrome://extensions/`.
2. Click the **Refresh** icon on the Reviewable Discussion Toggler card.
3. Refresh your Reviewable tab.
