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
import { useParams } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4500/api/v1/contacts';

const ContactsForm = () => {
	// input fields state values
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	const [celular, setCelular] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [adress, setAdress] = useState('');

	// params object
	const params = useParams();
	const hrefID = params.id;

	// fetch data from server api
	const [id, setId] = useState([]);
	console.log(id);

	// fetch contact data from server api
	const fechdata = async () => {
		try {
			if (hrefID === ':id') return;
			const url = `http://localhost:4500/api/v1/contacts/${hrefID}`;
			const { data } = await axios.get(url);
			setId(() => data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fechdata();
		setdata();
	}, []);

	// sends a patch request to server api
	const patchData = async (updatedObj) => {
		try {
			const patch_url = `http://localhost:4500/api/v1/contacts/${hrefID}`;
			await axios({ method: 'patch', url: patch_url, data: updatedObj });
		} catch (err) {
			console.log(err);
		}
	};

	// sends a post request to server api
	const postData = async (newContact) => {
		try {
			await axios({ method: 'post', url: url, data: newContact });
		} catch (err) {
			console.log(err);
		}
	};

	// if id object exists, setup the fields
	const [message, setMessage] = useState('Save Contact');
	const setdata = () => {
		if (hrefID === ':id') return;
		setName(() => id.name);
		setSurname(() => id.surname);
		setPhone(() => id.phone);
		setCelular(() => id.celular);
		setEmail(() => id.email);
		setWebsite(() => id.website);
		setAdress(() => id.adress);

		setMessage(() => 'Update');
	};

	// resets form value fields
	const resetForm = (e) => {
		e.preventDefault();
		setName(() => '');
		setSurname(() => '');
		setPhone(() => '');
		setCelular(() => '');
		setEmail(() => '');
		setWebsite(() => '');
		setAdress(() => '');
	};

	// saves a new contact, if id exists, it makes a update
	const saveContact = (e) => {
		e.preventDefault();
		const newContact = {
			name,
			surname,
			phone,
			celular,
			email,
			website,
			adress,
		};
		if (message === 'Update') {
			patchData(newContact);
		} else {
			if (name === '') return;
			postData(newContact);
		}
		// window.location.assign('/contacts');
	};

	return (
		<FormContainer>
			<TitleBars icon={<BiUserPlus />} title={'Add Contact'} />
			<form>
				<label htmlFor='name'>{<BiUser />}Name</label>
				<input
					type='text'
					name='name'
					defaultValue={name}
					onChange={(e) => setName(() => e.target.value)}
				/>
				<label htmlFor='surname'>{<BiUser />}Surname</label>
				<input
					type='text'
					name='surname'
					defaultValue={surname}
					onChange={(e) => setSurname(() => e.target.value)}
				/>
				<label htmlFor='phone'>{<BiPhone />}Phone Number</label>
				<input
					type='number'
					name='phone'
					defaultValue={phone}
					onChange={(e) => setPhone(() => e.target.value)}
				/>
				<label htmlFor='celular'>{<BiMobile />}Mobile Number</label>
				<input
					type='number'
					name='celular'
					defaultValue={celular}
					onChange={(e) => setCelular(() => e.target.value)}
				/>
				<label htmlFor='email'>{<BiMessage />}Email</label>
				<input
					type='email'
					name='email'
					defaultValue={email}
					onChange={(e) => setEmail(() => e.target.value)}
				/>
				<label htmlFor='website'>{<BiPlanet />}Website</label>
				<input
					type='text'
					name='website'
					defaultValue={website}
					onChange={(e) => setWebsite(() => e.target.value)}
				/>
				<label htmlFor='adress'>{<BiMap />}Adress</label>
				<input
					type='text'
					name='adress'
					defaultValue={adress}
					onChange={(e) => setAdress(() => e.target.value)}
				/>
				<button onClick={resetForm}>
					<span>{<BiSync />}Reset Values</span>
				</button>
				<button onClick={saveContact}>
					<span>
						{<BiSave />} {message}
					</span>
				</button>
			</form>
		</FormContainer>
	);
};

export default ContactsForm;
