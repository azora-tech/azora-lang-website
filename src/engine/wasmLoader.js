export async function loadWasmEngine(version) {
  const basePath = `${import.meta.env.BASE_URL}wasm/${version}`
  const cacheBust = `?t=${Date.now()}`

  const oldScript = document.querySelector('script[data-azora-wasm]')
  if (oldScript) oldScript.remove()
  delete window.script

  await new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.setAttribute('data-azora-wasm', 'true')
    script.src = `${basePath}/composeApp.js${cacheBust}`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load WASM bundle for version ${version}`))
    document.head.appendChild(script)
  })

  const ns = await window.script

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
