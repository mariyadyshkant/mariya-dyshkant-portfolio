import { Routes, Route } from 'react-router-dom'
import IconDefs from './components/IconDefs'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <>
      <IconDefs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progetti/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}
