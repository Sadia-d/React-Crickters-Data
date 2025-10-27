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
            {
                crickters.map((crickter) => <Crickter 
                handleFavCrickters={handleFavCrickters}
                crickter={crickter} ></Crickter>)
            }
        </div>
    );
};

export default Crickters;