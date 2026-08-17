import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { CtaBand } from '../components/Shared'
import valueDial from '../assets/img/value-dial.jpg'
import paperPlane from '../assets/img/paper-plane.jpg'

const STEPS = [
  { n: '01', title: 'Discover', text: "We talk through the goal, audience and what \"done\" looks like — including budget and timeline honestly." },
  { n: '02', title: 'Design', text: 'A design direction specific to your brand, reviewed before a single line of code is written.' },
  { n: '03', title: 'Build', text: 'Development in visible phases, with staging links you can check as the project progresses.' },
  { n: '04', title: 'Automate', text: 'Where relevant, we connect forms, CRMs and notifications so the site does work on its own.' },
  { n: '05', title: 'Launch & grow', text: 'QA, deployment, and a plan for what improves next — not a project that goes cold at handover.' },
]

export default function Process() {
  return (
    <>
      <section className="py-24 border-b border-charcoal/8">
        <div className="max-w-[1240px] mx-auto px-8">
          <Reveal>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-4">How a project runs</span>
            <h1 className="font-display font-normal text-[clamp(36px,5vw,60px)] leading-[1.08] max-w-[15ch]">
              A short, structured process — <em className="italic text-coral-deep font-normal">no vague timelines.</em>
            </h1>
            <p className="mt-5 text-[16.5px] text-charcoal-soft leading-relaxed max-w-[56ch]">
              Five phases, visible progress at every step, and a plan for what happens after launch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-28 bg-ivory-soft">
        <div className="max-w-[1240px] mx-auto px-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-7 py-8 border-t border-charcoal/15 last:border-b">
                <span className="font-display italic text-xl text-coral-deep">{s.n}</span>
                <div>
                  <h3 className="font-display font-medium text-[22px] mb-2">{s.title}</h3>
                  <p className="text-[15px] text-charcoal-soft leading-relaxed max-w-[60ch]">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal className="rounded-[20px] shadow-soft overflow-hidden aspect-4/3">
            <img src={valueDial} alt="Balancing project value" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">Staying in sync</span>
            <h2 className="font-display font-normal text-[clamp(28px,3.2vw,40px)] leading-[1.2] mb-4.5">
              You always know <em className="italic text-coral-deep font-normal">where the project stands.</em>
            </h2>
            <p className="text-[16px] text-charcoal-soft leading-relaxed">
              Regular check-ins fit your calendar, not ours. You'll get a staging link early, so feedback happens during the build — not as a surprise at the end.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-charcoal text-ivory overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <Reveal className="rounded-[20px] shadow-soft overflow-hidden aspect-square">
            <img src={paperPlane} alt="Standing out from the pack" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-blush mb-3.5">Why it works</span>
            <h2 className="font-display font-normal text-[clamp(26px,3vw,38px)] leading-[1.2] mb-4.5">
              Most sites launch and go quiet. <em className="italic text-blush font-normal">Ours keep working.</em>
            </h2>
            <p className="text-[15.5px] text-ivory/65 leading-relaxed mb-7">
              Because automation is part of the process, not an afterthought — the system you launch with is already set up to route leads and follow up, not just look good.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold bg-ivory text-charcoal px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-soft transition-all group">
              Start a project <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to start?"
        title={<>Let's scope your <em className="italic text-coral-deep font-normal">first phase.</em></>}
      />
    </>
  )
}
