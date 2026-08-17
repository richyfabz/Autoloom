import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, desc, center = false, dark = false }) {
  return (
    <Reveal className={`max-w-[640px] mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-3.5">
        {eyebrow}
      </span>
      <h2 className={`font-display font-normal text-[clamp(28px,3.4vw,42px)] leading-[1.15] ${dark ? 'text-ivory' : 'text-charcoal'}`}>
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-ivory/60' : 'text-charcoal-soft'}`}>
          {desc}
        </p>
      )}
    </Reveal>
  )
}
