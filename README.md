# DeQuizifi/Site

A modern, responsive landing page built with Next.js for the DeQuizifi initiative. This repository contains the complete codebase for the project's official website, designed to showcase mission, features, and community engagement paths.

## Overview

**DeQuizifi/Site** serves as the public-facing platform showcasing DeQuizifi’s mission, value proposition, and ecosystem. Built using modern web technologies, it provides a fast, accessible, and visually polished experience for visitors and potential users.

## Key Features

- **Modern Architecture**: Built with Next.js 15 App Router for fast, scalable rendering  
- **Responsive Design**: Optimized across mobile, tablet, and desktop  
- **Performance-Focused**: Static generation and optimized assets ensure instant load times  
- **Premium UI**: Clean, upscale interface designed for crypto-native audiences  
- **SEO-Ready**: Structured metadata, fast performance, and accessibility best practices  

## Technology Stack

<div align="center">

| Technology | Description |
|------------|-------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) | Next.js 15 – React framework with App Router |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | Utility-first CSS for rapid styling |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | Type-safe development with TypeScript |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Hosting and deployment via Vercel |

</div>

## Getting Started

### Prerequisites

- Node.js 18.x or later  
- pnpm package manager (or npm/yarn)

### Installation

```bash
git clone https://github.com/DeQuizifi/site.git
cd site
pnpm install
pnpm dev
````

### Development

Navigate to [http://localhost:3000](http://localhost:3000) to preview the site locally.

### Build & Deployment

```bash
pnpm run build
pnpm start
```

(Deployed automatically via Vercel on push to main)

## Development Setup

* **Linting & Formatting**: ESLint + Prettier
* **Type Safety**: Full TypeScript support
* **Accessibility**: WCAG 2.1 AA standards
* **Performance Optimizations**: Next/Image, font optimization, prefetching

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx      # Homepage
├── components/
│   ├── layout/       # Header/Footer
│   └── sections/     # Hero, Features, Testimonials, etc.
├── styles/           # Global styles and Tailwind config
├── lib/              # Utility functions
└── types/            # TS types and interfaces
```

## License

This project is licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html). See the [LICENSE](LICENSE) file for details.

## Support & Contact

For questions or collaboration opportunities, open an issue or reach out to [team@dequizfi.xyz](mailto:team@dequizfi.xyz).

---

<div align="center">
  <strong>DeQuizFi</strong> — Where DeFi meets Game Night 🧠💸
</div>
