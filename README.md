# Autoloom

Autoloom is a Vite + React website for a studio that builds modern websites and connects them to the systems that keep a business moving.

The site positions Autoloom as a company that offers:

- Website design and development
- Custom web applications
- Workflow automation with tools like n8n
- AI agents and chatbots with tools like CrewAI
- SEO and performance-focused implementation

It is designed as a polished marketing site with a client-facing login page, a lightweight chatbot, and clear service pages that explain the studio offering.

## Live Purpose

This repository is the public-facing website for Autoloom. The goal is to present the brand clearly, show the services offered, and give prospective clients a clean path to contact the studio.

The current build is frontend-first. Several interactions are intentionally kept simple until a backend is connected:

- The contact form currently shows a local success state
- The login page is UI-only and ready to be connected to authentication later
- The chatbot uses a local knowledge base and can route users to WhatsApp

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Features

- Multi-page marketing site
- Responsive navigation and mobile menu
- Animated sections and reveal effects
- Service index and pricing guidance
- Process breakdown
- About page and contact page
- WhatsApp handoff from the chatbot
- Login screen for future client portal work

## Project Structure

```text
src/
  components/   Shared UI, layout, navigation, footer, chatbot
  pages/        Home, About, Services, Process, Contact, Login
  lib/          Chatbot knowledge base and intent matching
  assets/       Images and branding assets
  App.jsx       Router setup
  main.jsx      App entry point
public/         Static files served directly by Vite and Vercel
```

## Local Development

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Vite will print a local URL, usually:

```bash
http://localhost:5173
```

### Build for production

```bash
npm run build
```

This outputs the production bundle to `dist/`.

### Preview the production build

```bash
npm run preview
```

## Vercel Deployment

This project is ready to deploy on Vercel as a Vite app.

Recommended settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

The included [`vercel.json`](./vercel.json) file adds SPA rewrites so React Router routes like `/about`, `/services`, and `/contact` load correctly after refresh or direct navigation.

### Deployment notes

- No backend environment variables are required for the current frontend build
- Static assets are served from `public/`
- Client-side routes are handled by React Router and the Vercel rewrite

## Pages

- `/` - Home
- `/about` - Studio background and values
- `/services` - Services, automation, AI, and pricing guidance
- `/process` - How a project runs
- `/contact` - Contact form, WhatsApp link, email, and FAQ
- `/login` - Client sign-in UI placeholder

## What the Studio Offers

Autoloom is positioned around a simple idea: a website should do more than look good.

The studio combines:

- Brand-led website design
- Frontend development
- Workflow automation
- AI-assisted systems
- Client-ready communication flows

That means a project can cover a full digital presence, from the public website through to the follow-up automation behind the scenes.

## Current Interaction Notes

- The contact form is local-only at the moment
- The login flow is not connected to authentication yet
- The chatbot is powered by a local FAQ knowledge base
- WhatsApp is the main escalation path for human support

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create the production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run Oxlint

## `.gitignore`

The repository ignores the usual local-only and build artifacts:

- `node_modules/`
- `dist/`
- `.vercel/`
- environment files
- log files
- temporary editor files

That keeps the repo clean while still tracking the actual source, assets, and lockfile needed to build the site reliably.

## Brand Summary

Autoloom is a web design and automation studio focused on:

- Clean, premium presentation
- Practical automation
- n8n workflows
- CrewAI-powered assistants
- Client-friendly handoff and support

## Next Step Ideas

If you want to keep extending the site later, the most natural additions would be:

- Real backend handling for the contact form
- Authentication for the login page
- A live client dashboard
- A stronger CRM or lead-routing workflow with n8n
