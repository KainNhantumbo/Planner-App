import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '../styles/contactPreviewer';
import { BiGlasses, BiTrash, BiEdit } from 'react-icons/bi';
import TitleBars from '../components/TitleBars';
import { fetchContact, deleteContact } from '../services/contacts-services';

const ContactPreviewer = () => {
	// params object
	const params = useParams();

	// navigation
	const navigate = useNavigate();

	// contact as id
	const [id, setId] = useState([]);

	// fetch contact data from server on render
	useEffect(() => {
		fetchContact(params.id, setId);
	}, []);

	// redirects to contact edit page
	const sendToEdit = () => {
		navigate(`/contacts/add/${params.id}`);
	};

	const Name = () =>
		!id ? null : (
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
				<button onClick={(e) => deleteContact(params, navigate)}>
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
