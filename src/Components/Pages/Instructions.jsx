import React from 'react';
import {AiOutlineShoppingCart, AiOutlineForm, AiOutlineCheckCircle} from 'react-icons/ai';
import {GoBrowser} from 'react-icons/go';

export const Instructions = () => {
    return <div className='bg-[url(@/Assets/pollos.jpg)] bg-cover bg-center py-20' id='mecanica'>
        <h2 className='font-bold text-2xl text-center w-4/5 md:w-1/2 mx-auto bg-white bg-opacity-50 backdrop-blur-sm p-2 my-8 block rounded'>Instrucciones</h2>
        <div className='container mx-auto my-8'>
            <div className='md:flex'>
                <div className='md:w-1/4 p-4'>
                    <div className='text-center bg-white bg-opacity-70 backdrop-blur-sm px-2 py-8 block rounded h-full'>
                        <div className='px-12 text-6xl text-endeavour'>
                            <AiOutlineShoppingCart className='mx-auto' />
                        </div>
                        <p>Compre productos Elanco</p>
                    </div>
                </div>
                <div className='md:w-1/4 p-4'>
                    <div className='text-center bg-white bg-opacity-70 backdrop-blur-sm px-2 py-8 block rounded h-full'>
                        <div className='px-12 text-6xl text-endeavour'>
                            <GoBrowser className='mx-auto' />
                        </div>
                        <p>Ingrese los datos solicitados</p>
                    </div>
                </div>
                <div className='md:w-1/4 p-4'>
                    <div className='text-center bg-white bg-opacity-70 backdrop-blur-sm px-2 py-8 block rounded h-full'>
                        <div className='px-12 text-6xl text-endeavour'>
                            <AiOutlineForm className='mx-auto' />
                        </div>
                        <p>Una vez ingresados, seleccione los productos comprados y acumule puntos</p>
                    </div>
                </div>
                <div className='md:w-1/4 p-4'>
                    <div className='text-center bg-white bg-opacity-70 backdrop-blur-sm px-2 py-8 block rounded h-full'>
                        <div className='px-12 text-6xl text-endeavour'>
                            <AiOutlineCheckCircle className='mx-auto' />
                        </div>
                        <p>Suerte, ya quedo participando</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='w-4/5 md:w-1/2 mx-auto my-8 text-center bg-white bg-opacity-50 backdrop-blur-sm p-2 block rounded'>
            Tenés tiempo hasta: <strong>31 de agosto</strong> <br />
            Fecha del sorteo: <strong>05 de septiembre</strong>
        </p>
    </div>
}
