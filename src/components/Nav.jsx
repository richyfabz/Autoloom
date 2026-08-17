import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-100 backdrop-blur-md bg-ivory/85 border-b border-charcoal/8 transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_30px_-20px_rgba(46,41,36,0.3)]' : ''}`}
      >
        <nav className="max-w-[1240px] mx-auto flex items-center justify-between px-8 py-4">
          <Logo />
          <div className="hidden md:flex gap-9 items-center">
            {LINKS.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative text-[14.5px] font-medium py-1 transition-colors ${isActive ? 'text-charcoal' : 'text-charcoal-soft hover:text-charcoal'} group`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-coral transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3.5">
            <Link to="/login" title="Sign in" className="w-9.5 h-9.5 w-[38px] h-[38px] rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-ivory-soft hover:-translate-y-0.5 transition-all">
              <User size={17} />
            </Link>
            <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold bg-charcoal text-ivory px-5.5 px-[22px] py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(46,41,36,0.5)] transition-all group">
              Start a project <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-150 bg-ivory flex flex-col gap-1 px-8 pt-24 pb-10"
          >
            <button
              onClick={() => setOpen(false)}
              className="fixed top-5.5 right-7 w-10.5 h-10.5 rounded-full border border-charcoal/15 flex items-center justify-center bg-ivory z-160"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl py-4 border-b border-charcoal/10 block"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="text-coral-deep font-semibold mt-6">
              Sign in
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
