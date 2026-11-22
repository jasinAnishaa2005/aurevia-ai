<div align="center">

<img src="https://raw.githubusercontent.com/jasinAnishaa2005/jasinAnishaa2005/main/assets/anisha-profile-banner-v2.svg" alt="Aurevia AI — career intelligence platform" width="100%" />


<div align="center">

<img src="assets/project-preview.svg" alt="Aurevia AI animated project preview" width="100%" />

</div>

# Aurevia AI — Career Intelligence Platform ✨

**An AI-powered career co-pilot for CV insights, job discovery, and career planning.**

[![Next.js](https://img.shields.io/badge/Frontend-Next.js-5b3828?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-c9a27e?style=for-the-badge&logo=fastapi&logoColor=2d211b)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-Backend-795548?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)

*Turning career questions into clearer next steps.*

</div>

---

## 🌷 Overview

Aurevia AI helps users analyze their CVs, discover career opportunities, evaluate job fit, generate cover letters, build learning roadmaps, and track job applications. It brings AI-assisted career analysis, planning, and productivity tools into one platform.

## ✨ Features

- **CV analysis:** PDF upload, profession detection, skills extraction, strengths, weaknesses, career recommendations, CV score, and ATS score
- **Job hunter:** Search opportunities and view role, company, location, salary, deadline, and fit score
- **Fit score engine:** Compare CV skills with job descriptions and identify matches and gaps
- **AI career assistant:** Career guidance, skill recommendations, and job-readiness evaluation
- **Cover letter generator:** Draft tailored cover letters from a candidate profile and job description
- **Career roadmaps:** Create weekly and monthly learning plans
- **Productivity tools:** Goals, to-dos, application tracking, and a career dashboard

## 🧰 Tech stack

| Layer | Technologies |
|---|---|
| Frontend | Next.js, React |
| Backend | FastAPI, Python |
| AI | Groq API, Llama models |
| Deployment | Vercel, Render |

## 🏗️ High-level architecture

```text
User
  ↓
Next.js frontend
  ↓
FastAPI backend
  ↓
Groq AI / Llama models
  ↓
Career insights and recommendations
```

## 🚀 Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 🔐 Environment variables

Create a backend `.env` file and add your own key:

```env
GROQ_API_KEY=your_api_key_here
```

Never commit real API keys or secrets.

## 🌐 Demo

- **Frontend:** [Aurevia AI](https://aurevia-ai-uocr.vercel.app)
- **Backend:** [API deployment](https://aurevia-backend-r18t.onrender.com)

## 🌱 Future improvements

- Real job API integrations
- Vector database and RAG pipeline
- Interview preparation module
- Calendar integration
- Advanced analytics

---

<div align="center">

**Built for the Codesprint — CareerPilot Challenge.** 🤎

</div>
