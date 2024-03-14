import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ContactsContainer } from '../styles/contacts';
import { BiCollection, BiWind, MdAccountCircle } from 'react-icons/all';
import { fechdata } from '../services/contacts-services';
import { searchContacts } from '../services/contacts-services';

const Contacts = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fechdata(setContacts);
	}, []);

	return (
		<ContactsContainer>
			<TitleBars
				icon={<BiCollection />}
				title={'Contacts'}
				amount={contacts.length}
			/>
			<Search
				title={'Add new contact'}
				searchEvent={(e) => searchContacts(e, setContacts)}
				btnURL={'/contacts/add/:id'}
				searchPlaceholder={'Search contacts'}
			/>
			{contacts.length < 1 && (
				<Loading text={'No contacts to show.'} icon={<BiWind />} />
			)}

			{/* render contacts list */}
			{contacts.map(({ _id, name, surname, image }) => (
				<Link key={_id} to={`/contacts/previewer/${_id}`}>
					<div className='contact-section'>
						<div>{image ? image : <MdAccountCircle />}</div>
						<section>
							<span>{name + ' ' + surname}</span>
						</section>
					</div>
				</Link>
			))}
		</ContactsContainer>
	);
};

export default Contacts;
