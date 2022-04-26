import React, { useEffect, useState } from 'react';
import { ContactsContainer } from '../styles/contacts';
import { BiCollection } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import { fechdata } from '../services/contacts-services';

const Contacts = () => {
	const onClickHandler = (e) => {
		const id = e.target.id;
		window.location.assign(`/contacts/previewer/${id}`);
	};

	const [contactsDB, setContactsDB] = useState([]);

	// fetch data from server api
	fechdata(setContactsDB);

	useEffect(() => {
		fechdata();
	}, []);

	// return each contact html structure
	const contactElements = (contact) => {
		return (
			<div
				key={contact._id}
				id={contact._id}
				className='contact-section'
				onClick={onClickHandler}
			>
				<div>{!contact.image ? <MdAccountCircle /> : contact.image}</div>
				<section>
					<span>{contact.name + ' ' + contact.surname}</span>
				</section>
			</div>
		);
	};

	const [searchData, setSearchData] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const searchContacts = (e) => {
		setSearchData(() => e.target.value);
		const searchedContacts = contactsDB.filter((element) => {
			if (element.name.toLowerCase().includes(searchData)) return element;
			if (element.surname.toLowerCase().includes(searchData)) return element;
			if (element.email.toLowerCase().includes(searchData)) return element;
			if (element.adress.toLowerCase().includes(searchData)) return element;
			if (element.website.toLowerCase().includes(searchData)) return element;
			if (element.celular.toString().toLowerCase().includes(searchData))
				return element;
			if (element.phone.toString().toLowerCase().includes(searchData))
				return element;
		});
		console.log(searchedContacts);
		setSearchResults(() => searchedContacts);
	};

	return (
		<ContactsContainer>
			<TitleBars icon={<BiCollection />} title={'Contacts'} />
			<div>
				<Search
					searchEvent={searchContacts}
					btnURL={'/contacts/add/:id'}
					searchPlaceholder={'Search contacts'}
				/>
			</div>

			{searchResults.length === 0
				? contactsDB.map(contactElements)
				: searchResults.map(contactElements)}
		</ContactsContainer>
	);
};

export default Contacts;
