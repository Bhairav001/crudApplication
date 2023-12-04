
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Navbar from './components/navbar/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Footer from './components/footer/Footer'
import HomePage from './pages/homePage/HomePage'
import Contactus from './pages/Contactus'
import Calendar from './pages/Calendar'
import Products from './product/Products'
import Product from './pages/project/Project'
import RequiredAuth from './hoc/RequiredAuth'

function App() {

  return (
    <>
        <Navbar/>
     <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/products' element={
          <RequiredAuth>
             <Products/>
          </RequiredAuth>

          }></Route>
          <Route path='/project' element={<Product/>}/>
     </Routes>
    <Footer/>
    </>
  )
}

export default App
