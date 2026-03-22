export async function loadWasmEngine(version) {
  const basePath = `${import.meta.env.BASE_URL}wasm/${version}`
  const cacheBust = `?t=${Date.now()}`

  const oldScript = document.querySelector('script[data-azora-wasm]')
  if (oldScript) oldScript.remove()

  await new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.setAttribute('data-azora-wasm', 'true')
    script.src = `${basePath}/azoraLang.js${cacheBust}`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load WASM bundle for version ${version}`))
    document.head.appendChild(script)
  })

  // The new Kotlin/WASM webpack bundle exports to globalThis.compiler
  // Wait for the module to initialize (it uses async loading)
  const ns = await waitForModule()

  return {
    async interpret(source) {
      try {
        const json = await ns.azInterpret(source)
        return JSON.parse(json)
      } catch (e) {
        return { success: false, output: '', errors: e.message || String(e) }
      }
    },
    async runTests(source) {
      try {
        const json = await ns.azRunTests(source)
        return JSON.parse(json)
      } catch (e) {
        return { success: false, output: '', errors: e.message || String(e) }
      }
    },
  }
}

async function waitForModule(maxAttempts = 50) {
  for (let i = 0; i < maxAttempts; i++) {
    if (typeof globalThis.compiler !== 'undefined' && globalThis.compiler.azInterpret) {
      return globalThis.compiler
    }
    await new Promise(r => setTimeout(r, 100))
  }
  throw new Error('WASM module did not initialize within timeout')
}
