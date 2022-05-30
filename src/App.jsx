import React, { useEffect, useState } from 'react';
import { sendAndLoad } from './connections';
import '@fontsource/fira-sans';
import '@fontsource/fira-sans/700.css';
import Elanco from './Components/UI/Elanco';
import Nav from './Components/Layout/Nav';
import Form from './Components/Pages/Form';
import Prizes from './Components/Pages/Prizes';
import { Instructions } from './Components/Pages/Instructions';

const App = () => {
	
	const [isLoading, setIsLoading] = useState(true);

	const [iniData, setIniData] = useState({});
	
	useEffect(() => {

		const fetchData = async () => {
			let formData = new FormData();
			formData.append('action', 'inidata');
			let tempData = await sendAndLoad(formData);
			setIniData(tempData);
			setIsLoading(false);
		}
		fetchData();
		
	}, [])
	

	return isLoading ? 
		<div className='h-screen w-screen flex justify-center items-center text-endeavour text-center'>
			<div className='w-28'>
				<Elanco />
				<div className='w-8 h-8 inline-block rounded-full animate-spin border-4 border-endeavour-50 border-l-endeavour my-4'></div>
				<p>Cargando...</p>
			</div>
		</div>
	 : <>
		<Nav />
		<Form iniData={iniData} />
		<Prizes />
		<Instructions />
	</>
}

export default App