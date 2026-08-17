export const WHATSAPP_URL = "https://wa.me/message/U7QVR5H2GOH2G1"

export const AUTOLOOM_KB = [
  {
    intents: ["what do you do", "who are you", "what is autoloom", "services", "what can you build"],
    reply: "Autoloom designs and builds websites, custom web apps, and connects them to automation — n8n workflows, AI agents/chatbots, and SEO. We've shipped 100+ projects across fitness, fashion, real estate, hospitality and more.",
  },
  {
    intents: ["how much", "price", "pricing", "cost", "budget", "quote"],
    reply: "It depends on scope. A marketing website starts in a lower range, while web apps or ecommerce are scoped individually. These are indicative ranges, not fixed quotes — want me to connect you with the team for an exact estimate?",
    quick: ["See pricing page", "Talk to the team"],
  },
  {
    intents: ["how long", "timeline", "turnaround", "when", "how fast"],
    reply: "Most marketing sites take a few weeks; web apps and automation systems depend on scope. We'll give you a real timeline once we understand the project.",
  },
  {
    intents: ["automation", "n8n", "workflow"],
    reply: "We build workflow automation with n8n — connecting your forms, CRM, email and notifications so leads and bookings move without manual follow-up.",
  },
  {
    intents: ["ai agent", "crewai", "chatbot", "assistant"],
    reply: "Yes — we build AI agent systems (CrewAI-based) and site assistants like this one, trained on your business data, with safe escalation to a human when needed.",
  },
  {
    intents: ["seo", "search", "google ranking"],
    reply: "We handle technical SEO and Core Web Vitals as part of every build — structured content, fast load times, and clean markup a search engine can actually read.",
  },
  {
    intents: ["contact", "talk to human", "human", "speak to someone", "real person"],
    reply: "Of course — the fastest way to reach the team directly is WhatsApp.",
    forceEscalate: true,
  },
  {
    intents: ["work", "portfolio", "examples", "projects", "case study"],
    reply: "We've built 100+ projects across fitness, fashion ecommerce, real estate, hospitality, nonprofits and tech education. Check the Services page for a sample, or ask me about a specific industry.",
  },
]

export function matchIntent(text) {
  const t = text.toLowerCase()
  return AUTOLOOM_KB.find(entry => entry.intents.some(k => t.includes(k))) || null
}
