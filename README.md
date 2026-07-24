# VectorIDE

A browser-based, AI-integrated web IDE built with Next.js App Router, WebContainers, Monaco Editor, and local LLMs via Ollama. VectorIDE runs entire frontend and backend projects directly in the browser, with no remote build server, while an integrated AI assistant helps you write, explain, and refactor code in place.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Overview

VectorIDE combines three things that are usually separate tools: a full-featured code editor, a real execution environment, and an AI assistant. WebContainers let it boot and run Node-based projects entirely client-side, so there is no remote sandbox or backend server needed to preview an app. Monaco Editor provides the same editing experience as VS Code, and Ollama-backed models run locally to provide completions and chat-based help without sending code to a third-party API.

The result is a self-contained, developer-first workspace: scaffold a project, edit it with a proper editor, run it in an embedded terminal, and ask an AI assistant for help, all in one browser tab.

## Features

**Authentication**
- OAuth sign-in via Google or GitHub, handled through NextAuth.

**Editor**
- Monaco Editor with syntax highlighting, formatting, and standard keybindings.
- AI-assisted inline completions from a local Ollama model, triggered with `Ctrl + Space` or a double `Enter`, and accepted with `Tab`.

**Project Workspace**
- Scaffold new projects from templates: React, Next.js, Express, Hono, Vue, or Angular.
- Custom file explorer for creating, renaming, deleting, and organizing files and folders.
- In-browser execution of frontend and backend apps via WebContainers, no remote server required.
- Fully interactive embedded terminal powered by xterm.js.

**AI Assistant**
- Chat-based assistant that can be given specific files as context for explanations, refactors, and debugging.

**Interface**
- Responsive UI built with TailwindCSS and ShadCN UI.
- Dark and light theme support.

## Tech Stack

| Layer         | Technology                          |
|---------------|--------------------------------------|
| Framework     | Next.js 15 (App Router)              |
| Language      | TypeScript                           |
| Styling       | TailwindCSS, ShadCN UI               |
| Auth          | NextAuth (Google + GitHub OAuth)     |
| Editor        | Monaco Editor                        |
| AI Suggestions| Ollama (local LLMs via Docker)       |
| Runtime       | WebContainers                        |
| Terminal      | xterm.js                             |
| Database      | MongoDB                              |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm, pnpm, or yarn
- Docker (required to run Ollama locally)
- A MongoDB instance, local or hosted

### Installation

```bash
git clone https://github.com/your-username/vectoride.git
cd vectoride
npm install
```

### Running Ollama Locally

```bash
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
docker exec -it ollama ollama pull codellama
```

### Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL=your_mongodb_connection_string

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

OLLAMA_BASE_URL=http://localhost:11434
```

## Project Structure

```
vectoride/
├── app/          Next.js App Router pages and layouts
├── components/   Reusable UI components
├── lib/          Utility functions and shared logic
├── server/       API routes and backend handlers
├── hooks/        Custom React hooks
├── public/       Static assets
├── styles/       Global styles and Tailwind configuration
├── .env.local    Local environment variables (not committed)
└── package.json
```

## Available Scripts

| Command         | Description                    |
|------------------|---------------------------------|
| `npm run dev`     | Start the development server    |
| `npm run build`   | Create a production build       |
| `npm run start`   | Run the production build        |
| `npm run lint`    | Run ESLint across the project   |

## Roadmap

- Collaborative real-time editing
- Additional project templates
- Support for more local LLM providers
- Plugin system for custom extensions

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.