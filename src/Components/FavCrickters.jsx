import React from 'react';
import Crickter from './Crickter';
import FavCrickter from './FavCrickter';

const FavCrickters = ({crickters}) => {
    return ( 
        <div className='border-2 border-blue-500 text-center w-[400px]'>
            <h1 className='text-center font-bold text-2xl mt-3'>Favorite Crickter : {crickters.length}</h1>
           <div >
             {
                crickters.map((crickter)=> <FavCrickter crickter={crickter}></FavCrickter> )
            }
           </div>
        </div>
    )

};

export default FavCrickters;