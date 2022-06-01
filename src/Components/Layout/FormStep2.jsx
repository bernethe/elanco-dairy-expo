import React from 'react';

import prod01 from '../../Assets/p/prod-1.png';
import prod02 from '../../Assets/p/prod-2.png';
import prod03 from '../../Assets/p/prod-3.png';
import prod04 from '../../Assets/p/prod-4.png';
import prod05 from '../../Assets/p/prod-5.png';
import prod06 from '../../Assets/p/prod-6.png';
import prod07 from '../../Assets/p/prod-7.png';
import prod08 from '../../Assets/p/prod-8.png';
import prod09 from '../../Assets/p/prod-9.png';
import prod10 from '../../Assets/p/prod-10.png';

const FormStep2 = ({prods, setProds, setTotalPoints, handleStep2}) => {

	const prodArr = [
		prod01,
		prod02,
		prod03,
		prod04,
		prod05,
		prod06,
		prod07,
		prod08,
		prod09,
		prod10
	];

	const handleChange = (e, i) => {
		// console.log(e.target.value, i);
		let tempProds = [...prods];
		tempProds[i].quantity = Number(e.target.value);
		setProds(tempProds);
		setTotalPoints(prods.map(product => product.quantity * product.points).reduce((a, b) => a + b, 0));
		// console.table(prods);
	}
	
	return <div className='bg-[url(@/Assets/ganao-ostinao.jpg)] bg-cover bg-center py-12'>
		<div className='container mx-auto' id='activar'>
			<div className='flex flex-wrap justify-center'>
				{
					prods.map( (product, i) => {
						return <div key={`pr_${i}`} className='w-1/2 md:w-1/4 px-8 py-2 text-center'>
							<img src={prodArr[product.id-1]} alt={product.name} className='w-full' />
							<input
								className='block w-full p-1 mt-2'
								type='number'
								min='0'
								max='99'
								value={prods[i].quantity}
								onChange={ (e) => handleChange(e, i) }
							/>
						</div>
					})
				}
			</div>
			<div className='my-8 text-center'>
				<button className='bg-endeavour text-white text-xl rounded px-4 py-2' onClick={ handleStep2 }>Guardar</button>
			</div>
		</div>
	</div>
}

export default FormStep2