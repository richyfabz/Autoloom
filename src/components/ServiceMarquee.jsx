const ITEMS = [
  'Website design & development',
  'Workflow automation with n8n',
  'AI agents with CrewAI',
  'SEO & performance',
  'Interactive mobile interfaces',
  'Interactive desktop interfaces',
]

export default function ServiceMarquee() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <section className="py-7.5 border-y border-charcoal/8 bg-ivory-soft overflow-hidden group">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee">
          {loop.map((item, i) => (
            <span
              key={i}
              className="font-display text-lg font-normal text-charcoal whitespace-nowrap flex items-center gap-3 px-10 border-r border-charcoal/15"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-coral" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
