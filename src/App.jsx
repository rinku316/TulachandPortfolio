import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Projext from './Component/Projext'
import Resume from './Component/Resume'
import './App.css'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Navbar/>
       <Routes>
        {/* Show Home as the main page */}
        <Route index element = {<Home />}></Route>
        <Route path='/projext' element = {<Projext />}></Route>
        {/* other routes kept but not linked in navbar */}
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/resume' element = {<Resume />}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
