import { Container } from '../styles/contactPreviewer';
import { BiGlasses } from 'react-icons/bi';
import TitleBars from '../components/TitleBars';

const ContactPreviewer = () => {
	const id = {
		id: 237498,
		name: 'Marcs',
		surname: 'Lobster',
		phone: 89432131489,
		celular: 6511648,
		email: 'marcs@mail.com',
		website: 'jasdf.has.co.jp',
		adress: 'Matola, Sao Damasceno',
	};

	const Name = () =>
		!id.name ? null : (
			<li key={'name'}>
				<span>Name</span>
				<div>{id.name}</div>
			</li>
		);

	const Phone = () =>
		!id.phone ? null : (
			<li key={'phone'}>
				<span>Phone</span>
				<div>{id.phone}</div>
			</li>
		);

	const Celular = () =>
		!id.celular ? null : (
			<li key={'celular'}>
				<span>Celular</span>
				<div>{id.celular}</div>
			</li>
		);

	const Email = () =>
		!id.email ? null : (
			<li key={'email'}>
				<span>E-mail</span>
				<div>{id.email}</div>
			</li>
		);

	const Website = () =>
		!id.website ? null : (
			<li key={'website'}>
				<span>Website</span>
				<div>{id.website}</div>
			</li>
		);

	const Adress = () =>
		!id.adress ? null : (
			<li key={'adress'}>
				<span>Adress</span>
				<div>{id.adress}</div>
			</li>
		);

	return (
		<Container>
			<TitleBars icon={<BiGlasses />} title={'Contact Previewer'} />
			<section>
				<ul>
					<Name />
					<Phone />
					<Celular />
					<Email />
					<Website />
					<Adress />
				</ul>
			</section>
		</Container>
	);
};

export default ContactPreviewer;
