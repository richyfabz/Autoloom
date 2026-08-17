import { Link } from 'react-router-dom'

export default function Logo({ dark = false }) {
  const stroke = dark ? '#FBEEE4' : '#2E2924'
  return (
    <Link to="/" className="flex items-center gap-2.5 font-semibold text-lg">
      <svg viewBox="0 0 60 60" fill="none" className="w-[30px] h-[30px] shrink-0">
        <path d="M30 12L44 40" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
        <path d="M30 12L16 40" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
        <path d="M12 36C18 26 24 26 30 34C36 42 42 42 48 32" stroke="#C97A5D" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <span className="font-display">
        <span className={dark ? 'text-ivory' : 'text-charcoal'}>auto</span>
        <span className="text-coral">loom</span>
      </span>
    </Link>
  )
}
