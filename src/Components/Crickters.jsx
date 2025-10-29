import React, { useEffect, useState } from 'react';
import Crickter from './Crickter';

const Crickters = ({handleFavCrickters}) => {

     const[crickters , setCrickters] = useState([])

     useEffect(()=>{
        fetch('crickters.json')
        .then(res => res.json())
        .then(data=> setCrickters(data))
     },[])


    return (
        <div>
             
         <div className=' container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4  '>
               {
                crickters.map((crickter) => <Crickter 
                handleFavCrickters={handleFavCrickters}
                crickter={crickter} ></Crickter>)
            }
         </div>
        </div>
    );
};

export default Crickters;