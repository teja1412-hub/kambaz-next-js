# Kambaz LMS — Frontend

Frontend for Kambaz, a Canvas-style Learning Management System, built with Next.js (App Router), TypeScript, and Redux.

**Live app:** [kambaz-next-js-sigma.vercel.app](https://kambaz-next-js-sigma.vercel.app/)
**Backend:** [kambaz-node-server-app-6n5i.onrender.com](https://kambaz-node-server-app-6n5i.onrender.com)
**Backend repo:** [kambaz-node-server-app](https://github.com/teja1412-hub/kambaz-node-server-app)

> **Note:** The backend runs on Render's free tier and spins down after inactivity. If the live app hangs on load, the backend is likely waking up — give it 30–60s and refresh.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)

---

## Overview

Kambaz replicates core Canvas LMS functionality: course management, assignments, modules, enrollments, and role-based dashboards for Faculty, Students, and Admins. This repo is the client — built solo as part of CS4550 (Web Development) at Northeastern University, paired with a custom [Express/MongoDB backend](https://github.com/teja1412-hub/kambaz-node-server-app).

## Architecture

Built on Next.js App Router, organized by feature rather than by file type — each domain owns its UI, API calls, and state:

```
app/(Kambaz)/Courses/[cid]/Assignments/
├── page.tsx      → route UI
├── client.ts      → API calls to backend
└── reducer.ts     → Redux slice for this feature's state
```

Course-scoped routes use dynamic segments (`[cid]`, `[aid]`) to reflect the natural Courses → Modules → Assignments hierarchy, so `/Courses/123/Assignments/456` maps directly to a specific assignment within a specific course.

## Features

- **Session-based auth**, coordinated with the backend's `express-session` cookies (`Account/Session.tsx`).
- **Role-based UI** — Faculty see course/assignment editing controls; Students see enrollment and submission views.
- **Per-feature Redux slices** (Account, Courses, Enrollments, Modules, Assignments) combined into a single store, keeping state colocated with the feature that owns it.
- **Nested, dynamic routing** mirroring the real course structure rather than a flat page list.

## Tech Stack

`Next.js (App Router)` · `TypeScript` · `Redux` · `Axios` · `Bootstrap`

## Getting Started

```bash
git clone https://github.com/teja1412-hub/kambaz-next-js.git
cd kambaz-next-js
npm install
npm run dev
```

Requires the [backend](https://github.com/teja1412-hub/kambaz-node-server-app) running (locally or deployed) — see [Environment Variables](#environment-variables).

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_REMOTE_SERVER` | Base URL of the backend API | `http://localhost:4000` (local) or the deployed Render URL |

## Deployment

Deployed on **Vercel**, connected directly to this GitHub repo for automatic deploys on push.

**Vercel setup:**
1. Import the repo into Vercel.
2. Set `NEXT_PUBLIC_REMOTE_SERVER` under Project Settings → Environment Variables, pointing to the deployed [backend URL](https://github.com/teja1412-hub/kambaz-node-server-app).
3. Vercel auto-detects the Next.js framework and handles build/deploy with no further config.

**Vercel environment variables (production):**

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_REMOTE_SERVER` | the deployed Render backend URL |

Since this variable is prefixed `NEXT_PUBLIC_`, it's baked into the client-side bundle at build time — changing it requires a redeploy (not just an env var update) for the change to take effect.

## Project Structure

```
app/(Kambaz)/
├── Account/          sign in, sign up, profile, session
├── Courses/[cid]/    course detail, nested by course ID
│   ├── Modules/
│   ├── Assignments/[aid]/
│   ├── Grades/
│   └── People/
├── Enrollments/
└── Dashboard/
```

`Labs/` contains earlier coursework exercises (React/Bootstrap fundamentals) that predate the Kambaz app — kept for reference, not part of the production app.