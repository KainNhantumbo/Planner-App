import TitleBars from '../components/TitleBars';
import { Container } from '../styles/contactPreviewer';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiGlasses, BiTrash, BiEdit } from 'react-icons/all';
import { fetchContact, deleteContact } from '../services/contacts-services';

const ContactPreviewer = () => {
	const navigate = useNavigate();
	const { id: contactId } = useParams();
	const [contact, setContact] = useState({});

	const contactComponents = {
		name: () =>
			contact && (
				<li key={'name'}>
					<span>Name</span>
					<div>{contact.name + ' ' + contact.surname}</div>
				</li>
			),
		phone: () =>
			contact.phone && (
				<li key={'phone'}>
					<span>Phone</span>
					<div>{contact.phone}</div>
				</li>
			),
		celular: () =>
			contact.celular && (
				<li key={'celular'}>
					<span>Celular</span>
					<div>{contact.celular}</div>
				</li>
			),
		email: () =>
			contact.email && (
				<li key={'email'}>
					<span>E-mail</span>
					<div>{contact.email}</div>
				</li>
			),
		website: () =>
			contact.website && (
				<li className='website' key={'website'}>
					<span>Website</span>
					<div>
						<a href={contact.website} target='_blank' rel={'noreferrer'}>
							{contact.website}
						</a>
					</div>
				</li>
			),
		adress: () =>
			contact.adress && (
				<li key={'adress'}>
					<span>Adress</span>
					<div>{contact.adress}</div>
				</li>
			),
	};

	// fetch contact data from server on render
	useEffect(() => {
		fetchContact(contactId, setContact);
	}, []);

	return (
		<Container>
			<TitleBars icon={<BiGlasses />} title={'Contact Previewer'} />
			<section>
				<ul>
					{Object.values(contactComponents).map((component) => component())}
				</ul>
			</section>
			<div className='action-buttons'>
				<button onClick={(e) => deleteContact(contactId, navigate)}>
					{<BiTrash />}
					<span>Delete</span>
				</button>
				<button onClick={() => navigate(`/contacts/add/${contactId}`)}>
					{<BiEdit />}
					<span>Edit</span>
				</button>
			</div>
		</Container>
	);
};

export default ContactPreviewer;
