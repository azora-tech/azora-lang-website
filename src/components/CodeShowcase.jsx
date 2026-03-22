import { useState, useMemo } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import azoraPrism from '../data/azora-prism'
import { codeExamples } from '../data/codeExamples'

SyntaxHighlighter.registerLanguage('azora', azoraPrism)

export const darkTheme = {
  'code[class*="language-"]': {
    color: '#D9D9D9',
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
    fontSize: '0.875rem',
    lineHeight: '1.6',
  },
  'pre[class*="language-"]': {
    color: '#D9D9D9',
    background: '#141414',
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
    fontSize: '0.875rem',
    lineHeight: '1.6',
    padding: '1.25rem',
    margin: '0',
    overflow: 'auto',
    borderRadius: '0.5rem',
  },
  keyword: { color: '#D16B8E', fontWeight: 'bold' },
  boolean: { color: '#D16B8E', fontWeight: 'bold' },
  'class-name': { color: '#5FA89F' },
  builtin: { color: '#D4A574' },
  function: { color: '#D4A574' },
  string: { color: '#7DBF8A' },
  number: { color: '#ECECEC' },
  'doc-comment': { color: '#6B9F77', fontStyle: 'italic' },
  'doc-tag': { color: '#5BA3D0', fontWeight: 'bold' },
  'doc-param-name': { color: '#D9D9D9' },
  comment: { color: '#676767', fontStyle: 'italic' },
  annotation: { color: '#E6C96B' },
  variable: { color: '#B06FA8', fontStyle: 'italic' },
  interpolation: { color: '#D9D9D9' },
  'interpolation-punctuation': { color: '#E6C96B' },
  operator: { color: '#B2B3B3' },
  punctuation: { color: '#B2B3B3' },
}

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4 2l10 6-10 6V2z" />
  </svg>
)

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 8l4 4L14 4" />
  </svg>
)

const Spinner = () => (
  <svg className="animate-spin w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="8" cy="8" r="6" strokeOpacity="0.3" />
    <path d="M8 2a6 6 0 0 1 6 6" />
  </svg>
)

function detectCapabilities(code) {
  const hasMain = /\bfunc\s+main\s*\(/.test(code) || /\btask\s+main\s*\(/.test(code) || /\bhook\s+onStart\s*\(/.test(code)
  const hasTests = /\btest\s+"/.test(code)
  return { hasMain, hasTests }
}

export default function CodeShowcase({ engine }) {
  const [selected, setSelected] = useState(0)
  const [output, setOutput] = useState(null)
  const [runningMode, setRunningMode] = useState(null)
  const example = codeExamples[selected]

  const { hasMain, hasTests } = useMemo(() => detectCapabilities(example.code), [example.code])
  const running = runningMode !== null

  function handleSelect(i) {
    setSelected(i)
    setOutput(null)
  }

  async function handleRun() {
    if (!engine.ready || running) return
    setRunningMode('run')
    setOutput(null)
    const result = await engine.interpret(example.code)
    setOutput(result)
    setRunningMode(null)
  }

  async function handleRunTests() {
    if (!engine.ready || running) return
    setRunningMode('test')
    setOutput(null)
    const result = await engine.runTests(example.code)
    setOutput(result)
    setRunningMode(null)
  }

  return (
    <section id="examples" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Code Examples</h2>
        <p className="text-az-45 text-center mb-10 max-w-xl mx-auto">
          See Azora in action. Select an example to explore the language.
        </p>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
          <select
            value={selected}
            onChange={e => handleSelect(Number(e.target.value))}
            className="flex-1 bg-az-85 border border-az-65 rounded-lg px-4 py-2.5 text-sm text-az-10 font-medium focus:outline-none focus:border-az-primary appearance-none cursor-pointer"
          >
            {codeExamples.map((ex, i) => (
              <option key={i} value={i}>{ex.title}</option>
            ))}
          </select>
          <a
            href="https://code.azoralang.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-az-primary/15 text-az-primary text-sm font-medium hover:bg-az-primary/25 transition-colors"
          >
            Open in Playground
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 3h6v6" />
              <path d="M13 3L6 10" />
            </svg>
          </a>
        </div>

        {/* Code display */}
        <div className="rounded-xl border border-az-75 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-az-85 border-b border-az-75">
            <span className="text-xs text-az-60 font-mono">{example.title.replace(/[^a-zA-Z0-9]+/g, '')}.az</span>
            <div className="flex items-center gap-2">
              {hasMain && (
                <button
                  onClick={handleRun}
                  disabled={!engine.ready || running}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-az-green/15 text-az-green hover:bg-az-green/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {runningMode === 'run' ? <><Spinner /> Running</> : <><PlayIcon /> Run</>}
                </button>
              )}
              {hasTests && (
                <button
                  onClick={handleRunTests}
                  disabled={!engine.ready || running}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-az-secondary/15 text-az-secondary hover:bg-az-secondary/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {runningMode === 'test' ? <><Spinner /> Running Tests</> : <><CheckIcon /> Run Tests</>}
                </button>
              )}
            </div>
          </div>
          <SyntaxHighlighter
            language="azora"
            style={darkTheme}
            wrapLongLines
          >
            {example.code}
          </SyntaxHighlighter>
          {output && (
            <div className="border-t border-az-75 px-4 py-3 bg-az-95 font-mono text-xs">
              <div className="text-az-60 mb-1">Output</div>
              {output.success ? (
                <pre className="text-az-green whitespace-pre-wrap">{output.output || '(no output)'}</pre>
              ) : (
                <pre className="text-az-red whitespace-pre-wrap">{output.errors}</pre>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
