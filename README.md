# 🚀 Lunar Solar React Dashboard

A **marketing analytics dashboard** built with **React, Redux Toolkit, GraphQL (Apollo Client)**, and **Recharts**.
It simulates a KPI & data visualization platform for a marketing tech environment, inspired by the **Lunar Solar Group** Senior Frontend Engineer job description.

🔗 **Live Demo**: [https://lunar-solar-react.vercel.app/](https://lunar-solar-react.vercel.app/)
📚 **Storybook**: [https://lunar-solar-react-storybook.vercel.app/](https://lunar-solar-react-storybook.vercel.app/)

---

## 📸 Screenshots

**Dashboard Overview**
![Dashboard Screenshot](docs/dashboard-screenshot.png)

---

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Redux Toolkit**
- **Apollo Client** (GraphQL)
- **Recharts** (charts)
- **TypeScript**
- **ESLint + Prettier**
- **Vitest + Testing Library + jsdom**
- **Husky + lint-staged + commitlint**
- **Vercel** (app and Storybook deploys)

---

## 📂 Project Structure

```plaintext
src/
 ├── components/       # KpiCard, LaunchChart, Dashboard
 ├── graphql/          # Apollo Client setup & queries
 ├── store/            # Redux slice, thunks, hooks
 ├── test/             # Global test setup (jsdom, polyfills)
 ├── App.tsx
 └── main.tsx
.storybook/            # Storybook config
docs/                  # Screenshots and docs assets
```

---

## 🔑 Features

- KPI Cards for core metrics
- Launches by year chart (Recharts)
- GraphQL data fetching (SpaceX public API)
- Redux for derived and shared UI state
- Strong typing (TS strict)
- Responsive layout
- Developer Experience: ESLint, Prettier, aliases-ready

---

## 📦 Installation & Setup

```bash
git clone https://github.com/icaroxavier/lunar-solar-react.git
cd lunar-solar-react
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

---

## 📚 Storybook

Local:

```bash
npm run storybook
```

Production (docs/catalog):

- [lunar-solar-react-storybook.vercel.app](https://lunar-solar-react-storybook.vercel.app/)

Stories include:

- `KpiCard` with variations
- `LaunchChart` with responsive container
- `Dashboard` with mocked Redux state

---

## 🧪 Testing

**Stack:** Vitest + Testing Library + jsdom
**Global setup:** `src/test/setup.ts`
Includes polyfills and DOM size stubs for `ResponsiveContainer` (Recharts) and matchers from `@testing-library/jest-dom`.

Run:

```bash
npm run test
npm run test:watch
```

Example coverage:

- Pure reducers (slice)
- Thunk with Apollo Client mocked
- Components (KpiCard, LaunchChart)
- Dashboard rendering with mocked Redux store

---

## ✅ Linting, Formatting, and Git Hooks

Commands:

```bash
npm run lint
npm run format
```

**Husky hooks:**

- `pre-commit`: runs `lint-staged` (ESLint + Prettier on staged files)
- `commit-msg`: enforces Conventional Commits via commitlint
- `pre-push`: runs `npm run lint` and `npm run test`

**Conventional Commits examples:**

```
feat(dashboard): add yearly grouping for launches
fix(chart): guard against empty data
chore(husky): adjust hooks for v10
build(ci): run lint and tests on push
test(store): add reducer cases for errors
```

---

## 🔍 Environment

No private keys are required. To change the GraphQL endpoint, edit:

```ts
// src/graphql/client.ts
uri: 'https://spacex-production.up.railway.app/';
```

---

## 🗺 Roadmap

- Codegen GraphQL + cache policies
- Performance (lazy routes, reselect, bundle visualizer)
- Accessibility baseline
- CI (lint/test/build) + Deploy pipelines
- Observability & Security (Sentry, Dependabot)

---

## 👤 Author

**Ícaro Xavier**
Frontend Engineer | React, Redux, GraphQL, UI/UX
[LinkedIn](https://www.linkedin.com/in/icaroxavier/) • [GitHub](https://github.com/icaroxavier)

---
