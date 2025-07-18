
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import Home from './pages/home/Home.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
import About from './pages/about/About.jsx'
import Labs from './pages/labs/Labs.jsx'
import Contact from './pages/contact/Contact.jsx'

import Header from './components/header/Header.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/labs" element={ <Labs /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
