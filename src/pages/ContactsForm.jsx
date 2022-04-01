import React, { useState } from 'react';
import { FormContainer } from '../styles/contact-form';
import {
	BiPlus,
	BiPhone,
	BiMobile,
	BiUser,
	BiMap,
	BiPlanet,
	BiSync,
	BiSave,
	BiMessage,
} from 'react-icons/bi';

const ContactsForm = () => {
	return (
		<FormContainer>
			<div>
				<span>
					{<BiPlus />}
					Add Contact
				</span>
			</div>
			<form action='localhost:4500/contacts/add' method='post'>
				<label htmlFor='name'>{<BiUser />}Name</label>
				<input type='text' name='name' />
				<label htmlFor='surname'>{<BiUser />}Surname</label>
				<input type='text' name='surname' />
				<label htmlFor='phone'>{<BiPhone />}Phone Number</label>
				<input type='number' name='phone' />
				<label htmlFor='celular'>{<BiMobile />}Mobile Number</label>
				<input type='number' name='celular' />
				<label htmlFor='email'>{<BiMessage />}Email</label>
				<input type='email' name='email' />
				<label htmlFor='website'>{<BiPlanet />}Website</label>
				<input type='text' name='website' />
				<label htmlFor='adress'>{<BiMap />}Adress</label>
				<input type='text' name='adress' />
				<button type='reset'>
					<span>{<BiSync />}Reset Values</span>
				</button>
				<button type='submit'>
					<span>{<BiSave />} <a href="/contacts">Save Contact</a> </span>
				</button>
			</form>
		</FormContainer>
	);
};

export default ContactsForm;
