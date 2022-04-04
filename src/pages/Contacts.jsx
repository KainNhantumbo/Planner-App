import React, { useState } from 'react';
import { ContactsContainer } from '../styles/contacts';
import { BiCollection, BiPlus, BiSearch } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { contactsDB } from '../scripts/contactsdb';
import TitleBars from '../components/TitleBars';

const Contacts = () => {
	const onClickHandler = (e) => {
		const id = e.target.id;
		window.location.assign(`/contacts/previewer/${id}`);
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
			if (!element.celular.toString().toLowerCase().indexOf(searchData)) return element;
			if (!element.phone.toString().toLowerCase().indexOf(searchData)) return element;
		});
		console.log(searchedContacts);
		setSearchResults(() => searchedContacts);
	};

	return (
		<ContactsContainer>
			<TitleBars icon={<BiCollection />} title={'Contacts'} />
			<div>
				<button className='addBtn'>
					<a href='/contacts/add/:id'>{<BiPlus />}</a>
				</button>
				<section>
					{<BiSearch className='searchIcon' />}
					<input
						type='search'
						name='search'
						placeholder='Search contacts'
						onChange={searchContacts}
					/>
				</section>
			</div>

			{searchResults.length === 0
				? contactsDB.map((contact) => {
						return (
							<div
								key={contact.id}
								id={contact.id}
								className='contact-section'
								onClick={onClickHandler}
							>
								<div>
									{!contact.image ? <MdAccountCircle /> : contact.image}
								</div>
								<section>
									<span>{contact.name + ' ' + contact.surname}</span>
								</section>
							</div>
						);
				  })
				: searchResults.map((contact) => {
						return (
							<div
								key={contact.id}
								id={contact.id}
								className='contact-section'
								onClick={onClickHandler}
							>
								<div>
									{!contact.image ? <MdAccountCircle /> : contact.image}
								</div>
								<section>
									<span>{contact.name + ' ' + contact.surname}</span>
								</section>
							</div>
						);
				  })}
		</ContactsContainer>
	);
};

export default Contacts;
