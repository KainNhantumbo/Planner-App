import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FormContainer } from '../styles/contact-form';

const ContactsForm = () => {
	const [title, setTitle] = useState('Add Contact');

	return (
		<FormContainer>
			<div>
				<span>
					{<BiPlus />}
					{title}
				</span>
			</div>
			<form action='localhost:4500/contacts/add' method='post'>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' />
				<label htmlFor='surname'>Surname</label>
				<input type='text' name='surname' />
				<label htmlFor='phoneOne'>Phone Number</label>
				<input type='number' name='phoneOne' />
				<label htmlFor='phoneTwo'>Phone Number</label>
				<input type='number' name='phoneTwo' />
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' />
        <label htmlFor="adress">Adress</label>
        <input type="text" name="adress" id="" />
        <button type='submit'>
          Save Contact
        </button>
			</form>
		</FormContainer>
	);
};

export default ContactsForm;
