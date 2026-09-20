import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ReelsPage from './pages/ReelsPage/ReelsPage'
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage'
import { WishlistProvider } from './context/WishlistContext'
import './App.css'

function App() {
  const location = useLocation()
  const projectMatch = location.pathname.match(/^\/project\/(.+)$/)

  return (
    <WishlistProvider>
      <Routes>
        <Route path="/reels/:id" element={<ReelsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      {projectMatch && <ProjectDetailPage id={projectMatch[1]} />}
    </WishlistProvider>
  )
}

export default App
