import React, { useState } from 'react';
import { Container } from '../styles/contactPreviewer';
import { BiGlasses, BiTrash, BiEdit } from 'react-icons/bi';
import { contactsDB } from '../scripts/contactsdb';
import TitleBars from '../components/TitleBars';

const ContactPreviewer = () => {
	// takes the id from url params
	const hrefID = window.location.pathname.split('/')[3];

	// searches the item data by id
	const contact = contactsDB.filter((contact) => {
		if (contact.id === Number(hrefID)) return contact;
	});

	// extracts data object from new array
	const id = contact[0];

	// send to edit page 
	const sendToEdit = () => {
		window.location.assign(`/contacts/add/${hrefID}`)
	}

	const Name = () =>
		!id.name ? null : (
			<li key={'name'}>
				<span>Name</span>
				<div>{id.name + ' ' + id.surname}</div>
			</li>
		);

	const Phone = () =>
		!id.phone ? null : (
			<li key={'phone'}>
				<span>Phone</span>
				<div>{id.phone}</div>
			</li>
		);

	const Celular = () =>
		!id.celular ? null : (
			<li key={'celular'}>
				<span>Celular</span>
				<div>{id.celular}</div>
			</li>
		);

	const Email = () =>
		!id.email ? null : (
			<li key={'email'}>
				<span>E-mail</span>
				<div>{id.email}</div>
			</li>
		);

	const Website = () =>
		!id.website ? null : (
			<li key={'website'}>
				<span>Website</span>
				<div>{id.website}</div>
			</li>
		);

	const Adress = () =>
		!id.adress ? null : (
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
