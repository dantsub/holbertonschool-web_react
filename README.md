# holbertonschool-web_react

**Specializations — Web Stack Programming: React**

A collection of hands-on projects from the Holberton School React specialization. Each project builds progressively on the previous one, starting from TypeScript and Webpack fundamentals and moving all the way up to advanced React patterns, Immutable data, and Redux.

## About

This repository contains the exercises developed during the **Web Stack Programming — React** specialization. Every project is an independent, self-contained module with its own `package.json`, lockfile, and test suite, so you can explore, run, and grade each one in isolation.

The later React projects (dashboards) are built with modern tooling:

- **Vite** (esbuild/oxc-based) for development and production builds
- **Vitest** + **@testing-library/react** for unit and integration tests
- **React 19** with `createRoot`, function components, hooks, Context API, and Aphrodite for inline styling

## Repository structure

| Directory | Topic |
| --- | --- |
| `0x00-TypeScript` | TypeScript fundamentals, types, and tooling |
| `0x01-Webpack` | Module bundling with Webpack from scratch |
| `0x02-react_intro` | First steps with React: rendering, JSX, props |
| `0x03-react_props` | Working with props and component composition |
| `0x04-React_component` | Class components, lifecycle, and component testing |
| `0x05-React_inline_styling` | Inline styling with Aphrodite |
| `0x06-react_state` | State management, Context API, and controlled forms |
| `0x07-React_Immutable` | Immutable data structures with Immutable.js |
| `0x08_react_redux_action_creator_normalizr` | Redux actions and normalizing API data with normalizr |
| `0x09-react_redux_reducer_selector` | Redux reducers and selectors |
| `0x0A-react_redux_connectors_and_providers` | Connecting React to Redux with providers and connectors |

## Tech stack

- **Language:** JavaScript (ES6+) and TypeScript
- **UI:** React 19, ReactDOM, Aphrodite
- **State:** React Context, Redux, Immutable.js, normalizr
- **Tooling:** Vite 8, Webpack, TypeScript
- **Testing:** Vitest, @testing-library/react, Jest, @testing-library/jest-dom

## Getting started

Each project (or task subfolder) is a standalone workspace. From a project directory:

```bash
pnpm install     # install dependencies
pnpm start       # run the dev server (dashboard projects)
pnpm test        # run the test suite
pnpm build       # production build
```

> The repository uses **pnpm** workspaces; each task keeps its own lockfile, so you can install and test without touching other projects.

## Testing

Tests are written per project with the framework appropriate to it:

- Dashboard projects (React): **Vitest** + **@testing-library/react** (jsdom environment).
- Node-style projects (e.g. `0x07-React_Immutable`): **Jest**, transpiled with Babel.
- TypeScript/Webpack projects: **Jest** or Webpack-based checks.
