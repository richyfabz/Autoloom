import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ServiceIndex from '../components/ServiceIndex'
import { CtaBand } from '../components/Shared'
import dataTunnel from '../assets/img/data-tunnel.jpg'
import robotHand from '../assets/img/robot-hand.jpg'
import laptopArch from '../assets/img/laptop-arch.jpg'

export default function Services() {
  return (
    <>
      <section className="py-24 border-b border-charcoal/8">
        <div className="max-w-[1240px] mx-auto px-8">
          <Reveal>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-4">Services</span>
            <h1 className="font-display font-normal text-[clamp(36px,5vw,60px)] leading-[1.08] max-w-[15ch]">
              Five capabilities, <em className="italic text-coral-deep font-normal">one connected system.</em>
            </h1>
            <p className="mt-5 text-[16.5px] text-charcoal-soft leading-relaxed max-w-[56ch]">
              Most clients combine two or three of these. Everything is designed to work together rather than as disconnected add-ons.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1240px] mx-auto px-8">
          <ServiceIndex />
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <img src={dataTunnel} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/78" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-8" id="automation">
          <SectionHead
            dark
            eyebrow="How it fits together"
            title={<>Design, code, automation and operations — <em className="italic text-coral-deep font-normal">woven, not stacked.</em></>}
            desc="Most agencies hand you a website and stop. Autoloom threads the site into the systems that run your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal className="p-7 rounded-2xl border border-ivory/15 bg-ivory/5">
              <h4 className="font-display font-medium text-lg mb-2.5 text-ivory">Design</h4>
              <p className="text-ivory/60 text-[14.5px] leading-relaxed">Editorial-grade UI, built around your service and audience.</p>
            </Reveal>
            <Reveal delay={0.1} className="p-7 rounded-2xl border border-ivory/15 bg-ivory/5">
              <h4 className="font-display font-medium text-lg mb-2.5 text-ivory">Build</h4>
              <p className="text-ivory/60 text-[14.5px] leading-relaxed">React/TypeScript front end, real backend where the project needs one.</p>
            </Reveal>
            <Reveal delay={0.2} className="p-7 rounded-2xl border border-ivory/15 bg-ivory/5">
              <h4 className="font-display font-medium text-lg mb-2.5 text-ivory">Automate &amp; grow</h4>
              <p className="text-ivory/60 text-[14.5px] leading-relaxed">n8n workflows and AI agents connect the site to how you actually work — then SEO and iteration keep it improving.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal className="rounded-[20px] shadow-soft overflow-hidden aspect-4/3">
            <img src={robotHand} alt="AI-driven interaction" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">AI agents &amp; chatbots</span>
            <h2 className="font-display font-normal text-[clamp(26px,3vw,36px)] leading-[1.2] mb-4.5">
              Assistants that answer, qualify and <em className="italic text-coral-deep font-normal">escalate — safely.</em>
            </h2>
            <p className="text-[15.5px] text-charcoal-soft leading-relaxed">
              CrewAI-based multi-agent systems and site assistants trained on your business data, built with clear boundaries — they never invent a price, guarantee, or capability you haven't approved.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-ivory-soft">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal delay={0.1} className="md:order-1 order-2">
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">Custom web applications</span>
            <h2 className="font-display font-normal text-[clamp(26px,3vw,36px)] leading-[1.2] mb-4.5">
              Real backends, <em className="italic text-coral-deep font-normal">not mockups.</em>
            </h2>
            <p className="text-[15.5px] text-charcoal-soft leading-relaxed">
              Dashboards, booking systems, internal tools — built on React/TypeScript with production databases, authentication and payments where the project calls for them.
            </p>
          </Reveal>
          <Reveal className="rounded-[20px] shadow-soft overflow-hidden aspect-4/3 order-1 md:order-2">
            <img src={laptopArch} alt="Developer at work" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-28" id="pricing">
        <div className="max-w-[1240px] mx-auto px-8">
          <SectionHead
            eyebrow="Investment"
            title={<>Transparent starting ranges — <em className="italic text-coral-deep font-normal">not a fixed menu.</em></>}
            desc="These are indicative ranges to help you scope a conversation, not a binding quote."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard title="Marketing site" text="Up to 5–7 pages, custom design, mobile-first, SEO-ready, enquiry flow. Starting range, scoped after discovery." />
            <PriceCard title="Web app / ecommerce" text="Custom frontend + backend, accounts, payments or booking, CMS/admin dashboard. Scope-based estimate." featured delay={0.1} />
            <PriceCard title="Automation & support" text="n8n workflow build, AI chatbot maintenance, monitoring and iteration. Monthly, scoped to your workflows." delay={0.2} />
          </div>
          <p className="mt-8 text-[13.5px] text-charcoal-soft max-w-[60ch]">
            Third-party costs such as n8n cloud hosting or domain registration are separate from our labour fee, and we'll always tell you which is which.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure what you need?"
        title={<>Talk it through — <em className="italic text-coral-deep font-normal">no obligation.</em></>}
        buttonLabel="Get an estimate"
      />
    </>
  )
}

function PriceCard({ title, text, featured = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className={`p-7.5 border rounded-[18px] transition-all hover:-translate-y-1.5 ${featured ? 'border-coral' : 'border-charcoal/15 hover:bg-ivory-soft'}`}>
      <h4 className="font-display font-medium text-lg mb-2.5">{title}</h4>
      <p className="text-[14px] text-charcoal-soft leading-relaxed">{text}</p>
    </Reveal>
  )
}
