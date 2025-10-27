import React from 'react';
import Crickter from './Crickter';
import FavCrickter from './FavCrickter';

const FavCrickters = ({crickters}) => {
    return ( 
        <div className='border-2 text-center'>
            <h1>Fav Crikter : {crickters.length}</h1>
           <div>
             {
                crickters.map((crickter)=> <FavCrickter crickter={crickter}></FavCrickter> )
            }
           </div>
        </div>
    )

};

export default FavCrickters;