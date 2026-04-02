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

## Notes

- The backend here is **already built** (no source project files included). If you want it upgraded from .NET Core 3.1 to a supported LTS version, we’ll need the backend source code.

