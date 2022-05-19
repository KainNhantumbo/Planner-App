import React, { useState, useEffect } from 'react';
import { FormContainer } from '../styles/contact-form';
import {
	BiUserPlus,
	BiPhone,
	BiMobile,
	BiUser,
	BiMap,
	BiPlanet,
	BiSync,
	BiSave,
	BiMessage,
} from 'react-icons/bi';
import TitleBars from '../components/TitleBars';
import { useParams, useNavigate } from 'react-router-dom';
import {
	fetchContact,
	patchData,
	postData,
} from '../services/contacts-services';

const ContactsForm = () => {
	// input fields state values
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		phone: '',
		celular: '',
		email: '',
		website: '',
		adress: '',
	});

	// populates formData values
	const formDataPicker = (e) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[e.target.name]: e.target.value,
		}));
	};

	// navigation
	const navigate = useNavigate();

	// params object
	const params = useParams();

	// if :id parameter object exists, setup the fields
	const [message, setMessage] = useState('Save');
	const [defaultValues, setDefaultValues] = useState({});
	const [btnState, setBtnState] = useState({});
	const setDefaultInputValues = (data) => {
		setDefaultValues(data);
		setBtnState({ display: 'none' });
		setMessage(() => 'Update');
	};

	// fetch contact data from server api
	useEffect(() => {
		fetchContact(params.id, setDefaultInputValues);
	}, []);

	// resets form value fields
	const resetForm = (e) => {
		e.preventDefault();
		e.target.reset();
	};

	// saves a new contact, if id exists, it makes a update
	const saveContact = (e) => {
		e.preventDefault();
		if (message === 'Update') {
			let { name, email, adress, surname, phone, celular, website } =
			defaultValues;
			let arr = [];
			for (let [key, value] of Object.entries(formData)) {
				if (value !== '') {
					arr.push({ [key]: value });
				}
			}
			// atual data to be sent
			let dataToPatch = {
				name,
				email,
				adress,
				surname,
				email,
				phone,
				celular,
				website,
				...arr.reduce((prev, currrent) => {
					return {
						...prev,
						...currrent,
					};
				}, {}),
			};
			// sends data to server
			patchData(params.id, dataToPatch);
		} else {
			if (!formData.name) return;
			postData(formData);
		}
		navigate('/contacts');
	};

	return (
		<FormContainer>
			<TitleBars icon={<BiUserPlus />} title={'Add Contact'} />
			<form onSubmit={resetForm}>
				<label htmlFor='name'>{<BiUser />}Name</label>
				<input
					type='text'
					name='name'
					defaultValue={defaultValues.name}
					onChange={formDataPicker}
					required
				/>
				<label htmlFor='surname'>{<BiUser />}Surname</label>
				<input
					type='text'
					name='surname'
					defaultValue={defaultValues.surname}
					onChange={formDataPicker}
				/>
				<label htmlFor='phone'>{<BiPhone />}Phone Number</label>
				<input
					type='number'
					name='phone'
					defaultValue={defaultValues.phone}
					onChange={formDataPicker}
				/>
				<label htmlFor='celular'>{<BiMobile />}Mobile Number</label>
				<input
					type='number'
					name='celular'
					defaultValue={defaultValues.celular}
					onChange={formDataPicker}
				/>
				<label htmlFor='email'>{<BiMessage />}Email</label>
				<input
					type='email'
					name='email'
					defaultValue={defaultValues.email}
					onChange={formDataPicker}
				/>
				<label htmlFor='website'>{<BiPlanet />}Website</label>
				<input
					type='text'
					name='website'
					defaultValue={defaultValues.website}
					onChange={formDataPicker}
				/>
				<label htmlFor='adress'>{<BiMap />}Adress</label>
				<input
					type='text'
					name='adress'
					defaultValue={defaultValues.adress}
					onChange={formDataPicker}
				/>
				<div className='action-buttons'>
					<button type='submit' style={btnState}>
						{<BiSync />}
						<span>Reset</span>
					</button>
					<button onClick={saveContact}>
						{<BiSave />}
						<span>{message}</span>
					</button>
				</div>
			</form>
		</FormContainer>
	);
};

export default ContactsForm;
