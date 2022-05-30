import React, {useEffect} from 'react';
import { FaWindowClose } from 'react-icons/fa';

const Modal = ({ title, setClose, children }) => {

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		}

	} , []);

	const handleClose = () => {
		setClose([]);
	}

	return <div className='fixed z-50 inset-0 overflow-y-auto flex justify-center items-center'>
		<div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity'></div>
		<div className='align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-8'>
			<h3 className='leading-6 font-bold text-xl text-indigo-600'>{ title }</h3>
			<button className='text-endeavour hover:text-endeavour-300 absolute right-4 top-4 text-xl' onClick={ handleClose }><FaWindowClose /></button>
			<div className='mt-2 text-gray-700'>
				{ children }
			</div>
		</div>
	</div>
}

export default Modal