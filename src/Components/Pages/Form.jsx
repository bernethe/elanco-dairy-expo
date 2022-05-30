import React, {useState} from 'react';
import Modal from '../UI/Modal';
import FormStep1 from '../Layout/FormStep1';
import FormStep2 from '../Layout/FormStep2';
import FormStep3 from '../Layout/FormStep3';
import {BASE_URL} from '../../connections';
import FormStep4 from '../Layout/FormStep4';

const Form = ({iniData}) => {
	
	// console.table(iniData.countries);
	// console.table(iniData.products);

	const COUNTRY_DATA = [{'id':0,'name':'País'} ,...iniData.countries];
	const COUNTRY_PLACEHOLDER = COUNTRY_DATA[0].id;

	const [currentStep, setCurrentStep] = useState(0);

	const [name, setName] = useState('');
	const [docID, setDocID] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [bill, setBill] = useState('');
	const [acceptRules, setAcceptRules] = useState(false);
	const [country, setCountry] = useState(COUNTRY_PLACEHOLDER);
	const [totalPoints, setTotalPoints] = useState(0);
	const [user, setUser] = useState({name:'', docID:'', country:'', points:0});

	const [prods, setProds] = useState(iniData.products.map(product => {
		return {
			...product,
			quantity: 0
		}
	}));

	const [showModal, setShowModal] = useState([]);

	const handleStep1 = (e) => {
		e.preventDefault();

		setName(name.trim());
		setDocID(docID.trim());
		setEmail(email.trim());
		setPhone(phone.trim());
		setBill(bill.trim());

		let tempErrors = [];

		if(name === '' || name.length < 3) {
			tempErrors.push('El nombre es requerido y debe tener al menos 3 caracteres');
		}

		if(docID === '' || docID.length < 5) {
			tempErrors.push('El documento de identidad es requerido y debe tener al menos 5 caracteres');
		}

		if(phone === '' || phone.length < 6) {
			tempErrors.push('El número de teléfono es requerido y debe tener al menos 6 caracteres');
		}

		if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			tempErrors.push('El email es requerido y debe ser válido');
		}

		if(bill === '' || bill.length < 5) {
			tempErrors.push('La factura es requerida y debe tener al menos 5 caracteres');
		}

		if(country === COUNTRY_PLACEHOLDER) {
			tempErrors.push('El país es requerido');
		}

		if(!acceptRules) {
			tempErrors.push('Debes haber leído el reglamento de la promoción');
		}

		if(tempErrors.length > 0) {
			setShowModal(tempErrors);
		} else {
			setCurrentStep(1);
		}

	}

	const handleStep2 = async (e) => {
		e.preventDefault();
		// console.log(totalPoints);

		if(totalPoints === 0) {
			setShowModal(['Debes seleccionar al menos un producto']);
		} else {
			setCurrentStep(2);

			let tempProds = prods.filter(prod => prod.quantity > 0);

			let _fd = new FormData();
			_fd.append('name', name);
			_fd.append('docid', docID);
			_fd.append('email', email);
			_fd.append('phone', phone);
			_fd.append('bill', bill);
			_fd.append('country', country);
			_fd.append('points', totalPoints);
			_fd.append('prods', JSON.stringify(tempProds));
			_fd.append('action', 'savelead');

			await fetch(BASE_URL, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
				},
				body: _fd
			}).then(res => {
				// console.log(res);
				return res.json();
			}).then(res => {
				// console.log(res);

				if(res.status === 'success') {
					// console.table(res.user[0]);
					setUser(res.user[0]);
					setCurrentStep(3);
				} else {
					setShowModal(['Ocurrió un error al guardar los datos']);
				}
			});
		}

	};

	const STEPS = [
		<FormStep1
			name={ name }
			docID={ docID }
			email={ email }
			phone={ phone }
			bill={ bill }
			country={ country }
			acceptRules={ acceptRules }
			handleStep1={ handleStep1 }
			setName={ setName }
			setDocID={ setDocID }
			setEmail={ setEmail }
			setPhone={ setPhone }
			setBill={ setBill }
			setCountry={ setCountry }
			setAcceptRules={ setAcceptRules }
			COUNTRY_DATA={ COUNTRY_DATA }
			COUNTRY_PLACEHOLDER={ COUNTRY_PLACEHOLDER }
		/>,
		<FormStep2
			prods={prods}
			setProds={setProds}
			setTotalPoints={setTotalPoints}
			handleStep2={ handleStep2 }
		/>,
		<FormStep3 />,
		<FormStep4 user={user} />
	];

	return <>
		{ STEPS[currentStep] }
		{ (showModal.length !== 0) && <Modal title='Atención' setClose={setShowModal}>
			<p>Por favor, revisar los campos requeridos.</p>
			<ul className='list-disc pl-4 ml-4 text-sm'>	
				{
					showModal.map( (item, index) => {
						return <li key={index}>{item}</li>
					})
				}
			</ul>
		</Modal> }
	</>
}

export default Form