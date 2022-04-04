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
import { contactsDB } from '../scripts/contactsdb';
import { set } from 'animejs';

const ContactsForm = () => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	const [celular, setCelular] = useState('');
	const [email, setEmail] = useState('');
	const [website, setWebsite] = useState('');
	const [adress, setAdress] = useState('');

	const hrefID = window.location.pathname.split('/')[3];
	// searches the item data by id
	const contact = contactsDB.filter((contact) => {
		if (contact.id === Number(hrefID)) return contact;
	});

	// extracts data object from new array
	const id = contact[0];

	// if id object exists, setup the fields
	useEffect(() => {
		if (!id) return;
		setName(() => id.name);
		setSurname(() => id.surname);
		setPhone(() => id.phone);
		setCelular(() => id.celular);
		setEmail(() => id.email);
		setWebsite(() => id.website);
		setAdress(() => id.adress);
	}, []);

	return (
		<FormContainer>
			<TitleBars icon={<BiUserPlus />} title={'Add Contact'} />
			<form action='localhost:4500/contacts/add' method='post'>
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
				<button type='reset'>
					<span>{<BiSync />}Reset Values</span>
				</button>
				<button type='submit'>
					<span>
						{<BiSave />} <a href='/contacts'>Save Contact</a>{' '}
					</span>
				</button>
			</form>
		</FormContainer>
	);
};

export default ContactsForm;
