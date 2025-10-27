import { useState } from 'react'
import './App.css'
import Crickters from './Components/Crickters'
import FavCrickters from './Components/FavCrickters'

function App() {

  const [crickters , setCrickters] = useState([])

  const handleFavCrickters =(crickter)=>{
    setCrickters(prev => [...prev , crickter])
  }


  return (
    <>
   <div className='flex justify-center gap-6'>
    <div>
        <Crickters handleFavCrickters={handleFavCrickters}></Crickters>
    </div>
    <div>
      <FavCrickters crickters={crickters}></FavCrickters>
    </div>
   </div>
    </>
  )
}

export default App
