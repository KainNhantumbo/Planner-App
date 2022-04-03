import { ContactsContainer } from '../styles/contacts';
import { BiCollection, BiPlus, BiSearch } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { contactsDB } from '../scripts/contactsdb';
import TitleBars from '../components/TitleBars';

const Contacts = () => {
	const onClickHandler = (e) => {
		console.log(e.target.id);
		window.location.assign('/contacts/previewer');
	};

	return (
		<ContactsContainer>
			<TitleBars icon={<BiCollection />} title={'Contacts'} />
			<div>
				<button className='addBtn'>
					<a href='/contacts/add'>{<BiPlus />}</a>
				</button>
				<section>
					{<BiSearch className='searchIcon' />}
					<input type='search' name='search' placeholder='Search contacts' />
				</section>
			</div>

			{contactsDB.map((contact) => {
				return (
					<div
						key={contact.id}
						id={contact.id}
						className='contact-section'
						onClick={onClickHandler}
					>
						<div>{!contact.image ? <MdAccountCircle /> : contact.image}</div>
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
