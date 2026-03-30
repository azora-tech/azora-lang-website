import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const PayPalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.603c-.564 0-1.04.408-1.13.964L7.076 21.337z"/>
    <path d="M18.429 7.06c-.009.06-.019.12-.03.18-1.07 5.493-4.715 7.398-9.378 7.398H7.143c-.57 0-1.052.413-1.14.975l-1.18 7.477a.537.537 0 00.53.62h3.726c.498 0 .92-.36.998-.848l.041-.215.79-5.012.051-.276a1.01 1.01 0 01.998-.848h.63c4.07 0 7.254-1.653 8.185-6.432.39-1.996.188-3.665-.842-4.834a4.007 4.007 0 00-1.148-.862c.086.42.139.858.157 1.316.015.36.002.726-.038 1.1z" opacity=".7"/>
  </svg>
)

const CoffeeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8h1a4 4 0 010 8h-1" />
    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
)

const HeartIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
)

// --- Funding Stats ---
// Update these values as donations come in
const fundingGoal = 25000 // yearly goal in USD
const perMonth = 35      // current monthly donations in USD
const oneTime = 0        // one time donations in USD
const members = 2        // total supporting sponsors

// --- Sponsors ---
// Add sponsors here: { name, tier, logo?, href?, desc? }
// Tiers: 'diamond', 'platinum', 'gold', 'silver', 'bronze'
const sponsorsList = [
  { name: 'Merea Games', tier: 'gold', logo: '/assets/merea_logo.jpeg', href: 'https://mereagames.com', desc: 'Indie game studio crafting immersive experiences.' },
  { name: 'DoubleG Arts', tier: 'silver', logo: '/assets/dga.png', href: 'https://doublegarts.eu', desc: 'Creative studio for digital art and design.' },
]

const tierOrder = ['patron', 'diamond', 'titanium', 'platinum', 'gold', 'silver', 'bronze']

const tiers = [
  { key: 'bronze',   label: 'Bronze',   price: '$5 / month' },
  { key: 'silver',   label: 'Silver',   price: '$10 / month' },
  { key: 'gold',     label: 'Gold',     price: '$25 / month' },
  { key: 'platinum', label: 'Platinum', price: '$50 / month' },
  { key: 'titanium', label: 'Titanium', price: '$100 / month' },
  { key: 'diamond',  label: 'Diamond',  price: '$250 / month' },
  { key: 'patron',   label: 'Patron',   price: '$800 / month' },
]

const tierColors = {
  bronze:   'border-az-orange bg-az-85',
  silver:   'border-az-45 bg-az-85',
  gold:     'border-az-yellow bg-az-85',
  platinum: 'border-az-10 bg-az-80',
  titanium: 'border-az-green bg-az-85',
  diamond:  'border-az-secondary bg-az-85',
  patron:   'border-az-primary bg-az-80',
}

const tierLabels = {
  bronze:   'text-az-orange',
  silver:   'text-az-45',
  gold:     'text-az-yellow',
  platinum: 'text-az-10',
  titanium: 'text-az-green',
  diamond:  'text-az-secondary',
  patron:   'text-az-primary',
}

