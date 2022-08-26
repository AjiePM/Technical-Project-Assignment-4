import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Education from './pages/education/Education-gallery'
import Articles from './pages/articles/Articles'
import Project from './pages/project/Project'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='articles' element={<Articles/>}/>
        </Routes>
    </BrowserRouter>
  )
}
