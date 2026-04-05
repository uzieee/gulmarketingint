# gulfmarketingint

This project contains:

- **Backend**: a published ASP.NET Core app (`DesireERP.UI.Ecom.dll`) targeting **.NET Core 3.1**
- **Frontend**: a standalone React + Vite app in `frontend/`

## Backend (recommended: Docker)

### Prerequisites

- Docker Desktop (make sure the Docker daemon is running)

### Run

```bash
docker compose up --build
```

Then open `http://localhost:8080`.

## Frontend (Vite dev server)

### Prerequisites

- Node.js + npm

### Run

```bash
cd frontend
npm install
npm run dev
```

Keep that terminal open while you work. This project uses port **5174** (5173 is often taken by other Vite apps). Open **`http://localhost:5174`** (or the URL Vite prints).

## Deploy frontend on Vercel

Vercel hosts the **static React/Vite site** in `frontend/`. The **.NET backend is not supported** on Vercel; host that separately (Docker, Azure, Railway, etc.) if you need APIs.

### Option A — GitHub (recommended)

1. Push this repo to GitHub (already: `uzieee/gulmarketingint`).
2. In [Vercel](https://vercel.com), **Add New Project** → import that repository.
3. Vercel should pick up root **`vercel.json`** (install/build/output). You usually **do not** need to change Framework or Root Directory.
4. Deploy. Your site will get a `*.vercel.app` URL.

### Option B — Vercel CLI

From the repository root:

```bash
npx vercel
```

Follow the prompts (link project, confirm settings). Production:

```bash
npx vercel --prod
```

## Notes

- The backend here is **already built** (no source project files included). If you want it upgraded from .NET Core 3.1 to a supported LTS version, we’ll need the backend source code.

