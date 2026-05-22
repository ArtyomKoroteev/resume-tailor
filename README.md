# resume-tailor

Monorepo for the Resume Tailor app — built with [Turborepo](https://turborepo.dev/), [pnpm](https://pnpm.io/), [Vite](https://vite.dev/), [React 19](https://react.dev/), and [Tailwind CSS v4](https://tailwindcss.com/).

## Structure

```
apps/
  web/                  Vite + React 19 frontend
packages/
  typescript-config/    Shared tsconfig presets
```

## Toolchain

- **Build orchestration:** Turborepo
- **Package manager:** pnpm 11 (`packageManager` pinned in [package.json](package.json))
- **Node:** >= 22
- **Bundler:** Vite 8 with `@vitejs/plugin-react` and Babel (`react-compiler`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Lint:** [oxlint](https://oxc.rs/docs/guide/usage/linter) (config: [.oxlintrc.json](.oxlintrc.json))
- **Format:** [oxfmt](https://oxc.rs/docs/guide/usage/formatter) (config: [.oxfmtrc.json](.oxfmtrc.json))
- **Types:** TypeScript 5.9 (root) / 6.0 (web app)

## Prerequisites

- Node.js 22+
- pnpm 11 (`corepack enable` or `npm i -g pnpm`)

## Install

```sh
pnpm install
```

## Scripts (root)

| Command               | What it does                                  |
| --------------------- | --------------------------------------------- |
| `pnpm dev`            | Run `dev` across all apps via Turbo           |
| `pnpm build`          | Build all apps and packages                   |
| `pnpm lint`           | Run oxlint across the workspace               |
| `pnpm check-types`    | Type-check all packages                       |
| `pnpm format`         | Format the repo with oxfmt                    |
| `pnpm format:check`   | Verify formatting without writing             |

Target a single package with Turbo's `--filter`:

```sh
pnpm dev --filter=web
pnpm build --filter=web
```

## Web app

The Vite dev server runs on port **8080** (see [apps/web/vite.config.ts](apps/web/vite.config.ts)).

```sh
pnpm --filter web dev       # start dev server
pnpm --filter web build     # tsc -b && vite build
pnpm --filter web preview   # preview production build
pnpm --filter web lint
pnpm --filter web lint:fix
```

## Editor setup (VS Code / Cursor)

Workspace settings in [.vscode/settings.json](.vscode/settings.json) wire the Oxc extension as the default formatter for JS/TS/Vue/JSON and as the fix-on-save provider.

> Note: the Oxc VS Code extension does not yet format `.tsx` / `.jsx` files. Use `pnpm exec oxfmt` from the CLI for those.
