# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

A small farming game from 2022: Create React App (react-scripts 5) with TypeScript, React 18,
React Router 6, Sass and react-toastify. Package manager is Yarn 1 (`yarn.lock`). The repo is
archived on GitHub.

## Commands

```bash
yarn start    # http://localhost:3000
yarn build
yarn test     # react-scripts test (Jest, watch mode); there are no test files
```

## Architecture

- Routes (`src/App.tsx`): `/` is `Welcome` (login and sign-up tabs that only navigate to
  `/home`, no auth), `/home` is the farm.
- Crops are classes, not React state. `Crop` (abstract) holds `stateNumber`, `deathTimer` and
  `grownHarvestValue`; subclasses define `CROP_STATES` (sprite imports) and implement
  `getReactNode`, `grow` and `harvest`. `Tomato` is the only crop.
- `Home` keeps a 5×5 array of `Tomato | null` in state, mutates the crop objects in place every
  `growthDelay` ms and then calls `setFarm([...farm])` to re-render. Keep that copy step when
  changing the loop, or React won't update.
- Prices are inline in `Home.tsx` (seed costs 5, starting balance 100); harvest value and the
  death timer are in `Tomato.tsx`.
- Sprites are in `src/assets/crops/`. `ToastContainer` is mounted in `src/index.tsx`.
- `README.old.md` is the original one-line README, kept for history.

## Conventions

- Four-space indent, double quotes in JSX files, PascalCase component folders with a co-located
  `.scss`.
