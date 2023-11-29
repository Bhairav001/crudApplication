
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Footer from './components/footer/Footer'
import HomePage from './pages/homePage/HomePage'

function App() {

  return (
    <>
        <Navbar/>
     <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
     </Routes>
    <Footer/>
    </>
  )
}

export default App
