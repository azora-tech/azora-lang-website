import useAzoraEngine from './hooks/useAzoraEngine'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CodeShowcase from './components/CodeShowcase'
import Targets from './components/Targets'
import Ecosystem from './components/Ecosystem'
import Footer from './components/Footer'

export default function App() {
  const engine = useAzoraEngine()

  return (
    <>
      <Navbar />
      <main>
        <Hero engine={engine} />
        <Features />
        <CodeShowcase engine={engine} />
        <Targets />
        <Ecosystem />
      </main>
      <Footer />
    </>
  )
}
