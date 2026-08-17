import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { CtaBand } from '../components/Shared'
import lightField from '../assets/img/light-field.jpg'
import identityDuality from '../assets/img/identity-duality.jpg'
import handshake from '../assets/img/handshake-globe.jpg'
import growthIdea from '../assets/img/growth-idea.jpg'

export default function About() {
  return (
    <>
      <section
        className="relative py-28 md:py-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${lightField})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/70" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-8">
          <Reveal>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-blush mb-4">About the studio</span>
            <h1 className="font-display font-normal text-[clamp(36px,5vw,60px)] leading-[1.08] max-w-[15ch] text-ivory">
              Design and automation, <em className="italic text-blush font-normal">under one roof.</em>
            </h1>
            <p className="mt-5 text-[16.5px] text-ivory/80 leading-relaxed max-w-[56ch]">
              Autoloom started from a simple frustration: agencies hand over a beautiful website, then leave you to manually chase every lead it generates. We build the site and the system behind it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal className="rounded-[20px] shadow-soft overflow-hidden aspect-4/3 bg-cover bg-center" as="div">
            <img src={identityDuality} alt="Two contrasting halves of one figure" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">How we think</span>
            <h2 className="font-display font-normal text-[clamp(28px,3.2vw,40px)] leading-[1.2] mb-4.5">
              Every project is <em className="italic text-coral-deep font-normal">two problems</em>, not one.
            </h2>
            <p className="text-[16px] text-charcoal-soft leading-relaxed mb-3.5">
              The first is presentation: does the site look and feel like the business behind it? The second is operations: what happens after someone fills out the form?
            </p>
            <p className="text-[16px] text-charcoal-soft leading-relaxed">
              Most studios only solve the first. Autoloom solves both — pairing a custom design system with automation that actually routes leads, bookings and follow-ups.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-ivory-soft">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal delay={0.1} className="md:order-1 order-2">
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">What we value</span>
            <h2 className="font-display font-normal text-[clamp(28px,3.2vw,40px)] leading-[1.2] mb-4.5">
              Honest scope, <em className="italic text-coral-deep font-normal">visible progress.</em>
            </h2>
            <p className="text-[16px] text-charcoal-soft leading-relaxed">
              We'd rather tell you a feature needs a proper scoping conversation than quote a number we can't stand behind. You get staging links as we build, not a single reveal at the end.
            </p>
          </Reveal>
          <Reveal className="rounded-[20px] shadow-soft overflow-hidden aspect-4/3 order-1 md:order-2">
            <img src={handshake} alt="Handshake symbolising a client partnership" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1240px] mx-auto px-8">
          <Reveal className="max-w-[640px] mb-14">
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">What guides the work</span>
            <h2 className="font-display font-normal text-[clamp(28px,3.4vw,42px)] leading-[1.15]">
              A few principles we <em className="italic text-coral-deep font-normal">don't compromise on.</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 items-center">
            <Reveal className="rounded-2xl overflow-hidden shadow-soft aspect-square">
              <img src={growthIdea} alt="Idea leading to growth" className="w-full h-full object-cover" />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ValueCard title="No templated defaults" text="Every design decision is made for the brief in front of us — not pulled from a generic theme." />
              <ValueCard title="Automation that's honest" text="We never imply a workflow does more than it does, or hide which costs are ours vs. a platform's." delay={0.1} />
              <ValueCard title="Real results only" text="We don't fabricate metrics or client quotes. What we show you is what actually shipped." delay={0.2} />
              <ValueCard title="Two crafts, one team" text="Design and automation are handled by people who talk to each other daily — not separate vendors." delay={0.3} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Let's talk"
        title={<>Curious if we're the <em className="italic text-coral-deep font-normal">right fit</em> for your project?</>}
        buttonLabel="Start a conversation"
      />
    </>
  )
}

function ValueCard({ title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="p-6 border border-charcoal/15 rounded-[18px] hover:bg-ivory-soft hover:-translate-y-1 transition-all h-full">
      <h4 className="font-display font-medium text-[18px] mb-2.5">{title}</h4>
      <p className="text-[14px] text-charcoal-soft leading-relaxed">{text}</p>
    </Reveal>
  )
}
