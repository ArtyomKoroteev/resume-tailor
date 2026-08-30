# Prisma

Prisma 7.9 + Postgres (Neon) in `apps/server`. Run everything below from that folder.

## Quick start

```bash
pnpm install
pnpm db:generate          # required — the client is gitignored
pnpm dev
```

## Commands

| Command                         | Does                                        |
| ------------------------------- | ------------------------------------------- |
| `pnpm db:generate`              | Regenerate the client after any schema edit |
| `pnpm db:migrate --name <name>` | Create + apply a migration (dev)            |
| `pnpm db:deploy`                | Apply pending migrations (CI / prod)        |
| `pnpm db:studio`                | Browse data in the browser                  |

## Using it

`PrismaService` is global — inject it anywhere, no module import needed:

```ts
constructor(private prisma: PrismaService) {}

const resumes = await this.prisma.resume.findMany({ where: { authorId } });
```

## Files

| Path                           | What                                       |
| ------------------------------ | ------------------------------------------ |
| `prisma/schema.prisma`         | Models: `User`, `Resume`                   |
| `prisma.config.ts`             | CLI config — connection URL for migrations |
| `src/prisma/prisma.service.ts` | Client + lifecycle hooks                   |
| `src/generated/prisma/`        | Generated client (gitignored)              |

## Status

**No migration has been run** — the database is empty. To create the tables:

```bash
pnpm db:migrate --name init
```

⚠️ `DATABASE_URL` points at a shared Neon database, and `migrate dev` can reset it on drift. Use a Neon branch for local work.

## If something breaks

| Symptom                                          | Fix                                                         |
| ------------------------------------------------ | ----------------------------------------------------------- |
| `Cannot find module './generated/prisma/client'` | `pnpm db:generate`                                          |
| Types don't match the schema                     | `pnpm db:generate`                                          |
| `DATABASE_URL is not set`                        | Check `apps/server/.env` (gitignored, not in a fresh clone) |
| Build emits `dist/src/main.js`                   | A file outside `src/` got compiled — see the note below     |

## Notes for anyone changing the setup

- **Prisma 7 differs from most tutorials.** The datasource block takes only `provider`; the URL lives in `prisma.config.ts` (CLI) and in the adapter (runtime). `new PrismaClient()` requires `{ adapter }`.
- **The client must generate inside `src/`.** Anything compiled from outside `src/` pushes TypeScript's `rootDir` to the package root and moves output to `dist/src/`, breaking `start:prod`. Same reason `prisma.config.ts` is excluded in `tsconfig.build.json`.
- **`.env` is loaded twice, separately** — `dotenv` for the CLI, `ConfigModule` for Nest. Both are needed.
- The `pg` SSL warning from the Neon URL is harmless; `uselibpqcompat=true` silences it.
