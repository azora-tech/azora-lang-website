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

  // The Kotlin/WASM webpack bundle exports to globalThis.compiler
  // The module loads async chunks (WASM), so we poll until azInterpret is a callable function
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

async function waitForModule(maxAttempts = 100) {
  for (let i = 0; i < maxAttempts; i++) {
    const mod = globalThis.compiler
    if (mod && typeof mod.azInterpret === 'function') {
      return mod
    }
    await new Promise(r => setTimeout(r, 100))
  }
  throw new Error('WASM module did not initialize within timeout')
}
