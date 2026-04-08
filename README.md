<div align="center">

# وزارة المالية — Ministry of Finance

**Interactive Budget Dashboard**

A modern, Arabic-first (RTL) web application for visualizing Saudi Arabia's national budget data, built with Angular 21 and the official Saudi Government Design System (`govsa-ds`).

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?logo=chartdotjs&logoColor=white)](https://www.chartjs.org)
[![govsa-ds](https://img.shields.io/badge/govsa--ds-1.1-0b6b3a)](https://npmjs.com/package/govsa-ds)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()

</div>

---

## Overview

This project is the **Ministry of Finance Interactive Budget Dashboard** — a single-page application that presents Saudi Arabia's fiscal and economic data through rich, interactive charts. It follows the Saudi Government Digital Design System guidelines for consistency across government portals and delivers a fully RTL, Arabic-language experience.

---

## Features

- **Interactive Dashboard** — Five themed budget cards linking to detailed chart pages
- **Rich Data Visualization** — 20+ charts across 5 pages (bar, line, area, stacked, doughnut, pie, polar area, horizontal bar, dual-axis)
- **Saudi Government Design System** — Uses `govsa-ds` for header, footer, typography, and icon set to ensure compliance with government standards
- **Arabic RTL Layout** — Full right-to-left support with Cairo font and Hijri date display
- **Accessibility Toolbar** — Font resizing (ع+/ع-), print, bookmark, and share controls
- **Responsive Design** — Optimized for desktop, tablet, and mobile viewports
- **Lazy-Loaded Routes** — Each feature page is code-split for optimal loading performance
- **Standalone Components** — Uses Angular 21 standalone APIs exclusively (no NgModules)

---

## Pages & Charts

| Page | Route | Charts |
|------|-------|--------|
| **اللوحة التفاعلية** (Dashboard) | `/dashboard` | 5 animated, interactive budget category cards |
| **الملخص التنفيذي** (Executive Summary) | `/executive-summary` | Revenue vs Expenses (bar), GDP Growth (line), Budget Deficit/Surplus (bar), Sector Distribution (doughnut) |
| **المؤشرات الاقتصادية** (Economic Indicators) | `/economic-indicators` | Inflation & Interest Rate (multi-line), Unemployment (grouped bar), Oil Prices (comparison line), GDP Composition (polar area) |
| **النفقات** (Expenditures) | `/expenditures` | Total Expenses (grouped bar), Sector Breakdown (horizontal bar), Capital vs Current (area), Expense Type Share (doughnut) |
| **الإيرادات** (Revenues) | `/revenues` | Total Revenue (grouped bar), Oil vs Non-Oil (stacked bar), Non-Oil Growth (dual-axis line), Revenue Sources (pie) |
| **عجز/فائض الميزانية والدين العام** (Deficit & Public Debt) | `/deficit-surplus` | Deficit/Surplus (stacked bar), Public Debt (bar), Debt-to-GDP Ratio (area), Borrowing Activity (grouped bar), Government Reserves (dual-axis line) |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Angular 21 (standalone components, signals, functional APIs) |
| **Charts** | Chart.js 4 + ng2-charts |
| **Icons** | Lucide Angular (dashboard), govsa-ds icon font (header/footer) |
| **Design System** | govsa-ds 1.1 (Saudi Government Digital Standards) |
| **Language** | TypeScript 5.9 |
| **Package Manager** | npm |

---

## Project Structure

```
ministry-of-finance/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/
│           ├── bg.jpeg                 # Dashboard & chart page background
│           └── logo.png                # Ministry logo for navbar
├── src/
│   ├── index.html                      # Root HTML (RTL, Arabic, govsa-ds assets)
│   ├── main.ts                         # Bootstrap + Chart.js global registration
│   ├── styles.css                      # Global overrides (header white theme)
│   └── app/
│       ├── app.ts                      # Root component (<router-outlet>)
│       ├── app.config.ts               # Providers (router, HTTP, interceptors)
│       ├── app.routes.ts               # Top-level route definitions
│       ├── core/
│       │   ├── guards/auth.guard.ts    # Route guard (CanActivateFn)
│       │   ├── interceptors/auth.interceptor.ts
│       │   └── services/api.service.ts # HTTP service
│       ├── layouts/
│       │   ├── header.ts               # Top bar + govsa-ds navbar
│       │   ├── footer.ts               # govsa-ds footer
│       │   └── main-layout.ts          # Shell layout (header + router-outlet + footer)
│       └── features/
│           ├── chart-page.css          # Shared styles for all chart pages
│           ├── dashboard/              # Interactive budget card dashboard
│           ├── executive-summary/      # Executive summary charts
│           ├── economic-indicators/    # Economic indicators charts
│           ├── expenditures/           # Government expenditure charts
│           ├── revenues/               # Government revenue charts
│           └── deficit-surplus/        # Deficit, debt & reserves charts
└── angular.json
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 20
- **npm** >= 10

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ministry-of-finance

# Install dependencies
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The app reloads automatically on file changes.

### Production Build

```bash
ng build
```

Build artifacts are output to `dist/ministry-of-finance/`. The production build enables tree-shaking, minification, and output hashing.

---

## Configuration

### govsa-ds Assets

The Saudi Government Design System assets are served from `node_modules/govsa-ds` via Angular's asset pipeline configured in `angular.json`:

- **CSS** → loaded via `<link>` in `index.html` from `govsa-ds/css/govsa-ds.min.css`
- **JS** → loaded via `<script defer>` in `index.html` from `govsa-ds/js/govsa-ds.js`
- **Fonts** → copied to `govsa-ds/fonts/` at build time

### Chart.js

Chart.js controllers and elements are registered globally in `main.ts` to avoid repeated registration in each component:

- `BarController`, `LineController`, `PieController`, `DoughnutController`, `PolarAreaController`
- `CategoryScale`, `LinearScale`, `RadialLinearScale`
- `BarElement`, `LineElement`, `PointElement`, `ArcElement`
- `Filler`, `Tooltip`, `Legend`

### Customization

- **Background image** — Replace `public/assets/images/bg.jpeg`
- **Logo** — Replace `public/assets/images/logo.png`
- **Chart data** — Edit the `ChartConfiguration` objects in each feature component's `.ts` file
- **Colors** — The primary green palette (`#0b6b3a`, `#2a7f62`, `#4dd0a1`, `#a0e8cc`) is defined inline in chart configs and `chart-page.css`

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Production build to `dist/` |
| `npm run watch` | Development build with file watching |
| `npm test` | Run unit tests with Vitest |

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Edge | Latest |
| Safari | Latest |

---

## License

This project is provided for demonstration and internal government use.

---

<div align="center">

**وزارة المالية** — المملكة العربية السعودية

*Built with Angular 21 & Saudi Government Design System*

</div>
