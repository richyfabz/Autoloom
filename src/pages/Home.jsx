import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ServiceMarquee from '../components/ServiceMarquee'
import ServiceIndex from '../components/ServiceIndex'
import { CtaBand, Testimonials } from '../components/Shared'
import autoloom3d from '../assets/img/autoloom-3d.jpg'
import dashboardsBlue from '../assets/img/dashboards-blue.jpg'

const WORK_SAMPLE = [
  { name: 'Home of Fitness', desc: 'Membership platform for a fitness community.', from: 'from-blush', to: 'to-ivory-deep' },
  { name: 'Realm of Fashion', desc: 'Production UK fashion storefront with Stripe checkout.', from: 'from-charcoal-soft', to: 'to-charcoal' },
  { name: 'Elegance Restaurant', desc: 'Menu, story and booking for a Nigerian restaurant.', from: 'from-coral', to: 'to-blush' },
]

/** Fixed-background section bounded to its own height, using
 * background-attachment:fixed — the image only shows while this
 * section is on screen, never bleeding into the rest of the page. */
function FixedHero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-end bg-fixed bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${autoloom3d})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 via-charcoal/5 to-ivory" />
      <div className="relative z-10 w-full pb-16 pt-32">
        <div className="max-w-[1240px] mx-auto px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-ivory/90 backdrop-blur-sm px-4 py-2 rounded-full text-[12.5px] font-semibold mb-5.5 shadow-soft"
          >
            Web design &amp; automation studio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-normal text-[clamp(38px,5.6vw,74px)] leading-[1.05] max-w-[13ch] text-ivory drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
          >
            Two crafts, <em className="italic text-blush font-normal">one system</em> — design and automation, woven together.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5.5 text-[17px] text-ivory/85 max-w-[48ch] leading-relaxed"
          >
            Autoloom designs premium websites and connects them to the automation and AI systems that keep your business moving — without you chasing every lead by hand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-3.5 flex-wrap mt-7.5"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold bg-ivory text-charcoal px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-soft transition-all group">
              See what we build <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold border border-ivory/40 text-ivory px-6 py-3 rounded-full hover:bg-ivory/10 hover:-translate-y-0.5 transition-all">
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** Second fixed panel — blurred background, bold overlay copy.
 * Distinct image from the hero; also uses background-attachment:fixed
 * so the reveal is bounded to this section only. */
function FixedResultsPanel() {
  return (
    <section className="relative min-h-[62vh] flex items-center overflow-hidden">
      <div
        className="absolute -inset-6 bg-fixed bg-cover bg-center blur-md scale-105"
        style={{ backgroundImage: `url(${dashboardsBlue})` }}
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="relative z-10 w-full py-24">
        <div className="max-w-[1240px] mx-auto px-8">
          <Reveal className="max-w-[24ch]">
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-blush mb-4">
              Why automation matters
            </span>
            <h2 className="font-display font-normal text-[clamp(28px,4vw,48px)] leading-[1.2] text-ivory">
              A site that converts is good. A site connected to your operations <em className="italic text-blush font-normal">compounds.</em>
            </h2>
            <p className="mt-5 text-ivory/75 text-[15.5px] leading-relaxed max-w-[52ch]">
              Every lead, booking and follow-up routed automatically means the value of your website keeps growing long after launch — instead of sitting still.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <FixedHero />
      <ServiceMarquee />

      <section className="py-28">
        <div className="max-w-[1240px] mx-auto px-8">
          <SectionHead
            eyebrow="What we build"
            title={<>A studio that designs, builds and <em className="italic text-coral-deep font-normal">automates</em> — not just a website team.</>}
            desc="Every engagement sits on one of five capabilities. Most projects combine two or three of them."
          />
          <ServiceIndex />
        </div>
      </section>

      <FixedResultsPanel />

      <section className="bg-charcoal text-ivory py-28 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8">
          <SectionHead
            dark
            eyebrow="Track record"
            title={<>Built over <em className="italic text-coral-deep font-normal">100+ projects</em> across various niches.</>}
            desc="From fitness memberships to fashion ecommerce, hospitality and nonprofits — one design system, applied to very different businesses."
          />
          <Reveal className="flex gap-11 flex-wrap mb-11">
            <Stat n="100+" label="projects shipped" />
            <Stat n="9" label="industries served" />
            <Stat n="5" label="core capabilities" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WORK_SAMPLE.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.1}>
                <div className="rounded-2xl p-5.5 border border-ivory/15 bg-ivory/5 hover:-translate-y-1.5 hover:shadow-soft transition-all h-full">
                  <div className={`w-full aspect-video rounded-xl mb-4 bg-gradient-to-br ${w.from} ${w.to}`} />
                  <h4 className="font-display font-medium text-[17px] mb-1.5">{w.name}</h4>
                  <p className="text-[13.5px] text-ivory/60">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-11">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold border border-ivory/25 text-ivory px-6 py-3 rounded-full hover:bg-ivory/10 transition-all group">
              See how we work <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <CtaBand
        eyebrow="Ready when you are"
        title={<>Tell us what you're building — <em className="italic text-coral-deep font-normal">we'll tell you how it fits together.</em></>}
      />
    </>
  )
}

function Stat({ n, label }) {
  return (
    <div className="flex items-baseline gap-2">
      <b className="font-display text-[22px] font-medium">{n}</b>
      <span className="text-[13px] text-ivory/55">{label}</span>
    </div>
  )
}
