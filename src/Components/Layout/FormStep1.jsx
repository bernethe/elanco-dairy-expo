import React from 'react'
import InputPlus from '../UI/InputPlus';
import Elanco from '../UI/Elanco';
import {AiOutlineUser, AiOutlineIdcard, AiOutlineMail, AiOutlinePhone, AiOutlineFileText, AiOutlineGlobal, AiOutlineShopping} from 'react-icons/ai';
import SelectPlus from '../UI/SelectPlus';

const FormStep1 = ({name, docID, email, phone, bill, country, acceptRules, handleStep1, setName, setDocID, setEmail, setPhone, setBill, setCountry, setAcceptRules, COUNTRY_DATA, COUNTRY_PLACEHOLDER}) => {
	return <div className='bg-[url(@/Assets/ganao-ostinao.jpg)] bg-cover bg-center py-12'>
		<div className='container mx-auto' id='activar'>
			<div className='md:flex items-center'>
				<div className='w-full md:w-1/2 p-12 bg-endeavour text-white'>
					<h1 className='text-3xl flex items-center justify-center'>
						<span className='inline-block w-20'><Elanco /></span> <span className='ml-4'>te premia</span>
					</h1>
					{/* <p className='mt-4'>Por la compra mínima de ₡5.000 en productos Elanco™ participe en el sorteo de grandiosos premios.</p> */}
				</div>
				<div className='w-full md:w-1/2 px-4 md:px-12'>
					<InputPlus placeholder='Nombre Completo' icon={<AiOutlineUser className='w-full h-full' />} value={name} setValue={setName} />
					<InputPlus placeholder='Documento de Identidad' icon={<AiOutlineIdcard className='w-full h-full' />} value={docID} setValue={setDocID} />
					<InputPlus placeholder='Teléfono' icon={<AiOutlinePhone className='w-full h-full' />} value={phone} setValue={setPhone} />
					<InputPlus placeholder='Correo Electrónico' icon={<AiOutlineMail className='w-full h-full' />} value={email} setValue={setEmail} />
					<InputPlus placeholder='Número de Factura' icon={<AiOutlineFileText className='w-full h-full' />} value={bill} setValue={setBill} />
					<SelectPlus data={COUNTRY_DATA} placeholder={COUNTRY_PLACEHOLDER} icon={<AiOutlineGlobal className='w-full h-full' />} value={country} setValue={setCountry} />
					<label className='bg-white bg-opacity-50 backdrop-blur-sm p-2 block rounded mb-4'>
						<input type='checkbox' checked={acceptRules} onChange={ () => setAcceptRules(!acceptRules) } />
						<span className='ml-2'>He leído y acepto el reglamento de la promoción. Soy conciente que debo presentar las facturas de compra si resulto ganador.</span>
					</label>
					<div className='text-right'>
						<button className='bg-endeavour text-white text-xl rounded px-4 py-2' onClick={ handleStep1 }>Siguiente</button>
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default FormStep1