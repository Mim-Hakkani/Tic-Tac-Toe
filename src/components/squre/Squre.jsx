// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Squre = ({value}) => {
    return (
        <>
            <button className='bg-white border border-gray-400 h-12 w-12 leading-9 m-1 text-lg'>
                {value}
            </button>
        </>
    );
};

export default Squre;