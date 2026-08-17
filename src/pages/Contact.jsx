import { useState } from 'react'
import { MessageCircle, Mail, MapPin, ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import { WHATSAPP_URL } from '../lib/chatbotKb'
import mapPin from '../assets/img/map-pin.jpg'

const FAQS = [
  { q: 'Do you work with clients outside Nigeria?', a: 'Yes — most of our workflow is async-friendly, and check-ins are scheduled around your time zone.' },
  { q: 'What do you need from me to start?', a: 'A short brief on the goal and audience is enough to begin — we\'ll ask the rest during discovery.' },
  { q: 'Is the pricing page final?', a: 'No — it\'s an indicative range. Every quote is confirmed after we understand your actual scope.' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="py-24 border-b border-charcoal/8">
        <div className="max-w-[1240px] mx-auto px-8">
          <Reveal>
            <span className="block text-xs tracking-[0.14em] uppercase font-semibold text-coral-deep mb-4">Contact</span>
            <h1 className="font-display font-normal text-[clamp(36px,5vw,60px)] leading-[1.08] max-w-[15ch]">
              Tell us what you're <em className="italic text-coral-deep font-normal">building.</em>
            </h1>
            <p className="mt-5 text-[16.5px] text-charcoal-soft leading-relaxed max-w-[56ch]">
              A real person replies — no sales script. Prefer WhatsApp? It's below, alongside the form.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14">
          <Reveal>
            {!sent ? (
              <form onSubmit={submit} className="space-y-5">
                <Field label="Name"><input type="text" required placeholder="Your name" className={inputCls} /></Field>
                <Field label="Email"><input type="email" required placeholder="you@company.com" className={inputCls} /></Field>
                <Field label="What are you building?">
                  <select className={inputCls}>
                    <option>Marketing website</option>
                    <option>Web app / ecommerce</option>
                    <option>Workflow automation</option>
                    <option>AI agent / chatbot</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
                <Field label="Project details">
                  <textarea placeholder="A few lines on goals, timeline, and budget range." className={`${inputCls} min-h-[110px] resize-y`} />
                </Field>
                <button type="submit" className="w-full justify-center inline-flex items-center gap-2 text-sm font-semibold bg-charcoal text-ivory px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-soft transition-all">
                  Send message →
                </button>
              </form>
            ) : (
              <div className="text-center py-16 px-5">
                <div className="w-14 h-14 rounded-full bg-coral/15 text-coral-deep flex items-center justify-center mx-auto mb-5">✓</div>
                <h3 className="font-display text-2xl mb-2.5">Message sent</h3>
                <p className="text-charcoal-soft text-[14.5px]">Thanks — we reply within one business day. For anything urgent, use WhatsApp on the right.</p>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1} className="bg-ivory-soft rounded-[20px] p-9 overflow-hidden">
            <h3 className="font-display font-medium text-[22px] mb-4.5">Other ways to reach us</h3>

            <Channel
              icon={<MessageCircle size={19} color="#25D366" />}
              title={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-coral-deep">WhatsApp</a>}
              sub="Fastest response, usually same day"
              first
            />
            <Channel icon={<Mail size={19} />} title="Email" sub="dammifabz@gmail.com" />
            <Channel icon={<MapPin size={19} />} title="Studio location" sub="Badagry, Lagos, Nigeria — clients served globally" />

            <div className="rounded-2xl overflow-hidden mt-6 mb-2 aspect-video shadow-soft">
              <img src={mapPin} alt="Studio location marker" className="w-full h-full object-cover" />
            </div>

            <div className="mt-7 border-t border-charcoal/15">
              {FAQS.map((f, i) => (
                <div key={f.q} className="border-b border-charcoal/15">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center py-5 text-left font-medium text-[15px]"
                  >
                    <span>{f.q}</span>
                    <ChevronDown size={16} className={`shrink-0 ml-3 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                    <p className="text-[14px] text-charcoal-soft leading-relaxed max-w-[70ch]">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const inputCls = "w-full px-4 py-3.5 border border-charcoal/15 rounded-[10px] bg-white text-[14.5px] focus:outline-none focus:border-coral transition-colors"

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[13.5px] font-semibold mb-2">{label}</label>
      {children}
    </div>
  )
}

function Channel({ icon, title, sub, first = false }) {
  return (
    <div className={`flex items-center gap-3.5 py-4 ${!first ? 'border-t border-charcoal/15' : ''}`}>
      <div className="w-10.5 h-10.5 rounded-full bg-white flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <h5 className="text-[14.5px] font-semibold mb-0.5">{title}</h5>
        <span className="text-[13px] text-charcoal-soft">{sub}</span>
      </div>
    </div>
  )
}
