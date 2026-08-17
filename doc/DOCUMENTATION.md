# Autoloom — React Site Documentation

This is the React/Vite/Tailwind/Framer Motion rebuild of the Autoloom site
(previously plain HTML/CSS/JS). This doc covers how to run it, what changed
in this pass, and — most importantly — the backend work needed to take it
from a static frontend to a fully working product.

---

## 1. Running it locally

```bash
cd autoloom-react
npm install
npm run dev
```

Open the printed `localhost` URL (typically `http://localhost:5173`).

```bash
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

**Stack:** React 19, Vite, Tailwind CSS v4 (via `@tailwindcss/vite` — no
separate `tailwind.config.js` needed, theme tokens live in `src/index.css`),
Framer Motion, React Router v7, lucide-react icons.

---

## 2. What changed in this pass

- **Converted the static HTML/CSS/JS build to a proper React app** — reusable
  components (`Nav`, `Footer`, `Chatbot`, `ServiceIndex`, `Reveal`, etc.)
  instead of duplicated markup across six HTML files.
- **Tailwind v4** replaces the hand-written CSS design system. Brand tokens
  (colors, fonts) are defined once in `src/index.css` under `@theme`.
- **Framer Motion** replaces the old `IntersectionObserver` reveal script —
  `<Reveal>` wraps any element for a scroll-triggered fade/slide, and the
  hero uses `motion.div`/`motion.h1` for staggered entrance animation.
- **Two bounded "fixed background" sections on the homepage**, per your
  request:
  1. **Hero** — the Autoloom 3D render, full color, not blurred.
  2. **"Why automation matters" panel** — a different image (people
     reviewing dashboards), blurred, with bold overlay copy.
  Both use `background-attachment: fixed`, which is what makes the
  parallax-style reveal work — critically, this **clips naturally to each
  section's own height**, so the image never bleeds across the whole page
  the way the old implementation did.
- **No image is reused across sections or pages.** Twelve distinct images
  are mapped one-to-one across Home / About / Services / Process / Contact.
- **All images were resized/compressed** (max 1600px on the long edge, ~75–
  82% JPEG quality) so nothing is oversized — largest asset is ~265KB.
- **Removed location language from Home**, kept only in the footer and the
  dedicated Contact page (with a map-pin visual).
- **Chatbot, login, and every other feature from the previous pass carried
  over** — see below for status on each.

---

## 3. Project structure

```
src/
  components/       Nav, Footer, Chatbot, Logo, Layout, Reveal,
                     SectionHead, ServiceIndex, ServiceMarquee, Shared.jsx
                     (CtaBand, Testimonials)
  pages/            Home, About, Services, Process, Contact, Login
  lib/
    chatbotKb.js    Local FAQ knowledge base + intent matcher
  assets/img/       12 optimized images, each used exactly once
  index.css         Tailwind import + @theme design tokens
  App.jsx           Router
  main.jsx          Entry point
```

---

## 4. Feature status — what's real vs. what needs backend work

This is the part that matters most. Everything below is built and looks
finished in the browser, but several pieces are **frontend-only demos**
that need a real backend before they do anything in production.

### ✅ Fully working, no backend needed
- All navigation, routing, animations, responsive layout
- The chatbot's local FAQ matching (services/pricing/timeline questions →
  instant answers, no API calls, nothing to break)
- WhatsApp links (real link, opens WhatsApp directly)

### ⚠️ Needs backend integration

| Feature | Current state | What's needed |
|---|---|---|
| **Contact form** | Shows a success message on submit, but sends nothing anywhere | A form backend — see §5 |
| **Google sign-in** | Full UI built (`src/pages/Login.jsx`), button click just shows an alert | Google OAuth client ID + a session backend — see §6 |
| **Email/password login** | UI only, no auth logic | An auth provider or custom backend — see §6 |
| **Chatbot escalation** | Works — hands off to WhatsApp correctly | Optional: swap local FAQ matching for a real LLM — see §7 |

---

## 5. Contact form → real backend

Right now `src/pages/Contact.jsx` just flips local state to show "Message
sent" — no email is sent, nothing is stored. Three ways to fix this,
ordered by effort:

**Option A — Form backend service (fastest, ~15 minutes)**
Use [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com),
or similar. You get an endpoint URL, POST the form data to it, they email
you. No server of your own needed. Change the `submit` handler to:

```js
async function submit(e) {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new FormData(e.target),
  })
  if (res.ok) setSent(true)
}
```

**Option B — Your own API endpoint**
If you already have (or want) a small backend — Node/Express, or a
serverless function on Vercel/Netlify — POST the form JSON there, and have
that endpoint send email (e.g. via Resend, SendGrid, or Nodemailer) and/or
write to a database.

**Option C — n8n webhook** (fits your own product, natural choice)
Since Autoloom already sells n8n automation, use it on yourself: create an
n8n webhook workflow that receives the form POST, sends you a Slack/email
notification, and logs the lead to a spreadsheet or CRM. This is the
"dogfooding" option and doubles as a live demo you can show prospects.

---

## 6. Login / Google sign-in → real backend

`src/pages/Login.jsx` has a complete, styled UI. To make it functional:

**Step 1 — Google Cloud Console**
Create an OAuth 2.0 Client ID at [console.cloud.google.com](https://console.cloud.google.com)
→ APIs & Services → Credentials. Set authorized origins to your domain
(and `http://localhost:5173` for local dev).

