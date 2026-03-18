const links = [
  {
    title: 'Playground',
    desc: 'Write, run, and share Azora code directly in your browser. No setup required.',
    href: 'https://code.azoralang.org',
    cta: 'Open Playground',
    accent: 'bg-az-primary/10 border-az-primary/30 hover:border-az-primary/60',
    ctaColor: 'text-az-primary',
  },
  {
    title: 'The Azora Book',
    desc: 'A comprehensive 30-chapter guide covering everything from basics to advanced concurrency.',
    href: 'https://book.azoralang.org',
    cta: 'Start Reading',
    accent: 'bg-az-secondary/10 border-az-secondary/30 hover:border-az-secondary/60',
    ctaColor: 'text-az-secondary',
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Ecosystem</h2>
        <p className="text-az-45 text-center mb-12 max-w-lg mx-auto">
          Get started with Azora today.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {links.map(l => (
            <a
              key={l.title}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-xl border p-8 transition-colors ${l.accent}`}
            >
              <h3 className="text-xl font-semibold text-az-10 mb-3">{l.title}</h3>
              <p className="text-sm text-az-45 leading-relaxed mb-5">{l.desc}</p>
              <span className={`text-sm font-medium ${l.ctaColor}`}>
                {l.cta} &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