export default function Donate() {
  return (
    <>
      {/* Minimal nav for donate page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-az-90/80 backdrop-blur-md border-b border-az-75 px-4">
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/azora_logo.svg" alt="Azora" className="h-7 w-7" />
            <span className="font-semibold text-az-10">Azora Programming Language</span>
          </Link>
          <Link to="/" className="text-sm text-az-40 hover:text-az-10 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-az-primary mb-4"><HeartIcon /></span>
            <h1 className="text-4xl font-bold text-az-10 mb-3">Support Azora</h1>
            <p className="text-az-45 max-w-xl mx-auto leading-relaxed">
              Azora is free and open-source forever. Your donations help fund development, infrastructure, and keep the project sustainable.
            </p>
          </div>

          {/* Donation Platforms */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-az-10 mb-6 text-center">Donate via</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* PayPal */}
              <a
                href="https://paypal.me/digital7tmb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-az-75 bg-az-85 p-6 hover:border-az-primary transition-colors group"
              >
                <span className="text-[#00457C] group-hover:scale-110 transition-transform">
                  <PayPalIcon />
                </span>
                <div>
                  <p className="font-semibold text-az-10">PayPal</p>
                  <p className="text-sm text-az-45">@digital7tmb</p>
                </div>
              </a>

              {/* Buy Me a Coffee */}
              <a
                href="https://buymeacoffee.com/azoratech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-az-75 bg-az-85 p-6 hover:border-az-yellow transition-colors group"
              >
                <span className="text-az-yellow group-hover:scale-110 transition-transform">
                  <CoffeeIcon />
                </span>
                <div>
                  <p className="font-semibold text-az-10">Buy Me a Coffee</p>
                  <p className="text-sm text-az-45">azoratech</p>
                </div>
              </a>
            </div>
          </section>

          {/* Tiers */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-az-10 mb-2 text-center">Tiers</h2>
            <p className="text-az-45 text-center text-sm mb-8">
              Pick a tier and become a sponsor.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tiers.map(t => (
                <a
                  key={t.key}
                  href="https://buymeacoffee.com/azoratech/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl border p-5 hover:border-az-primary transition-colors ${tierColors[t.key]}`}
                >
                  <p className={`font-bold text-lg ${tierLabels[t.key]}`}>{t.label}</p>
                  <p className="text-sm text-az-10 mt-1">{t.price}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Funding Stats */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-az-10 mb-8 text-center">Funding</h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="rounded-xl border border-az-75 bg-az-85 p-6 text-center">
                <p className="text-3xl font-bold text-az-primary">${perMonth.toLocaleString()}</p>
                <p className="text-sm text-az-45 mt-1">Per Month</p>
              </div>
              <div className="rounded-xl border border-az-75 bg-az-85 p-6 text-center">
                <p className="text-3xl font-bold text-az-secondary">${oneTime.toLocaleString()}</p>
                <p className="text-sm text-az-45 mt-1">One Time</p>
              </div>
              <div className="rounded-xl border border-az-75 bg-az-85 p-6 text-center">
                <p className="text-3xl font-bold text-az-10">{members.toLocaleString()}</p>
                <p className="text-sm text-az-45 mt-1">Sponsors</p>
              </div>
            </div>

            {/* Yearly progress bar */}
            <div className="rounded-xl border border-az-75 bg-az-85 p-6">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-2xl font-bold text-az-primary">${perMonth.toLocaleString()}</span>
                <span className="text-sm text-az-45">of ${fundingGoal.toLocaleString()} yearly goal</span>
              </div>
              <div className="w-full bg-az-80 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-az-primary rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((perMonth / fundingGoal) * 100, 100)}%` }}
                />
              </div>
              <p className="text-xs text-az-60 mt-2">
                {Math.round((perMonth / fundingGoal) * 100)}% of yearly goal
              </p>
            </div>
          </section>

          {/* Sponsors */}
          {sponsorsList.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xl font-semibold text-az-10 mb-2 text-center">Sponsors</h2>
              <p className="text-az-45 text-center text-sm mb-8">
                Companies and individuals supporting Azora's development.
              </p>
              {tierOrder.map(tier => {
                const items = sponsorsList.filter(s => s.tier === tier)
                if (items.length === 0) return null
                return (
                  <div key={tier} className="mb-6 last:mb-0">
                    <p className={`text-xs font-medium uppercase tracking-wider mb-3 ${tierLabels[tier]}`}>{tier}</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map(m => {
                        const content = (
                          <>
                            {m.logo && <img src={m.logo} alt={m.name} className="w-10 h-10 rounded-lg object-contain" />}
                            <div>
                              <p className="font-semibold text-az-10">{m.name}</p>
                              {m.desc && <p className="text-xs text-az-45 mt-0.5">{m.desc}</p>}
                            </div>
                          </>
                        )
                        return m.href ? (
                          <a
                            key={m.name}
                            href={m.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded-xl border p-5 flex items-center gap-4 hover:border-az-primary transition-colors ${tierColors[m.tier]}`}
                          >
                            {content}
                          </a>
                        ) : (
                          <div key={m.name} className={`rounded-xl border p-5 flex items-center gap-4 ${tierColors[m.tier]}`}>
                            {content}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </section>
          )}


        </div>
      </main>

      <Footer />
    </>
  )
}
