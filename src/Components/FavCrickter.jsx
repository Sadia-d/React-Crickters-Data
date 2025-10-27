import React from 'react';

const FavCrickter = ({crickter}) => {
    return (
        <div>
             <div className='border-2 mb-3 px-8 mx-10'>
            <h1 className='text-2xl font-bold'>Name : {crickter.name}</h1>
            <p className='text-xl font-semibold'>Runs : {crickter.runs} </p>
            <p className='text-xl font-semibold'>Team : {crickter.team} </p>
            <p className='text-xl font-semibold'>Centuries : {crickter.centuries} </p>
            <p className='text-xl font-semibold'>Fifties : {crickter.fifties} </p>
        
        </div>
        </div>
    );
};

export default FavCrickter;