# Personal Portfolio — Cesar Santos

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **Vite**. Features multilingual support (PT / EN / DE), smooth navigation, and sections covering skills, projects, certifications, and contact info.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 8
- **Routing:** React Router DOM v7
- **Styling:** Plain CSS (component-scoped)
- **i18n:** Custom context-based translation system (PT / EN / DE)
- **Linting:** ESLint + typescript-eslint

## Project Structure

```text
src/
├── components/     # Navbar, Footer, Hero, Skills, Projects, Resume, Certifications, Contact
├── context/        # Language context provider (LangContext)
├── i18n/           # Translation strings (PT, EN, DE)
├── pages/          # Home, NotFound, Error
└── styles/         # Global styles
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

App will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Features

- Multilingual UI — toggle between Portuguese, English, and German
- Single-page layout with smooth anchor navigation
- Sections: Hero, About, Skills, Projects, Certifications, Resume, Contact
- 404 and Error boundary pages
- Fully typed with TypeScript

## License

MIT
