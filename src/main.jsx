import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Donate from './pages/Donate'
import Community from './pages/Community'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
