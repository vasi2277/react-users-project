
import { Route, Routes } from 'react-router-dom'
import Data from './Data'
import Navbar from './Navbar'



export default function App() {


      


  

  return (

    <div>

       <Navbar/>

      <Routes>

         <Route path='/users' element={<Data/>} / >

      </Routes>
     
    </div>

 
  )
}
