# Basic Farming Simulator

A tiny browser farming game in React and TypeScript, built in 2022 as a practice project.

You start with $100 and a 5×5 field. Click an empty plot to plant a tomato for $5. Every second each tomato grows a stage, through five sprites. A ripe tomato sells for $10 when you click it, but if you leave it ripe for five more seconds it dies and is worth nothing. Harvesting too early also earns nothing.

The welcome screen has login and sign-up forms, but they are placeholders: any submit goes straight to the farm.

## Running

```bash
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000).

| Command      | What it does                      |
| ------------ | --------------------------------- |
| `yarn start` | Dev server                        |
| `yarn build` | Production build into `build/`    |
| `yarn test`  | Jest in watch mode (no tests yet) |

## How it works

- `src/crops/Crop.ts(x)` is an abstract crop with a growth stage, a harvest value and a death timer. `Tomato` extends it with its sprites and rules, so a new crop is a new subclass.
- `src/Home/Home.tsx` holds the 5×5 grid and the balance in state, and a `setInterval` calls `grow()` on every crop each second.
- Toasts (react-toastify) report earnings, empty harvests and an empty wallet.

Built with Create React App (react-scripts 5), React 18, React Router 6 and Sass.

## License

MIT
