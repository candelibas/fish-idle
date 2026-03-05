# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:8080
npm run build    # Production build to dist/
```

## Architecture

This is a Phaser 3 game (v3.90.0) using TypeScript and Vite.

### Entry Point
- `src/index.ts` - Creates Game instance and handles window resize
- `src/Game.ts` - Extends `Phaser.Game`, configures pixel art mode with auto-resize scaling

### Scene Structure
- `src/scenes/BaseScene.ts` - Base class with automatic background scaling on resize
- `src/scenes/PlayScene.ts` - Main game scene with animated spritesheet background
- `src/scenes/LoadingScene.ts` - Asset loading scene (stub)

### Utilities
- `src/utils/Orientation.ts` - `PL()` helper returns portrait or landscape value based on aspect ratio

### Vite Configuration
- `vite/config.dev.mjs` - Dev server config
- `vite/config.prod.mjs` - Production build with terser minification and static asset copying

### Assets
- Located in `assets/` directory
- Use `this.load.setPath("assets")` in scene preload
- Path alias configured: `assets/*` maps to `./assets/*`
