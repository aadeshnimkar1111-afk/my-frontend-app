import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ReelsPage from './pages/ReelsPage/ReelsPage'
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage'
import { WishlistProvider } from './context/WishlistContext'
import './App.css'

function App() {
  return (
    <WishlistProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reels/:id" element={<ReelsPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </WishlistProvider>
  )
}

export default App
