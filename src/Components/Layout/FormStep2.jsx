import React, {useEffect} from 'react'
import {BASE_URL} from '../../connections';

const FormStep2 = ({prods, setProds, setTotalPoints, handleStep2}) => {

	useEffect(() => {
	} , []);

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
							<img src={`${BASE_URL}p/prod-${product.id}.png`} alt={product.name} className='w-full' />
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