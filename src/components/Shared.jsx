import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export function CtaBand({ eyebrow, title, buttonLabel = 'Start a project', to = '/contact' }) {
  return (
    <section className="py-28 text-center">
      <div className="max-w-[1240px] mx-auto px-8">
        <Reveal>
          <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-4">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-normal text-[clamp(32px,5vw,58px)] leading-[1.1] max-w-[16ch] mx-auto mb-7">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold bg-charcoal text-ivory px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(46,41,36,0.5)] transition-all group">
            {buttonLabel} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

const PLACEHOLDER_TESTIMONIALS = [1, 2, 3]

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <SectionHeadInline
          eyebrow="Client feedback"
          title={<>What it's like to <em className="italic text-coral-deep font-normal">work with us.</em></>}
          desc="We love our clients and they love us back. Here's what they have to say about working with our team."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_TESTIMONIALS.map((n, i) => (
            <Reveal key={n} delay={i * 0.1}>
              <div className="bg-white border border-charcoal/15 rounded-[20px] p-7.5 flex flex-col gap-5 h-full">
                <p className="font-display italic text-[17px] leading-relaxed text-charcoal">
                  "[Client quote goes here — replace with real feedback once the project is live.]"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-11.5 h-11.5 rounded-full bg-gradient-to-br from-blush to-ivory-deep border-2 border-dashed border-charcoal/15 flex items-center justify-center text-[11px] font-display font-medium shrink-0">
                    Photo
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Client name</div>
                    <div className="text-[12.5px] text-charcoal-soft">Role, Company</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeadInline({ eyebrow, title, desc }) {
  return (
    <Reveal className="max-w-[640px] mb-14">
      <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">{eyebrow}</span>
      <h2 className="font-display font-normal text-[clamp(28px,3.4vw,42px)] leading-[1.15]">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-charcoal-soft">{desc}</p>}
    </Reveal>
  )
}
