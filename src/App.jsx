
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './Pages/Home'
import About from './Pages/About'
import Program from './Pages/Program'
import Volunteer from './Pages/Volunteer'
import Contact from './Pages/Contact'
import Donate from './Pages/Donate'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