**Step 2 — Frontend: Google Identity Services**
Add the script to `index.html`:
```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```
Replace the placeholder `GOOGLE_CLIENT_ID` in `Login.jsx` and initialize:
```js
window.google.accounts.id.initialize({
  client_id: GOOGLE_CLIENT_ID,
  callback: handleCredentialResponse,
})
```
`handleCredentialResponse` receives a signed JWT (`credential`) identifying
the user — **never trust this on the frontend alone.**

**Step 3 — Backend: verify the token, create a session**
You need *some* backend for this step — Google sign-in cannot be fully
client-side if you want an actual logged-in dashboard. Two common paths:

- **Managed auth (least work):** [Clerk](https://clerk.com),
  [Supabase Auth](https://supabase.com/auth), or
  [Auth0](https://auth0.com) — all have a Google provider built in, handle
  session cookies/JWTs for you, and have React SDKs that would replace most
  of the custom code in `Login.jsx`. This is the fastest path to a real
  client dashboard.
- **Custom backend:** verify the Google JWT server-side (Google's
  `google-auth-library` for Node), issue your own session (JWT or cookie),
  store the user in a database (Postgres/MongoDB).

Given you're not currently running a backend, **Supabase** is worth
strongly considering — it gives you Google auth, a Postgres database, and
storage in one free-tier service, which also covers a chunk of §5 and any
future "client dashboard" work implied by the login page's copy.

---

## 7. Chatbot → optional LLM upgrade

The current chatbot (`src/lib/chatbotKb.js` + `src/components/Chatbot.jsx`)
is intentionally local-only: it matches keywords against a small FAQ set,
and escalates to WhatsApp after two unmatched questions. This was a
deliberate choice — an API key for a hosted model (Hugging Face or
otherwise) **cannot safely live in frontend JavaScript**; anyone can open
dev tools and copy it, then use your quota.

If you want it backed by a real model later:

1. Stand up a tiny backend endpoint (a single serverless function is
   enough) that holds the API key server-side.
2. The frontend sends the user's message to *your* endpoint, not to
   Hugging Face directly.
3. Your endpoint calls the Hugging Face Inference API (or any model) with
   the key, gets a response, returns it to the frontend.
4. Keep the WhatsApp escalation logic as a fallback for low-confidence
   answers, regardless of which model answers.

This is a genuinely separate, small project — happy to build it whenever
you're ready to host a backend.

---

## 8. Suggested next steps, roughly in order

1. Pick a form backend for Contact (Option A above is a 15-minute fix).
2. Decide on managed auth (Supabase/Clerk) vs. custom — this unlocks both
   real login *and* gives you a database for the contact form and any
   future client-dashboard features the login page implies.
3. Deploy the static frontend now (Vercel or Netlify — both auto-detect
   Vite, zero config) so you have a live URL to test against, then wire
   backend pieces in incrementally.
4. Swap in real testimonials as projects wrap (the section is already
   built and styled — just replace the placeholder text/photos in
   `src/components/Shared.jsx`).
5. Only after the above: consider the LLM-backed chatbot upgrade in §7.

---

## 9. A note on what "done" means here

Everything in this build is real, working React — not mockup screenshots.
The gap is specifically: **anything that needs to talk to the outside
world** (send an email, verify a login, call a paid API) needs a backend,
because that's not something that can or should live safely in the
browser. That's not a shortcut — it's the correct architecture. The
frontend is ready to be wired up the moment you pick a backend approach.
