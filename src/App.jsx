import { useState } from 'react'
import './App.css'
import Crickters from './Components/Crickters'
import FavCrickters from './Components/FavCrickters'
import Header from './Components/Header'

function App() {

  
  const [crickters , setCrickters] = useState([])

  const handleFavCrickters =(crickter)=>{

    const alreadyAdd = crickters.find((c)=> c.name === crickter.name)
    if(alreadyAdd){
      alert('You already add this card')
      return
    }

    setCrickters(prev => [...prev , crickter])
   
  }


  return (
    <>
    <Header></Header>
   <div   className={` flex lg:flex-row flex-col justify-between gap-2 px-6 mx-auto mt-10 `}>
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
