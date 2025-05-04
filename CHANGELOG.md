# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-05-04

### Addedd

- Treejs
- Render Blender model

## [0.1.0] - 2025-04-27

### Addedd

- Textarea

## [0.1.0] - 2025-04-27

### Addedd

- Custome Dropdown

### Chore

- Install dropdown-menu
- Update color
- Update format CHANGELOG
- Update tailwindCSS to v4

## [0.1.0] - 2025-04-26

### Added

- Added `use-media` library.
- Added `useBreakpoint` hook.
- Added custom Carousel component (incomplete, but usable).
- Added Pagination component and styles.
- Added custom Select component.
- Added Tanstack Form integration.
- Added compound components.
- Moved to `pnpm`.

### Changed

- Updated `README.md`.
- Changed TS config path from `@*` to `@/`.
- Updated all component import paths.
- Renamed `useStore` to `store`.
- Updated `CButton` types to accept `title` or `children`.
- Updated project to Next.js 15.
- Updated Modal and Drawer identifiers (`modalName`, `drawerName` → `id`).
- Refactored custom Input and Select components for better reusability.
- Changed validation from `react-hook-form` to `tanstack/form`.
- Combined Dialog and Drawer components into a single import.
- Improved UI styles for Drawer, Dialog, Inputs, and Selects.
- Added Esc key and outside click to close Drawer.

### Fixed

- Fixed image export path issues.
- Resolved merge conflicts with `dev` branch.
- Fixed img path errors.
- Fixed type and key errors.
- Fixed Zod validation for empty strings.

### Refactored

- Removed TODOs from README.
- Made custom Input component reusable and standardized.
- Moved custom carousel types to `global.d.ts`.
- Updated how form errors are displayed.

### Chore

- Added Husky integration.
