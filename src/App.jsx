
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home.jsx'
import Product from './Pages/Product'
import SingleProduct from './Pages/SingleProduct'

function App() {
 

  return (
    <>

    <Routes>
      <Route path='/'element={<Home/>}/>
       <Route path='/Product'element={<Product/>}/>
        <Route path='/SingleProduct'element={<SingleProduct/>}/>
         <Route path='/About'element={<About/>}/>
        <Route path='/Contact'element={<Contact/>}/>
    </Routes>
    
    </>
  )
}

export default App
