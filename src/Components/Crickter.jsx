import React from 'react';

const Crickter = ({crickter,handleFavCrickters}) => {
    const{name , runs ,team ,centuries ,fifties} = crickter;
    
    return (        
        <div className='border-2 border-blue-400 rounded-xl mb-3 py-3 px-12
        mx-2'>
            <h1 className='text-xl text-gray-700 font-bold'>Name : {name}</h1>
            <p className='text-lg font-medium text-gray-500'>Runs : {runs} </p>
            <p className='text-lg font-medium text-gray-500'>Team : {team} </p>
            <p className='text-lg font-medium text-gray-500'>Centuries : {centuries} </p>
            <p className='text-lg font-medium text-gray-500'>Fifties : {fifties} </p>
            <button onClick={()=>handleFavCrickters(crickter)} className='bg-blue-600 px-3  rounded-xl  text-white mt-2
             mb-2 py-2 '>Add crickter</button>
        </div>
    
        
    );
};

export default Crickter;