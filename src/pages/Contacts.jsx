import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ContactsContainer } from '../styles/contacts';
import { BiCollection, BiPlus, BiSearch } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import TitleBars from '../components/TitleBars';
import Search from '../components/Search';

const url = 'http://localhost:4500/api/v1/contacts';

const Contacts = () => {
	const onClickHandler = (e) => {
		const id = e.target.id;
		window.location.assign(`/contacts/previewer/${id}`);
	};

	const [contactsDB, setContactsDB] = useState([]);

	// fetch data from server api
	const fechdata = async () => {
		try {
			const { data } = await axios.get(url);
			setContactsDB(() => data);
		} catch (err) {
			console.log(err);
		}
	};

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
			if (!element.name.toLowerCase().indexOf(searchData)) return element;
			if (!element.surname.toLowerCase().indexOf(searchData)) return element;
			if (!element.email.toLowerCase().indexOf(searchData)) return element;
			if (!element.adress.toLowerCase().indexOf(searchData)) return element;
			if (!element.website.toLowerCase().indexOf(searchData)) return element;
			if (!element.celular.toString().toLowerCase().indexOf(searchData))
				return element;
			if (!element.phone.toString().toLowerCase().indexOf(searchData))
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
