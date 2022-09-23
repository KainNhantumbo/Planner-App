import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { ContactsContainer } from '../styles/contacts';
import { BiCollection, BiWind } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { fechdata } from '../services/contacts-services';
import { useNavigate } from 'react-router-dom';
import { searchContacts } from '../services/contacts-services';

const Contacts = () => {
	const navigate = useNavigate();
	// stores contacts data
	const [contactsDB, setContactsDB] = useState([]);
	const onClickHandler = (e) => {
		const id = e.target.id;
		navigate(`/contacts/previewer/${id}`);
	};

	useEffect(() => {
		fechdata(setContactsDB);
	}, []);

	return (
		<ContactsContainer>
			<TitleBars
				icon={<BiCollection />}
				title={'Contacts'}
				amount={contactsDB.length}
			/>
			<div>
				<Search
					searchEvent={(e) => searchContacts(e, setContactsDB)}
					btnURL={'/contacts/add/:id'}
					searchPlaceholder={'Search contacts'}
				/>
			</div>

			{contactsDB.length < 1 ? (
				<Loading text={'No contacts to show.'} icon={<BiWind />} />
			) : null}

			{/* render contacts list */}
			{contactsDB.map((contact) => (
				<div
					key={contact._id}
					id={contact._id}
					className='contact-section'
					onClick={onClickHandler}
				>
					<div>{contact.image ? contact.image : <MdAccountCircle />}</div>
					<section>
						<span>{contact.name + ' ' + contact.surname}</span>
					</section>
				</div>
			))}
		</ContactsContainer>
	);
};

export default Contacts;
