import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutPage from './pages/about'

function HomePage() {
  return (
    <div>
      <h1>Food Ninja</h1>

      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App