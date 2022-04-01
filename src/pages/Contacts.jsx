import { ContactsContainer } from '../styles/contacts';
import { BiCollection } from 'react-icons/bi';
import { contactsDB } from '../scripts/contactsdb';

const Contacts = () => {
	return (
		<ContactsContainer>
			<div>
				<span>
					{<BiCollection />}
					Contacts
				</span>
			</div>
			<section>
				{contactsDB.map((contact) => {
					return (
						<div key={contact.id}>
							<span>{contact.name + ' ' + contact.surname}</span>
              <span>{contact.phone}</span>
              <span>{contact.email}</span>
						</div>
					);
				})}
				<button>
					<a href='/contacts/add'>Add Contact</a>
				</button>
			</section>
		</ContactsContainer>
	);
};

export default Contacts;
