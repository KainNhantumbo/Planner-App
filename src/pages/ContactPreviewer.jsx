import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../styles/contactPreviewer';
import { BiGlasses, BiTrash, BiEdit } from 'react-icons/bi';
import axios from 'axios';
import TitleBars from '../components/TitleBars';

const ContactPreviewer = () => {
	// params object
	const params = useParams();
	const hrefID = params.id;

	// contact as id
	const [id, setId] = useState([]);

	// fetch contact data from server api
	const fechdata = async () => {
		try {
			const url = `http://localhost:4500/api/v1/contacts/${hrefID}`;
			const { data } = await axios.get(url);
			setId(() => data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fechdata();
	}, []);

	// sends a delete request
	const deleteData = async () => {
		try {
			const delete_url = `http://localhost:4500/api/v1/contacts/${hrefID}`;
			await axios({ method: 'delete', url: delete_url, data: hrefID });
		} catch (err) {
			console.log(err);
		}
	};

	// delete contact
	const deleteContact = () => {
		deleteData();
		window.location.assign('/contacts');
	};

	// send to edit page
	const sendToEdit = () => {
		window.location.assign(`/contacts/add/${hrefID}`);
	};

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
		!id ? null : (
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
				<button onClick={deleteContact}>
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
