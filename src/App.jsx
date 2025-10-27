import { useState } from 'react'
import './App.css'
import Crickters from './Components/Crickters'
import FavCrickters from './Components/FavCrickters'

function App() {

  const [crickters , setCrickters] = useState([])

  const handleFavCrickters =(crickter)=>{

    const alreadyAdd = crickters.find((c)=> c.name === crickter.name)
    if(alreadyAdd){
      alert('Already added')
      return
    }

    setCrickters(prev => [...prev , crickter])
  }


  return (
    <>
   <div className='flex justify-between gap-2 px-6 mx-auto mt-10'>
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
