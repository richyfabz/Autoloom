import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import lightField from '../assets/img/light-field.jpg'

// Google Identity Services handler.
// Wire up: (1) add your OAuth client ID below, (2) load the GSI script in
// index.html, (3) handle the credential response server-side to create a session.
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com'

function handleGoogleSignIn() {
  // Placeholder — see documentation for the full Google Identity Services wiring.
  console.log('Google sign-in triggered. Configure GOOGLE_CLIENT_ID and backend session handling.')
  alert('Google sign-in needs your OAuth client ID configured — see the setup documentation.')
}

export default function Login() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div
        className="hidden md:block relative bg-cover bg-center grayscale"
        style={{ backgroundImage: `url(${lightField})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 to-charcoal/70" />
        <div className="absolute bottom-14 left-14 right-14 z-10">
          <div className="mb-6"><Logo dark /></div>
          <h2 className="font-display font-normal text-3xl leading-snug max-w-[14ch] text-ivory">
            Sign in to track your project, timelines and files in one place.
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-[380px]">
          <h1 className="font-display font-normal text-[34px] mb-2.5">Welcome back</h1>
          <p className="text-charcoal-soft text-[15px] mb-8.5">Sign in to your Autoloom client dashboard.</p>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3.5 border border-charcoal/15 rounded-[10px] bg-white font-semibold text-[14.5px] hover:shadow-soft hover:-translate-y-0.5 transition-all mb-5.5"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="flex items-center gap-3.5 my-5.5 text-charcoal-soft text-[13px] before:content-[''] before:flex-1 before:h-px before:bg-charcoal/15 after:content-[''] after:flex-1 after:h-px after:bg-charcoal/15">
            or
          </div>

          <div className="space-y-5 mb-2">
            <div>
              <label className="block text-[13.5px] font-semibold mb-2">Email</label>
              <input type="email" placeholder="you@company.com" className="w-full px-4 py-3.5 border border-charcoal/15 rounded-[10px] bg-white text-[14.5px] focus:outline-none focus:border-coral" />
            </div>
            <div>
              <label className="block text-[13.5px] font-semibold mb-2">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 border border-charcoal/15 rounded-[10px] bg-white text-[14.5px] focus:outline-none focus:border-coral" />
            </div>
          </div>

          <button className="w-full justify-center inline-flex items-center gap-2 text-sm font-semibold bg-charcoal text-ivory px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-soft transition-all mt-2">
            Sign in →
          </button>

  

          <p className="text-center mt-5 text-[13.5px]">
            <Link to="/" className="text-coral-deep font-semibold">← Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-[19px] h-[19px]">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.6 0-14.1 4.3-17.7 10.7z"/>
      <path fill="#4CAF50" d="M24 44c5.5 0 10.5-2.1 14.3-5.6l-6.6-5.6C29.6 34.7 26.9 36 24 36c-5.3 0-9.8-3.4-11.3-8.1l-6.6 5.1C9.8 39.6 16.4 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.7 2.1-2.1 4-3.9 5.4l6.6 5.6C41.4 36.6 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z"/>
    </svg>
  )
}
