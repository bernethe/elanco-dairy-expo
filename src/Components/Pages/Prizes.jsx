import React from 'react';
import pr1 from '../../Assets/elanco-premio-02.jpg';
import pr2 from '../../Assets/elanco-premio-01.jpg';

const Prizes = () => {
    return <div className='container mx-auto py-8' id='premios'>
        <div className='text-center'>
            <h2 className='font-bold text-2xl'>Premios</h2>
            <p>Participa y podrás ganar premios como:</p>
        </div>
        <div className='md:flex text-center'>
            <div className='md:w-1/2 p-4'>
                <figure className='px-12 md:px-18 xl:px-40'>
                    <img src={pr1} alt="" />
                </figure>
            </div>
            <div className='md:w-1/2 p-4'>
                <figure className='px-12 md:px-18 xl:px-40'>
                    <img src={pr2} alt="" />
                </figure>
            </div>
        </div>
    </div>
}

export default Prizes