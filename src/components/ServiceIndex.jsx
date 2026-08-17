import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
  { num: '01', title: 'Website design & development', desc: 'Responsive, fast, editorial-grade sites built to convert not templated themes.' },
  { num: '02', title: 'Custom web applications', desc: 'Dashboards, booking systems, internal tools built on React/TypeScript, backed by real APIs.' },
  { num: '03', title: 'Workflow automation (n8n)', desc: 'Connect the tools you already use lead routing, notifications, follow-ups on autopilot.' },
  { num: '04', title: 'AI agents & chatbots (CrewAI)', desc: 'Multi-agent systems and site assistants that answer, qualify and escalate safely.' },
  { num: '05', title: 'SEO & performance', desc: 'Technical SEO, Core Web Vitals and structured content that a search engine can actually read.' },
]

export default function ServiceIndex() {
  return (
    <div>
      {SERVICES.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.05}>
          <div className="group grid grid-cols-[40px_1fr_60px] md:grid-cols-[60px_1.4fr_1.6fr_90px] items-center gap-7 py-7.5 px-4 -mx-4 border-t border-charcoal/15 last:border-b rounded-2xl cursor-pointer hover:bg-ivory-soft transition-colors">
            <span className="font-display text-sm text-charcoal-soft">{s.num}</span>
            <h3 className="font-display font-normal text-[clamp(22px,2.6vw,32px)] transition-all group-hover:text-coral-deep group-hover:translate-x-1.5">
              {s.title}
            </h3>
            <p className="hidden md:block text-[14.5px] text-charcoal-soft leading-relaxed max-w-[46ch]">
              {s.desc}
            </p>
            <span className="justify-self-end w-11 h-11 rounded-full border border-charcoal/15 flex items-center justify-center transition-all group-hover:bg-charcoal group-hover:border-charcoal">
              <ArrowRight size={16} className="transition-all group-hover:translate-x-0.5 group-hover:text-ivory" />
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
