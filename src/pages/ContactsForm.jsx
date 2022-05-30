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
	const navigate = useNavigate();
	const params = useParams();
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

	// if :id parameter object exists, setup the fields
	const [message, setMessage] = useState('Save');
	const [btnState, setBtnState] = useState({});
	const setDefaultInputValues = (data) => {
		delete data.updatedAt;
		delete data.createdAt;
		delete data.createdBy;
		delete data._id;
		delete data.__v;
		setFormData(data);
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
		if (!formData.name) return;
		if (message === 'Update') {
			patchData(params.id, formData);
		} else {
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
					value={formData.name}
					onChange={formDataPicker}
					required
				/>
				<label htmlFor='surname'>{<BiUser />}Surname</label>
				<input
					type='text'
					name='surname'
					value={formData.surname}
					onChange={formDataPicker}
				/>
				<label htmlFor='phone'>{<BiPhone />}Phone Number</label>
				<input
					type='number'
					name='phone'
					value={formData.phone}
					onChange={formDataPicker}
				/>
				<label htmlFor='celular'>{<BiMobile />}Mobile Number</label>
				<input
					type='number'
					name='celular'
					value={formData.celular}
					onChange={formDataPicker}
				/>
				<label htmlFor='email'>{<BiMessage />}Email</label>
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={formDataPicker}
				/>
				<label htmlFor='website'>{<BiPlanet />}Website</label>
				<input
					type='text'
					name='website'
					value={formData.website}
					onChange={formDataPicker}
				/>
				<label htmlFor='adress'>{<BiMap />}Adress</label>
				<input
					type='text'
					name='adress'
					value={formData.adress}
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
