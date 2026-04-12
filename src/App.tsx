import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ErrorPage from './pages/Error'
import UnderConstruction from './pages/UnderConstruction'
import './styles/global.css'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<UnderConstruction />} />
            <Route path="/home" element={<Home />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LangProvider>
  )
}