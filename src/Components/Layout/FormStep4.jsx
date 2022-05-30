import React from 'react'

const FormStep4 = ({user}) => {

    return <div className='bg-[url(@/Assets/ganao-ostinao.jpg)] bg-cover bg-center py-12'>
        <div className='container mx-auto' id='activar'>
            <div className='md:w-1/2 bg-white bg-opacity-50 backdrop-blur-sm p-2 block rounded mx-auto text-center'>
                <p>El participante</p>
                <p className='mb-4 font-bold text-xl'>{user.name}</p>
                <p>con documento de identidad</p>
                <p className='mb-4 font-bold text-xl'>{user.docid}</p>
                <p>ha recibido en total</p>
                <p className='mb-4 font-bold text-xl'>{user.points} puntos</p>
            </div>
        </div>
    </div>
}

export default FormStep4