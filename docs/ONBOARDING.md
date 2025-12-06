# Developer Onboarding Guide

## 1. Requirements

- Node 18+
- npm
- PostgreSQL (Supabase)

## 2. Clone Repos

git clone <frontend-url>
git clone <backend-url>

## 3. Environment Setup

Create .env from .env.example:
DATABASE_URL=
JWT_SECRET=
PORT=3000

## 4. Install Dependencies

npm install

## 5. Run Project

npm start

## 6. Branching Strategy

main → production
dev → development
feature/<task-name> → work

## 7. API Documentation

http://localhost:3000/api-docs

## 8. Code Formatting

npm run lint
