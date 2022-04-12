import React, { useState, useEffect } from 'react';
import { Container } from '../styles/contactPreviewer';
import { BiGlasses, BiTrash, BiEdit } from 'react-icons/bi';
import axios from 'axios';
import TitleBars from '../components/TitleBars';

const url = 'http://localhost:4500/api/v1/contacts';

const ContactPreviewer = () => {
	// takes the id from url params
	const hrefID = window.location.pathname.split('/')[3];

	const [contactsDB, setContactsDB] = useState([]);
	console.log(contactsDB)

	// fetch data from server api
	const fechdata = async () => {
		try {
			const { data } = await axios.get(url);
			setContactsDB(() => data);
			console.log(data)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fechdata();
	}, []);

	// searches the item data by id
	const contact = contactsDB.filter((contact) => {
		if (contact._id === hrefID)

		return contact;

	});
	console.log(contact)

	// extracts data object from new array
	const id = contact[0];

	// send to edit page 
	const sendToEdit = () => {
		window.location.assign(`/contacts/add/${hrefID}`)
	}

	const Name = () =>
		!id ? null : (
			<li key={'name'}>
				<span>Name</span>
				<div>{id.name + ' ' + id.surname}</div>
			</li>
		);

	const Phone = () =>
		!id ? null : (
			<li key={'phone'}>
				<span>Phone</span>
				<div>{id.phone}</div>
			</li>
		);

	const Celular = () =>
		!id? null : (
			<li key={'celular'}>
				<span>Celular</span>
				<div>{id.celular}</div>
			</li>
		);

	const Email = () =>
		!id ? null : (
			<li key={'email'}>
				<span>E-mail</span>
				<div>{id.email}</div>
			</li>
		);

	const Website = () =>
		!id ? null : (
			<li key={'website'}>
				<span>Website</span>
				<div>{id.website}</div>
			</li>
		);

	const Adress = () =>
		!id ? null : (
			<li key={'adress'}>
				<span>Adress</span>
				<div>{id.adress}</div>
			</li>
		);

	return (
		<Container>
			<TitleBars icon={<BiGlasses />} title={'Contact Previewer'} />
			<section>
				<ul>
					<Name />
					<Phone />
					<Celular />
					<Email />
					<Website />
					<Adress />
				</ul>
			</section>
			<div className='action-buttons'>
				<button>
					{<BiTrash />}
					<span>Delete</span>
				</button>
				<button onClick={sendToEdit}>
					{<BiEdit />}
					<span>Edit</span>
				</button>
			</div>
		</Container>
	);
};

export default ContactPreviewer;
