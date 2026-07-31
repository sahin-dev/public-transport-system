# Public Transport System

A web-based public transport management and tracking application built with **React + Vite** on the frontend and a **Node.js backend**.  
The project appears to focus on organizing transport-related workflows (routes, shared UI components, context-based state, and backend integration) in a clean modular structure.

## Project Overview

This repository provides a modern JavaScript application for public transport use cases, with:

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS + DaisyUI
- **Backend folder included:** for server-side logic/API handling
- **Routing and modular architecture:** dedicated route and shared component directories
- **Context-based state management:** centralized app-level data handling

## Tech Stack

- **JavaScript** (primary language)
- **React**
- **Vite**
- **Tailwind CSS**
- **DaisyUI**
- **Node.js / backend JavaScript**

## Repository Structure (high-level)

- `src/` — main frontend source code
- `Routes/` — route definitions/navigation logic
- `SharedComponnet/` — reusable UI components
- `Context/` — context/state management
- `backend/` — backend/server-related code
- `public/` — static assets
- Root configs (`vite.config.js`, `tailwind.config.js`, `postcss.config.js`, etc.)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/sahin-dev/public-transport-system.git
cd public-transport-system
npm install
```

### Run Frontend (development)

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Notes

- The project includes both frontend and backend directories; backend execution commands may vary depending on backend implementation details.
- You can extend this README with API docs, environment variables, and deployment instructions as the project evolves.

## License

This project is licensed under the **MIT License**.
