import React from 'react';

const Crickter = ({crickter,handleFavCrickters}) => {
    console.log(crickter)
    const{name , runs ,team ,centuries ,fifties} = crickter;
    return (
        <div className='border-2 mb-3 px-8 mx-10'>
            <h1 className='text-2xl font-bold'>Name : {name}</h1>
            <p className='text-xl font-semibold'>Runs : {runs} </p>
            <p className='text-xl font-semibold'>Team : {team} </p>
            <p className='text-xl font-semibold'>Centuries : {centuries} </p>
            <p className='text-xl font-semibold'>Fifties : {fifties} </p>
            <button onClick={()=>handleFavCrickters(crickter)} className='bg-blue-600 px-4 rounded-xl text-white py-2 mb-2'>Add to fav crickter</button>
        </div>
    );
};

export default Crickter;