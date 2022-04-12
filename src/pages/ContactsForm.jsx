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
import { useParams, useSearchParams } from 'react-router-dom';
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
	const [contactsDB, setContactsDB] = useState([]);
	console.log(contactsDB);

	const fechData = async () => {
		try {
			const { data } = await axios.get(url);
			setContactsDB(() => data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fechData();
	}, []);

	// sends a post request to server api
	const postData = async () => {
		try {
			await axios({ method: postMessage, url: url, data: contactsDB });
		} catch (err) {
			console.log(err);
		}
	};

	// searches the item data by id
	const contact = contactsDB.filter((contact) => {
		if (hrefID === ':id') return;
		if (contact.id === hrefID) return contact;
	});

	// extracts data object from new array
	const id = contact[0];

	// if id object exists, setup the fields
	const [message, setMessage] = useState('Save Contact');
	useEffect(() => {
		if (!id) return;
		setName(() => id.name);
		setSurname(() => id.surname);
		setPhone(() => id.phone);
		setCelular(() => id.celular);
		setEmail(() => id.email);
		setWebsite(() => id.website);
		setAdress(() => id.adress);

		setMessage(() => 'Update');
	}, []);

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
		if (id) {
			const updatedContactsDB = contactsDB.map((element) => {
				if (hrefID === ':id') return;
				if (element.id === hrefID) {
					element.name = name;
					element.surname = surname;
					element.phone = phone;
					element.celular = celular;
					element.email = email;
					element.website = website;
					element.adress = adress;
				}
				return element;
			});
			window.location.assign('/contacts');
		} else {
			if (name === '') return;
			const newContact = {
				name,
				surname,
				phone,
				celular,
				email,
				website,
				adress,
			};
			contactsDB.push(newContact);
			postData();
			console.log(contactsDB);
		}
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
