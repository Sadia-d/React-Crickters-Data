import React from 'react';

const FavCrickter = ({crickter}) => {
    return (
        <div>
             <div className='border border-blue-400 mb-3 py-2 px-8 mx-4 rounded-xl mt-2 '>
            <h1 className='text-xl text-gray-700 font-bold'>Name : {crickter.name}</h1>
             <p className='text-lg font-semibold text-gray-500'>Team : {crickter.team} </p>
        
        </div>
        </div>
    );
};

export default FavCrickter;