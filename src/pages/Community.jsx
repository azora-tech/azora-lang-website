import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const DiscordIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const links = [
  {
    name: 'Discord',
    desc: 'Join the community, ask questions, and chat with other Azora developers.',
    href: 'https://discord.gg/aTNzf3x6',
    icon: DiscordIcon,
    color: 'text-[#5865F2]',
    border: 'hover:border-[#5865F2]',
  },
  {
    name: 'GitHub',
    desc: 'Browse the source code, report issues, and contribute to the project.',
    href: 'https://github.com/azora-tech',
    icon: GitHubIcon,
    color: 'text-az-10',
    border: 'hover:border-az-10',
  },
  {
    name: 'Instagram',
    desc: 'Follow us for updates, behind-the-scenes, and announcements.',
    href: 'https://www.instagram.com/azora.tech/',
    icon: InstagramIcon,
    color: 'text-[#E4405F]',
    border: 'hover:border-[#E4405F]',
  },
]

export default function Community() {
  return (
    <>
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

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-az-10 mb-3">Community</h1>
            <p className="text-az-45 max-w-xl mx-auto leading-relaxed">
              Connect with the Azora community. Get help, share your projects, and stay up to date.
            </p>
          </div>

          <div className="grid gap-4">
            {links.map(l => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-5 rounded-xl border border-az-75 bg-az-85 p-6 transition-colors ${l.border}`}
              >
                <span className={`${l.color} shrink-0`}>
                  <l.icon />
                </span>
                <div>
                  <p className="font-semibold text-az-10">{l.name}</p>
                  <p className="text-sm text-az-45 mt-0.5">{l.desc}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
