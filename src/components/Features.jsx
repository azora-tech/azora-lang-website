const features = [
  {
    icon: '{ }',
    title: 'Clean, Expressive Syntax',
    desc: 'Familiar C-style syntax with modern ergonomics. Type inference, pattern matching, and single-expression functions reduce boilerplate.',
  },
  {
    icon: 'P',
    title: 'Packs, Enums & Slots',
    desc: 'Data packs for structures, enums for constants, and slots for tagged unions with exhaustive pattern matching.',
  },
  {
    icon: '<T>',
    title: 'Generics & Specs',
    desc: 'Full generic types and functions with spec constraints. Write reusable, type-safe abstractions without compromise.',
  },
  {
    icon: '~>',
    title: 'Async / Await',
    desc: 'First-class structured concurrency with tasks, async/await, and launch. Built into the language, not bolted on.',
  },
  {
    icon: '*',
    title: 'Flows & Generators',
    desc: 'Lazy generator sequences with yield. Compose data pipelines that only compute values on demand.',
  },
  {
    icon: '!',
    title: 'Built-in Testing',
    desc: 'Test blocks are a language construct. Write tests next to your code with assert and trace, no framework needed.',
  },
  {
    icon: '[]',
    title: 'Collection Literals',
    desc: 'Native syntax for arrays, sets (![...]), and maps (["key": val]). Literal-to-container coercion for List, Set, and Map types.',
  },
  {
    icon: 'fail',
    title: 'Error Handling',
    desc: 'Typed error returns with fail, try, and catch. No exceptions. Errors are values you handle explicitly.',
  },
  {
    icon: '*p',
    title: 'Pointers & Allocators',
    desc: 'Manual memory control with alloc, drop, ref, and mut. Regions for stack allocation and unsafe blocks when you need them.',
  },
  {
    icon: '=>',
    title: 'Multi-Target Compilation',
    desc: 'Compile to Kotlin/JVM, C#/.NET, JavaScript, or LLVM IR from a single codebase. Write once, run anywhere.',
  },
  {
    icon: '@',
    title: 'Metaprogramming',
    desc: 'Decorators, compile-time introspection with hasDeco and getDeco, and inline conditionals for code generation driven by metadata.',
  },
  {
    icon: '#',
    title: 'Compile-Time Execution',
    desc: 'Inline if/for blocks evaluate at compile time. Conditionally emit code, unroll loops, and resolve constants before runtime.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Features</h2>
        <p className="text-az-45 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to build modern software, all in one language.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(f => (
            <div key={f.title} className="rounded-xl border border-az-75 bg-az-85 p-5 hover:border-az-60 transition-colors">
              <span className="inline-block font-mono font-bold text-az-primary text-lg mb-3">{f.icon}</span>
              <h3 className="font-semibold text-az-10 mb-2">{f.title}</h3>
              <p className="text-sm text-az-45 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
