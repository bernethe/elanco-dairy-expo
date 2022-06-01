import React from 'react';
import Elanco from '../UI/Elanco';
import reglamento from '../../Assets/tyc-2022.pdf';

const Nav = () => {
    return <>
        <nav className='w-full fixed left-0 top-0 h-[63px] shadow flex text-endeavour z-10 bg-white bg-opacity-50 backdrop-blur-sm' id='mainNav'>
            <ul className='flex flex-grow items-stretch'>
                <li className='flex items-stretch'>
                    <a href='/#activar' className='px-4 flex justify-center items-center font-bold'>Activar</a>
                </li>
                <li className='flex items-stretch'>
                    <a href='/#mecanica' className='px-4 flex justify-center items-center'>Mecánica</a>
                </li>
                <li className='flex items-stretch'>
                    <a href='/#premios' className='px-4 flex justify-center items-center'>Premios</a>
                </li>
                <li className='flex items-stretch'>
                    <a href={reglamento} target='_blank' className='px-4 flex justify-center items-center'>Reglamento</a>
                </li>
            </ul>
            <div className='hidden md:block flex-grow-0 min-w-[95px] py-2 mx-2'><Elanco /></div>
        </nav>
        <div className='h-16'></div>
    </>
}

export default Nav