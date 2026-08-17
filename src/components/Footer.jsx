import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-8">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-ivory/10">
          <div>
            <Logo dark />
            <p className="text-[14.5px] text-ivory/55 my-4.5 max-w-[32ch] leading-relaxed">
              Web design and workflow automation studio, based in Badagry, Lagos — serving clients globally.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold border border-ivory/20 text-ivory px-5 py-2.5 rounded-full hover:bg-ivory/10 transition-all">
              Get in touch
            </Link>
          </div>
          <FooterCol title="Services" links={[
            ['Website design', '/services'], ['Web applications', '/services'],
            ['Automation', '/services'], ['AI agents & chatbots', '/services'], ['SEO & performance', '/services'],
          ]} />
          <FooterCol title="Studio" links={[
            ['About', '/about'], ['Process', '/process'], ['Contact', '/contact'], ['Sign in', '/login'],
          ]} />
          <FooterCol title="Location" links={[
            ['Badagry, Lagos, Nigeria', '/contact'], ['Serving clients globally', '/contact'],
          ]} />
        </div>
        <div className="flex justify-between items-center pt-6 flex-wrap gap-3 text-[13px] text-ivory/40">
          <span>© 2026 Autoloom. All rights reserved.</span>
          <span>Automate. Weave. Grow.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 className="text-[13px] uppercase tracking-wider text-ivory/50 mb-4.5">{title}</h5>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-[14.5px] text-ivory/75 hover:text-blush transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
