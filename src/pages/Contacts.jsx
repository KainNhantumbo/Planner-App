import React, { useEffect, useState } from 'react';
import { ContactsContainer } from '../styles/contacts';
import { BiCollection, BiWind } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import { fechdata } from '../services/contacts-services';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const Contacts = () => {
	// loading status
	const [loadingText, setLoadingText] = useState('Sem contactos.');
	const [loadingIcon, setLoadingIcon] = useState(<BiWind />);

	// navigation
	const navigate = useNavigate();

	// redirects to contact previewer
	const onClickHandler = (e) => {
		const id = e.target.id;
		navigate(`/contacts/previewer/${id}`);
	};
	
	// stores contacts data
	const [contactsDB, setContactsDB] = useState([]);

	// fetch data from server api
	useEffect(() => {
		fechdata(setContactsDB);
	}, []);

	// returns each contact html structure
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
		// setSearchData(() => e.target.value);
		// const searchedContacts = contactsDB.filter((element) => {
		// 	if (element.name.toLowerCase().includes(searchData)) return element;
		// 	if (element.surname.toLowerCase().includes(searchData)) return element;
		// 	if (element.email.toLowerCase().includes(searchData)) return element;
		// 	if (element.adress.toLowerCase().includes(searchData)) return element;
		// 	if (element.website.toLowerCase().includes(searchData)) return element;
		// 	if (element.celular.toString().toLowerCase().includes(searchData))
		// 		return element;
		// 	if (element.phone.toString().toLowerCase().includes(searchData))
		// 		return element;
		// });
		// console.log(searchedContacts);
		// setSearchResults(() => searchedContacts);
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

			{contactsDB.length < 1 ? (
				<Loading text={loadingText} icon={loadingIcon} />
			) : null}

			{searchResults.length === 0
				? contactsDB.map(contactElements)
				: searchResults.map(contactElements)}
		</ContactsContainer>
	);
};

export default Contacts;
