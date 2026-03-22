const targets = [
  {
    name: 'Kotlin / JVM',
    desc: 'Compile to Kotlin and run on the JVM or KMP. Access the entire Java and Kotlin ecosystem.',
    color: 'text-pastel-purple',
  },
  {
    name: 'C# / .NET',
    desc: 'Target C# for .NET applications. Leverage the .NET runtime and libraries.',
    color: 'text-pastel-blue',
  },
  {
    name: 'JavaScript',
    desc: 'Generate JavaScript for web browsers and Node.js. Build full-stack with one language.',
    color: 'text-pastel-yellow',
  },
  {
    name: 'Python',
    desc: 'Generate Python 3 code. Integrate with the Python ecosystem for data science, scripting, and automation.',
    color: 'text-pastel-orange',
  },
  {
    name: 'Swift',
    desc: 'Compile to Swift 6.2 for Apple platforms. Native protocols, classes, and Foundation integration.',
    color: 'text-pastel-pink',
  },
  {
    name: 'LLVM IR',
    desc: 'Compile to LLVM intermediate representation for native performance on any platform.',
    color: 'text-pastel-green',
  },
]

export default function Targets() {
  return (
    <section id="targets" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Compilation Targets</h2>
        <p className="text-az-45 text-center mb-12 max-w-2xl mx-auto">
          One language, multiple platforms. Azora compiles to the backend that fits your project.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {targets.map(t => (
            <div key={t.name} className="rounded-xl border border-az-75 bg-az-85 p-6 text-center hover:border-az-60 transition-colors">
              <h3 className={`font-mono font-bold text-lg mb-3 ${t.color}`}>{t.name}</h3>
              <p className="text-sm text-az-45 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
