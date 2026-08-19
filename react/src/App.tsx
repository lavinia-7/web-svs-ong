import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutPage from './pages/about'
import ArticlePage from './pages/article'

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
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App