import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/about'
import ArticlePage from './pages/article'
import HomePage from './pages/index';

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
