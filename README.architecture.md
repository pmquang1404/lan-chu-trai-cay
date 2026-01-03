# Project Architecture Guide (Next.js 16)

This project uses Next.js 16 with App Router and Feature-based Architecture.

## Folder Structure Rules

- All routes MUST be placed inside `src/app`
- Business logic MUST be organized by feature inside `src/features`
- API calls MUST be placed in `src/services`
- Shared UI components MUST be placed in `src/components`
- Do NOT place business logic inside `app` pages

## Main Structure

src/
├── app/
│   ├── (public)/
│   ├── (admin)/
│   ├── api/
│   └── layout.tsx
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── services.ts
│   │   └── types.ts
│   └── user/
│
├── services/
├── components/
├── hooks/
├── lib/
├── store/
├── types/

## Coding Rules

- Pages should be thin (no business logic)
- Services handle API calls only
- Feature folder owns its logic
- Use Server Components by default
- Use `'use client'` only when needed

## DO NOT
- Do not create random folders
- Do not call APIs directly in components
- Do not mix admin and public logic
