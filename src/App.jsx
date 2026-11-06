import { Routes, Route } from 'react-router-dom'
import IconDefs from './components/IconDefs'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ScrollToHash from './components/ScrollToHash'

export default function App() {
  return (
    <>
      <IconDefs />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progetti/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}
