import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { WHATSAPP_URL, matchIntent } from '../lib/chatbotKb'

const GREETING = "Hi, I'm the Autoloom assistant. Ask me what we do, pricing, timelines, or automation — I'll point you to a human on WhatsApp any time."

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [quick, setQuick] = useState([])
  const [input, setInput] = useState('')
  const unmatchedRef = useRef(0)
  const bodyRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'bot', text: GREETING }])
      setQuick(['What do you do?', 'How much does a website cost?', 'Talk to a human'])
    }
  }, [open])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages])

  function escalate() {
    setMessages(m => [...m, { role: 'bot', text: "I don't want to guess on this one — let's get you a straight answer.", escalate: true }])
  }

  function handleUserText(text) {
    setMessages(m => [...m, { role: 'user', text }])
    setQuick([])

    if (/^talk to a human$/i.test(text)) { escalate(); return }
    if (/^see pricing page$/i.test(text)) {
      setMessages(m => [...m, { role: 'bot', text: 'Opening the pricing page for you.' }])
      setTimeout(() => navigate('/services#pricing'), 500)
      return
    }

    const match = matchIntent(text)
    if (match) {
      unmatchedRef.current = 0
      setMessages(m => [...m, { role: 'bot', text: match.reply }])
      if (match.forceEscalate) escalate()
      if (match.quick) setQuick(match.quick)
    } else {
      unmatchedRef.current += 1
      if (unmatchedRef.current >= 2) {
        setMessages(m => [...m, { role: 'bot', text: "I'm not confident I can answer that accurately from what I know." }])
        escalate()
        unmatchedRef.current = 0
      } else {
        setMessages(m => [...m, { role: 'bot', text: "I don't have a confident answer for that yet — try asking about services, pricing, timelines, or automation, or I can connect you to the team." }])
        setQuick(['Talk to a human'])
      }
    }
  }

  function submit(e) {
    e?.preventDefault()
    const v = input.trim()
    if (!v) return
    setInput('')
    handleUserText(v)
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open Autoloom assistant"
        className="fixed bottom-6.5 right-6.5 z-200 w-[58px] h-[58px] rounded-full bg-charcoal text-ivory flex items-center justify-center shadow-[0_14px_30px_-10px_rgba(46,41,36,0.55)] hover:scale-105 transition-transform"
      >
        <MessageCircle size={25} />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-coral border-2 border-ivory" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 0.8, 0.28, 1] }}
            className="fixed bottom-24 right-6.5 z-200 w-[360px] max-w-[calc(100vw-32px)] h-[500px] max-h-[calc(100vh-140px)] bg-ivory rounded-[20px] shadow-soft border border-charcoal/15 flex flex-col overflow-hidden"
          >
            <div className="bg-charcoal text-ivory px-5 py-4.5 flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-full bg-coral flex items-center justify-center shrink-0">
                <MessageCircle size={17} />
              </div>
              <div>
                <h4 className="text-[14.5px] font-semibold">Autoloom Assistant</h4>
                <span className="text-xs text-ivory/60">Usually replies instantly</span>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center">
                <X size={13} />
              </button>
            </div>

            <div ref={bodyRef} className="flex-1 overflow-y-auto p-4.5 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[86%] px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed ${
                    m.role === 'bot'
                      ? 'bg-white border border-charcoal/15 self-start rounded-bl-md'
                      : 'bg-charcoal text-ivory self-end rounded-br-md'
                  }`}
                >
                  {m.text}
                  {m.escalate && (
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block mt-1.5 font-semibold text-coral-deep">
                      Message us on WhatsApp →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {quick.length > 0 && (
              <div className="flex flex-wrap gap-2 px-4.5 pb-3.5">
                {quick.map(q => (
                  <button
                    key={q}
                    onClick={() => handleUserText(q)}
                    className="text-xs px-3.5 py-2 rounded-full border border-charcoal/15 bg-white hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={submit} className="flex gap-2 px-4 py-3.5 border-t border-charcoal/8 bg-white">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about services, pricing…"
                autoComplete="off"
                className="flex-1 border border-charcoal/15 rounded-full px-4 py-2.5 text-[13.5px] focus:outline-none focus:border-coral"
              />
              <button type="submit" aria-label="Send" className="w-9.5 h-9.5 rounded-full bg-charcoal text-ivory flex items-center justify-center shrink-0">
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
