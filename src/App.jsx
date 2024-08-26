import './App.css'
import Layout from './components/root/Layout'
import About from './pages/About'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Service from './pages/Service'
import Protfolio from './pages/Protfolio'
function App() {
 let router=createBrowserRouter(createRoutesFromElements(

  <Route  path='/' element={<Layout/>}     >
<Route path="/" element={<Home/>} />
<Route path='/about'element={<About/>} />
<Route path='/service' element={<Service/>} />
<Route path="/protfolio" element={<Protfolio/>} />
  </Route>

 ))

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
